---
layout: post
comments: true
title: Dynamic DNS
---

I run a small headless Linux server at home. It has come in handy for running a VPN server, IRC bouncer, downloading server and other quick trick and hacks. Since I rarely need it to do any significant computation, I run it on an old [Raspberry Pi](https://www.raspberrypi.org/) (the original one).

One of the question I always get is how I manage to access the server from outside. While static IP addresses are an option for many telcos in Singapore, mine doesn't provide that service for an affordable price, so I decided to roll my own [Dynamic DNS](https://en.wikipedia.org/wiki/Dynamic_DNS) system to let me access this server from outside the home network.

## Logging the IP address

I first started to experiment by logging the IP address assigned to the edge router by the ISP every 5 minutes. It was a simple `curl` script on a `cron` job that checked an online public IP service like [ipify](https://www.ipify.org/) or [OpenDNS](https://diagnostic.opendns.com/myip) and logged it to a file.

`{ date ; echo " - "; curl 'https://api.ipify.org?format=text'\;} | tr "\n" " "`

With this I was able to see that my ISP didn't change the IP addresses assigned to me for months. That means this DIY Dynamic DNS system would work without too much down time.

## Updating DNS records

There are online service like DynDNS but I found them too clunky to use. But I did figure that CloudFlare (whom I use for DNS anyway) also support updating DNS records over an API call.

So the basic idea would be to get the IP address assigned to the edge router by the ISP and send it to CloudFlare periodically. I found that `ddclient` is a Perl script written to do exactly this. It runs as a daemon, periodically gets the local IP address, check if it's the same one as previously sent to the DNS server otherwise update the DNS server.

Newer version of ddclient work directly with CloudFlare, but older versions need a small match. This [post from Jens Segers explains it ](https://jenssegers.com/84/dynamic-dns-for-cloudflare-with-ddclient) well.


You can provide `ddclient` a script to get the local IP address. I use OpenDNS like this :

`dig +short myip.opendns.com @resolver1.opendns.com`

Here is an example of the `ddclient.conf` for my setup. `getIP.sh` basically runs the `dig` command above.

```
daemon=3600
pid=/var/run/ddclient.pid
ssl=yes                                                   \
use=cmd, cmd=getIP.sh                                     \
protocol=cloudflare,                                      \
zone=chinpen.net,                                         \
login=login@email.com,                                    \
password=password                                         \
dynamic.chinpen.net
```

## Running ddclient

I run `ddclient` on the Raspberry Pi itself, but you could always run it on any small linux box. In fact that's another great use for an old Raspberry Pi.

The main reason this technique works for me is that I don't really need very very high availability. With this current setup there is a possibility the server would be unaccessible for an hour in the worst case scenario, and that's a chance I am comfortable with.

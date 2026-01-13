---
layout: _layouts/post
comments: true
title: "RaspberryPi Soundboard – Update #1"
tags: post
---

I spent the last couple of days working on the [RaspberryPi Soundboard](http://chinpen.net/blog/raspberrypi-soundboard-intro/), and I must say I'm kind of frustrated with Linux Audio. It seems much harder to get stuff working when you want to keep things simpler and not use a GUI.

This is what I've achieved.

1. I have a fully configured (WiFi, SSH, etc, etc) Pi running [Archlinux](http://archlinuxarm.org/packages) + [i3wm](http://i3wm.org/docs/userguide.html) for GUI

2. I have [Mumble](http://mumble.sourceforge.net) running from the command line even when no display is connected to the Pi. "_Yay!_"

3. I have [Pulseaudio](http://pulseaudio.org) running with all the correct settings on the Pi.

![RaspberryPi]\(/img/2014/02/IMG_20140203_212926.jpg)

The main issue I faced was piping the audio. As much as Pulseaudio is the solution to mix and pipe audio around, letting me pipe audio coming from a player (say [aplay](http://alsa.opensrc.org/Aplay) or [sox](http://sox.sourceforge.net/sox.html))  into another application is really difficult. I faced a couple of main issues.

1. It seem none of the players let you choose which "sink" in Pulseaudio should they connect to. I only saw that option in [mpd](http://mpd.wikia.com), but that seemed like a total overkill for what I want to do.

2. While using Pulseaudio's _sink.monitor_ feature works perfectly for my [streaming server use case](http://chinpen.net/blog/streaming-audio/), the soundboard has a slightly different needs. Here we need the audio from the player to end up in Mumble. I am envisioning a Pulseaudio configuration along this line.

aplay **=\>** Pulseaudio null-stream **--\>** stream.monitor **=\>** Mumble.

3. Finally, getting Mumble to receive audio from Pulseaudio is straightforward, but to set it to receive it from a monitor of a sink seems challenging. The funny bit was I could easily do it using GUI ([pavucontrol](http://freedesktop.org/software/pulseaudio/pavucontrol/)) but couldn't find the command (pacmd? pactl?) to do that.

Any ideas or suggestions would be welcome! Please comment below!

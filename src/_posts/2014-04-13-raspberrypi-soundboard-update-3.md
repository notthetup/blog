---
layout: _layouts/post
comments: true
title: "RaspberryPi Soundboard – Update #3"
tags: post
---

Finally found more time to spend on the [RaspberryPi Soundboard Project](http://wp.me/pJdWn-Zj).

After mucking around for days with [Pulseaudio](http://pulseaudio.org/wiki/), and getting significantly annoyed at being able to do a simple loopback or virtual device functionality, I tried [Jack](http://jackaudio.org/documentation).

Jack is perfect for [such 'piping'](http://qjackctl.sourceforge.net/qjackctl-ss1.html), but I figured out the hard way that there is [no official Mumble support for Jack](http://sourceforge.net/p/mumble/patches/324/).

Thankfully I found out about ALSA's [snd\_aloop module](http://www.alsa-project.org/main/index.php/Matrix:Module-aloop). This creates [a 'virtual card' with 2 device](http://plasmasturm.org/log/soundserverhack/)s. If you play audio into one, it comes out of the other. Exactly what I needed, and Mumble does query all the ALSA devices, so I can easily find my 'Loopback' device.

!\[mumble\]\(../img/2014/04/IMG_20140413_220131.jpg)

Next was playing the audio. Using simple '[aplay](http://alsa.opensrc.org/Aplay)', I could test if my setup was working. But to have better control over the audio (fade-in, fade-out), I would need a more programmatic approach.

Since we're on a RaspberryPi, Python is a natural choice, although since I am using Archlinux, Python doesn't come installed!. So I installed [Python2](http://archlinuxarm.org/packages) and found [pygame](http://www.pygame.org/news.html), a wrapper around [libSDL](http://www.libsdl.org/) which has a nice [mixer and audio module](http://www.pygame.org/docs/ref/mixer.html). It's surely an overkill for what I'm trying to do. But I do need something that lets me choose which ALSA device to use (with pygame [I can define that using environment variables which SDL uses](http://www.libsdl.org/release/SDL-1.2.15/docs/html/sdlenvvars.html)), and something which lets me do basic audio effects like mixing, fading etc.

So this works for now. Although the audio from Mumble is pretty glitchy, I think some Mumble settings need to be tweaked. But I am still worried that running the Mumble GUI is making the Pi slow. I may have to figure out a way to run Mumble headless.

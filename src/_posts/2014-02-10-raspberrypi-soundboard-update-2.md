---
layout: _layouts/post
comments: true
title: "RaspberryPi Soundboard – Update #2"
tags:
 - Audio
 - Technology
---

Quick update here. I made 2 small changes to the [Soundboard project from last week][0].

1\. I reinstalled Archlinux and stuck with plain [Xorg][1] + [twm][2] reducing the install footprint.

2\. I played around with Mumble to discover that [ALSA][3] could support the [Pulseaudio main sink's monitor input][4] as an audio input. This basically pipes all audio ("What-U-Hear") from Pulseaudio into Mumble. Not exactly what I wanted, but close enough. Especially since I don't plan to run anything else on this Pi.

!\[alsa\]\(../img/2014/02/alsa.jpg)

So the audio routing kind of works (I'm not too happy with it, but I'll roll with it for now). Now to work on trigger the playing of the audio files using a keypad.

Also I'm adding some of the scripts including the init scripts, [to this github repo][5]. A lot of the configuration I did was in _/etc/_ config files, I will add copies of those to this repo in the future..


[0]: raspberrypi-soundboard-update-1/
[1]: https://wiki.archlinux.org/index.php/xorg
[2]: http://en.wikipedia.org/wiki/Twm
[3]: http://www.alsa-project.org/main/index.php/Main_Page
[4]: https://wiki.archlinux.org/index.php/PulseAudio/Examples#ALSA_Monitor_source
[5]: https://github.com/notthetup/pifx

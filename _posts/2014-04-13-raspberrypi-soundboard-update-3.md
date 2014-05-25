---
layout: post
comments: true
title: "RaspberryPi Soundboard – Update #3"
tags:
 - Audio
 - Technology
---

Finally found more time to spend on the [RaspberryPi Soundboard Project][0].

After mucking around for days with [Pulseaudio][1], and getting significantly annoyed at being able to do a simple loopback or virtual device functionality, I tried [Jack][2].

Jack is perfect for [such 'piping'][3], but I figured out the hard way that there is [no official Mumble support for Jack][4].

Thankfully I found out about ALSA's [snd\_aloop module][5]. This creates [a 'virtual card' with 2 device][6]s. If you play audio into one, it comes out of the other. Exactly what I needed, and Mumble does query all the ALSA devices, so I can easily find my 'Loopback' device.

![mumble](../images/2014/04/IMG_20140413_220131.jpg)

Next was playing the audio. Using simple '[aplay][7]', I could test if my setup was working. But to have better control over the audio (fade-in, fade-out), I would need a more programmatic approach.

Since we're on a RaspberryPi, Python is a natural choice, although since I am using Archlinux, Python doesn't come installed!. So I installed [Python2][8] and found [pygame][9], a wrapper around [libSDL][10] which has a nice [mixer and audio module][11]. It's surely an overkill for what I'm trying to do. But I do need something that lets me choose which ALSA device to use (with pygame [I can define that using environment variables which SDL uses][12]), and something which lets me do basic audio effects like mixing, fading etc.

So this works for now. Although the audio from Mumble is pretty glitchy, I think some Mumble settings need to be tweaked. But I am still worried that running the Mumble GUI is making the Pi slow. I may have to figure out a way to run Mumble headless.


[0]: http://wp.me/pJdWn-Zj
[1]: http://pulseaudio.org/wiki/
[2]: http://jackaudio.org/documentation
[3]: http://qjackctl.sourceforge.net/qjackctl-ss1.html
[4]: http://sourceforge.net/p/mumble/patches/324/
[5]: http://www.alsa-project.org/main/index.php/Matrix:Module-aloop
[6]: http://plasmasturm.org/log/soundserverhack/
[7]: http://alsa.opensrc.org/Aplay
[8]: http://archlinuxarm.org/packages
[9]: http://www.pygame.org/news.html
[10]: http://www.libsdl.org/
[11]: http://www.pygame.org/docs/ref/mixer.html
[12]: http://www.libsdl.org/release/SDL-1.2.15/docs/html/sdlenvvars.html

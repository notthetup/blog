---
layout: _layouts/post
date: 2006-09-19
comments: true
title: Open Sound Control
tags: post
---

Now for some more _geeky_ stuff.

One of the components of my FYP was a communication mechanism between controllers, mapping engins and synthesizers for sound synthesis. Now, the main part of [my FYP](fyp-blues-and-greens/), the mapping engin, was designed to be cross-platform, and portable. Thus, we needed a communication mechanism able to support this.

MIDI has been one of the most popular communication mechanism for synthesis for many years. But it has had its days. We need a more extendible mechanism, which is not as hardward layer dependent like MIDI. Enter Open Sound Control (**OSC**).

"_OpenSound Control (OSC) is an open, transport-independent, message-based protocol developed for communication among computers, sound synthesizers, and other multimedia devices._"

I won't go into the details. You can get them [here](http://cnmat.berkeley.edu/OpenSoundControl/) and [here](http://en.wikipedia.org/wiki/OpenSound_Control) if you are interested.

Anyway, so as a part of my FYP I extended the Java implementation of the OSC protocol, **[JavaOSC](http://www.illposed.com/software/javaosc.html)**. [Here](http://web.singnet.com.sg/~chinpen/josc.pdf) is a paper I co-wrote on it. We called it JOE (Java OSC Extension). Now, don't laugh. It was supposed to go with MOE (Microcontroller OSC Ethernet), but that's another story.

Anyway, so I am still working on **JavaOSC**, though not alone. I have teamed up with the [original creator of JavaOSC](http://www.illposed.com/aboutus/) and [other amazing people](http://www.iua.upf.es/~mkalten/) in the community, to continue this project. You can find out more about it at the [sourceforge site](http://sourceforge.net/projects/javaosc). It's free, in both ways, so feel free to use it, or even better to **'abuse**' it. ;)

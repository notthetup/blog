---
layout: post
title: Open Sound Control
tags:
 - Audio
---

Now for some more _geeky_ stuff.

One of the components of my FYP was a communication mechanism between controllers, mapping engins and synthesizers for sound synthesis. Now, the main part of[my FYP][0], the mapping engin, was designed to be cross-platform, and portable. Thus, we needed a communication mechanism able to support this.

MIDI has been one of the most popular communication mechanism for synthesis for many years. But it has had its days. We need a more extendible mechanism, which is not as hardward layer dependent like MIDI. Enter Open Sound Control (**OSC**).

"_OpenSound Control (OSC) is an open, transport-independent, message-based protocol developed for communication among computers, sound synthesizers, and other multimedia devices._"

I won't go into the details. You can get them [here][1] and [here][2] if you are interested.

Anyway, so as a part of my FYP I extended the Java implementation of the OSC protocol, **[JavaOSC][3]**. [Here][4] is a paper I co-wrote on it. We called it JOE (Java OSC Extension). Now, don't laugh. It was supposed to go with MOE (Microcontroller OSC Ethernet), but that's another story.

Anyway, so I am still working on **JavaOSC**, though not alone. I have teamed up with the [original creator of JavaOSC][5] and [other amazing people][6] in the community, to continue this project. You can find out more about it at the [sourceforge site][7]. It's free, in both ways, so feel free to use it, or even better to **'abuse**' it. ;)


[0]: http://chinpen.net/blog/fyp-blues-and-greens/
[1]: http://cnmat.berkeley.edu/OpenSoundControl/
[2]: http://en.wikipedia.org/wiki/OpenSound_Control
[3]: http://www.illposed.com/software/javaosc.html
[4]: http://web.singnet.com.sg/~chinpen/josc.pdf
[5]: http://www.illposed.com/aboutus/
[6]: http://www.iua.upf.es/~mkalten/
[7]: http://sourceforge.net/projects/javaosc

---
layout: post
title: "RaspberryPi Soundboard - Intro"
categories:
 - Tech
 - Audio
---

One of the additional elements in our [WeBuild Live podcast set-up][0] is a [Soundboard][1], which lets me trigger sound effects during the show. That board also controls the intro and outro music. Since this needs to be heard in the Live broadcast as well, and post processed, I had to give it its own channel in Mumble. To make life easy, I used an spare Macbook I had lying around, and loaded up Mumble, [Soundflower ][2](useful for piping audio between applications) and found [SoundPlant][3] (caveat: Soundplant interface looks old, but is pretty useful for what it does).

The current set-up works, but I wanted to make it leaner. So after a couple of days of research, I have the rough plans for a RaspberryPi based Soundboard.

The set-up I'm envisioning is as follows.

**Hardware**

* RaspberryPi Model B (to be run headless)
* Generic USB WiFi Adapter
* USB Numpad (to trigger the sounds)

**Software**

* Raspbian
* Mumble Client running through VNC
* PulseAudio (piping audio)
* aplay (simple audio player)
* Custom Python scripts to manage and trigger the audio files.

It looks simple enough and[I found a few articles ][4]on the Interwebs [talking about similar ideas][5], but there could be some gotchas.

**Possible Problem Area**

* Latency. The audio has to be heard very quickly after the Numpad keys are pressed.
* Capturing Numpad Keys robustly.
* Mumble is a UI based program, it doesn't have much scripting support.
* Mechanism to show status of Mumble connections etc.

I will post updates as I keep working on this project.


[0]: http://chinpen.net/blog/2013/11/streaming-audio/
[1]: http://en.wikipedia.org/wiki/Soundboard_(computer_program)
[2]: http://cycling74.com/soundflower-landing-page/
[3]: http://soundplant.org/
[4]: http://de.mcbf.net/david/guide-for-music-in-mumble-using-a-linux-server/
[5]: http://log.or.cz/?p=303

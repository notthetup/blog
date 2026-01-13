---
layout: _layouts/post
date: 2008-10-23
comments: true
title: "Google Andriod : Open? - Part 2"
tags: post
---

_This is a continuation of the [Part 1 of discussion](google-andriod-open-part-1/) on Google Android._

![android-logo](./android.png)

So will we be able see Android on the iPhone, the Nokia N95, or even the Motorola RAZR cellphones? Herein lies the biggest misconception about Open OSs.

Open-source really means that the source code of the OS is available for ALL to be used. So we can read it, port it, re-compile it, program it on some device and do whatever we want with it. But it doesn't mean we can run it on ANY cellphone. The restriction is not the SW but on the HW. To understand this, we have to look at how Cellphones work.

Cellular networks, on which all cellphones run, require a specific signaling protocol to be used to talk to them (Baseband communications). These protocols include layers of security, error correction, and meta-information to ensure usable communication quality for all. There are also many security mechanisms built into these devices so that users will not be able to spoof as other, or Hijack a signal, or spam the cell tower, etc. And thus, many cellphone OSs (more on this later) till this date have been Closed. That way nobody will be able to "hack" their way into the phone by reading the code and do something nefarious.

With hackers getting better equipped, many cellphone manufacturers started having heavy "chain-of-trust" security mechanism in the cellphone to ensure that nothing else except their own, valid, (and hence not doing anything nefarious) code runs on it. The idea here was to have each component validate and ensure that the next component can be trusted before handing control to it. And this whole chain is "anchored" in some HW, so that every time the cellphone powers on, HW will ensure that the 1st component (say like a BIOS) is valid before start it, and the BIOS will ensure the validity of the OS and so on and so forth. Hence it's very difficult to run any code on modern day cellphones other than what has been "blessed" by the manufacturer.

Furthermore, these signaling protocols have a strict real-time requirements, and thus need an OS which support Real-Time scheduling to handle this signaling. Linux inherently does not support Real-Time scheduling (There are variants of it which do, like RTLinux, etc) and so it can't be used to do the Baseband communications. And thus most cellphones will have multiple OSes running together. An Baseband OS (or a Modem) and your usual "SmartPhone OS". And these two need to talk to each other in order to work and place and receive calls, data, etc. So the "SmartPhone OS" needs to know how to talk to the "Baseband OS". This is not as easy as it seems, as many times the Baseband OS is propriety and generally Closed to prevent any tampering by the user, especially since many security mechanisms (like Subsidy Lock in the case of the iPhone) are implemented by the Baseband OS.

Hence, there are two problems in getting Android running on any generic phone. 1. Does the HW even allow some other OS image to be programmed and run on the phone? 2. Can Android talk to the Baseband OS and use the phone side of things.

In most phones the HW will only allow the original OS to boot, and no one knows what/how the Baseband OS works and how one can communicate with it. And this is why I feel it will be very difficult to see Android running on other phones, without the HW manufacturer themselves supporting it explicitly.

So is Google Android Open? Surely! But that doesn't mean you'll see it running on an iPhone close to you anytimes soon.

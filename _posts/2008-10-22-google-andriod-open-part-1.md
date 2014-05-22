---
title: "Google Andriod : Open?? - Part 1"
categories:
 - Tech
---

_This is a two post discussion on the Google's Android OS._

[![Android](http://www.openhandsetalliance.com/images/android_bigger.jpg)][0]

There has been much furor recently, about Google's new Embedded Operating System "[Android][1]". The biggest reasons for the attention are the clout of Google as a player in the IT industry, and the fact that the Operating System (OS) is completely Open-sourced. So let's look at this "Open"ness of Android and a few misinterpretation people have about it.

Google has basically picked up the Linux [Kernel][2], which itself is under the [GPL License][3] (Open-source), modified it to work on Embedded systems, and added their framework on top of it.  This frameworks allows users to easily develop application which can run on the cellphone. The idea is once you write an app using this framework, you will be able to run it well on all products which have Android ported to them, a very Java-esque premise. And not surprisingly, most of this functionality is exposed to the developer through "Java".

Android itself will be release under the [Apache License][4] where applicable and under the GPL elsewhere._(Another interesting side note here, is that since the Mobile Edition of the popular Sun Java Virtual Machine, is not completely Open-sourced, Google went ahead and generated their own Virtual Machine and will be Open-sourcing it under the Apache License. You can read more about this [here][5])_.

So there are two important aspects of Android, which the community at large is excited about. The comprehensive (erm, maybe not so much) and open sourced [APIs][6], or libraries, for the developers to make their applications. And the OS itself which is open. And these two are NOT the same. The benefits arising from these are also NOT the same, and in fact not at all related.

An Open API for App development allows the community to add new functionality to the libraries given by Google. For eg. "Display refresh API takes too long to execute? No worries, we can look at the code, and optimize it and generate a new library which is faster and use that". More realistically, sometimes it helps to look under the hood into the libraries and API to see exactly what they are doing to be able to use them wisely and properly.

The Open-sourced OS itself is a whole different ball game. OSs, especially Embedded OSs, are generated to run on specific Hardware, a specific platform, for eg. an ARM9 or an PowerPC, or an x86 processor. And a specific operating system image will not run on another platform unless it is compiled for it.  So having an open OS will allow the community to make ports of Android to various platform. We have already seen this with the port of [Android to the N810][7] HW, and cellphones or mobile devices are not the limit. In the [latest episode of Tekzilla][8], Patrick Norton talks about how Android would also be useful in Set-top Boxes, and all other Embedded devices which require user interface.

Also, an Open-sourced OS will allow the community to hack, fix, tune and tweak the OS to make it do whatever they want. Things like enabling new functionality, protocols, supporting new peripherals, or improving the performance for certain types of applications, etc.

So the golden question is, will we be able see Android running on the iPhone, the Nokia N95, or even the Motorola RAZR cellphones? Herein lies the biggest mis-conception about Open OSs.

_Check out [Part 2 of this article ][9]for the rest of the discussion on Google Android and Cellphone OSs._


[0]: http://www.openhandsetalliance.com
[1]: http://code.google.com/android/
[2]: http://kernel.org
[3]: http://en.wikipedia.org/wiki/GPL
[4]: http://en.wikipedia.org/wiki/Apache_License "Apache License"
[5]: http://www.betaversion.org/~stefano/linotype/news/110/
[6]: http://code.google.com/android/reference/packages.html
[7]: http://www.talkandroid.com/134-android-nokia-n810-install/
[8]: http://revision3.com/tekzilla/android/
[9]: http://chinpen.net/blog/?p=334

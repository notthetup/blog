---
layout: _layouts/post
comments: true
title: Web and the broken promise
tags:
 - Technology
---

I'll start by saying I'm a Web noob. In the sense that I tried my best to stay away from Web technologies as long as I could. The Web seemed too cliche and didn't really attract my curiosity.

Recent developments with [HTML5][0] and specifically [WebAudio][1] stuff has made me take a serious look at Web Technologies. And I'm pretty disappointed by what I see.

To me, the Web (at least in it's current form) has two great features, or promises. Firstly the ability to make great looking, usable, User Interfaces, quickly, easily and effectively. Secondly the cross-platform promise of '**Write once, run anywhere**'. But just like Java, I am only disappointed to see the plethora of issues that come up when trying to write even a simple web application which can run across various browsers.

The more and delve into Web technologies the more I see why both features aren't as rosy as painted by the public.

**UI**

Making a Web based UI right is HARD! And more often than not, I've seen developers 'trial-error' their way out of making stuff look the way you want it. The [colossal number of CSS properties available][2] for use doesn't really help to have a concrete understanding of view rendering and what really happens when you apply specific properties to an Element.

For someone who's never doing any kind of UI work before, I'm surprised at lack of defined ways to arrive at the UI you have in your mind. Unlike when you're writing software, where there are (usually) a handful of ways you can do something and if you follow tried and tested patterns, you'll arrive there sooner or later. Not so with UI in my experience.

To be fair I'm yet to find a system/framework on any platform (not only the web) that developers don't have to struggle to make the UI look exactly as they want, across various devices and platforms. I would love to know if you have any. But Web seems like what everyone is going towards and it surely isn't optimal.

**Platforms**

We've all known about Browser wars. But it's terrifying how many differences there are in the way browsers differ in implementing basic functionality. Take for example audio codec support in the new HTML5 _<audio\>_ tag.

!\[audio codec support\]\(../img/2013/07/Screen-Shot-2013-07-15-at-12.01.56-PM.png)

Yes, there are political reason for codec support, etc. But I'm sure there is no political reason to not support plain old PCM WAV files IE and Opera. So there isn't a single format that's support across all browsers. _(Yes. Hopefully now that [Firefox has agreed to support mp3][3], we might be able to get around it, but for now in Firefox 22 on OSX 10.7 I still can't play mp3s)_

Developing on the Web platforms, I feel I'm spending more time and effort dealing with browser quirks than actually building an application that I want to build. And these aren't even old versions of browsers. Everything from Events that are thrown to Errors that are returned differ in browsers.

Yes, I can imagine there would be libraries that would save me from all the trouble by dealing with all these quirks, but to me that's a failure of the Web platform. Having a library which needs to check which browser you're on and then adjust how things are done shouldn't need to happen.

There are web standards that have been defined. So why don't browsers just work? I'm guessing it's the disparity between committees at W3C which write these standards (which tend to be vague) and the actual developers at the browser vendors who make the browsers (who tend to have an opinion).

Looking at the way the various parties (W3C, Browser Vendors and Developer) interact, it seems we still have a long way to go before we'll see Web as a platform where a developer can ignore the platform and focus on the application.


[0]: http://www.html5rocks.com/en/
[1]: https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html
[2]: http://www.w3.org/TR/CSS21/propidx.html
[3]: http://blog.pearce.org.nz/2013/02/h264aacmp3-support-now-enabled-by.html

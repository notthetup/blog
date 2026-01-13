---
layout: _layouts/post
date: 2014-06-18
comments: true
title: Auralizr
tags: post
---
## Real-time Acoustic Room Auralization

Earlier this year, an Acoustician friend from [Chalmers days](where-is-acoustics-used) visited, leading to many discussions on real-time Auralization of Acoustic spaces which was her thesis and current work.

### auralization

Auralization is..

> the process of rendering audible, by physical or mathematical modeling, the sound ﬁeld of a source in a space, in such a way as to simulate the binaural listening experience at a given position in the modeled space.
>
> The ability to recreate listening environments has always been one of the aims of acoustics and audio engineering. The goal has been not only to recreate the sensation of the speech or music, but also allow the recreation of the aural impression of the acoustic characteristics of a space, be it outdoors or indoors.

([source](https://github.com/notthetup/mastersthesis/blob/master/thesis.pdf))

In short, the idea is to simulate an aural experience of a space (a room, a church, a hallway, a garden, etc). It could be as simple as recording that space and then playing it back to a person wearing headphones, or as complicated as having a multi-loudspeaker setup in [anaechoic chambers](http://en.wikipedia.org/wiki/Anechoic_chamber).

My Acoustician friend though, was looking at a newer idea of having this done real-time, such that you can interact with this simulated aural experience, by speaking. And you will hear the result of your voice interacting with this simulated space. Such interactivity has been shown to make the simulation feel more realistic.

### browsers and webaudio

My friend's setup to do real-time auralization was complex, having deal with echos and feedback. I wondered if this could be acheived, albeit with much reduced functionality, on modern mobile platforms.

I took [a stab at it on iOS](https://github.com/notthetup/Auralize) since [CoreAudio](https://developer.apple.com/library/ios/documentation/MusicAudio/Conceptual/AudioUnitHostingGuide_iOS/ConstructingAudioUnitApps/ConstructingAudioUnitApps.html#///apple_ref/doc/uid/TP40009492-CH16-SW3) is pretty decent at doing real-time processing. It seemed promising, but I was lazy to deal with the complexity of making a decent UI for it.

That's when I remembered that Chrome had announced that they were adding a [bridge between WebAudio and getUserMedia/Stream](http://updates.html5rocks.com/2012/09/Live-Web-Audio-Input-Enabled). This would allow audio from microphone (getUserMedia) to be piped into WebAudio. WebAudio is a low latency real-time audio processing API in the browser. So theoratically, I would be able to do some kind of real-time Auralization in the browser.

Also, being in the browser meant I could publish it easily and skinning it with a nice UI would only require me to annoy/impress [some friends](http://sayan.ee/).

### auralizr

After a weekend of hacking out the internals, creating a nice UI and interactions, and finding good source material, we put out a [real-time auralization demo called Auralizr](http://notthetup.github.io/auralizr).

The demo showcases the flexibility of modern Web Platform as well as show that real-time auralization can be implemented (to a certain extent) on the Web.

Since all the audio processing is done in the browser, this could happily be hosted on [Github Pages](https://pages.github.com/).


### how does it work?

The [getUserMedia/Stream](http://caniuse.com/#search=getusermedia) API allows browsers to access audio/video streams from the underlying OS. Of course, the browser will ask for user permission to use the microphone.

_Currently `getUserMedia` is only supported by Chrome and Firefox._

The [`navigator.getUserMedia`](http://dev.w3.org/2011/webrtc/editor/getusermedia.html#dom-navigator-getusermedia) call with the constraints [`{audio:true}`](http://dev.w3.org/2011/webrtc/editor/getusermedia.html#idl-def-MediaStreamConstraints) returns a [`MediaStream`](http://dev.w3.org/2011/webrtc/editor/getusermedia.html#idl-def-MediaStream)

Here is a quick demo of getting some audio from your microphone and adding it to a volume meter.

<script src="./volume-meter.js"></script>
<div id="volumedemo">
<button class="btn" id="enable" style= "vertical-align: top;">Enable Volume Meter</button></div>
<div style= "width:640px; height:50px; border:2px solid; border-color:black">
<canvas id="meter" style= "margin-top:3px; width: 640px; height:46px;"> </canvas>
</div>

_Don't forget to allow your browser to use your microphone_

([source](https://github.com/cwilso/volume-meter/))

The WebAudio API has a [`audioContext.createMediaStreamSource`](http://webaudio.github.io/web-audio-api/#widl-AudioContext-createMediaStreamSource-MediaStreamAudioSourceNode-MediaStream-mediaStream) method which wraps this `MediaStream` and exposes a standard Web Audio [AudioNode](http://webaudio.github.io/web-audio-api/#idl-def-AudioNode) called [`MediaStreamAudioSourceNode`](http://webaudio.github.io/web-audio-api/#idl-def-MediaStreamAudioSourceNode).


```js
navigator.getUserMedia( {audio:true}, function (stream) {
	mediaStreamSource = audioContext.createMediaStreamSource( stream );
} , function(){
	console.log("Error getting audio stream from getUserMedia");
});
```

Once the audio from the microphone is in WebAudio, it's a simple task of passing it through a [`ConvolverNode`](http://webaudio.github.io/web-audio-api/#the-convolvernode-interface) to the output.

```js
convolver = audioContext.createConvolver();
mediaStreamSource.connect(convolver);
convolver.connect(audioContext.desitination);
```

Here is a quick overview of the connections.

![auralizr schematic](./auralizr.jpg)

### convolution and impulse responses

The real magic happens in the ConvolverNode. [Convolution](http://en.wikipedia.org/wiki/Convolution#Derivations) allows a signal to undergo elaborate processing based on model of a given system. The model of this system (an __impulse response__) is used to define the how the system affects the signal.

Here is a nice gif which tries to explain the math behind Convolution.

![convolution](./convolution.gif)

([source](http://en.wikipedia.org/wiki/Convolution#mediaviewer/File:Convolution_of_spiky_function_with_box2.gif))

These impulse responses can be considered as mathematical models of the system, and affect a given signal similarly as the system would have affect it. So given the impulse responses of the aural spaces we want to recreate(for eg, a hall, church, etc) you could easily convolve that with the audio from the microphone and out comes the audio as if you were speaking in the space.

I created a simple demo that showcases how convolution can affect an given audio. The original sound of a gunshot played in a loop. If you pass it through a Convolver with various impulse responses, it sounds as if you're listening to the gunshot sound in a different space.

<script src="./convolve-demo.js"></script>
<div id="convolvedemo">
	<input type="button" class="btn" id="original" style= "vertical-align: top;" value="Play Original" disabled="true" />
	<input  type="button" class="btn" id="hall" style= "vertical-align: top;" value="Play Convolved with Hall" disabled="true" />
	<input  type="button" class="btn" id="stairwell" style= "vertical-align: top;" value="Play Convolved with Stairwell" disabled="true" />
	<input  type="button" class="btn" id="stop" style= "vertical-align: top;" value="Stop" disabled="true" />
</div>

_Use headphones while listening to these sounds. Also, sounds are loud._


For the Auralizr demo the users would be listening on headphones, so I needed [binaural](http://en.wikipedia.org/wiki/Binaural_recording) impulses responses of various types of spaces. I found [OpenAirLib](http://www.openairlib.net/) which has a ton of good quality impulse response recordings licensed under Creative Commons. The responses are avilable as wav files which can be loaded and decoded using WebAudio API. The returned AudioBuffer can be used as an impulse response in a Convolver Node.


Putting everything together we created Auralizr. Auralizr is open source and you can look at [how everything was hooked up on GitHub](https://github.com/notthetup/auralizr).

---

_Note: There seems to be a latency issue on Firefox (Nightly 32.0a1) and even with Chrome (35.0.1961) on Android with getUserMedia-WebAudio bridge. Hence the simulation of being in another space is lost. I am working on an experiment to measure this delay._

---
layout: _layouts/post
date: 2011-04-11
comments: true
title: Point Sources
tags: post


---

As Acoustician, we get excited when we hear the word 'Point Source'. It's something many engineers would relate to. Just like in other fields of Engineering, Point Sources in acoutics are a simplified model (almost as simple as it can get) of Acoutic Energy sources.

[Point sources](https://ccrma.stanford.edu/~jos/Delay/Acoustic_Point_Source.html) are represented as a dimensionless point which radiates acoustic power. Being dimensionless makes them usefull as all the other complications of souces with physical dimensions (length, width, etc), like directivity can be conviniently ignored with point sources.

The radiation of the point source is considered as governed by the 3D Wave Equation and hence the [pressure follows a 1/r law](http://en.wikipedia.org/wiki/Sound_intensity), as it decreases as the distance from the point source increases. One can imagine as the Power from a source is radiated in all directions in a speherical shape (in all directions), the further it goes, the less 'dense' it gets hence the reduction with distance. Such a source is also known as a monopole source. This is done to make a difference with a dipole source which behaves quite differently because of internal interactions. But we'll look at them later.

The question that begs to be ask though, is when can natural sources be considered as point sources. If we have something that makes a noise (like a loudspeaker) can it be considered a point source? Obviously not! As these sources have physical dimensions which will cause the sound waves to interact with them. For example the waves will reflect off various surfaces, get absorbed by some surfaces, and re-radiated, by other surfaces, in different directions and with various amounts of power. Hence, it gets complicated with real life acoustic sources.

So when can we use the point sources? So as with all things acoustics most models only hold for certain frequency ranges. In this case, the point source model holds pretty well when the dimensions of the source are much lesser than the wavlength of the smallest wave being considered. So given a 20kHz sound in air (smallest wavelength humans are supposed to hear), the wavelength is about 17mm. Anything larger than 17mm is considered too big to be a point source and will interact with the wave.

But none the less, point sources are interesting models and allows us to simplyfy many calculations and ignore many unnecessary details while investigating sound.

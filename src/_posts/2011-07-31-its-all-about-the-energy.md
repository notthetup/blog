---
layout: _layouts/post
comments: true
title: It's all about the Energy
tags:
 - Acoustics
 - Audio
 - Technology
---

Energy tracking and analysis, is the tracking of energy content of a certain signal through the various processing it goes through. The idea is to see how the various processes affect the energy content of a signal and ensure that energy from the critical part of the signal is not lost somewhere in the processing chain.

But thinking about energy is not so intuitive for many, including myself. And in the world of signal processing, it's [a complex (squared sum) relation][0] between the signal and the energy which makes it even less intuituve. But none the less, from a higher perspective, energy can be considered as the potential of the signal which needs to be tracked to ensure that the final output signal has the correct amount of energy in the right frequencies.

Here's an example of where energy analysis becomes useful. I am working on some [audio synthesis][1], where I split a given audio signal into two parts (deterministic, and stocastic) and then later combine them to re-synthesize the audio. Naturally, the setup of this problem means that finally the energy in the re-synthesized signal should be the same as the original signal or atleast similar. Thus energy levels of the various synthsis processing elements can be looked at to find where the signal looses (or gains) it's energy drastically. There's likely to be something wrong with the implementation in those parts.

Such analysis becomes very important when dealing with transform domains. In Acoustics, we love our [Fourier transforms][2], and thanks to the [Parseval's Identity][3], we know that in the transform domain, energy is still kept equal to the time domain. Hence, we can continue our energy tracing through the transform domain (and back, as I had to) and see what's happening with the signal.

The only drawback of such a techqniue is that care needs to be taken to how the various processing techniques do to the energy. [Windowing][4], which is very commonly used when moving a signal into the transform domain, does indeed affect the total energy levels, and so does [filtering][5]. Another common mistake made which results in sudden loss of energy is when only the half of a spectrum is considered (as the spectrum for a real signal is mirrored). But as long as those are analyzed, and known to have a certain energy loss and that is validated in the signal chain, we're good to go.

So the next time you feel lost and don't know what's going on, look at the energy.



[0]: http://en.wikipedia.org/wiki/Energy_(signal_processing)
[1]: http://en.wikipedia.org/wiki/Synthesizer#Types_of_synthesis
[2]: http://en.wikipedia.org/wiki/Fourier_transform
[3]: http://en.wikipedia.org/wiki/Parseval's_identity
[4]: http://en.wikipedia.org/wiki/Window_function
[5]: http://en.wikipedia.org/wiki/Filter_(signal_processing)

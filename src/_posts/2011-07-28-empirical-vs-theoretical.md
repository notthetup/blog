---
layout: _layouts/post
comments: true
title: Empirical vs Theoretical
tags: post


---

When it comes to look and natural phenomenon and trying to understand it, there're always two ways of going at it. You can either start form the basic principles and work you way up to the context of the phenomenon being studied, or you can start with phenomenon, measure it in multiple ways and try to make sense of it by looking for some patterns.

The first way is of course known as the Theoretical approach and the second as the Empirical approach. Both approaches have their own benefits and limitations. And real life, most models of natural phenomenon are made using a combine of the two approaches.

So let's take the example which I'm working with, on estimating the loss of [sound pressure level(SPL)][0] because of a certain [resonator][1] placed in the path between a source and a receiver of sound. Sound simple enough.

The theoretical approach requires one to make a model of how the resonator interacts with the environment around it, and integrate that into the model of outdoor noise propagation. Both the model of the resonator and the propagation model are based on mathematical theories and can be worked out from the basics. For examples, the propagation model is based on the solution of the [wave equation][2] in a unbounded medium.

The theoretical approach is great as it ensures it is based on laws and concepts which have been verified. Hence a verified theoretical model can then be used to estimate real life scenarios with significant confidence. Furthermore, a theoretical model can also be extended and used in other environment by substituting the appropriate parameters or sub-models (for example in our case the same model can be used to estimate the effect of a pipe instead of a resonator).

The limitation theoretical lie in the complexity of the underlying mechanism of the phenomenon. If those underlying mechanism are not properly understood, and or incorrectly estimated, the theory will not hold up and the model will not be robust enough. The challenge in many research fields is to actually know if the underlying mechanism of the phenomenon is completely understood and modeled appropriately or not. In a situation where it's hard to understand or know such details, a empirical approach can help.

The empirical approach on the other hand, involves creating the setup of the source, resonator and receiver in a controlled environment and measuring the loss of SPL at various positions. The data recovered from these set of experiments would allow us to see the patterns and estimate some kind of equations or relations between the various parameters.

The benefit of such an approach is that it doesn't require much detailed look into the actual physics or mathematics of the involved phenomenon. Which does mean that quite a few 'hard to calculate' phenomenon can be modeled this way. It is also beneficial in the cases where complicated phenomenon have to be simplified to be used in other models. For example, in the model of the resonator, [viscous losses][3] of the air flowing in the resonator have to be modeled. Instead of using a complete theoretical fluid dynamics model to estimate the viscous losses, an empirical model can be calculated from the measurements leading to a much simpler and faster estimation of the losses.

Therein lies the limitation of this method. Empirical models are very hard to extend beyond the measured setup. Simplification and approximations tend to fail when the context of the phenomenon is changed. For examples, the empirical model for viscous losses will have to change when used to model the resonator in an environment with a different air temperature. Of course, the natural progression in that case is to take a bunch of measurements at various temperatures and find a trend and work that into the empirical mode. But that road just leads to more and more complicated models, and finally something that's even more unwieldy than the theoretical model.

So finally, a good model sticks with the theory where ever it needs to but uses empirical data when it can simplify the life of the user. :)



[0]: http://en.wikipedia.org/wiki/Sound_pressure
[1]: http://en.wikipedia.org/wiki/Helmholtz_resonance
[2]: http://en.wikipedia.org/wiki/Wave_equation
[3]: http://en.wikipedia.org/wiki/Drag_(physics)

---
layout: _layouts/post
comments: true
title: Constrained Optimization
hasjax: true
tag:


 - Tech
---

For the resonator project, I am working on an 'semi-automated' method to 'design' a resonator.

The idea is simple. The resonance frequency of each Helmholtz resonator depends on it's physical dimensions (neck length, nech witdh, cavity length, cavity width). The resonance frequency is determined by a the following formula.

$$ f_{0} = \frac{c}{2\pi} \sqrt {\left( \frac{s_n}{Vx_{ln} + \frac{1}{3}x_{lb}^2 s_{n}} \right)} $$

Now, for the application I am looking at, optimizing _q_ which is the source strength of each resonator when mounted flush to the ground is something which helps to acheive the most effect of reduction. So we have to optimize the physical dimensions of the resonator for the largest value of _q_.

$$ q = \frac {j \omega \rho x_{rn}^2}{2} \frac{1}{Z_{hr} - \rho c (1 - cos(kx_{rn}))} $$

So this becomes a problem of constrained optimization. We have to optimize the physical dimensions _x_ to optimize _q_, while still ensuring that the resonance frequency is kept the same.

Thinking more, we can come up with a few more constraints from the physical perspective to narrow our search region.

So, we ensure that the neck width is smaller (less than 0.5) of the cavity width. And a size limitation (we don't want to search for solution with really large size), so we can have the following constraints.

$$ x_{rn} \leq \frac{x_{rb}}{2} $$

$$ x_{lb} \leq 0.2m $$

$$ x_{rb} \leq 0.05m $$

So, this is a clasic problem of [Constrained Optimization](http://en.wikipedia.org/wiki/Constraint_optimization). The basis idea being classical Constrained Optimization techniques is that you generate 'cost functions' from the constraints and then subtract these 'costs' from the the value being optimized. The [Lagrangian Multiplier](http://en.wikipedia.org/wiki/Lagrange_multiplier) method is one such method which is pretty straight forward. If you are interested in understanding the underlying theory and proofs behind these methods I recommend [this ebook by Prof. Bertsekas](http://www.mit.edu/people/dimitrib/lagrmult.html).

For my case, I hit two problems. Firstly, I am not sure if the Lagrangian method would work on my functions, it's gurateed to work on convex functions, but the expression for _q_ is pretty complex to analyze and know the form of. Secondly the basic Lagrangian method needs one to derivate over all the variables (both system variables and the lagrangian variables). Here it gets really messy and prone to bugs.

Still I think it's interesting to anazlyse problems like these theoritically. A theoretical solution allows a simpler and more elegant implementation of such a design tool. Ofcourse the alternative is a numerical method, which will compromise accuracy and speed for ease of implmentation.

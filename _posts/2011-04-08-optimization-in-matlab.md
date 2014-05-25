---
layout: post
title: Optimization in MATLAB
tags:
 - Acoustics
 - Audio
 - Technology
---

Continuing on the Optimization problem from [the last post][0]. I remembered having read about the MATLAB Numerical Optimization Toolbox. Since the license of MATLAB I have has all tool boxes, I decided to explore it.

The quickest way to to learn about [this Toolbox ][1]is to use the GUI based tool. The command _optimtool _will get you the tool. The basic premise of this tool is that you create a function ([ObjectFunction][2]) which when given the variables as arguments, will yield the value being optimized (in most cases minimized). Then by calling this function with various combination of inputs, the optimzation tool will decide the optimum values of the input. This might be a very simplistic view, but that's the foundation.

From here, we get more complicated. You can choose more complicated problem structures (max min problem to find the maximum output value for minumum arguments, etc), you are define linear and non-linear constraints, a multitude of algorithms to solve the problem, and so on. As always the help files and [demos][3] are [great support][4] to decide what you need and chose the correct solvers,stop conditions, etc.

I won't say I totally understand how the tool work, especially since I am still unclear about how the solvers actually work, but the tool gives enough data for you to use it to generate some useful results.

Some interesting points I picked up using this tool.

1. Linear Equality and Inequality [Constraints][5] are defined in a matrix form with the equation _A**x** ?/= b_ catptures the constraint. Matrix is a _n x m_ matrix, where _n_ is the number of constraints of that tye (equality or inequality) and _m_ is the number of variables, **_x_** is the vector of input variables and _b_ is residual factor.
2. Stop conditions are useful not only to decide when to stop iterating but also to add physical constraints. The stop conditions for **x **allow the minimum accuracy of change of the input variables to be defined. In my case, the variables indicate phsyical dimensionsm, so setting the accuracy to a value which defines the lower limit of manufacturing, ensure that the solution is manufacturable (no 0.333118m radius of body required)
3. Various solvers yield different solutions. Since I don't really get the solving schemes, I tried all of them and found one which gives the best solution
4. Starting points matters. It's possible that your problem gives different solutions depending on the starting point used. The tool requires you to submit a starting point. Changing it around your bound range helps to 'look' for other solutions which the solver might not be able to find. It's a little like global vs local minima issue.
5. Most problems are defined as minimization. Since my problem was a [maximization][6] problem, I had to invert the metric which was being maximized.
6. Vizualization of the solving schemes (Constraint Errors, Step sizes, Object Function evaluations) help to see what's going on with the solver.

Finally, I don't think my system really needs such complicated optimization 'firepower'. But it was a good excuse to learn a new tool, and think of approaches to a problem which is quite common in design/research work.



[0]:  http://chinpen.net/blog/constrained-optimization/
[1]: http://www.mathworks.com/products/optimization/
[2]: http://www.mathworks.com/help/optim/write-objective-function.html
[3]: http://www.mathworks.com/products/optimization/demos.html
[4]: http://www.mathworks.com/help/optim/index.html#optimization-problem-setup
[5]: http://www.mathworks.com/help/optim/write-constraints.html
[6]: http://www.mathworks.com/help/optim/ug/choosing-a-solver.html#brhkghv-21

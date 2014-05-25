---
layout: post
comments: true
title: Object Orientation in MATLAB
tags:
 - Acoustics
 - Audio
 - Technology
---

In the world of scientific computing, [MATLAB][0] is pretty much a standard. There are ofcourse many other tools, but MATLAB remains the major tool of choice for many Engineering Computations and especially Signal Processing type of work. Since I am doing most of my working in Acoustical Modeling and Signal Processing, MATLAB is my tool of choice.

I remember when I first started using MATLAB back in the undergrad days. It took me hours to get what was going out. The syntax was confusing, the scripts were messy and there were too many 'hacks' (indexing and such).. All this, ofcourse, coming from a C programming background.. It took me a few years before I was comfortable scripting in MATLAB..

When I started doing MATLAB once again for my Masters, I was happy to see the improvements in [new MATLAB versions][1] over the years. Many new simpler user interfaces, new toolkits, and improved command. However, while thinking of how I could architecture my research project, I wondered if there was a way to [Object Orientate][2] MATLAB code. While I knew this was against the fundamental model of what MATLAB was designed to do, and also would probabaly make the whole thing slower in execution, I still wanted to try it out.

So, both my projects have been designed Object Oriented. Atleast as much as I could. There are many small scripts, but the core of it is Object Oriented. Here are some advantages I found using Object Orientation in MATLAB.

1. Simple and Intuitive code. Especially for architecturing.

2. Great way to encapsulate all properties of a single entity (in my case, a resonator) in a model. This allows quick access of the properties, esp for debugging.

3. Getter and Setter methods help to ensure data sanity.

Ofcourse, MATLAB was never designed to be Object Oriented, so there are a few negetives I found.

1. Access permissions are complicated and annoying to deal with.

2. Slower in execution (not very noticable)

3. Referencing is not as straight forward.

4. Not great support for objects in most tools/commands.

Overall I am pretty happy with a quasi-Object Oriented design I am using. It gives me enough Object Orientation for me to take advantage of it and still allows me to hack our small scripts for testing out stuff.

If you're interested in using Object Orientation for MATLAB, you can check out [these][3] [links][4] to get started.


[0]: http://www.mathworks.com/products/matlab/
[1]: http://www.mathworks.com/products/new_products/latest_features.html
[2]: http://en.wikipedia.org/wiki/Object-oriented_programming
[3]: http://www.mathworks.com/company/newsletters/articles/introduction-to-object-oriented-programming-in-matlab.html
[4]: http://stackoverflow.com/questions/209005/how-do-properties-work-in-object-oriented-matlab

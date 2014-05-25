---
layout: post
comments: true
title: Funky Waves
tags:
 - Audio
---

We were trying to animate a _mode_ which we measured on a beam for one of the labs at school. Ofcourse, [Matlab][0] it was for all the data processing and animation. We used the '[patch][1]' command to generate a surface with many elements and then moved them individually as per the measurements.

Now of course Matlab let's you save each plot as a bitmap and play them back as a movie, but then it's stuck in Matlab. So how do you render it to a 'standard' file? Well, there is [mpgwrite][2]. You can find it at [Matlab Central][3] which is a really cool community where you can get tonnes of Matlab help and pre-written scripts and libraries which help you do lots of things.

Now, that's all cool, but mpgwrite uses a [Matlab executable][4](.mex) to do all the heavy lifting in C. So that mean I had to compile it myself. Not a problem I thought. With [macports][5], I should have all the things I need. So we '[make][6]'. But I had some errors. Looking at the forum for mpgwrite, I saw this solution.

> A few hints on how to compile would be nice. I see others have had the same problem, so I'll share how I managed to compile it under Mac OS X 10.4.8 running on an Intel Mac Pro.
>
> 1) First, you must change file pbmplus.h, at line 101 change to
>

> _\#include <malloc/malloc.h\>_
>
> Remember to put the number sign (i.e. the hash key on your phone) before the include statement.
>

> 2) Locate where you mex compiler is. In my case it is /Applications/MATLAB73/bin/mex. The full path must be written in the Makefile, i.e. it says simply "mex" on line 8, however it must be the full path to the mex compiler (as written above).
>
> 3) Type make at the command line (not in MatLab) - of course you must be in the src/ directory to do this.
>
> 4) Enjoy your .mex\*-file!
>
> Hope this helps.
>

And Voila! It compiled. So I continued to export the matlab animation and made an mpeg out of it.. Check it out.

<iframe id="ytplayer" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/R1hfdUpSXaU?&origin=http://chinpen.net/blog"  frameborder="0"/></iframe>

For those who are interested. This is a mixed mode with some part torsional and some part bending wave.


[0]: http://en.wikipedia.org/wiki/Matlab
[1]: http://www.mathworks.com/help/techdoc/ref/patch.html
[2]: http://www.mathworks.com/matlabcentral/fileexchange/309-mpgwrite
[3]: http://www.mathworks.com/matlabcentral/index.html
[4]: http://www.instructables.com/id/SEE8PONF8DOSUKF/
[5]: http://www.macports.org/
[6]: http://en.wikipedia.org/wiki/Make_%28software%29

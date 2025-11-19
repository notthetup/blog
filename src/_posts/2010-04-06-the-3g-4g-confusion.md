---
layout: _layouts/post
comments: true
title: The 3G-4G confusion
^tags: post
---

I've been hearing this confusion for many days, and decided this needs to be addressed.

What's this 3G/4G that we keep [hearing about everywhere][0], what does that mean to me?

The main reason for the confusion is the completely illogical and confusing naming convention and 'branding' (it sounds almost dirty) used by all the telcos and manufacturers.

Let's go back to the basics.

**1G.** When mobile telecommunication started off, it was analogue. All communication between the phone and the tower was just a analogue modulated signal of the speech. This is called 1G. The standards used during these times were, [NMT][1] \* [AMPS][2] \* [ETACS][3] etc.

**2G.** With the digital age, this communication also became digital. The voice was digitized and transmitted to the tower as a stream of '1's and '0's .The main advantages of the 2G systems were that they were encrypted ([kinda][4]) so you couldn't listen to other people's conversations by just catching their signals using an antenna. The digital systems were more efficient (allowed more people to talk at the same time), and they were extensible (we'll come back to this). Some of the famous 2G standards are GSM, CDMA(IS-95), iDEN. GSM was a part of a standards group called 3GPP and CDMA was part of something called 3GPP2 (Yes, I know it's not exactly this, but this makes it easier.)

Since they were digital, many of these standards also allowed other digital data to be sent over these mechanism. That's how they started to send SMS over these networks. That was 2G.

**2.5G.** A 'half-step' towards the next generation wireless telecommunication standards was the more generalized data-network (not restricted to SMS, etc). This brought GPRS (on 3GPP side) and CDMA2000 1xRTT(on 3GPP2 side), which are both data standards for 2G based networks.

**2.75G.** The 3GPP side decide to improve the data standards on their side of the ground by introducing EDGE (Enhanced Data rates for GSM Evolution). This improved the data rates and speeds of the existing GPRS networks.

**3G.** This was the 3rd iteration of the mobile telecommunication standards. Now this is where it get's messy. To have any standard qualify to be '3G', it had to pass some regulations set by the [ITU][5] (International Telecommunication Union). But that's ofcourse not how the telco advertise it.

So both the groups evolved their standards to quality for the new requirements. the 3GPP side came up with UMTS(W-CDMA). The W-CDMA here refers to the technology used, nothing to do with the CDMA standard from 2G. And the 3GPP2 side came up with CDMA2000 1xEV-DO, widely known as EV-DO.

**3.5G** Ofcourse, we can't stop at 3G, so there was enhancement to the standards. The 3GPP moved to HSPA(HSDPA and HSUPA), while 3GPP2 side went with EV-DO RevA. These were mainly just speed bumps. Confused? The guys at commandN did a [nice table for everything until 3.5G][6].

**3.75G** We can't stop here either. Even more speed 3GPP - HSPA+ ; 3GPP2 - EV-DO RevB.

**3.9G (pre-4G)** Now this is where the fun starts, ITU has come up with requirements for 4G. However, the two main standards (WiMAX and LTE) gunning for this can't make it as of their current versions. But since everyone wants them to be commercialized and available, they decided to release the current versions.

[WiMAX][7] is an IEEE standard. The current version [IEEE 802.16e-2005][8] can't be officially called 3G, but it's just one step before the next version [IEEE 802.16m][9] which should be called 4G.

[LTE][10] (Long Term Evolution) is the 3GPP groups version of next generation standard. Once again it can't perform to the requirements of ITU and hence it's considered 3.9G. The next version LTE-Advanced should be called 4G.

So what does it mean to you?

1. Anyone selling you anything which is '4G' is fooling you.. None of the 4G standards are matured and surely none have been commercialized. But, many telcos are bringing out LTE and WiMAX 802.16e and touting it to be '4G'. Or '4G-ready'. It's not true.

2. You will have to change hardware. Yes. None of these technologies are interoperable. Just like GSM/CDMA, the phones and modes supporting these standards will be completely different (might even have very different mechanisms of authentications, for eg, SIM card). And most of the devices you have now that can do 3.5G/3.75G won't be able to support 3.9G, but the reverse might be possible.

3. Faster mobile telephony coming soon. Yup! This is a given, going forward we'll surely be seeing more and more devices supporting these new standards. Be careful what you buy. While most will support the fastest networks available currently, you don't want to be left behind when the next changes comes.

P.S. To learn more about these standards, wikipedia any of these names.


[0]: http://www.tech65.org/2010/03/24/65bits-161-repeat-after-me-windows-phone-7-series/
[1]: http://en.wikipedia.org/wiki/Nordic_Mobile_Telephone "Nordic Mobile Telephone"
[2]: http://en.wikipedia.org/wiki/Advanced_Mobile_Phone_System "Advanced Mobile Phone System"
[3]: http://en.wikipedia.org/wiki/ETACS "ETACS"
[4]: http://revision3.com/hak5/shmoocon2010
[5]: http://en.wikipedia.org/wiki/International_Telecommunication_Union
[6]: http://commandn.typepad.com/cN156-techTIPS-CellGenerations.pdf
[7]: http://en.wikipedia.org/wiki/WiMAX
[8]: http://en.wikipedia.org/wiki/IEEE_802.16e-2005 "IEEE 802.16e-2005"
[9]: http://en.wikipedia.org/wiki/IEEE_802.16m "IEEE 802.16m"
[10]: http://en.wikipedia.org/wiki/3GPP_Long_Term_Evolution

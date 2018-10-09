---
layout: post
title: Accessibility
---
Information visualizations need to have an audience, and it is important for us to keep in mind who our audience will be. If we have a message that we want to communicate, we should make sure that everyone is able to receive and understand that message. By making our visualizations accessible, we will be able to reach more people.

As [this Storytelling with Data post](http://www.storytellingwithdata.com/blog/2018/6/26/accessible-data-viz-is-better-data-viz), puts it:
> **Accessible data-viz is better data-viz.**

The post itself gives 5 tips on how to make a visualization more accessible, and links to more resources, such as [this data visualization style guide by Amy Cesal](https://cfpb.github.io/design-manual/data-visualization/data-visualization.html).

## General Guidelines
The audience of a visualization is important. What is their reading level? How much do they already know about the topic? What types of charts are they used to? How much jargon will they understand? What information are they looking for? In what contexts will they be looking at or interacting with the visualization?

Ideally, these questions would be answered through extensive interaction and observation of the intended audience, as well as previous research, but this is not always possible. Sometimes we have to design for a wider audience, who we may or may not be familiar with. It is especially in these cases that we follow general guidelines and try to make our visualizations as accessible as possible, so that we do not unintentionally inhibit a potential viewer from understanding what we are trying to visualize.

Though the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) cover a wide range of content, there are some important things to keep in mind for visualizations that are meant to be seen in( a browser. They provide a quick reference that uses the [POUR](http://www.dynamit.com/accessibility-principles/) accessibility principles (perceivable, operable, understandable, robust). WCAG provides links to in-depth discussions of how these principles can be applied.

Here is another [POUR article, by Andrew Smyk](https://theblog.adobe.com/design-with-accessibility-in-mind-the-pour-methodology/).

[Google's Material Design guidelines has a section on accessibility](https://material.io/design/usability/accessibility.html). It contains useful guidelines to follow.

## More Specific Guidelines
I went in-depth on using more accessible color choices in [a previous post on visual perception]({{site.baseurl}}/2018/09/17/visualperception/), but color choice is not the only thing that can be improved. 

Make things bigger! Provide alternative formats!

The message of a visualization should be clear! If there are multiple messages, consider using multiple visualizations and guiding the audience through each one. Making one complex and cluttered visualization is not a good idea.

Visualizations can be very difficult for screen readers to process, and not all the information is always contained within the alt-text for images. It is good to provide the data in a screen-reader friendly, but it would be better to make a single accessible chart, since it takes less effort than making multiple versions, and is easier to maintain.

[This article on a collaboration between Elsevier and Highcharts](https://www.elsevier.com/connect/making-charts-accessible-for-people-with-visual-impairments) discusses making charts more accessible, and brings up interesting ideas such as using sonification to convey trends in data.

[WCAG's Accessibility Requirements for People with Low Vision](https://www.w3.org/TR/low-vision-needs/#introduction) is very thorough on how specific user needs can be met.

[This article by Graeme Fulton](https://webdesign.tutsplus.com/articles/accessibility-basics-designing-for-visual-impairment--cms-27634) provides good tips for making accessible designs. Texture differences instead of color differences are much easier to identify!

If the visualization is interactive, make sure that the signifiers are clear and legible. The touch-able / click-able parts should be large enough to be easily clicked (around 45x45 px), and spaced far apart enough so that viewers don't misclick. Is there enough feedback for viewers to know what changed when they interact with the visualization? Are viewers aware that they can interact with the visualization? Are they enticed to interact? 

### Text
Wherever text is involved, font choice is important!

[Penn State University](http://accessibility.psu.edu/legibility/fontface/) gives some recommendations for accessible fonts to use, along with notes on what contexts each font would be appropriate in.

[The Bureau of Internet Accessibility](https://www.boia.org/blog/best-fonts-to-use-for-website-accessibility) also recommends some fonts and advocates for clean, simple fonts without flourishes.


## Misc / Resources
[This article by Sara Hendren](https://www.wired.com/2014/10/all-technology-is-assistive/) discusses how all technology is meant to assist and gives examples of designs that engage the concept of "normality". [Sara Hendren](https://sarahendren.com/talks-plus-essays/) has more cool pieces!

[This survey of 122 graphic designers and clients](https://www.sciencedirect.com/science/article/pii/S0142694X1500054X) suggests that miscommunication leads to worse visual accessibility. Inclusive design tools can assist designers and clients in thinking more about visual accessibility.

[This paper on legible compact calligrams](https://www.cs.sfu.ca/~haoz/pubs/zou_sig16_calli.pdf) is super cool: the algorithm fits a word into a shape, and they have a section on how they calculate legibility of letters. They define several features for each letter and test how each feature affects legibility by running comparison tests via Amazon Mechanical Turk.
---
layout: post
title: Visual Perception
---
A big part of information visualization is, of course, the visualization. A better understanding of how the human visual perceptive system works will enable more nuanced evaluations of visualizations and provide insights into creating effective visualizations.

## Perception
[This article by Christopher G. Healey](https://www.csc2.ncsu.edu/faculty/healey/PP/index.html) is a very interesting read on human preattentive processing and gives example Javascript tests that the reader can run themselves. It also links to many other studies on the same topic and provides a good overview of their results.

There is evidence for the human ability to process visual features within 200-250msecs, and the article provides a list of features that people are able to process at this speed as well as summaries of different theories for how exactly this is done.

The article also talks about postattentive vision: it seems that preattentive processing draws our attention to a particular part of an image, but further studying of an image may not provide much help in looking for specific data values. This is important to keep in mind when creating visualizations. It is crucial to both draw the viewer's attention and ensure that the attention is being drawn to the right thing, because otherwise the viewer may not be able to pinpoint the main message.

We have to be careful when considering which features to use, such as color and shape, since different features can interfere with each other and hinder or even prevent preattentive processing. We also have to consider the hierarchy of preattentively processed features -- some features are more salient than others, and this will affect where our attention first goes when looking at a visualization, and where our attention stays.

## Visual Decisions
[Chapters 2-4 of _Fundamentals of Data Visualization_](https://serialmentor.com/dataviz/aesthetic-mapping.html) provide a lot of good information on visual features and how they can be used to represent data. The following features are crucial to think about in all visualizations:
- Position
- Shape
- Size
- Color

Other features include tilt, volume, area, velocity, texture, etc. We need to choose which visual feature we want to use to represent which aspect of the data, and doing so requires thinking about the type of data that is being visualized. I will delve more into analyzing datasets in the future.

We have to be very mindful of how we are representing the data that we are given. Which numbers do we show? Are we using lines or squares? What should the axes of the graph be? How are we scaling the axes? The way that the data is presented can greatly influence a viewer's interpretation. Healy suggests thinking about these questions by defining _scales_ for the visualization: that is, unique mappings between data and aesthetics.

[These slides on marks and channels by Alexander Lex](http://www.cs171.org/2015/assets/slides/05-marks_channels.pdf) give a good overview of language used to describe visualization elements and which features to use for what kinds of data. A mark represents an item, while channels are visual variables used to describe the mark. For example, a dot may be a mark representing a data point, and some of its channels are its color, position, and size. Lex also gives examples of different types of features and how effective they are at representing data.

[Part 2 of _Fundamentals of Data Visualization_](https://serialmentor.com/dataviz/proportional-ink.html) thoroughly discusses principles to keep in mind when designing figures: each chapter provides an explanation for why a particular principle is important. This part gives good advice on what to do when faced with design challenges, and each chapter has examples of situations when the principle may come in handy. Some important topics that are touched upon are: data-ink ratio, overcrowding data, color, redundancy, and chart design.

The chapter on color use also has good resources for choosing colors that are accessible to those with color-vision deficiency.

[Chapter 1.3 of _Data Visualization_](http://socviz.co/lookatdata.html#perception-and-data-visualization) discusses contrast, color choice, preattentive searching, and gestalt principles. As a general guideline, our visual system bases internal representations on _relative_ differences, so contrast between visual elements is very important. There are many ways to denote contrast, such as edges and color differences.

When thinking about mapping data to color, we should choose color schemes that are numerically and _perceptually_ uniform so that our visual system does not see contrast that may not exist in the data.

[Principles of grouping](https://en.wikipedia.org/wiki/Principles_of_grouping) are useful to think about when creating visualizations: which features of the data are related, and how do we represent that visually?

[Danielle Szafir wrote a piece on common visualization mistakes](http://interactions.acm.org/archive/view/july-august-2018/the-good-the-bad-and-the-biased) that touches upon the importance of understanding perception when designing visualizations, as common visualization practices can mislead viewers or even present incorrect data. For example, rainbow colormaps can suggest categorical boundaries that don't exist because it disregards the contrast between different color hues. We should think  more critically about which visual features we use to encode data, as well as what parts of the data aren't being represented in the visualization.

## Color
Color is a powerful feature that, when used correctly, can lead to very effective visualizations. There are many models of color specification, from [RGB](https://en.wikipedia.org/wiki/RGB_color_model) to [L\*a\*b](https://en.wikipedia.org/wiki/CIELAB_color_space). These models provide quantitative descriptions of a specific color: for example, we can use RGB(255,0,0) to describe the color red. When it comes to designing visualizations, the absolute color is less important than the relationship between the colors that are being used.


### Color Theory
[WORQX](http://www.worqx.com/color/index.htm) is a website that provides a useful overview on color theory and briefly explains the vocabulary used to describe colors and color schemes.

[This Munsell piece](https://munsell.com/color-blog/difference-chroma-saturation/) talks about the distinction between chroma and saturation, two terms that are often used interchangeably. I found this rather useful because until now I thought the two described the same attribute of color.

[The Color FAQ by Charles Poynton](http://poynton.ca/notes/colour_and_gamma/ColorFAQ.html) gives a lot of detail on color information in mathematical terms. More applicable to color in context of screen and print but interesting information.

[xkcd did a survey](https://blog.xkcd.com/2010/05/03/color-survey-results/) on names people give to displayed colors (RGB on screen). The survey data is provided and there are some basic visualizations of the data. Fun read and maybe could try visualizing the provided dataset!

### Using Color
[Choosing Colors for Data Visualization by Maureen Stone](http://www.b-eye-network.com/newsletters/ben/2235) is a useful article; it provides examples of color schemes and describes why certain color schemes may be used over another.

[Color Use Guidelines for Data Representation by Cynthia A. Brewer](http://www.personal.psu.edu/cab38/ColorSch/ASApaper.html) provides a very valuable insight: that we can match attributes of color to attributes of the data that we are trying to represent. The paper gives examples of different types of color schemes, and what kinds of data that they are most suited for. Another very useful piece of information from this paper is:
> "The following pairs of hues are not confused by people with the most common types of color vision impairments: red-blue, red-purple, orange-blue, orange-purple, brown-blue, brown-purple, yellow-blue, yellow-purple, yellow-gray, and blue-gray."

The mentioned pairs are not necessarily distinguishable for all types of color-vision deficiency, but they provide a good starting point when thinking about color schemes and brings the designer's attention to how their color scheme choices can affect their audience. The contrast between colors can be much harder to see for those with color-vision deficiency. For example, using red and green as labels for different categories would be very ineffective for those affected by red-green color-vision deficiency. When we design our visualizations, we must be thoughtful in our choices.

[Somewhere Over the Rainbow: An Empirical Assessment of Quantitative Colormaps (2018) by Yang Liu and Jeffrey Heer](https://idl.cs.washington.edu/files/2018-QuantitativeColor-CHI.pdf) is an interesting paper that studies the effects of different colormaps on judgments about relative difference. Their Figure 2 provides a quick example of what the participants were asked to do. Their results suggest that _viridis_, a blue to yellow gradient, is superior to a single-hue _blue_, and diverging colormaps _blueorange_ and _jet(rainbow)_ were error-prone. Single-hue colormaps are prone to error when the difference between the two ends isn't stark enough. They also have a brief discussion on the ability of color models to predict colormap performance.

## Misc / Resources
[Crowdsourcing Graphical Perception: Using Mechanical Turk to Assess Visualization Design by Jeffrey Heer and Michael Bostock](https://idl.cs.washington.edu/papers/crowdsourcing-graphical-perception/) is a cool paper on using Amazon's Mechanical Turk to find participants for visual design studies.

[ColorBrewer](http://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3) helps choose colors for cartographs.

[Colorgorical](http://vrl.cs.brown.edu/color) generates palettes based on perceptual distance, name difference, pair preference, and name uniqueness.

[chroma.js](https://gka.github.io/chroma.js/) is a JavaScript library for working with colors.

[Viz Palette](http://projects.susielu.com/viz-palette) lets designers test colors for different types of visualizations and shows how the colors will seem to those with different types of color-vision deficiency.

[These slides by Miriah Meyer](http://www.cs.utah.edu/~miriah/teaching/cs6630/lectures/L04-data.pdf) touch on a lot of the mentioned themes & topics!

Chapters 5-7 of _The Functional Art_ by Alberto Cairo covers a lot of information about the physiology of the eye and how people perceive visually. Interesting stuff!
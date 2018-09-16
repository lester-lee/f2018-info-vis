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

## Gestalt Principles


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



## Tufte Guidelines

## General Guidelines
[Danielle Szafir wrote a piece on common visualization mistakes](http://interactions.acm.org/archive/view/july-august-2018/the-good-the-bad-and-the-biased) that touches upon the importance of understanding perception when designing visualizations, as common visualization practices can mislead viewers or even present incorrect data. For example, rainbow colormaps can suggest categorical boundaries that don't exist because it disregards the contrast between different color hues. We should think  more critically about which visual features we use to encode data, as well as what parts of the data aren't being represented in the visualization.

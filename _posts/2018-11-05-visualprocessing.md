---
layout: post
title: Processing WCMA Thumbnails
---
As mentioned in the previous post, I want to start getting more information about the visual properties of artworks in the WCMA collection. The [WCMA collection](https://github.com/wcmaart/collection) includes a set of thumbnails that I will be processing. Not every object in the collection has a thumbnail, but I will be able to learn more about the objects that do have thumbnails.

## Color
One visual quality is color. My initial intuition is to get the "average" color of each thumbnail, but that may not be a very useful metric for pieces that are not monochromatic; [a reply on this Stack Overflow post](https://stackoverflow.com/questions/43111029/how-to-find-the-average-colour-of-an-image-in-python-with-opencv) talks more in-depth about why it may be better to calculate the _dominant_ colors in an image, as well as how to do that.
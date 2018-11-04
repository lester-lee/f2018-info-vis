---
layout: post
title: Processing WCMA Thumbnails
---
As mentioned in the previous post, I want to start getting more information about the visual properties of artworks in the WCMA collection. The [WCMA collection](https://github.com/wcmaart/collection) includes a set of thumbnails that I will be processing. Not every object in the collection has a thumbnail, but I will be able to learn more about the objects that do have thumbnails.

I will be using [OpenCV](https://opencv.org/) to process the images.

## Color
One visual quality is color. My initial intuition is to get the "average" color of each thumbnail, but that may not be a very useful metric for pieces that are not monochromatic; [a reply on this Stack Overflow post](https://stackoverflow.com/questions/43111029/how-to-find-the-average-colour-of-an-image-in-python-with-opencv) talks more in-depth about why it may be better to calculate the _dominant_ colors in an image, as well as how to do that. We can use _k-means clustering_ to get the _k_ most representative colors for each thumbnail. Taking the most representative color using this method would still be a little more helpful than taking the RGB vector composed of means of each color channel; the post gives an example of how this "average" ends up meaningless in relation to the original image. If the picture is monochrome, then the two values will be very similar, and if the picture isn't monochrome, then the average doesn't make much sense. OpenCV provides a [k-means function](https://docs.opencv.org/3.0-beta/doc/py_tutorials/py_ml/py_kmeans/py_kmeans_opencv/py_kmeans_opencv.html) that I used to find the dominant colors.

## Luminance
Another quality that may be helpful is how bright or dark an image is. We can measure this quality by looking at the luminance of the image, since luminance most closely corresponds to brightness, which is a subjective attribute of light[^brightness]. There are many ways to calculate brightness, perceived brightness[^pb], or luminance, and the difference not only between which measure to use but also how to calculate each measure  definitely warrants further research; for now, I will be using the formula provided by the [World Wide Web Consortium](https://www.w3.org/TR/WCAG20-TECHS/G145.html), which calculates the luminance of a color given its RGB value (the link provides further details on how exactly to calculate R,G,B):
> L = 0.2126 * R + 0.7152 * G + 0.0722 * B

## References
[^brightness]: [Information Display by Charles P. Halsted](http://crompton.com/light/index.html)
[^pb]: [Discussion on different measures of brightness](http://www.nbdtech.com/Blog/archive/2008/04/27/Calculating-the-Perceived-Brightness-of-a-Color.aspx)
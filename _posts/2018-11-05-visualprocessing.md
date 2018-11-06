---
layout: post
title: Processing WCMA Thumbnails
---
As mentioned in the previous post, I want to start getting more information about the visual properties of artworks in the WCMA collection. The [WCMA collection](https://github.com/wcmaart/collection) includes a set of thumbnails that I will be processing. Not every object in the collection has a thumbnail, but I will be able to learn more about the objects that do have thumbnails.

I will be using [OpenCV](https://opencv.org/) to process the images. My code is available [on Github](https://github.com/lester-lee/wcma-viz); specifically, [`get_color_details.py`](https://github.com/lester-lee/wcma-viz/blob/master/get_color_details.py).

## Color
One visual quality is color. My initial intuition is to get the "average" color of each thumbnail, but that may not be a very useful metric for pieces that are not monochromatic; [a reply on this Stack Overflow post](https://stackoverflow.com/questions/43111029/how-to-find-the-average-colour-of-an-image-in-python-with-opencv) talks more in-depth about why it may be better to calculate the _dominant_ colors in an image. We can use _k-means clustering_ to get the _k_ most representative colors for each thumbnail. This is essentially color quantization, or reducing the number of colors in an image. Taking the most representative color using this method would still be a little more helpful than taking the RGB vector composed of means of each color channel; the post gives an example of how this "average" ends up meaningless in relation to the original image. If the picture is monochrome, then the two values will be very similar, and if the picture isn't monochrome, then the average doesn't make much sense. OpenCV provides a [tutorial on using k-means clustering for color quantization](https://docs.opencv.org/3.0-beta/doc/py_tutorials/py_ml/py_kmeans/py_kmeans_opencv/py_kmeans_opencv.html).

## Luminance
Another quality that may be helpful is how bright or dark an image is. We can measure this quality by looking at the luminance of the image, since luminance most closely corresponds to brightness, which is a subjective attribute of light[^brightness]. There are many ways to calculate brightness, perceived brightness[^pb], or luminance, and the difference not only between which measure to use but also how to calculate each measure  definitely warrants further research. [This Stack Overflow post on determining brightness of RGB color](https://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color) discusses these topics and provides some formulas to use, as well as a resource for figuring out what exactly to look up. For now, I will be letting OpenCV choose which formula to use by using it to convert the image to greyscale, and then calculating the mean pixel brightness from the greyscale image.

## Contrast
We can also use luminance to calculate the contrast of an image, since contrast is the difference in luminance between two objects. I will not be doing feature detection in these thumbnails (perhaps in the future), so I cannot compare the difference between the image feature and the background (Weber contrast). Instead, I will be calculating the Michelson contrast for each thumbnail.
> C = (Lmax - Lmin) / (Lmax + Lmin)

This is not the best measure, as any image with both black and white present will have maximum contrast, regardless of the ratio of dark to light in the thumbnail. There are more sophisticated ways to measure contrast, and I may delve deeper into implementing these in the future.

## Meta-analysis
Now that I have generated the mentioned attributes for each piece in the collection with a thumbnail, I can look at trends in these attributes for the collection as a whole. The code can be found at [`analyze_color_details.py`](https://github.com/lester-lee/wcma-viz/blob/master/analyze_color_details.py). I used [Seaborn](https://seaborn.pydata.org/) to make the following plots.

For color, I want to see what the dominant colors of the collection are; by putting all the dominant colors of each piece into a single array, I can effectively treat the array as an image, and do another color quantization to get the top 10 colors of the collection.
For future visualizations, it may also be fun to visualize the RGB distribution of the colors.
<style>
  .Circles{
    display: flex;
    list-style-type: none;
    margin: 0;
  }
  .Circle{
    border-radius:50%;
    width: 50px;
    height: 50px;
    margin: 0 5px;
  }
</style>
<ul class="Circles">
<li class="Circle" style="background:#798c98"></li>
<li class="Circle" style="background:#8a8173"></li>
<li class="Circle" style="background:#151412"></li>
<li class="Circle" style="background:#ada08c"></li>
<li class="Circle" style="background:#ba6432"></li>
<li class="Circle" style="background:#6d6152"></li>
<li class="Circle" style="background:#4d453d"></li>
<li class="Circle" style="background:#ebe8e3"></li>
<li class="Circle" style="background:#cfc7b8"></li>
<li class="Circle" style="background:#312c28"></li>
</ul>
<br>
As shown above, it seems beige/brown are the most dominant colors in the collection!

For luminance and contrast, which are single numbers, a histogram or box plot would tell me the most about the distribution of values in the collection.

![Violin plot of luminance distribution]({{site.baseurl}}/assets/visualprocessing/luminance.png)

The luminance values seem to be well-distributed; there are a decent amount of light and dark pieces, and the median luminance value is around 150. Luminance here is measured on a scale of 0 to 255, and scales linearly.

![Violin plot of contrast distribution]({{site.baseurl}}/assets/visualprocessing/contrast.png)

The distribution of contrast values is heavily skewed toward high-contrast, and this seems to be a result of the problem mentioned before: that any piece with a single white pixel and a single dark pixel will have a high contrast; this problem can be alleviated by using different contrast measures and also by doing feature detection on the thumbnails to try to get at a foreground/background contrast measure.

## References
[^brightness]: [Information Display by Charles P. Halsted](http://crompton.com/light/index.html)
[^pb]: [Discussion on different measures of brightness](http://www.nbdtech.com/Blog/archive/2008/04/27/Calculating-the-Perceived-Brightness-of-a-Color.aspx)
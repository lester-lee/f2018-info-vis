---
layout: post
title: 'October #SWDchallenge'
---
The [October Storytelling with Data challenge](http://www.storytellingwithdata.com/blog/2018/10/1/swdchallenge-scatterplot) is to find and visualize a dataset using a scatterplot. Scatterplots are a good way to visualize how two dimensions of a dataset are related. In addition to just plotting the points, however, a scatterplot can be highlighted in certain ways to make the message stronger. For example, the average point can be made bold, or the plot can be divided into different sections.

I decided to use the [College Scorecard database](https://collegescorecard.ed.gov/data/documentation/), which is maintained by the U.S. Department of Education and contains information about college students. I want to look at the relationship between student household income and the cumulative median debt (amount of money that the student owes after graduation) for 2016-17. My intuition is that these two measure are negatively correlated. If a college does not offer great financial aid, a family with fewer resources will be urged to borrow more money to pay tuition. I hope that using a scatterplot to visualize this data will confirm my intuition. If it doesn't, then some questions for me to consider are:
 - Why was my intuition wrong?
 - What other factors go into a student's cumnulative median debt?
 - How much does financial aid affect the data?
 - How reliable was the dataset?

I will be using [seaborn](https://seaborn.pydata.org/) to construct the scatterplot, and here is [my code]({{site.baseurl}}/assets/october-swd/finaid.py).


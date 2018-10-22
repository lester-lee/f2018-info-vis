---
---

var baseurl = '{{site.baseurl}}/assets/more-d3/';


$(function () {

  //Artwork Classification Count
  /* Data is hardcoded because I don't want to deal with AJAX, 
  and the array is pretty small.*/

  let classifications = ['PRINTS', 'ANCIENT', 'DRAWING', 'PAINTING', 'DEC ARTS', 'PHOTO', 'Reserve Collection', 'EASTERN', 'Prendergast', 'SCULPTURE', 'AFRICAN', 'AMERINDIAN', 'PACIFIC', 'WALLS'];
  let counts = ["Counts", 4391, 1162, 1682, 676, 956, 2235, 919, 731, 2228, 502, 269, 105, 1, 127];

  let class_count = c3.generate({
    bindto: '#ClassificationCount',
    data: {
      columns: [counts],
      type: 'bar'
    },
    bar: {
      width: {
        ratio: 2
      }
    },
    axis: {
      x: {
        type: 'category',
        categories: classifications
        }
      }
  });

});
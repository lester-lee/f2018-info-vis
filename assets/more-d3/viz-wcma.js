---
---

var baseurl = '{{site.baseurl}}/assets/more-d3/';

var palette = ["#35618f", "#9be2d3", "#315c31", "#abd533", "#869764", "#4aeeb6", "#1fa562", "#67f059", "#513886", "#ae73fb", "#8d9dca", "#7b038e", "#f451ad", "#faafe3", "#3f16f9", "#b66c96", "#ea3ffc", "#f4d16a", "#673d17", "#f39450"];

$(function () {

  //Artwork Classification Count
  /* Data is hardcoded because I don't want to deal with AJAX,
  and the array is pretty small.*/

  let classifications = ['PRINTS', 'PHOTO', 'PRENDERGAST', 'DRAWING', 'ANCIENT', 'DEC ARTS', 'RESERVE COLLECTION', 'EASTERN', 'PAINTING', 'SCULPTURE', 'AFRICAN', 'WALLS', 'AMERINDIAN', 'PACIFIC'];
  let counts = ["#", 4391, 2235, 2228, 1682, 1162, 956, 919, 731, 676, 502, 269, 127, 105, 1];

  let class_count = c3.generate({
    bindto: '.ClassificationCount',
    data: {
      columns: [counts],
      type: 'bar',
      order: 'desc',
      color: function(color, d){
        if (d.id && d.index === 0){
          return '#154e56';
        }else if (d.id && d.index < 3){
          return '#4f8c9d';
        }
        return '#94e2dd';
      },
      labels: true
    },
    bar: {
      width: {
        ratio: .8
      }
    },
    axis: {
      x: {
        type: 'category',
        categories: classifications
        }
    },
    legend: {
      show: false
    }
  });

  let pie = c3.generate({
    bindto: '.ClassificationPie',
    data: {
      rows: [classifications, counts.splice(1)],
      type: 'pie',
      color: function (color, d) {
        if (d === "PRINTS") {
          return '#154e56';
        } else if (d === "PHOTO" || d === "PRENDERGAST") {
          return '#4f8c9d';
        }
        return '#94e2dd';
      }
    },
    legend: {
      show: false
    }
  });

});
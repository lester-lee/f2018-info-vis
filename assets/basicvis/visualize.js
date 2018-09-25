const data = [16, 28, 11, 3, 40, 10, 3, 34, 45, 34, 17, 26, 41, 45, 15, 1, 23, 45, 21, 30];

function create_svg(cls, w, h) {
  return d3.select(cls).append('svg')
    .attr('width', w)
    .attr('height', h);
}

/* Bar Chart */
/* Horizontal Bar*/
// creating svg
var hWidth = 600;
var hHeight = 250;
var hbarSvg = create_svg('.HorizontalBar', hWidth+50, hHeight+50);

// scaling axes
var hY = d3.scaleBand()
           .domain(data)
           .range([0, hHeight])
           .paddingInner(.1);

var hX = d3.scaleLinear()
           .domain([0, 50])
           .range([0, hWidth]);

var hXAxis = d3.axisBottom(hX);
var hYAxis = d3.axisLeft(hY);

// drawing rectangles
hbarSvg = hbarSvg.selectAll('rect')
  .data(data)
  .enter();

hbarSvg.append('rect')
    .attr('height', function(d){ return hY.bandwidth();})
    .attr('width', function(d){return hX(d);})
    .attr('fill', '#408fa7')
    .attr('x', 0)
    .attr('y', function(d,i){return hY(d)})
    .attr('transform', 'translate(20, 0)');

hbarSvg.append('g')
       .attr('transform', 'translate(20,'+ hHeight +')')
       .call(hXAxis);

hbarSvg.append('g')
       .attr('transform', 'translate(20, 0)')
       .call(hYAxis);

/* Vertical Bar */
var vWidth = 600;
var vHeight = 250;
var vbarSvg = create_svg('.VerticalBar',vWidth+50, vHeight+50);
var vY = d3.scaleLinear()
  .domain([0, 50])
  .range([vHeight, 0]);

var vX = d3.scaleBand()
           .domain(data)
           .range([20, vWidth])
           .paddingInner(.1);

var vYAxis = d3.axisLeft(vY);
var vXAxis = d3.axisBottom(vX);

vbarSvg = vbarSvg.selectAll('rect')
  .data(data)
  .enter()

vbarSvg.append('rect')
      .attr('height', function(d,i){return vHeight - vY(d);})
      .attr('width', function(d){return vX.bandwidth();})
      .attr('fill', '#408fa7')
      .attr('x', function(d){return vX(d);})
      .attr('y', function (d) {
          return vY(d)
        })
      .attr('transform', 'translate(0,10)');

vbarSvg.append('g')
       .attr('transform', 'translate(0,' + (vHeight+10) + ')')
       .call(vXAxis);
vbarSvg.append('g')
       .attr('transform', 'translate(20,10)')
       .call(vYAxis);
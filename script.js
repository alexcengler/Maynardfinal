 var margin = {top: 20, right: 55, bottom: 30, left: 40},
          width  = 1000 - margin.left - margin.right,
          height = 500  - margin.top  - margin.bottom;

      var x = d3.scale.ordinal()
          .rangeRoundBands([0, width], .1);

      var y = d3.scale.linear()
          .rangeRound([height, 0]);

      var stack = d3.layout.stack()
          .offset("wiggle")
          .values(function (d) { return d.values; })
          .x(function (d) { return x(d.label) + x.rangeBand() / 2; })
          .y(function (d) { return d.value; });

      var area = d3.svg.area()
          .interpolate("cardinal")
          .x(function (d) { return x(d.label) + x.rangeBand() / 2; })
          .y0(function (d) { return y(d.y0); })
          .y1(function (d) { return y(d.y0 + d.y); });

      //a tutorial I'm trying to follow (http://www.delimited.io/blog/2014/3/3/creating-multi-series-charts-in-d3-lines-bars-area-and-streamgraphs) glazes over the above code as "declaring variables," so not sure what to do other than start with it. From the rest of the code, it appears that nothing in it is specific to the data set used in the tutorial.
      




d3.csv("data/veggies.csv", function (error, data) {
        console.log("initial data", data);

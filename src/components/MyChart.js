import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const MyChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(chartRef.current)
      .attr("width", 700)
      .attr("height", 400)
      .style("background-color", "white");

    const xScale = d3.scaleTime()
      .domain([new Date(2020, 11, 1), new Date(2021, 0, 1)])
      .range([0, 700]);

    const xAxis = d3.axisBottom(xScale)
      .ticks(d3.timeDay.every(1))
      .tickFormat(d3.timeFormat("%d"))
      .tickSize(4);

    svg.append("g")
      .attr("transform", "translate(0, 50)")
      .call(xAxis);
  }, []);

  return (
    <svg ref={chartRef} />
  );
};

export default MyChart;

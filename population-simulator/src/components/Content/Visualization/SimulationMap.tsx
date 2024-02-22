import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import geoJson from 'assets/json/공주시_그리드_1000_SGIS.geojson.json';

interface MapProps {
  geographies?: any;
}

const Map = () => {
  const projection = d3.geoEquirectangular();

  // const geoGenerator = d3.geoPath().projection(projection);
  // console.log('test:,', d3.json(geoJson));

  // Join the FeatureCollection's features array to path elements
  // const u = d3
  //   .select('#content g.map')
  //   .selectAll('path')
  //   .data(geoJson?.features)
  //   .join('path');
  // .attr('d', geoGenerator);

  return (
    <div
      style={{
        border: '1px solid red',
        width: '20%',
        height: '200px',
        margin: '20px',
      }}
    >
      {/* <svg ref={ref}></svg> */}
    </div>
  );
};

const SimulationMap = () => {
  return (
    <div style={{ display: 'flex' }}>
      {Array(1)
        .fill(undefined)
        .map((el, index: number) => {
          return <Map key={index} />;
        })}
    </div>
  );
};

export default SimulationMap;

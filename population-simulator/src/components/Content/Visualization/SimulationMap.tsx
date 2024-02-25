import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import data from 'assets/json/청양군_100KM_BG.geojson';
// import { feature } from 'topojson-client';
// import korea from 'assets/json/korea-topo.json';

const geojson_test = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Africa',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-6, 36],
            [33, 30],
            [43, 11],
            [51, 12],
            [29, -33],
            [18, -35],
            [7, 5],
            [-17, 14],
            [-6, 36],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Australia',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [143, -11],
            [153, -28],
            [144, -38],
            [131, -31],
            [116, -35],
            [114, -22],
            [136, -12],
            [140, -17],
            [143, -11],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Timbuktu',
      },
      geometry: {
        type: 'Point',
        coordinates: [-3.0026, 16.7666],
      },
    },
  ],
};

const Map = () => {
  // 지도 svg의 너비와 높이
  const width = 200;
  const height = 300;

  const ref = useRef(null);

  useEffect(() => {
    d3.json(data) //load the geoJSON data from a file
      .then(function (geojson: any) {
        console.log('geojson:', geojson);
        update(geojson);
      })
      .catch(function (error) {
        // Error occurred while loading the data
        console.error(error);
      });
  }, [data]);

  function update(geojson: any) {
    const projection = d3.geoMercator().scale(1).translate([0, 0]); //define a projection tha maps geographic coordinates to the SVG space
    const geoGenerator = d3.geoPath().projection(projection); // convert the geoJSON coordinates into SVG path strings
    const bounds = geoGenerator.bounds(geojson);
    // console.log('bounds:', bounds);

    // svg의 크기에 따른 지도의 크기와 위치값을 설정합니다.
    const dx = bounds[1][0] - bounds[0][0];
    const dy = bounds[1][1] - bounds[0][1];
    const x = (bounds[0][0] + bounds[1][0]) / 2;
    const y = (bounds[0][1] + bounds[1][1]) / 2;
    const scale = 0.9 / Math.max(dx / width, dy / height);
    // const translate = [width / 2 - scale * x, height / 2 - scale * y];

    projection
      .scale(scale)
      .translate([width / 2 - scale * x, height / 2 - scale * y]);

    const svg = d3
      .select(ref.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const mapLayer = svg.append('g');

    mapLayer
      .selectAll('path')
      .data(geojson.features)
      .enter()
      .append('path')
      .attr('d', geoGenerator)
      .style('fill', '#666');
  }

  return (
    <div
      style={{
        display: 'inline-flex',
        // border: '1px solid red',
        // margin: '20px',
      }}
      ref={ref}
    ></div>
  );
};

const SimulationMap = () => {
  return (
    <>
      {/* <Map /> */}
      <div style={{ display: 'flex', width: '100%' }}>
        {Array(3)
          .fill(undefined)
          .map((el, index: number) => {
            return <Map key={index} />;
          })}
      </div>
    </>
  );
};

export default SimulationMap;

import React from 'react';
import MapSimulator from './Visualization/SimulationMap';
import { Select } from 'antd';

const TopContent = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="grid gap-4 p-4 h-2/3">
      {' '}
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-gray-500 text-lg font-semibold pb-1">
          예측 시뮬레이션
        </h2>
        <div className="my1-"></div>
        <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px  mb-6"></div>
        <div
          className="chart-container"
          style={{ position: 'relative', height: 150, width: '100%' }}
        >
          <Select
            defaultValue="공주시"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: '공주시', label: '공주시' },
              { value: '청양군', label: '청양군' },
            ]}
          />
          <MapSimulator />
          {/* <canvas id="usersChartTop"></canvas> */}
        </div>
      </div>
    </div>
  );
};

export default TopContent;

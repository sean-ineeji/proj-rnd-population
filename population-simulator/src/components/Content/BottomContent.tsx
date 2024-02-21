import React from 'react';

const BottomContent = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-5 p-4 h-1/3">
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-gray-500 text-lg font-semibold pb-1">
          도식화 이미지
        </h2>
        <div className="my1-"></div>
        <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px  mb-6"></div>
        <div
          className="chart-container"
          style={{ position: 'relative', height: 150, width: '100%' }}
        >
          <canvas id="usersChart"></canvas>
        </div>
      </div>
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-gray-500 text-lg font-semibold pb-1">
          정책 적용 시뮬레이터
        </h2>
        <div className="my-1"></div>
        <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
        <div
          className="chart-container"
          style={{ position: 'relative', height: 150, width: '100%' }}
        >
          <canvas id="commercesChart"></canvas>
        </div>
      </div>
    </div>
  );
};

export default BottomContent;

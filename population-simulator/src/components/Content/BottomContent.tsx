import { useEffect } from 'react';
import React from 'react';
import schematic from '../../assets/img/schematic.png';
import PolicyCheck from 'components/PolicyCheck/PolicyCheck';

const BottomContent = () => {
  useEffect(() => {
    const canvas = document.getElementById(
      'usersChartBottom',
    ) as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = schematic;
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-5 p-4 h-1/3">
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-gray-500 text-lg font-semibold pb-1">
          도식화 이미지
        </h2>
        <div className="my1-"></div>
        <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
        <div
          className="chart-container"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 150,
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <canvas id="usersChartBottom"></canvas>
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
          <PolicyCheck />
        </div>
      </div>
    </div>
  );
};

export default BottomContent;

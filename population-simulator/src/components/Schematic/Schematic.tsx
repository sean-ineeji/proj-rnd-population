import React, { useEffect, useState } from 'react';
import schematic from '../../assets/img/schematic.png';
import { Modal } from 'antd';

const Schematic = () => {
  const [canvasClicked, setCanvasClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

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

    const handleClick = () => {
      setCanvasClicked(true);
    };

    canvas.addEventListener('click', handleClick);
    return () => {
      canvas.removeEventListener('click', handleClick);
    };
  }, []);

  const imageUrl = '../../assets/img/schematic.png';

  return (
    <div style={{ cursor: 'pointer' }}>
      <canvas id="usersChartBottom" onClick={showModal}></canvas>
      <Modal
        open={visible}
        footer={null}
        onCancel={handleCancel}
        style={{ padding: 0 }}
        centered
      >
        <img src={schematic} className="popup-image" />
      </Modal>
    </div>
  );
};

export default Schematic;

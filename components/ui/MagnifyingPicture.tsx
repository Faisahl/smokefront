import React from 'react';
import Image from 'next/image';

const MagnifyingPicture: React.FC<{ src: string; alt: string; classes: string }> = ({ src, alt, classes }) => {
  const [zoomed, setZoomed] = React.useState(false);
  const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const percentageX = (x / width) * 100;
    const percentageY = (y / height) * 100;

    setCursorPosition({ x: percentageX, y: percentageY });
  };

  const handleMouseEnter = () => {
    setZoomed(true);
  };

  const handleMouseLeave = () => {
    setZoomed(false);
  };

  return (
    <div
      style={{ position: 'relative' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classes}
    >
      <div
        style={{
          transform: `scale(${zoomed ? 2 : 1})`,
          transformOrigin: `${cursorPosition.x}% ${cursorPosition.y}%`,
          transition: 'transform 0.3s ease',
        }}
      >
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default MagnifyingPicture
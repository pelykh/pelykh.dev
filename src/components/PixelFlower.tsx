import { memo } from "react";

const PixelFlower = memo(() => {
  const petalColor = "#FF6B9D";
  const centerColor = "#FFD93D";
  const stemColor = "#6BCB77";
  const leafColor = "#4AAE5B";
  const px = 4; // pixel size

  return (
    <svg
      viewBox="0 0 44 80"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Pixel flower decoration"
    >
      {/* Petals - top */}
      <rect x={16} y={0} width={px} height={px} fill={petalColor} />
      <rect x={20} y={0} width={px} height={px} fill={petalColor} />
      <rect x={24} y={0} width={px} height={px} fill={petalColor} />

      {/* Petals - second row */}
      <rect x={12} y={4} width={px} height={px} fill={petalColor} />
      <rect x={16} y={4} width={px} height={px} fill={petalColor} />
      <rect x={20} y={4} width={px} height={px} fill={petalColor} />
      <rect x={24} y={4} width={px} height={px} fill={petalColor} />
      <rect x={28} y={4} width={px} height={px} fill={petalColor} />

      {/* Petals - third row with center */}
      <rect x={8} y={8} width={px} height={px} fill={petalColor} />
      <rect x={12} y={8} width={px} height={px} fill={petalColor} />
      <rect x={16} y={8} width={px} height={px} fill={centerColor} />
      <rect x={20} y={8} width={px} height={px} fill={centerColor} />
      <rect x={24} y={8} width={px} height={px} fill={centerColor} />
      <rect x={28} y={8} width={px} height={px} fill={petalColor} />
      <rect x={32} y={8} width={px} height={px} fill={petalColor} />

      {/* Petals - fourth row with center */}
      <rect x={4} y={12} width={px} height={px} fill={petalColor} />
      <rect x={8} y={12} width={px} height={px} fill={petalColor} />
      <rect x={12} y={12} width={px} height={px} fill={centerColor} />
      <rect x={16} y={12} width={px} height={px} fill={centerColor} />
      <rect x={20} y={12} width={px} height={px} fill="#FFE566" />
      <rect x={24} y={12} width={px} height={px} fill={centerColor} />
      <rect x={28} y={12} width={px} height={px} fill={centerColor} />
      <rect x={32} y={12} width={px} height={px} fill={petalColor} />
      <rect x={36} y={12} width={px} height={px} fill={petalColor} />

      {/* Petals - fifth row with center */}
      <rect x={4} y={16} width={px} height={px} fill={petalColor} />
      <rect x={8} y={16} width={px} height={px} fill={petalColor} />
      <rect x={12} y={16} width={px} height={px} fill={centerColor} />
      <rect x={16} y={16} width={px} height={px} fill={centerColor} />
      <rect x={20} y={16} width={px} height={px} fill={centerColor} />
      <rect x={24} y={16} width={px} height={px} fill={centerColor} />
      <rect x={28} y={16} width={px} height={px} fill={centerColor} />
      <rect x={32} y={16} width={px} height={px} fill={petalColor} />
      <rect x={36} y={16} width={px} height={px} fill={petalColor} />

      {/* Petals - sixth row */}
      <rect x={8} y={20} width={px} height={px} fill={petalColor} />
      <rect x={12} y={20} width={px} height={px} fill={petalColor} />
      <rect x={16} y={20} width={px} height={px} fill={centerColor} />
      <rect x={20} y={20} width={px} height={px} fill={centerColor} />
      <rect x={24} y={20} width={px} height={px} fill={centerColor} />
      <rect x={28} y={20} width={px} height={px} fill={petalColor} />
      <rect x={32} y={20} width={px} height={px} fill={petalColor} />

      {/* Petals - seventh row */}
      <rect x={12} y={24} width={px} height={px} fill={petalColor} />
      <rect x={16} y={24} width={px} height={px} fill={petalColor} />
      <rect x={20} y={24} width={px} height={px} fill={petalColor} />
      <rect x={24} y={24} width={px} height={px} fill={petalColor} />
      <rect x={28} y={24} width={px} height={px} fill={petalColor} />

      {/* Petals - bottom */}
      <rect x={16} y={28} width={px} height={px} fill={petalColor} />
      <rect x={20} y={28} width={px} height={px} fill={petalColor} />
      <rect x={24} y={28} width={px} height={px} fill={petalColor} />

      {/* Stem */}
      <rect x={20} y={32} width={px} height={px} fill={stemColor} />
      <rect x={20} y={36} width={px} height={px} fill={stemColor} />
      <rect x={20} y={40} width={px} height={px} fill={stemColor} />
      <rect x={20} y={44} width={px} height={px} fill={stemColor} />
      <rect x={20} y={48} width={px} height={px} fill={stemColor} />
      <rect x={20} y={52} width={px} height={px} fill={stemColor} />
      <rect x={20} y={56} width={px} height={px} fill={stemColor} />
      <rect x={20} y={60} width={px} height={px} fill={stemColor} />
      <rect x={20} y={64} width={px} height={px} fill={stemColor} />
      <rect x={20} y={68} width={px} height={px} fill={stemColor} />
      <rect x={20} y={72} width={px} height={px} fill={stemColor} />
      <rect x={20} y={76} width={px} height={px} fill={stemColor} />

      {/* Right leaf */}
      <rect x={24} y={44} width={px} height={px} fill={leafColor} />
      <rect x={28} y={40} width={px} height={px} fill={leafColor} />
      <rect x={28} y={44} width={px} height={px} fill={leafColor} />
      <rect x={32} y={36} width={px} height={px} fill={leafColor} />
      <rect x={32} y={40} width={px} height={px} fill={leafColor} />

      {/* Left leaf */}
      <rect x={16} y={56} width={px} height={px} fill={leafColor} />
      <rect x={12} y={52} width={px} height={px} fill={leafColor} />
      <rect x={12} y={56} width={px} height={px} fill={leafColor} />
      <rect x={8} y={48} width={px} height={px} fill={leafColor} />
      <rect x={8} y={52} width={px} height={px} fill={leafColor} />
    </svg>
  );
});

PixelFlower.displayName = "PixelFlower";

export default PixelFlower;

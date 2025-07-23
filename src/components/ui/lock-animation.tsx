import React from 'react';

interface LockAnimationProps {
  size?: number;
  autoAnimate?: boolean;
  autoAnimateInterval?: number;
}

export const LockAnimation: React.FC<LockAnimationProps> = ({
  size = 1,
  autoAnimate = true,
  autoAnimateInterval = 3000
}) => {
  return (
    <div className="flex items-center justify-center">
      <div style={{ transform: `scale(${size})` }}>
        <iframe
          src="https://lottie.host/embed/c33f3d01-1e2d-434c-9c04-b211d4252703/MG81VGOIif.lottie"
          style={{
            width: 200,
            height: 200,
            border: 'none',
            background: 'transparent'
          }}
          title="Lock Animation"
          allowFullScreen
        />
      </div>
    </div>
  );
}; 
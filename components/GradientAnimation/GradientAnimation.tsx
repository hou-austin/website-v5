import React from "react";
import Script from "next/script";

const GradientAnimation: React.FC = () => {
  return (
    <div>
      <Script src={"./scripts/gradient-animation.js"} defer />
      <canvas id="gradient-canvas" className="w-full h-80 relative"></canvas>
    </div>
  );
};

export default GradientAnimation;

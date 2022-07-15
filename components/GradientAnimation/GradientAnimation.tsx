import React, { useEffect } from "react";

const GradientAnimation: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "/scripts/gradient-animation.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <canvas id="gradient-canvas" className="w-full h-80 relative"></canvas>
    </div>
  );
};

export default GradientAnimation;

import React from 'react';

export function SplineModel() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <spline-viewer
        url="https://prod.spline.design/RBD8UrkFQGRt1Ye7/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  );
}
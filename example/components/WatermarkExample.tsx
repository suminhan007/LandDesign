import React from "react";
import Title from "../../packages/Title";
import Watermark from "../../packages/Watermark";

export default function WatermarkExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规骨架屏" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <div className="relative width-100" style={{ height: "200px" }}>
            <Watermark content="Land Design" />
          </div>
        </div>
      </div>
    </div>
  );
}

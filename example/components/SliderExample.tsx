import React, { useState } from "react";
import Slider from "../../packages/Slider";
import Title from "../../packages/Title";

export default function SliderExample() {
  const [value, setValue] = useState<number>(0);
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规输入框" type="h3" />
        <div className="flex column justify-center gap-24 border p-32 width-100 border-box">
          <Slider
            height={16}
            step={10}
            value={value}
            onChange={(val) => setValue(val)}
          />
          <Slider
            height={36}
            step={10}
            value={value}
            onChange={(val) => setValue(val)}
          />
        </div>
      </div>
    </div>
  );
}

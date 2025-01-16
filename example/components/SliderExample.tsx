import  { useState } from "react";
import Slider from "../../packages/Slider";
import Title from "../../packages/Title";
import Icon from "../../packages/Icon";
import Button from "../../packages/Button";

export default function SliderExample() {
  const [value, setValue] = useState<number>(20);
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规输入条" type="h3" />
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

        <Title title="显示分割线" type="h3" />
        <div className="flex column justify-center gap-24 border p-32 width-100 border-box">
          <Slider
            height={36}
            step={10}
            useDivider
            value={value}
            onChange={(val) => setValue(val)}
          />
        </div>

        <Title title="显示边界值" type="h3" />
        <div className="flex column justify-center gap-24 border p-32 width-100 border-box">
          <Slider
            height={36}
            step={10}
            max={100}
            useDivider
            prefix="0%"
            suffix="100%"
            value={value}
            onChange={(val) => setValue(val)}
          />
          <Slider
            height={36}
            step={10}
            max={100}
            useDivider
            prefix={
              <Button
                type="background"
                size="small"
                text={'-'}
                onClick={() => value >= 10 && setValue(value - 10)}
              />
            }
            suffix={
              <Button
                type="background"
                size="small"
                icon={<Icon name="add" />}
                onClick={() => value <= 90 && setValue(value + 10)}
              />
            }
            value={value}
            onChange={(val) => setValue(val)}
          />
        </div>
      </div>
    </div>
  );
}

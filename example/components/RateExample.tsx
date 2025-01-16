import React from 'react';
import Title from "../../packages/Title";
import Rate from "../../packages/Rate";
import Icon from "../../packages/Icon";

export default function RateExample() {
    const [value, setValue] = React.useState(0);
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规评星" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Rate value={value} onChange={(value: number) => setValue(value)} />
        </div>
          <Title title="自定义图形和评分颜色" type="h3" />
          <div className="flex justify-center gap-24 border p-32">
              <Rate customSvg={<Icon name={'like'}/>} activeColor='var(--color-red-6)' value={value} onChange={(value: number) => setValue(value)} />
          </div>
      </div>
    </div>
  );
}

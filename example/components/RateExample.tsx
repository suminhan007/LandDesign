import React from "react";
import Title from "../../packages/Title";
import Rate from "../../packages/Rate";

export default function RateExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="按钮类型" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Rate />
        </div>
      </div>
    </div>
  );
}

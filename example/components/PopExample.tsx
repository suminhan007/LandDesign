import React from "react";
import Title from "../../packages/Title";
import Pop from "../../packages/Pop";

export default function PopExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规气泡" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <div className="relative radius-6 border px-12 py-8 fs-14 cursor-pointer hover-pop">
            hover我试试
            <Pop content="我是气泡～" />
          </div>
        </div>

        <Title title="气泡颜色风格" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <div className="relative radius-6 border px-12 py-8 fs-14 cursor-pointer hover-pop">
            白色气泡
            <Pop content="我是白色气泡～" />
          </div>
          <div className="relative radius-6 border px-12 py-8 fs-14 cursor-pointer hover-pop">
            黑色气泡
            <Pop content="我是黑色气泡～" theme="dark" />
          </div>
        </div>
      </div>
    </div>
  );
}

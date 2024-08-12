import React from "react";
import Switch from "../../packages/Switch";
import Title from "../../packages/Title";

export default function SwitchExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规开关" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Switch />
        </div>
        <Title title="包含标题" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Switch label="是否开启" checkedLabel="是否开启" />
        </div>
        <Title title="包含提示内容" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Switch label="是否开启" checkedLabel="是否开启" info="开启后..." />
        </div>
      </div>
    </div>
  );
}

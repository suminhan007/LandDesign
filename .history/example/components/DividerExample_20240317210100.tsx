import React from "react";
import Title from "../../packages/Title";
import Divider from "../../packages/Divider";

export default function DividerExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="按钮类型" type="h3" />
        <div className="flex column items-center gap-24 border p-32">
          <Divider />
          <Divider direction="column" size={12} />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Title from "../../packages/Title";
import Divider from "../../packages/Divider";

export default function DividerExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="分割线方向" type="h3" />
        <div className="flex column items-center gap-24 border p-32">
          <Divider />
          <Divider direction="column" lang="40px" />
        </div>
        <Title title="分割线类型" type="h3" />
        <div className="flex column items-center gap-24 border p-32">
          <Divider />
          <Divider type="dashed" />
        </div>
        <Title title="分割线" type="h3" />
        <div className="flex column items-center gap-24 border p-32">
          <Divider />
          <Divider type="dashed" />
        </div>
      </div>
    </div>
  );
}

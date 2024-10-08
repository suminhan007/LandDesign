import React from "react";
import Title from "../../packages/Title";
import Divider from "../../packages/Divider";

export default function DividerExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="分割线方向" type="h3" />
        <div className="flex column items-center gap-24 border p-32 width-100 border-box">
          <div className="flex items-center width-100 fs-14 fw-400 no-wrap color-gray-3">
            横向分割线：<Divider />
          </div>
          <div className="flex items-center width-100 fs-14 fw-400 no-wrap color-gray-3">
            纵向分割线：<Divider direction="column" lang="40px" className="flex-1" />
          </div>
        </div>
        <Title title="分割线类型" type="h3" />
        <div className="flex column items-center gap-24 border p-32">
          <Divider />
          <Divider type="dashed" />
        </div>
        <Title title="包含内容分割线" type="h3" />
        <div className="flex column items-center gap-24 border p-32">
          <Divider content="content" />
          <Divider content="content" align="left" />
          <Divider content="content" align="right" />
        </div>
      </div>
    </div>
  );
}

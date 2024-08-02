import React from "react";
import Title from "../../packages/Title";
import Anchor from "../../packages/Anchor";

export default function AnchorExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="按钮类型" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Anchor
            data={[
              { key: '组件预览', href: '#组件预览', title: '组件预览' },
              { key: 'API', href: '#API', title: 'API' },
              { key: 'Type', href: '#Type', title: 'Type' },
            ]}
          />
        </div>
        <Title title="按钮禁用" type="h3" />
        <div className="flex justify-center gap-24 border p-32">

        </div>
      </div>
    </div>
  );
}

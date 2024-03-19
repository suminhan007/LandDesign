import React from "react";
import Title from "../../packages/Title";
import Menu, { LinkType } from "../../packages/Menu";

export default function MenuExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="按钮类型" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Menu
            data={[
              { key: 1, title: "设计", isNew: 'true', linkType: LinkType.SELF },
              { key: 2, title: "组件", isNew: false, linkType: LinkType.SELF },
            ]}
          />
        </div>
        <Title title="按钮禁用" type="h3" />
        <div className="flex justify-center gap-24 border p-32"></div>
      </div>
    </div>
  );
}

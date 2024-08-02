import React from "react";
import Title from "../../packages/Title";
import BreadCrumb from "../../packages/BreadCrumb";

export default function BreadCrumbExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="按钮类型" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <BreadCrumb
            data={[
              { key: 1, label: '页面1' },
              { key: 2, label: '页面页面页面页面1-1', maxWidth: 100 },
              { key: 3, label: '页面页面页面页面1-1-2' },
            ]}
            style={{ width: '320px' }}
          />
        </div>
        <Title title="按钮禁用" type="h3" />
        <div className="flex justify-center gap-24 border p-32">

        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Title from "../../packages/Title";
import SwitchBar from "../../packages/SwitchBar";

export default function SwitchBarExample() {
  const [value, setValue] = useState<number>(1);
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规模块切换" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <SwitchBar
            value={value}
            data={[
              { value: 1, label: "模块1" },
              { value: 2, label: "模块2" },
              { value: 3, label: "模块3" },
            ]}
            onChange={(val) => setValue(val)}
            width="300px"
          />
        </div>
        <Title title="包含提示" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <SwitchBar
            value={value}
            data={[
              { value: 1, label: "模块1", tip: "模块 1 的提示" },
              {
                value: 2,
                label: "模块2",
                showIcon: true,
                iconTip: "模块 2 的图标提示",
              },
              { value: 3, label: "模块3" },
            ]}
            onChange={(val) => setValue(val)}
            width="300px"
          />
        </div>
        <Title title="禁用状态" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <SwitchBar
            value={value}
            data={[
              { value: 1, label: "模块1" },
              { value: 2, label: "模块2", disabled: true },
              { value: 3, label: "模块3" },
            ]}
            onChange={(val) => setValue(val)}
            width="300px"
          />
        </div>
      </div>
    </div>
  );
}

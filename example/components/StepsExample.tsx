import React, { useState } from "react";
import Title from "../../packages/Title";
import Steps from "../../packages/Steps";

export default function StepsExample() {
  const [cur, setCur] = useState<number | string>(1);
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <div className="flex justify-center gap-24 border p-32">
          <Steps
            data={[
              { key: 1, title: '步骤1', desc: '描述文字' },
              { key: 2, title: '步骤2', desc: '描述文字' },
              { key: 3, title: '步骤3', desc: '描述文字' }
            ]}
            current={cur}
            onClick={item => setCur(item.key)}
            finished={[1]}
          />
        </div>
      </div>
    </div>
  );
}

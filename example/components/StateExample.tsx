import React from "react";
import Title from "../../packages/Title";
import State from "../../packages/State";

export default function StateExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="空状态" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <State type="empty" title="暂无内容" />
        </div>
        <Title title="离线状态" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <State type="offline" title="网络错误" />
        </div>
      </div>
    </div>
  );
}

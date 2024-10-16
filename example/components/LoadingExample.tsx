import React from "react";
import Title from "../../packages/Title";
import Loading from "../../packages/Loading";

export default function LoadingExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规加载图标" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Loading />
        </div>
        <Title title="设置颜色" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Loading color="var(--color-primary-6)" />
        </div>
        <Title title="设置粗细" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Loading strokeSize={4} />
        </div>
        <Title title="设置尺寸" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Loading size={32} />
        </div>
      </div>
    </div>
  );
}

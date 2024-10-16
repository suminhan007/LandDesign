import React from "react";
import Title from "../../packages/Title";
import Skeleton from "../../packages/Skeleton";

export default function SkeletonExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规骨架屏" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Skeleton width={200} height={40} className="radius-6" />
        </div>
        <Title title="定制骨架屏背景色" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Skeleton
            width={200}
            height={40}
            start="var(--color-primary-1)"
            stop="var(--color-primary-2)"
            className="radius-6"
          />
        </div>
      </div>
    </div>
  );
}

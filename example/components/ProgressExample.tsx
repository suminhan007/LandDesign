import React from "react";
import Title from "../../packages/Title";
import Progress from "../../packages/Progress";

export default function ProgressExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规表格" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Progress />
        </div>
      </div>
    </div>
  );
}

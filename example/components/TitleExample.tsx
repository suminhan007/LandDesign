import React from "react";
import Title from "../../packages/Title";

export default function TitleExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="标题" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Title title="一级标题" type="h1" />
          <Title title="二级标题" type="h2" />
          <Title title="三级标题" type="h3" />
          <Title title="普通标题" type="p" />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Collapse from "../../packages/Collapse";
import Title from "../../packages/Title";

export default function CollapseExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="折叠面板" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Collapse
            data={[
              {
                title: "折叠标题 1",
                details:
                  "这部分是每个折叠面板折叠或展开的内容这部分是每个折叠面板折叠或展开的内容",
              },
              {
                title: "折叠标题 2 (展开)",
                details:
                  "这部分是每个折叠面板折叠或展开的内容这部分是每个折叠面板折叠或展开的内容",
                open: true,
              },
              {
                title: "折叠标题 3",
                details:
                  "这部分是每个折叠面板折叠或展开的内容这部分是每个折叠面板折叠或展开的内容",
              },
            ]}
            style={{ width: "300px" }}
          />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Title from "../../packages/Title";
import HighlightOnlyWrapTextarea from "../../packages/HighlightOnlyWrapTextarea";

export default function HighlightOnlyWrapTextareaExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <div className="flex justify-center gap-24 border p-32">
          <HighlightOnlyWrapTextarea text="这是一段仅支持换行输入的包含高亮文本的富文本输入框" highlightStr={['高亮文本']} />
        </div>
      </div>
    </div>
  );
}

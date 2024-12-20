import React, { useState } from "react";
import Title from "../../packages/Title";
import HighlightTextarea from "../../packages/HighlightTextarea";

export default function HighlightTextareaExample() {
  const [value, setValue] = useState<string>("这是一个支持输入高亮文字的富文本输入框");
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="按钮类型" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <HighlightTextarea value={value} onChange={val => setValue(val)} highlightStr={['高亮文字']} style={{ maxHeight: '200px' }} />
        </div>
      </div>
    </div>
  );
}

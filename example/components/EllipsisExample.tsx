import React from "react";
import Title from "../../packages/Title";
import Ellipsis from "../../packages/Ellipsis";

export default function EllipsisExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="文字缩略显示" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Ellipsis text='这是一段非常长的文字这是一段非常长的文字这是一段非常长的文字这是一段非常长的文字这是一段非常长的文字'></Ellipsis>
        </div>
        <Title title="文字缩略显示（两行）" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Ellipsis text='这是一段非常长的文字这是一段非常长的文字这是一段非常长的文字这是一段非常长的文字这是一段非常长的文字' line={2}></Ellipsis>
        </div>
      </div>
    </div>
  );
}

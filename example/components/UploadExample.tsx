import React from "react";
import Uploader from "../../packages/Uploader";
import Title from "../../packages/Title";

export default function UploaderExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规输入框" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Uploader />
        </div>
      </div>
    </div>
  );
}

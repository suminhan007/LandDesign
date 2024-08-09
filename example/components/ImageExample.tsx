import React from "react";
import Title from "../../packages/Title";
import Image from "../../packages/Image";

export default function ImageExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="按钮类型" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Image
            url="https://ingenueland.online/crochet-time/images/colorcard_default.jpeg"
            ratio={115 / 93}
          />
        </div>
      </div>
    </div>
  );
}

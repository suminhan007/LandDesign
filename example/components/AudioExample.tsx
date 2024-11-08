import React from "react";
import Title from "../../packages/Title";
import Audio from "../../packages/Audio";

export default function AudioExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="音频播放按钮" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Audio audioUrl="./daoxiang (mp3cut.net).mp3" />
        </div>
        <Title title="音频波形" type="h3" />
        <div className="flex column justify-center gap-24 border p-32">
          <Audio audioUrl="./daoxiang (mp3cut.net).mp3" showWave />
          <Audio audioUrl="./daoxiang (mp3cut.net).mp3" showWave />
        </div>
      </div>
    </div>
  );
}

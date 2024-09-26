import React from "react";
import Title from "../../packages/Title";
import Video from "../../packages/Video";

export default function VideoExample() {
  const handleFullWidthChange = (full) => {
    const container = document.querySelector('.video-example-container')?.parentNode;
    const right = container?.parentNode;
    const left = right?.previousSibling;
    const videoContainer = document.querySelector('.video-example-container')?.children[0].children[7];

    if (container && right && left && videoContainer) {
      if (full) {
        container.style = 'max-width:unset';
        right.style = 'padding: 24px 0;'
        left.style = 'width:0px;overflow:hidden;transition:width 0.2s linear;'
        videoContainer.style = 'padding:0px;'
      } else {
        container.style = '';
        right.style = '';
        left.style = 'width: 240px; height: 100%;';
        videoContainer.style = '';
      }
    }

  }
  return (
    <div className="video-example-container flex column gap-24">
      <div className="flex column gap-12">
        <Title title="基础视频" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Video src='https://asset.gdtimg.com/0bc35eaieaaabqac3d7lyztd32oeqluqbaqa.f0.mp4?dis_k=e91b096d31e564b3bf02b46ae94496d7&dis_t=1727244815' className="radius-8 overflow-hidden" />
        </div>
        <Title title="显示视频帧" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Video src='https://asset.gdtimg.com/0bc35eaieaaabqac3d7lyztd32oeqluqbaqa.f0.mp4?dis_k=e91b096d31e564b3bf02b46ae94496d7&dis_t=1727244815' useKeyImg />
        </div>
        <Title title="显示切换按钮" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Video src='https://asset.gdtimg.com/0bc35eaieaaabqac3d7lyztd32oeqluqbaqa.f0.mp4?dis_k=e91b096d31e564b3bf02b46ae94496d7&dis_t=1727244815' usePrevEpisode useNextEpisode />
        </div>
        <Title title="宽屏播放" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Video src='https://asset.gdtimg.com/0bc35eaieaaabqac3d7lyztd32oeqluqbaqa.f0.mp4?dis_k=e91b096d31e564b3bf02b46ae94496d7&dis_t=1727244815' onFullWidthChange={(full) => handleFullWidthChange?.(full)} />
        </div>
      </div>
    </div>
  );
}

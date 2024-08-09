import React from "react";
import Title from "../../packages/Title";
import Img from "../../packages/Img";

export default function ImgExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="按钮类型" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Img
            url="https://s2.loli.net/2022/01/25/MGZPTfFQgJBSl1q.png"
            ratio={115 / 93}
            errorUrl="https://cdn-bastani.stunning.kr/prod/portfolios/96ef5b42-58f9-4be3-8abe-20d3fa7557c4/contents/JEeLeKVqRuUhaMp3.Letter-US.png"
          />
        </div>
      </div>
    </div>
  );
}

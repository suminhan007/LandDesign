import React from "react";
import Title from "../../packages/Title";
import Flex from "../../packages/Link";

export default function FlexExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="方向" type="h3" />
        <Flex>
          <Styled></Styled>
        </Flex>
        <Title title="按钮禁用" type="h3" />
        <div className="flex justify-center gap-24 border p-32"></div>
      </div>
    </div>
  );
}

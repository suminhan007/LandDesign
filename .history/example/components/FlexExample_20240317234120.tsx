import React from "react";
import Title from "../../packages/Title";
import Link from "../../packages/Link";

export default function FlexExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="按钮类型" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Flex>常规链接</Flex>
          <Link status="primary">主题链接</Link>
          <Link status="warning">警告链接</Link>
          <Link status="danger">危险链接</Link>
          <Link status="success">安全链接</Link>
        </div>
        <Title title="按钮禁用" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Link disabled pop="链接失效">
            禁用链接
          </Link>
        </div>
      </div>
    </div>
  );
}

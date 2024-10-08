import React from "react";
import Title from "../../packages/Title";
import Link from "../../packages/Link";

export default function LinkExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="按钮类型" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Link>常规链接</Link>
          <Link status="primary">主题链接</Link>
          <Link status="warning">警告链接</Link>
          <Link status="danger">危险链接</Link>
          <Link status="success">安全链接</Link>
        </div>
        <Title title="按钮禁用" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Link disabled tip="常规链接失效">常规禁用链接</Link>
          <Link disabled status="primary" tip="主题链接失效">主题禁用链接</Link>
          <Link disabled status="warning" tip="警告链接失效">警告禁用链接</Link>
          <Link disabled status="danger" tip="危险链接失效">危险禁用链接</Link>
          <Link disabled status="success" tip="安全链接失效">安全禁用链接</Link>
        </div>
      </div>
    </div>
  );
}

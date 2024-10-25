import React from "react";
import Title from "../../packages/Title";
import Alert from "../../packages/Alert";

export default function AlertExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="默认状态" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Alert type="default" title="此功能为实验性功能" />
        </div>
        <Title title="错误状态" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Alert type="error" title="今日操作次数已达上限！" />
        </div>
        <Title title="警告状态" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Alert type="warn" title="你的额度即将用完！" />
        </div>
        <Title title="失败状态" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Alert type="fail" title="加载失败，请检查网络后重试" />
        </div>
        <Title title="成功状态" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Alert type="success" title="提交成功！" />
        </div>
        <Title title="加载中状态" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Alert type="loading" title="加载中..." />
        </div>
        <Title title="带链接状态" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Alert type="fail" title="加载失败" link="重试" />
        </div>
        <Title title="状态排列方向" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Alert type="fail" title="加载失败" link="重试" direction="column" />
        </div>
      </div>
    </div>
  );
}

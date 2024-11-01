import React, { useState } from "react";
import Title from "../../packages/Title";
import PopConfirm from "../../packages/PopConfirm";
import Button from "../../packages/Button";
import Icon from "../../packages/Icon";

export default function PopConfirmExample() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规确认提示气泡" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <div className="relative">
            <Button className="click-pop" onClick={() => setShow(true)}>
              <Icon name="delete" size={16} />点击删除
            </Button>
            <PopConfirm show={show} content="删除后无法恢复！确定删除此条内容吗？" onCancel={() => setShow(false)} onSubmit={() => setShow(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}

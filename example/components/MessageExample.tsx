import React, { useState } from "react";
import Title from "../../packages/Title";
import Message from "../../packages/Message";
import Button from "../../packages/Button";

export default function MessageExample() {
  const [show1, setShow1] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);
  const [show3, setShow3] = useState<boolean>(false);
  const [show5, setShow5] = useState<boolean>(false);
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="全局提示（success）" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Button onClick={() => setShow1(!show1)}>全局提示（success）</Button>
          <Message type="success" text="全局提示（success）" show={show1} />
          <Button onClick={() => setShow2(!show2)}>全局提示（fail）</Button>
          <Message type="fail" text="全局提示（fail）" show={show2} />
          <Button onClick={() => setShow3(!show3)}>全局提示（warn）</Button>
          <Message type="warn" text="全局提示（warn）" show={show3} />
        </div>

        <Title title="全局提示（简洁版）" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Button onClick={() => setShow5(!show5)}>全局提示（简洁版）</Button>
          <Message text="全局提示（简洁版）" show={show5} />
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Title from "../../packages/Title";
import Message from "../../packages/Message";
import Button from "../../packages/Button";

export default function MessageExample() {
  const [show1, setShow1] = useState<boolean>(false);
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="全局提示（简洁版）" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Button onClick={() => setShow1(!show1)}>全局提示（简洁版）</Button>
          <Message text="全局提示（简洁版）" show={show1} />
        </div>
      </div>
    </div>
  );
}

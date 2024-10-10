import React from "react";
import Title from "../../packages/Title";
import Badge from "../../packages/Badge";
import Icon from "../../packages/Icon";

export default function BadgeExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规徽标" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Badge isDot>
            <div className="bg-gray" style={{ width: 72, height: 72 }}><Icon name="" /></div>
          </Badge>
          <Badge
            count={20}
            exceedCount={99}
          >
            <div className="bg-gray" style={{ width: 72, height: 72 }}><Icon name="" /></div>
          </Badge>
          <Badge
            count={120}
            exceedCount={99}
          >
            <div className="bg-gray" style={{ width: 72, height: 72 }}><Icon name="" /></div>
          </Badge>
        </div>
        <Title title="自定义徽标内容" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Badge content='NEW' radius={4}>
            <div className="bg-gray" style={{ width: 72, height: 72 }}><Icon name="" /></div>
          </Badge>
          <Badge content='hot' radius={4}>
            <div className="bg-gray" style={{ width: 72, height: 72 }}><Icon name="" /></div>
          </Badge>
          <Badge content='新' radius={4}>
            <div className="bg-gray" style={{ width: 72, height: 72 }}><Icon name="" /></div>
          </Badge>
        </div>
        <Title title="自定义徽标样式" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Badge content='hot' radius={4} bg="var(--color-orange-6)">
            <div className="bg-gray" style={{ width: 72, height: 72 }}><Icon name="" /></div>
          </Badge>
          <Badge content='hot' radius={4} border="1px solid var(--color-orange-4)" bg='var(--color-orange-2)' color='var(--color-orange-6)'>
            <div className="bg-gray" style={{ width: 72, height: 72 }}><Icon name="" /></div>
          </Badge>
          <Badge content='NEW' radius={4} border="1px solid var(--color-link-4)" bg='var(--color-link-2)' color='var(--color-link-6)'>
            <div className="bg-gray" style={{ width: 72, height: 72 }}><Icon name="" /></div>
          </Badge>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Title from "../../packages/Title";
import Tag from "../../packages/Tag";
import Icon from "../../packages/Icon";

export default function TagExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="图标标签" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Tag icon={<Icon name="tag" size={20} />}>带图标标签</Tag>
        </div>
        <Title title="可删除标签" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Tag canDelete>可删除标签</Tag>
        </div>
        <Title title="自定义标签样式" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Tag
            background="var(--color-primary-1)"
            color="var(--color-primary-6)"
          >
            主题色标签
          </Tag>
          <Tag
            border="1px solid var(--color-primary-3)"
            color="var(--color-primary-6)"
            background="transparent"
          >
            主题色标签（边框）
          </Tag>
          <Tag
            border="1px dashed var(--color-primary-3)"
            color="var(--color-primary-6)"
            background="transparent"
          >
            主题色标签（虚线边框）
          </Tag>
        </div>
      </div>
    </div>
  );
}

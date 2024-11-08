import React from 'react';
import Title from '../../packages/Title';
import Divider from '../../packages/Divider';
import {
  COMMON_COMPONENTS_DATA,
  LAYOUT_COMPONENTS_DATA,
  NAV_COMPONENTS_DATA,
  INPUT_COMPONENTS_DATA,
  DISPLAY_COMPONENTS_DATA,
  FEEDBACK_COMPONENTS_DATA,
  TEXT_COMPONENTS_DATA,
  OTHER_COMPONENTS_DATA,
} from "../mock";

import Flex from '../../packages/Flex';

type Props = {
  onClick?: (dropItem: any, item: any) => void;
};
const ComponentPreview: React.FC<Props> = ({
  onClick,
}) => {
  const data = [
    { id: 'icon', data: COMMON_COMPONENTS_DATA, title: "通用型" },
    { id: 'divider', data: LAYOUT_COMPONENTS_DATA, title: "布局型" },
    { id: 'affix', data: NAV_COMPONENTS_DATA, title: "导航型" },
    { id: 'input', data: INPUT_COMPONENTS_DATA, title: "数据输入型" },
    { id: 'avatar', data: DISPLAY_COMPONENTS_DATA, title: "输入展示型" },
    { id: 'alert', data: FEEDBACK_COMPONENTS_DATA, title: "反馈型" },
    { id: 'title', data: TEXT_COMPONENTS_DATA, title: "文字型" },
    { id: 'icon', data: OTHER_COMPONENTS_DATA, title: "其他" },
  ];
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <Title title="组件索引" />
      <Divider />
      {data?.map((item) => (
        <Flex column gap={24}>
          <div className="color-gray-2 fw-500 fs-20">{item.title}</div>
          <div
            className="grid gap-24 width-100"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))",
            }}
          >
            {item.data?.map((items) => (
              <div
                className="flex column gap-8 radius-8 pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  onClick?.(items, item);
                }}
              >
                {items.demo && (
                  <div className="relative flex items-center justify-center p-12 bg-gray hover:bg-gray ratio-1">
                    {items.demo}
                  </div>
                )}
                <Flex align="center" gap={8}>
                  <Title title={items.en} type="h3" />
                  <Title title={items.zh} type="p" />
                </Flex>
              </div>
            ))}
          </div>
        </Flex>
      ))}
    </div>
  );
};

export default ComponentPreview;

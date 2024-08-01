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
  onClick?: (item: any) => void;
};
const ComponentPreview: React.FC<Props> = ({
  onClick,
}) => {
  const data = [
    { id: 1, data: COMMON_COMPONENTS_DATA, title: "通用型" },
    { id: 2, data: LAYOUT_COMPONENTS_DATA, title: "布局型" },
    { id: 3, data: NAV_COMPONENTS_DATA, title: "导航型" },
    { id: 4, data: INPUT_COMPONENTS_DATA, title: "数据输入型" },
    { id: 5, data: DISPLAY_COMPONENTS_DATA, title: "输入展示型" },
    { id: 6, data: FEEDBACK_COMPONENTS_DATA, title: "反馈型" },
    { id: 7, data: TEXT_COMPONENTS_DATA, title: "文字型" },
    { id: 8, data: OTHER_COMPONENTS_DATA, title: "其他" },
  ];
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <Title title='组件索引' />
      <Divider />
      {data?.map(item =>
        <Flex column gap={12}>
          <div className='color-gray-4' >{item.title}</div>
          <div className='grid gap-24 width-100' style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))' }}>
            {item.data?.map(items =>
              <div className='flex column gap-8 p-12 bg-gray hover:bg-gray radius-8 pointer' onClick={() => onClick?.(items)}>
                {items.demo && <Flex bothCenter className='ratio-1'>{items.demo}</Flex>}
                <Flex align='center' gap={8}>
                  <Title title={items.en} type='h3' />
                  <Title title={items.zh} type='p' />
                </Flex>
              </div>
            )}
          </div>
        </Flex>
      )}
    </div>
  )
};

export default ComponentPreview;

import React, { useState } from 'react'
import Menu from '../../packages/Menu'
import { StyledRightContent } from '../Components';
import Colors from './Colors';

export default function Design() {
  const [active, setActive] = useState<number | string>(2);
  return (
    <>
      <Menu
        data={[
          { key: 1, title: "Principle", subTitle: "设计原则" },
          { key: 2, title: "Colors", subTitle: "颜色变量" },
          { key: 3, title: "typeface", subTitle: "字体" },
          { key: 4, title: "Evaluation", subTitle: "投影" },
          { key: 5, title: "Layer", subTitle: "层级" },
        ]}
        active={active}
        onChange={(item) => setActive(item.key)}
        direction="column"
        style={{ width: "240px", height: "100%" }}
        className="py-24 overflow-auto scrollbar-none"
      />
      <div className="flex-1 p-24 height-100 overflow-auto border-box">
        <StyledRightContent className="flex column width-100">
          {active === 2 && <Colors />}
        </StyledRightContent>
      </div>
    </>
  );
}

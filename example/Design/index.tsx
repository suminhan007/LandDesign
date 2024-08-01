import React, { useState } from 'react'
import Menu from '../../packages/Menu'

export default function Design() {
  const [active, setActive] = useState<number | string>(1);
  return (
    <>
      <Menu
        data={[
          { key: 1, title: 'Principle', subTitle: '设计原则' },
          { key: 2, title: 'Colors', subTitle: '颜色变量' },
          { key: 3, title: 'typeface', subTitle: '字体', },
          { key: 4, title: 'Evaluation', subTitle: '投影', },
          { key: 4, title: 'Evaluation', subTitle: '层级', },
        ]}
        active={active}
        onChange={item => setActive(item.key)}
        direction='column'
        style={{ width: '240px', height: '100%' }}
        className='py-24 overflow-auto scrollbar-none'
      />
    </>
  )
}

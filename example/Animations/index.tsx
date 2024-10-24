import React, { useState } from 'react'
import Menu, { MenuItemType } from '../../packages/Menu'
import { ANIMATION_NAV_DATA } from '../mock';
import '../../packages/styles/animation.scss';

export default function Animations() {
  const [active, setActive] = useState<string | number>(1);
  const [animation, setAnimation] = useState<MenuItemType>();
  return (
    <>
      <Menu
        data={ANIMATION_NAV_DATA}
        active={active}
        onChange={item => setActive(item.key)}
        onDropChange={(item, parentItem) => {
          setActive(parentItem.key);
          setAnimation(item);
        }}
        direction='column'
        style={{ width: '240px', height: '100%' }}
        className='py-24 overflow-auto scrollbar-none'
      />
      <div className='flex-1 flex both-center'>
        <div className={`fs-32 fw-600 animate__animated animate__${animation?.title}`}>Animation</div>
      </div>
    </>
  )
}

import React, { useState } from 'react'
import Title from '../../packages/Title'
import Avatar from '../../packages/Avatar';

export default function AvatarExample() {
  const [color, setColor] = useState<string>('var(--color-primary-6)')
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="默认头像框" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Avatar />
        </div>
        <Title title="文字头像框" type="h3" />
        <Title title="默认显示传入名称的第一个字母" type="p" />
        <div className="flex justify-center gap-24 border p-32">
          <Avatar name='海绵宝宝' />
          <Avatar name='海绵宝宝' abbreviationName='绵' />
        </div>
        <Title title="图片头像框" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Avatar imgUrl='' />
        </div>
        <Title title="自定义头像框样式" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Avatar bg='var(--color-bg-2)' color='var(--color-text-5)' name='海绵宝宝' />
          <Avatar bg='var(--color-primary-6)' color='var(--color-text-white)' name='海绵宝宝' />
          <Avatar bg='transparent' border='1px solid var(--color-border-1)' color='var(--color-text-2)' name='海绵宝宝' />
          <Avatar />
        </div>
      </div>
    </div>
  )
}

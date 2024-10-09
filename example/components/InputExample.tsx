import React, { useState } from 'react'
import Input from '../../packages/Input'
import Title from '../../packages/Title'
import Icon from '../../packages/Icon';
import Button from '../../packages/Button';

export default function InputExample() {
  const [value, setValue] = useState<string>('');
  const [value2, setValue2] = useState<string>('1, 200');
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规输入框" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Input value={value} onChange={val => setValue(val)} onClear={() => setValue('')} />
        </div>
        <Title title="输入框样式类型" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Input value={value} onChange={val => setValue(val)} onClear={() => setValue('')} />
          <Input type='background' value={value} onChange={val => setValue(val)} onClear={() => setValue('')} />
          <Input type='transparent' value={value} onChange={val => setValue(val)} onClear={() => setValue('')} />
        </div>
        <Title title="禁用" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Input disabled />
        </div>
        <Title title="输入框结构前缀" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Input value={value} inputType='tel' beforeContent={<Icon name="search" stroke="var(--color-text-5)" />} onChange={val => setValue(val)} onClear={() => setValue('')} />
        </div>
        <Title title="输入框结构后缀" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Input value={value} afterContent={<Button icon={<Icon name='download' />} size='small' type='text' />} onChange={val => setValue(val)} />
        </div>
        <Title title="输入框内容前缀" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Input value={value} prefix='(+86)' onChange={val => setValue(val)} onClear={() => setValue('')} />
        </div>
        <Title title="输入框内容后缀（常用语单位等）" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Input value={value2} suffix='人次' onChange={val => setValue2(val)} onClear={() => setValue2('')} />
        </div>
      </div>
    </div>
  )
}

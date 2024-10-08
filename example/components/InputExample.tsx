import React, { useState } from 'react'
import Input from '../../packages/Input'
import Title from '../../packages/Title'

export default function InputExample() {
  const [value, setValue] = useState<string>('');
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规输入框" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Input value={value} onChange={val => setValue(val)} onClear={() => setValue('')} />
        </div>
        <Title title="设置类型" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Input value={value} onChange={val => setValue(val)} onClear={() => setValue('')} />
          <Input type='background' value={value} onChange={val => setValue(val)} onClear={() => setValue('')} />
        </div>
        <Title title="包含搜索按钮的输入框" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Input useSearch value={value} onChange={val => setValue(val)} onClear={() => setValue('')} />
        </div>
        <Title title="禁用" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Input disabled />
        </div>
      </div>
    </div>
  )
}

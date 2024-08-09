import React from 'react'
import Input from '../../packages/Input'
import Title from '../../packages/Title'
import NumberInput from '../../packages/NumberInput'

export default function NumberInputExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规输入框" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <NumberInput
            value={0}
          />
        </div>
        <Title title="设置类型" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <NumberInput
            value={0}
          />
          <NumberInput
            type='background'
            value={0}
          />
        </div>
        <Title title="设置单位后缀" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <NumberInput
            value={0}
            suffix='%'
          />
        </div>
        <Title title="禁用" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <NumberInput
            value={0}
            disabled
          />
        </div>
      </div>
    </div>
  )
}

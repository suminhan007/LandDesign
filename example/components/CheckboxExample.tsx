import React, { useState } from 'react'
import Title from '../../packages/Title'
import Checkbox from '../../packages/Checkbox'

export default function CheckboxExample() {
  const [checked, setChecked] = useState<(number | string)[]>([])
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规输入框" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Checkbox
            data={[{ value: 1, label: '选项1' }, { value: 2, label: '选项2' }, { value: 3, label: '选项3' }]}
            checked={checked}
            onChange={(item) => {
              if (checked.includes(item.value)) {
                setChecked(checked.filter(itm => itm !== item.value))
              } else {
                setChecked([...checked, item.value])
              }
            }}
          />
        </div>
        <Title title="包含提示内容" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Checkbox
            data={[{ value: 1, label: '选项1', info: '提示内容' }, { value: 2, label: '选项2' }, { value: 3, label: '选项3' }]}
            checked={checked}
            onChange={(item) => {
              if (checked.includes(item.value)) {
                setChecked(checked.filter(itm => itm !== item.value))
              } else {
                setChecked([...checked, item.value])
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}

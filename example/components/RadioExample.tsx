import React from 'react'
import Input from '../../packages/Input'
import Title from '../../packages/Title'
import Radio from '../../packages/Radio'

export default function RadioExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规输入框" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Radio data={[{ value: 1, label: '选项1' }, { value: 2, label: '选项2' }, { value: 3, label: '选项3' }]} />
        </div>
        <Title title="包含提示内容" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Radio data={[{ value: 1, label: '选项1', info: '提示内容' }, { value: 2, label: '选项2' }, { value: 3, label: '选项3' }]} />
        </div>
        <Title title="包含禁用选项" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Radio data={[{ value: 1, label: '选项1' }, { value: 2, label: '选项2', disabled: true }, { value: 3, label: '选项3' }]} />
        </div>
      </div>
    </div>
  )
}

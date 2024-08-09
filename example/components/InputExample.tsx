import React from 'react'
import Input from '../../packages/Input'
import Title from '../../packages/Title'

export default function InputExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规输入框" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Input />
        </div>
        <Title title="包含搜索按钮的输入框" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Input useSearch />
        </div>
      </div>
    </div>
  )
}

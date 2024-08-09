import React from 'react'
import Title from '../../packages/Title'
import DatePicker from '../../packages/DatePicker'

export default function DatePickerExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规输入框" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <DatePicker />
        </div>
        <Title title="设置类型" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <DatePicker type='border' /><DatePicker type='background' />
        </div>
        <Title title="禁用" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <DatePicker disabled />
        </div>
      </div>
    </div>
  )
}

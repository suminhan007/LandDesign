import React from 'react'
import Title from '../../packages/Title'
import TagInput from '../../packages/TagInput'
import Select from '../../packages/Select'

export default function SelectExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规单选框" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Select data={[
            { value: 1, label: '选项1' },
            { value: 2, label: '选项2' },
            { value: 3, label: '选项3' }
          ]} />
        </div>
        <Title title="包含提示内容" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Select data={[
            { value: 1, label: '1' },
            { value: 2, label: '5' },
            { value: 3, label: '10' }
          ]}
            info='选框提示内容'
          />
        </div>
        <Title title="包含标题" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Select data={[
            { value: 1, label: '1' },
            { value: 2, label: '5' },
            { value: 3, label: '10' }
          ]}
            title='选择数量'
            info='选框提示内容'
          />
        </div>
        <Title title="选项包含提示内容" type="h3" info="提示内容的展示形式有两种：整个选项和选项后置图标" />
        <div className="flex justify-center gap-24 border p-32">
          <Select data={[
            { value: 1, label: '选项1', info: '提示1' },
            { value: 2, label: '选项2', tip: '提示2' },
            { value: 3, label: '选项3' }
          ]} />
        </div>
        <Title title="选框整体禁用" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Select data={[
            { value: 1, label: '选项1' },
            { value: 2, label: '选项2' },
            { value: 3, label: '选项3' }
          ]}
            disabled
          />
        </div>
        <Title title="选项禁用" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Select data={[
            { value: 1, label: '选项1' },
            { value: 2, label: '选项2' },
            { value: 3, label: '选项3', disabled: true, info: '99' }
          ]}
          />
        </div>
      </div>
    </div>
  )
}

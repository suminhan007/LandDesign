import React from 'react'
import Title from '../../packages/Title'
import ColorPicker from '../../packages/ColorPicker'

export default function ColorPickerExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规颜色输入框" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <ColorPicker value='#9FDB1D' />
        </div>
        <Title title="使用底部输入框输入颜色值" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <ColorPicker input />
        </div>
        <Title title="不包含下拉框，作为颜色项展示" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <ColorPicker useSelect={false} />
        </div>
        <Title title="包含默认颜色列表" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <ColorPicker showList />
        </div>
        <Title title="包含提示内容" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <ColorPicker info='提示内容' />
        </div>
        <Title title="不可设置透明度" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <ColorPicker showOpacity={false} />
        </div>
      </div>
    </div>
  )
}

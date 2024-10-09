import React, { useState } from 'react'
import Title from '../../packages/Title'
import ColorPicker from '../../packages/ColorPicker'

export default function ColorPickerExample() {
  const [color, setColor] = useState<string>('var(--color-primary-6)')
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规颜色输入框" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <ColorPicker value={color} size={32} onChange={val => setColor(val)} />
        </div>
      </div>
    </div>
  )
}

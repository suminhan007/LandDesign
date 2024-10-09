import React from 'react'
import Title from '../../packages/Title'
import TagInput from '../../packages/TagInput'

export default function TagInputExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规输入框" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <TagInput maxLength={20} />
        </div>
      </div>

      <div className="flex column gap-12">
        <Title title="高亮文字" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <TagInput highlightStr={['不好']} />
        </div>
      </div>
    </div>
  )
}

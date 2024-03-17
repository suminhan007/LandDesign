import React from 'react'
import Title from '../../packages/Title'
import {
  IconArrowLine,
  IconArrow,
  IconArrowDouble,
  IconArrowTriangle,
  IconArrowTo,
  IconCollapse,
  IconCollection,
  IconZoomOut,
  IconZoomIn,
  IconLoop,
  IconDownload,
} from '../../packages/Icon'

export default function IconExample() {
  return (
    <div>
      <Title title='箭头类' type='p'/>
      <div className='flex'>
        <IconArrowLine />
        <IconArrow />
        <IconArrowDouble />
        <IconArrowTriangle />
        <IconArrowTo/>
      </div>
    </div>
  )
}

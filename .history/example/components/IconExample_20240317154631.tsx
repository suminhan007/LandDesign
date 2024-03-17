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
  IconOut,
  IconReload,
  IconUndo,
  IconSort,
  IconBack,
  IconAhead,
} from '../../packages/Icon'

export default function IconExample() {
  return (
    <div>
      <Title title='箭头类' type='p'/>
      <div className='flex gap-1'>
        <IconArrowLine />
        <IconArrow />
        <IconArrowDouble />
        <IconArrowTriangle />
        <IconArrowTo />
        <IconCollapse />
        <IconCollection />
        <IconZoomOut />
        <IconZoomIn />
        <IconLoop />
        <IconDownload />
        <IconOut />
        <IconReload />
        <IconUndo />
        <IconSort />
        <IconBack />
        <IconAhead/>
      </div>
    </div>
  )
}

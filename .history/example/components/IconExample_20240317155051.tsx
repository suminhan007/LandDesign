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
    <div className='flex column gap-12'>
      <div className='flex column gap-8'>
        <Title title='箭头类' type='h3'/>
        <div className='width-100 flex gap-12'>
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
          <IconAhead />
        </div>
      </div>
      <div className='flex column gap-8'>
        <Title title='编辑类' type='h3'/>
        <div className='width-100 flex gap-12'>
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
    </div>
  )
}

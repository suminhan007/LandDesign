import React, { useState } from 'react'
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
  const [size, setSize] = useState<number>(16);
  const [stroke, setStroke] = useState<number>(2);
  return (
    <div className='flex column gap-12'>
      <div className='flex column gap-8'>
        <Title title='箭头类' type='h3'/>
        <div className='width-100 flex gap-12'>
          <IconArrowLine size={size} strokeWidth={}/>
          <IconArrow size={size} strokeWidth={}/>
          <IconArrowDouble size={size} strokeWidth={}/>
          <IconArrowTriangle size={size} strokeWidth={}/>
          <IconArrowTo size={size} strokeWidth={}/>
          <IconCollapse size={size} strokeWidth={}/>
          <IconCollection size={size} strokeWidth={}/>
          <IconZoomOut size={size} strokeWidth={}/>
          <IconZoomIn size={size} strokeWidth={}/>
          <IconLoop size={size} strokeWidth={}/>
          <IconDownload size={size} strokeWidth={}/>
          <IconOut size={size} strokeWidth={}/>
          <IconReload size={size} strokeWidth={}/>
          <IconUndo size={size} strokeWidth={}/>
          <IconSort size={size} strokeWidth={}/>
          <IconBack size={size} strokeWidth={}/>
          <IconAhead size={size} strokeWidth={}/>
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

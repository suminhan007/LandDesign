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
          <IconArrowLine size={size} strokeWidth={s}/>
          <IconArrow size={size} strokeWidth={s}/>
          <IconArrowDouble size={size} strokeWidth={s}/>
          <IconArrowTriangle size={size} strokeWidth={s}/>
          <IconArrowTo size={size} strokeWidth={s}/>
          <IconCollapse size={size} strokeWidth={s}/>
          <IconCollection size={size} strokeWidth={s}/>
          <IconZoomOut size={size} strokeWidth={s}/>
          <IconZoomIn size={size} strokeWidth={s}/>
          <IconLoop size={size} strokeWidth={s}/>
          <IconDownload size={size} strokeWidth={s}/>
          <IconOut size={size} strokeWidth={s}/>
          <IconReload size={size} strokeWidth={s}/>
          <IconUndo size={size} strokeWidth={s}/>
          <IconSort size={size} strokeWidth={s}/>
          <IconBack size={size} strokeWidth={s}/>
          <IconAhead size={size} strokeWidth={s}/>
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

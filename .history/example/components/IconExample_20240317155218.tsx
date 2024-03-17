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
  const [stroke, setStroke] = useState<number>(0);
  return (
    <div className='flex column gap-12'>
      <div className='flex column gap-8'>
        <Title title='箭头类' type='h3'/>
        <div className='width-100 flex gap-12'>
          <IconArrowLine size={size} strokeWidth={stroke}/>
          <IconArrow size={size} strokeWidth={stroke}/>
          <IconArrowDouble size={size} strokeWidth={stroke}/>
          <IconArrowTriangle size={size} strokeWidth={stroke}/>
          <IconArrowTo size={size} strokeWidth={stroke}/>
          <IconCollapse size={size} strokeWidth={stroke}/>
          <IconCollection size={size} strokeWidth={stroke}/>
          <IconZoomOut size={size} strokeWidth={stroke}/>
          <IconZoomIn size={size} strokeWidth={stroke}/>
          <IconLoop size={size} strokeWidth={stroke}/>
          <IconDownload size={size} strokeWidth={stroke}/>
          <IconOut size={size} strokeWidth={stroke}/>
          <IconReload size={size} strokeWidth={stroke}/>
          <IconUndo size={size} strokeWidth={stroke}/>
          <IconSort size={size} strokeWidth={stroke}/>
          <IconBack size={size} strokeWidth={stroke}/>
          <IconAhead size={size} strokeWidth={stroke}/>
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

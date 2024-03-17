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
import styled from 'styled-components';

export default function IconExample() {
  const [size, setSize] = useState<number>(16);
  const [stroke, setStroke] = useState<number>(2);
  return (
    <div className='flex column gap-12'>
      <div className='flex column gap-8'>
        <Title title='箭头类' type='h3'/>
        <StyleIconGrid className='width-100 flex gap-12'>
          <IconArrowLine size={size}/>
          <IconArrow size={size}/>
          <IconArrowDouble size={size}/>
          <IconArrowTriangle size={size} strokeWidth={stroke}/>
          <IconArrowTo size={size}/>
          <IconCollapse size={size}/>
          <IconCollection size={size}/>
          <IconZoomOut size={size}/>
          <IconZoomIn size={size}/>
          <IconLoop size={size}/>
          <IconDownload size={size}/>
          <IconOut size={size}/>
          <IconReload size={size}/>
          <IconUndo size={size}/>
          <IconSort size={size}/>
          <IconBack size={size}/>
          <IconAhead size={size}/>
        </StyleIconGrid>
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

const StyleIconGrid = styled.div`
  display: ;
`

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
        <StyleIconGrid>
          <StyledIconItem<IconArrowLine size={size}/>
          <StyledIconItem<IconArrow size={size}/>
          <StyledIconItem<IconArrowDouble size={size}/>
          <StyledIconItem<IconArrowTriangle size={size} strokeWidth={stroke}/>
          <StyledIconItem<IconArrowTo size={size}/>
          <StyledIconItem<IconCollapse size={size}/>
          <StyledIconItem<IconCollection size={size}/>
          <StyledIconItem<IconZoomOut size={size}/>
          <StyledIconItem<IconZoomIn size={size}/>
          <StyledIconItem<IconLoop size={size}/>
          <StyledIconItem<IconDownload size={size}/>
          <StyledIconItem<IconOut size={size}/>
          <StyledIconItem<IconReload size={size}/>
          <StyledIconItem<IconUndo size={size}/>
          <StyledIconItem<IconSort size={size}/>
          <StyledIconItem<IconBack size={size}/>
          <StyledIconItem<IconAhead size={size}/>
        </StyleIconGrid>
      </div>
      <div className='flex column gap-8'>
        <Title title='编辑类' type='h3'/>
        <StyleIconGrid>
          
        </StyleIconGrid>
      </div>
    </div>
  )
}

const StyleIconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(72px,1fr));
  gap: 24px;
`
const StyledIconItem = styled.div`
  padding: 12px;
  border-radius: var(--radius-8);
`

import React, { useState } from 'react';
import styled from 'styled-components';

import Title from '../../packages/Title';

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

const Icon
export default function IconExample() {
  const [size, setSize] = useState<number>(24);
  const [stroke, setStroke] = useState<number>(2);
  return (
    <div className='flex column gap-12'>
      <div className='flex column gap-8'>
        <Title title='箭头类' type='h3'/>
        <StyleIconGrid>
          <StyledIconItem>
            <IconArrowLine size={size} />
            IconArrowLine
          </StyledIconItem>
          <StyledIconItem><IconArrow size={size}/>IconArrow</StyledIconItem>
          <StyledIconItem><IconArrowDouble size={size}/>IconArrowDouble</StyledIconItem>
          <StyledIconItem><IconArrowTriangle size={size} strokeWidth={stroke}/>IconArrowTriangle</StyledIconItem>
          <StyledIconItem><IconArrowTo size={size}/>IconArrowTo</StyledIconItem>
          <StyledIconItem><IconCollapse size={size}/></StyledIconItem>
          <StyledIconItem><IconCollection size={size}/></StyledIconItem>
          <StyledIconItem><IconZoomOut size={size}/></StyledIconItem>
          <StyledIconItem><IconZoomIn size={size}/></StyledIconItem>
          <StyledIconItem><IconLoop size={size}/></StyledIconItem>
          <StyledIconItem><IconDownload size={size}/></StyledIconItem>
          <StyledIconItem><IconOut size={size}/></StyledIconItem>
          <StyledIconItem><IconReload size={size}/></StyledIconItem>
          <StyledIconItem><IconUndo size={size}/></StyledIconItem>
          <StyledIconItem><IconSort size={size}/></StyledIconItem>
          <StyledIconItem><IconBack size={size}/></StyledIconItem>
          <StyledIconItem><IconAhead size={size}/></StyledIconItem>
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
  grid-template-columns: repeat(auto-fill, minmax(132px,1fr));
  gap: 24px;
`
const StyledIconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px;
  color: var(--color-text-4);
  border-radius: var(--radius-8);
  font-size: 12px;
  border: 1px dashed var(--color-border-2);
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
`

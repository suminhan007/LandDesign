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

export default function IconExample() {
  const [color, setColor] = useState<string>('currentColor');
  const [size, setSize] = useState<number>(24);
  const [stroke, setStroke] = useState<number>(2);
  return (
    <div className='flex column gap-12'>
      <div className='flex column gap-8'>
        <Title title='箭头类' type='h3'/>
        <StyleIconGrid>
          <StyledIconItem>
            <IconArrowLine size={size} fil />
            IconArrowLine
          </StyledIconItem>
          <StyledIconItem>
            <IconArrow size={size} fil />
            IconArrow
          </StyledIconItem>
          <StyledIconItem>
            <IconArrowDouble size={size} fil />
            IconArrowDouble
          </StyledIconItem>
          <StyledIconItem>
            <IconArrowTriangle size={size} fil strokeWidth={stroke} />
            IconArrowTriangle
          </StyledIconItem>
          <StyledIconItem>
            <IconArrowTo size={size} fil />
            IconArrowTo
          </StyledIconItem>
          <StyledIconItem>
            <IconCollapse size={size} fil />
            IconCollapse
          </StyledIconItem>
          <StyledIconItem>
            <IconCollection size={size} fil />
            IconCollection
            </StyledIconItem>
          <StyledIconItem>
            <IconZoomOut size={size} fil />
            IconZoomOut
            </StyledIconItem>
          <StyledIconItem>
            <IconZoomIn size={size} fil />
            IconZoomIn
            </StyledIconItem>
          <StyledIconItem>
            <IconLoop size={size} fil />
            IconLoop
            </StyledIconItem>
          <StyledIconItem>
            <IconDownload size={size} fil />
            IconDownload
            </StyledIconItem>
          <StyledIconItem>
            <IconOut size={size} fil />
            IconOut
            </StyledIconItem>
          <StyledIconItem>
            <IconReload size={size} fil />
            IconReload
            </StyledIconItem>
          <StyledIconItem>
            <IconUndo size={size} fil />
            IconUndo
            </StyledIconItem>
          <StyledIconItem>
            <IconSort size={size} fil />
            IconSort
            </StyledIconItem>
          <StyledIconItem>
            <IconBack size={size} fil />
            IconBack
            </StyledIconItem>
          <StyledIconItem>
            <IconAhead size={size} fil />
            IconAhead
            </StyledIconItem>
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

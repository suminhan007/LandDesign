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
            <IconArrowLine size={size} fill={color} s />
            IconArrowLine
          </StyledIconItem>
          <StyledIconItem>
            <IconArrow size={size} fill={color} s />
            IconArrow
          </StyledIconItem>
          <StyledIconItem>
            <IconArrowDouble size={size} fill={color} s />
            IconArrowDouble
          </StyledIconItem>
          <StyledIconItem>
            <IconArrowTriangle size={size} fill={color} s strokeWidth={stroke} />
            IconArrowTriangle
          </StyledIconItem>
          <StyledIconItem>
            <IconArrowTo size={size} fill={color} s />
            IconArrowTo
          </StyledIconItem>
          <StyledIconItem>
            <IconCollapse size={size} fill={color} s />
            IconCollapse
          </StyledIconItem>
          <StyledIconItem>
            <IconCollection size={size} fill={color} s />
            IconCollection
            </StyledIconItem>
          <StyledIconItem>
            <IconZoomOut size={size} fill={color} s />
            IconZoomOut
            </StyledIconItem>
          <StyledIconItem>
            <IconZoomIn size={size} fill={color} s />
            IconZoomIn
            </StyledIconItem>
          <StyledIconItem>
            <IconLoop size={size} fill={color} s />
            IconLoop
            </StyledIconItem>
          <StyledIconItem>
            <IconDownload size={size} fill={color} s />
            IconDownload
            </StyledIconItem>
          <StyledIconItem>
            <IconOut size={size} fill={color} s />
            IconOut
            </StyledIconItem>
          <StyledIconItem>
            <IconReload size={size} fill={color} s />
            IconReload
            </StyledIconItem>
          <StyledIconItem>
            <IconUndo size={size} fill={color} s />
            IconUndo
            </StyledIconItem>
          <StyledIconItem>
            <IconSort size={size} fill={color} s />
            IconSort
            </StyledIconItem>
          <StyledIconItem>
            <IconBack size={size} fill={color} s />
            IconBack
            </StyledIconItem>
          <StyledIconItem>
            <IconAhead size={size} fill={color} s />
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

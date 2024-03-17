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
  IconRefresh,

  IconCheckStroke,
  IconCheckFill
} from '../../packages/Icon'

export default function IconExample() {
  const [color, setColor] = useState<string>('var(--color-text-2)');
  const [size, setSize] = useState<number>(24);
  const [stroke, setStroke] = useState<number>(2);
  return (
    <div className='flex column gap-12'>
      <div className='flex column gap-8'>
        <Title title='箭头类' type='h3'/>
        <StyleIconGrid>
          <StyledIconItem>
            <IconArrowLine size={size} stroke={color} />
            IconArrowLine
          </StyledIconItem>
          <StyledIconItem>
            <IconArrow size={size} stroke={color} />
            IconArrow
          </StyledIconItem>
          <StyledIconItem>
            <IconArrowDouble size={size} stroke={color} />
            IconArrowDouble
          </StyledIconItem>
          <StyledIconItem>
            <IconArrowTriangle size={size} stroke={color} fill={color} strokeWidth={stroke} />
            IconArrowTriangle
          </StyledIconItem>
          <StyledIconItem>
            <IconArrowTo size={size} stroke={color} />
            IconArrowTo
          </StyledIconItem>
          <StyledIconItem>
            <IconCollapse size={size} stroke={color} />
            IconCollapse
          </StyledIconItem>
          <StyledIconItem>
            <IconCollection size={size} stroke={color} />
            IconCollection
            </StyledIconItem>
          <StyledIconItem>
            <IconZoomOut size={size} stroke={color} />
            IconZoomOut
            </StyledIconItem>
          <StyledIconItem>
            <IconZoomIn size={size} stroke={color} />
            IconZoomIn
            </StyledIconItem>
          <StyledIconItem>
            <IconLoop size={size} stroke={color} />
            IconLoop
            </StyledIconItem>
          <StyledIconItem>
            <IconDownload size={size} stroke={color} />
            IconDownload
            </StyledIconItem>
          <StyledIconItem>
            <IconOut size={size} stroke={color} />
            IconOut
            </StyledIconItem>
          <StyledIconItem>
            <IconReload size={size} stroke={color} />
            IconReload
            </StyledIconItem>
          <StyledIconItem>
            <IconUndo size={size} stroke={color} />
            IconUndo
            </StyledIconItem>
          <StyledIconItem>
            <IconSort size={size} stroke={color} />
            IconSort
            </StyledIconItem>
          <StyledIconItem>
            <IconBack size={size} stroke={color} />
            IconBack
            </StyledIconItem>
          <StyledIconItem>
            <IconAhead size={size} stroke={color} />
            IconAhead
          </StyledIconItem>
          <StyledIconItem>
            <IconRefresh size={size} stroke={color} />
            IconRefresh
          </StyledIconItem>
        </StyleIconGrid>
      </div>

      <div className='flex column gap-8'>
        <Title title='提示类' type='h3'/>
        <StyleIconGrid>
          <StyledIconItem>
            <IconCheckStroke size={size} stroke={color}/>
            IconCheckStroke
          </StyledIconItem>
          <StyledIconItem>
            <IconCheckFill size={size} fill={color}/>
            IconCheckFill
          </StyledIconItem>
        </StyleIconGrid>
      </div>

      <div className='flex column gap-8'>
        <Title title='交互类' type='h3'/>
        <StyleIconGrid>
          
        </StyleIconGrid>
      </div>

      <div className='flex column gap-8'>
        <Title title='编辑类' type='h3'/>
        <StyleIconGrid>
          
        </StyleIconGrid>
      </div>

      <div className='flex column gap-8'>
        <Title title='文字类' type='h3'/>
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
  cursor: default;
  &:hover {
    background-color: var(--color-bg-1);
  }
`

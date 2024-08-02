import React, { useState } from 'react';
import styled from 'styled-components';

import Title from '../../packages/Title';
import AffixContainer from '../../packages/AffixContainer';
import { ICON_EXAMPLE_DATA } from '../mock';
import Icon from '../../packages/Icon';

export default function IconExample() {
  const [color, setColor] = useState<string>('var(--color-text-2)');
  const [size, setSize] = useState<number>(32);
  const [stroke, setStroke] = useState<number>(2);

  const handleIconCopyClick = (item?: string) => {

  };
  return (
    <div className='flex column gap-12'>
      {ICON_EXAMPLE_DATA.map((item1, index1) => <div key={index1} className='flex column gap-8'>
        <Title title={item1.title} type='h3' />
        <StyleIconGrid>
          {item1.data?.map(item2 => <StyledIconItem
            key={item2}
            content={<div onClick={() => handleIconCopyClick?.()}><Icon name='copy' /></div>}
            hoverShow
            innerClassName='pointer'
          >
            <Icon name={item2} size={size} stroke={color} />
            <StyledItemText className='transition-15'>{item2}</StyledItemText>
          </StyledIconItem>)}

        </StyleIconGrid>
      </div>)}
    </div>
  )
}

const StyledItemText = styled.div`
  height: 0px;
  padding-top: 8px;
  overflow: hidden;
  transition: all var(--transition-15) ease;
`

const StyleIconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(132px,1fr));
  gap: 24px;
`
const StyledIconItem = styled(AffixContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  aspect-ratio: 1;
  color: var(--color-text-4);
  border-radius: var(--radius-8);
  font-size: 12px;
  border: 1px dashed var(--color-border-2);
  cursor: default;
  transition: background-color var(--transition-15) linear;
  &:hover {
    background-color: var(--color-bg-1);
    ${StyledItemText}{
      height: 30px;
    }
  }
`

import React, { CSSProperties, useMemo } from 'react'
import styled from 'styled-components';
import { CommonProps } from './types';

type GridTemplateProps = {
  /** 宫格数量： 默认为1 */
  type?: string;
  /** 宫格比例： 默认方形 */
  ratio?: number;
  /** 宫格图间距 */
  gap?: number;
  /** 宫格样式 */
  gridStyle?: CSSProperties;
  gridClassName?: string;
  children?: React.ReactNode;
} & CommonProps;
const GridTemplate: React.FC<GridTemplateProps> = ({
  type = '1',
  ratio = 1,
  gap = 2,
  style,
  className = '',
  gridStyle,
  gridClassName = '',
  children
}) => {
  const num = useMemo(() => {
    const number = type?.split('-')[0];
    if (Number(number)) {
      return Number(number);
    }
    return 1;
  }, [type]);
  const direction = useMemo(() => {
    if (ratio > 1) {
      return 'horizontal';
    } else {
      if (ratio < 1) {
        return 'vertical';
      } else {
        return 'square';
      }
    }
  }, [ratio]);
  return (
    <StyledGridTemplate className={`land-grid-template ${direction} type-${type} ${className}`} style={style} gap={gap} ratio={ratio}>
      {children}
      {!children && <>
        {Array.from({ length: num }).map((_i, index) => <div key={index} className={`land-grid-template-item ${gridClassName}`} style={gridStyle}></div>)}
      </>}
    </StyledGridTemplate>
  )
}
const StyledGridTemplate = styled.div<{
  gap?: number;
  ratio?: number;
}>`
  display: grid;
  gap: ${props => `${props.gap}px`};
  aspect-ratio: ${props => `${props.ratio}`};
    &.type-1 {
      grid-template-columns: repeat(1, 1fr);
    }
    &.type-2-1 {
      grid-template-columns: repeat(1, 1fr);
    }
    &.type-2-2 {
      grid-template-columns: repeat(2, 1fr);
    }
    &.type-3-1,
    &.type-3-3,
    &.type-3-4,
    &.type-3-2 {
      & > div:first-child {
        grid-area: main;
      }
    }
    &.type-3-1{
      grid-template-areas: 'main main' '1 2';
    }
    &.type-3-3{
      grid-template-areas: '1 2' 'main main';
    }
    &.type-3-4{
      grid-template-areas: 'main 1' 'main 2';
    }
    &.type-3-2{
      grid-template-areas: '1 main' '2 main';
    }
    &.type-4 {
      grid-template-columns: repeat(2, 1fr);
    }
    &.type-4-h {
      grid-template-columns: repeat(4, 1fr);
    }
    &.type-4-v {
      grid-template-columns: repeat(1, 1fr);
    }
    &.type-5-h-1,
    &.type-5-h-2,
    &.type-5-h-3,
    &.type-5-h-4,
    &.type-5-h-5,
    &.type-5-h-6,
    &.type-5-h-7,
    &.type-5-v-1,
    &.type-5-v-2,
    &.type-5-v-3,
    &.type-5-v-4,
    &.type-5-v-5,
    &.type-5-v-6,
    &.type-5-v-7{
      & > div:first-child {
        grid-area: main;
      }
    }
    &.type-5-h-1 {
      grid-template-areas: 'main main' '1 2' '3 4';
    }
    &.type-5-h-2 {
      grid-template-areas: '1 2' 'main main' '3 4';
    }
    &.type-5-h-3 {
      grid-template-areas: '1 2' '3 4' 'main main';
    }
    &.type-5-h-4 {
      grid-template-areas:  'main 1' 'main 2' '3 4';
    }
    &.type-5-h-5 {
      grid-template-areas:  '1 main' '2 main' '3 4';
    }
    &.type-5-h-6 {
      grid-template-areas:  '1 2' '3 main' '4 main';
    }
    &.type-5-h-7 {
      grid-template-areas:  '1 2' 'main 3' 'main 4';
    }
    &.type-5-v-1 {
      grid-template-areas: 'main 1 2' 'main 3 4';
    }
    &.type-5-v-2 {
      grid-template-areas: '1 main 2' '3 main 4';
    }
    &.type-5-v-3 {
      grid-template-areas: '1 2 main' '3 4 main';
    }
    &.type-5-v-4 {
      grid-template-areas: 'main main 1' '2 3 4';
    }
    &.type-5-v-5 {
      grid-template-areas: '1 main main' '2 3 4';
    }
    &.type-5-v-6 {
      grid-template-areas: '1 2 3' '4 main main';
    }
    &.type-5-v-7 {
      grid-template-areas: '1 2 3' 'main main 4' ;
    }
    &.type-6-h-1{
      grid-template-columns: repeat(6, 1fr);
    }
    &.type-6-h-2{
      grid-template-columns: repeat(3, 1fr);
    }
    &.type-6-v-1 {
      grid-template-columns: repeat(1, 1fr);
    }
    &.type-6-v-2 {
      grid-template-columns: repeat(2, 1fr);
    }
    &.type-6-1,
    &.type-6-2,
    &.type-6-3,
    &.type-6-4,
    &.type-7-h-1,
    &.type-7-h-2,
    &.type-7-h-3,
    &.type-7-v-1,
    &.type-7-v-2,
    &.type-7-v-3{
      & > div:first-child {
        grid-area: main;
      }
    }
    &.type-6-1 {
      grid-template-areas: 'main main 1' 'main main 2' '3 4 5';
    }
    &.type-6-2 {
      grid-template-areas: '1 main main' '2 main main' '3 4 5';
    }
    &.type-6-3 {
      grid-template-areas: '1 2 3' '4 main main' '5 main main';
    }
    &.type-6-4 {
      grid-template-areas: '1 2 3' 'main main 4' 'main main 5';
    }
    &.type-7-h-1{
      grid-template-areas: 'main main main' '1 2 3' '4 5 6';
    }
    &.type-7-h-2{
      grid-template-areas:  '1 2 3' 'main main main' '4 5 6';
    }
    &.type-7-h-3{
      grid-template-areas:  '1 2 3' '4 5 6' 'main main main';
    }
    &.type-7-v-1{
      grid-template-areas:  'main 1 2' 'main 3 4' 'main 5 6';
    }
    &.type-7-v-2{
      grid-template-areas:  '1 main 2' '3 main 4' '5 main 6';
    }
    &.type-7-v-3{
      grid-template-areas:  '1 2 main' '3 4 main' '5 6 main';
    }
    &.type-8-h-1,
    &.type-8-h-2,
    &.type-8-h-3,
    &.type-8-h-4,
    &.type-8-h-5,
    &.type-8-h-6,
    &.type-8-v-1,
    &.type-8-v-2,
    &.type-8-v-3,
    &.type-8-v-4,
    &.type-8-v-5,
    &.type-8-v-6{
      & > div:first-child {
        grid-area: main;
      }
    }
    &.type-8-h-1{
      grid-template-areas: 'main main 1' '2 3 4' '5 6 7';
    }
    &.type-8-h-2{
      grid-template-areas: '1 main main' '2 3 4' '5 6 7';
    }
    &.type-8-h-3{
      grid-template-areas: '1 2 3' '4 main main' '5 6 7';
    }
    &.type-8-h-4{
      grid-template-areas: '1 2 3' '4 5 6' '7 main main';
    }
    &.type-8-h-5{
      grid-template-areas: '1 2 3' '4 5 6' 'main main 7';
    }
    &.type-8-h-6{
      grid-template-areas: '1 2 3' 'main main 4' '5 6 7';
    }
    &.type-8-v-1{
      grid-template-areas: 'main 1 2' 'main 3 4' '5 6 7';
    }
    &.type-8-v-2{
      grid-template-areas: '1 main 2' '3 main 4' '5 6 7';
    }
    &.type-8-v-3{
      grid-template-areas: '1 2 main' '3 4 main' '5 6 7';
    }
    &.type-8-v-4{
      grid-template-areas: '1 2 3' '4 5 main' '6 7 main';
    }
    &.type-8-v-5{
      grid-template-areas: '1 2 3' '4 main 5' '6 main 7';
    }
    &.type-8-v-6{
      grid-template-areas: '1 2 3' 'main 4 5' 'main 6 7';
    }
    &.type-9 {
      grid-template-columns: repeat(3, 1fr);
    }
`

export default GridTemplate;

import { CSSProperties, HTMLAttributes } from 'react'

/**
 * @title Button
 */
export interface ButtonProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * @zh 设置标签背景颜色
   * @en The background color of Button
   */
  color?: Colors
}

type Colors = 'red' | 'orange' | 'green' | 'blue'

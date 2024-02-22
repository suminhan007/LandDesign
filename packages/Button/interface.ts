import { CSSProperties, HTMLAttributes } from 'react'

/**
 * @title Button
 */
export interface ButtonInterface
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * @zh 设置按钮类型
   * @en The background color of Button
   */
  type?: Types
}

type Types = 'default' | 'primary' | 'diabled'
export type { ButtonInterface as ButtonProps }

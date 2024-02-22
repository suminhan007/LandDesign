import clsx from 'clsx'
import { forwardRef } from 'react'
import './style'
import { ButtonProps } from './interface'

const Button: React.ForwardRefRenderFunction<HTMLDivElement, ButtonProps> = (
  props,
  ref,
) => {
  const { className, style, children, color, ...rest } = props

  return (
    <div
      ref={ref}
      style={style}
      {...rest}
      className={clsx(className, 's-btn', `s-btn-${color}`)}
    >
      {children}
    </div>
  )
}

const ButtonComponent = forwardRef<unknown, ButtonProps>(Button)

ButtonComponent.displayName = 'Button'

export default ButtonComponent
export { ButtonProps }

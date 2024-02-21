import { forwardRef } from 'react'
import { ButtonProps } from './interface'

const Button: React.ForwardRefRenderFunction<HTMLDivElement, ButtonProps> = (
  props,
  ref,
) => {
  const { className = '', style, color } = props

  return (
    <div
      ref={ref}
      style={{
        color: color,
        ...style
      }}
      className={className}
    >
      LandButton bingo!
    </div>
  )
}

const ButtonComponent = forwardRef<unknown, ButtonProps>(Button)

ButtonComponent.displayName = 'Button'

export default ButtonComponent
export { ButtonProps }

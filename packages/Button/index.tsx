import { forwardRef } from 'react'
import clsx from 'clsx'
import { ButtonProps } from './interface'
import React from 'react'

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
            className={clsx(className, 's-button', `s-button-${color}`)}
        >
            {children}
            Land Design Button Bingo!
        </div>
    )
}

const ButtonComponent = forwardRef<HTMLDivElement, ButtonProps>(Button)

ButtonComponent.displayName = 'Button'

export default ButtonComponent
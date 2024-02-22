import { CSSProperties } from 'react'

export type ButtonProps = {
  text?: string;
  style?: CSSProperties;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  style,
  className
}) => {
  return (
    <div
      className={className}
      style={style}
    >
      {text}
      Land Design Bingo!
    </div>
  )
}

export default Button

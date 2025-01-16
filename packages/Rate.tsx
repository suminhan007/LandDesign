import React, { CSSProperties } from "react";
import styled from "styled-components";

export type RateProps = {
  value?: number;
  count?:number;
  defaultColor?: string;
  activeColor?: string;
  /** 自定义形状*/
  customSvg?:React.ReactNode;
  onChange?: (value: number) => void;
  style?: CSSProperties;
  className?: string;
};

const Rate: React.FC<RateProps> = ({
                                     value = 0,
                                     count=5,
    defaultColor='var(--color-bg-3)',
                                     activeColor='var(--color-orange-6)',
                                     customSvg,
                                     onChange,
  style,
  className = "",
}) => {
  const [hoverValue, setHoverValue] = React.useState(0);
  return(
      <StyledRateWrap className={`land-rate-wrap ${className}`} style={style} defaultColor={defaultColor} activeColor={activeColor}>
        {Array.from({ length: count }).map((_i, index) => (
            <div key={index} className="land-rate-character">
              <div
                  className={`land-rate-character-item left ${(index + 1 + index * 2 <= value || index + 1 + index * 2 <= hoverValue) ? 'active' : ''}`}
                  onClick={() => onChange?.(index+1 + index*2)}
                  onMouseEnter={() => setHoverValue(index+1 + index*2)}
                  onMouseLeave={() => setHoverValue(0)}>
                  {customSvg || <svg
                    width="24"
                    viewBox="0 0 48 48"
                >
                  <path
                      d="M22.683 5.415c.568-1.043 2.065-1.043 2.634 0l5.507 10.098a1.5 1.5 0 0 0 1.04.756l11.306 2.117c1.168.219 1.63 1.642.814 2.505l-7.902 8.359a1.5 1.5 0 0 0-.397 1.223l1.48 11.407c.153 1.177-1.058 2.057-2.131 1.548l-10.391-4.933a1.5 1.5 0 0 0-1.287 0l-10.39 4.933c-1.073.51-2.284-.37-2.131-1.548l1.48-11.407a1.5 1.5 0 0 0-.398-1.223L4.015 20.89c-.816-.863-.353-2.286.814-2.505l11.306-2.117a1.5 1.5 0 0 0 1.04-.756l5.508-10.098Z"
                  ></path>
                </svg>}
              </div>
              <div
                  className={`land-rate-character-item right ${(index + 2 + index * 2 <= value || index + 2 + index * 2 <= hoverValue) ? 'active' : ''}`}
                  onClick={() => onChange?.(index+2 + index*2)}
                  onMouseOver={() => setHoverValue(index+2 + index*2)}
                  onMouseLeave={() => setHoverValue(0)}
              >
                {customSvg || <svg
                    width="24"
                    viewBox="0 0 48 48"
                >
                  <path
                      d="M22.683 5.415c.568-1.043 2.065-1.043 2.634 0l5.507 10.098a1.5 1.5 0 0 0 1.04.756l11.306 2.117c1.168.219 1.63 1.642.814 2.505l-7.902 8.359a1.5 1.5 0 0 0-.397 1.223l1.48 11.407c.153 1.177-1.058 2.057-2.131 1.548l-10.391-4.933a1.5 1.5 0 0 0-1.287 0l-10.39 4.933c-1.073.51-2.284-.37-2.131-1.548l1.48-11.407a1.5 1.5 0 0 0-.398-1.223L4.015 20.89c-.816-.863-.353-2.286.814-2.505l11.306-2.117a1.5 1.5 0 0 0 1.04-.756l5.508-10.098Z"
                  ></path>
                </svg>}
              </div>
            </div>
        ))}
      </StyledRateWrap>
  )
}


const StyledRateWrap = styled.div<{
  defaultColor?: string;
  activeColor?: string;
}>`
  &.land-rate-wrap {
    display: flex;
    gap: var(--gap-8);
  }
  .land-rate-character {
    width: 24px;
    height: 24px;
    position: relative;
    .land-rate-character-item.left{
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      overflow: hidden;
      z-index: 1;
      svg{
        width: 200%;
      }
    }
    .land-rate-character-item.right{
        width: 100%;
      height: 100%;
      svg{
        width: 100%;
      }
    }
    .land-rate-character-item{
      svg{
        cursor: pointer;
        path{
          fill: ${props => props.defaultColor};
          stroke: none;
          transition: fill var(--transition-15) linear;
        }
      }
      &:hover:not(.active) svg path{
          fill:var(--color-border-2);
      }
      &.active{
        svg path{
          fill: ${props => props.activeColor};
        }
      }
    }
  }
`;

export default Rate;

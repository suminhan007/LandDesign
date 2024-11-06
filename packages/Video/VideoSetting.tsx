import Flex from "../Flex";
import Grid, { gridType } from "../Grid";
import Switch from "../Switch";
import React from "react";
import styled from "styled-components";

type Props = {
  /** 倍数播放数据 */
  rateData?: { key: number; value: number }[];
  /** 倍数播放值 */
  rateValue?: number;
  /** 倍数播放事件 */
  onRateChange?: (val: number, item: { key: number; value: number }, e) => void;
  /** 自动循环 */
  loop?: boolean;
  onLoopChange?: () => void;
};

const VideoSetting: React.FC<Props> = ({
  rateData = [
    { key: 1, value: 0.5 },
    { key: 2, value: 1 },
    { key: 3, value: 1.25 },
    { key: 4, value: 1.5 },
    { key: 5, value: 2 },
    { key: 6, value: 3 },
  ],
  rateValue = 1,
  onRateChange,
  loop = false,
  onLoopChange,
}) => {
  return (
    <StyledVideoSettingContent>
      <Flex gap={8} column>
        <span>倍数</span>
        <Grid gap={4} type={gridType.ColumnRepeat} repeatNum={3}>
          {rateData?.map((item, index) => (
            <StyledVideoRateItem
              key={item.key ?? index}
              className={`${rateValue === item.value ? "active" : ""}`}
              onClick={(e) => onRateChange?.(item.value, item, e)}
            >
              {item.value} x
            </StyledVideoRateItem>
          ))}
        </Grid>
      </Flex>
      <Flex justify="space-between" w="100%">
        自动循环
        <Switch checked={loop} dark onChange={onLoopChange} />
      </Flex>
    </StyledVideoSettingContent>
  );
};

const StyledVideoSettingContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  white-space: nowrap;
`;

const StyledVideoRateItem = styled.div`
  padding: 2px 0;
  width: 48px;
  font-size: 0.75rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  &.active {
    color: rgba(255, 255, 255, 1);
    border-color: rgba(255, 255, 255, 1);
  }
`;

export default VideoSetting;

import React from "react";
import Title from "../../packages/Title";
import Statistic from "../../packages/Statistic";

export default function StatisticExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规数值" />
        <div className="flex justify-center gap-24 border p-32">
          <Statistic value={10} unit="亿+" />
        </div>
        <Title title="包含变化动画" />
        <div className="flex justify-center gap-24 border p-32">
          <Statistic value={10} unit="亿+" animation='random' />
          <Statistic value={289} unit="亿+" animation='random' />
          <Statistic value={3488} unit="亿+" animation='random' />
        </div>
        <Title title="包含变化趋势" />
        <div className="flex justify-center gap-24 border p-32">
          <Statistic value={10} unit="亿+" trendIcon="up" />
          <Statistic value={10} unit="亿+" trendIcon="down" />
          <Statistic value={10} unit="亿+" trendIcon="default" />
        </div>
        <Title title="包含变化趋势的动画" />
        <div className="flex justify-center gap-24 border p-32">
          <Statistic value={10} unit="亿+" animation='increase' trendIcon="up" />
          <Statistic value={10} unit="亿+" animation='decrease' trendIcon="down" />
        </div>
      </div>
    </div>
  );
}

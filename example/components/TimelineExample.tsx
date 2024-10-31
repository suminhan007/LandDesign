import React from "react";
import Title from "../../packages/Title";
import Timeline from "../../packages/Timeline";

export default function TimelineExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="纵向时间轴" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Timeline>
            <Timeline.Item title="事件一" subTitle="2024-1-1" />
            <Timeline.Item
              title="事件二"
              subTitle="2024-2-1"
              desc="非常重要的一天"
            />
            <Timeline.Item title="事件三" subTitle="2024-5-1" />
          </Timeline>
        </div>
        <Title title="横向时间轴" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Timeline direction="row">
            <Timeline.Item title="事件一" subTitle="2024-1-1" />
            <Timeline.Item
              title="事件二"
              subTitle="2024-2-1"
              desc="非常重要的一天"
            />
            <Timeline.Item title="事件三" subTitle="2024-5-1" />
          </Timeline>
        </div>
      </div>
    </div>
  );
}

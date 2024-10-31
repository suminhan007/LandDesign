import React from "react";
import Title from "../../packages/Title";
import Timeline from "../../packages/Timeline";
import Icon from "../../packages/Icon";

export default function TimelineExample() {
  const mockData = [
    { title: '事件一', subTitle: '2024-2-1' },
    { title: '事件二', subTitle: '2024-3-1', desc: '事件二的描述内容' },
    { title: '事件三', subTitle: '2024-5-1' }
  ]
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="纵向时间轴" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Timeline data={mockData} />
        </div>
        <Title title="横向时间轴" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Timeline direction="row" data={mockData} />
        </div>
        <Title title="自定义时间轴节点" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Timeline data={mockData?.map((i, idx) => Object.assign(i, { icon: <Icon name='single-number' value={idx + 1} /> }))} />
          <Timeline data={[
            { title: '事件一', subTitle: '2024-2-1', icon: <p>🌄</p> },
            { title: '事件二', subTitle: '2024-3-1', desc: '事件二的描述内容', icon: <p>☀️</p> },
            { title: '事件三', subTitle: '2024-5-1', icon: <p>🌆</p> }]} />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Title from "../../packages/Title";
import Menu, { ClickType } from "../../packages/Menu";
import { IconAhead } from "../../packages/Icon";

export default function MenuExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="基本用法" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Menu
            data={[
              { key: 1, title: "Navigation 1", clickType: ClickType.SELF },
              { key: 2, title: "Navigation 2", clickType: ClickType.SELF },
              { key: 3, title: "Navigation 3", clickType: ClickType.SELF },
              { key: 4, title: "Navigation 4", clickType: ClickType.SELF },
              { key: 5, title: "Navigation 5", clickType: ClickType.SELF },
            ]}
            actived={1}
            border
          />
        </div>
        <Title title="角标" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Menu
            data={[
              { key: 1, title: "Navigation 1", clickType: ClickType.SELF },
              {
                key: 2,
                title: "Navigation 2",
                clickType: ClickType.SELF,
                isNew: true,
              },
              {
                key: 3,
                title: "Navigation 3",
                clickType: ClickType.SELF,
                isNew: "Hot",
              },
              { key: 4, title: "Navigation 4", clickType: ClickType.SELF },
              { key: 5, title: "Navigation 5", clickType: ClickType.SELF },
            ]}
            actived={1}
          />
        </div>
        <Title title="不可点击 & 禁用" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Menu
            data={[
              {
                key: 1,
                title: "Navigation(cursor)",
                clickType: ClickType.SELF,
              },
              {
                key: 2,
                title: "Navigation(default)",
                clickType: ClickType.SIMPLE,
              },
              {
                key: 2,
                title: "Navigation(not-allowed)",
                clickType: ClickType.DISABLED,
              },
            ]}
            actived={1}
          />
        </div>
        <Title title="包含下拉框" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Menu
            data={[
              {
                key: 1,
                title: "Navigation(cursor)",
                clickType: ClickType.SELF,
                dropData: [
                  { key: 1, title: "标题", clickType: ClickType.SELF },
                ],
              },
              {
                key: 2,
                title: "Navigation(default)",
                clickType: ClickType.SELF,
              },
            ]}
            actived={1}
          />
        </div>
        <Title title="列向导航" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Menu
            data={[
              { key: 1, title: "Navigation 1", clickType: ClickType.SELF },
              { key: 2, title: "Navigation 2", clickType: ClickType.SELF },
              { key: 3, title: "Navigation 3", clickType: ClickType.SELF },
              { key: 4, title: "Navigation 4", clickType: ClickType.SELF },
              { key: 5, title: "Navigation 5", clickType: ClickType.SELF },
            ]}
            actived={3}
            direction="column"
            style={{ width: 132 }}
          />
        </div>
        <Title title="导航选中风格" type="h3" />
        <div className="flex column items-center gap-24 border p-32">
          <Menu
            data={[
              { key: 1, title: "Navigation 1", clickType: ClickType.SELF },
              { key: 2, title: "Navigation 2", clickType: ClickType.SELF },
              { key: 3, title: "Navigation 3", clickType: ClickType.SELF },
            ]}
            actived={1}
          />
          <Menu
            data={[
              { key: 1, title: "Navigation 1", clickType: ClickType.SELF },
              { key: 2, title: "Navigation 2", clickType: ClickType.SELF },
              { key: 3, title: "Navigation 3", clickType: ClickType.SELF },
            ]}
            actived={2}
            theme="background"
          />
          <Menu
            data={[
              { key: 1, title: "Navigation 1", clickType: ClickType.SELF },
              { key: 2, title: "Navigation 2", clickType: ClickType.SELF },
              { key: 3, title: "Navigation 3", clickType: ClickType.SELF },
            ]}
            actived={3}
            theme="line"
          />
        </div>
        <div className="flex justify-center gap-24 border p-32">
          <Menu
            data={[
              { key: 1, title: "Navigation 1", clickType: ClickType.SELF },
              { key: 2, title: "Navigation 2", clickType: ClickType.SELF },
              { key: 3, title: "Navigation 3", clickType: ClickType.SELF },
            ]}
            actived={1}
            direction="column"
          />
          <Menu
            data={[
              { key: 1, title: "Navigation 1", clickType: ClickType.SELF },
              { key: 2, title: "Navigation 2", clickType: ClickType.SELF },
              { key: 3, title: "Navigation 3", clickType: ClickType.SELF },
            ]}
            actived={2}
            theme="background"
            direction="column"
          />
          <Menu
            data={[
              { key: 1, title: "Navigation 1", clickType: ClickType.SELF },
              { key: 2, title: "Navigation 2", clickType: ClickType.SELF },
              { key: 3, title: "Navigation 3", clickType: ClickType.SELF },
            ]}
            actived={3}
            theme="line"
            direction="column"
          />
        </div>
        <Title title="带图标导航" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Menu
            data={[
              {
                key: 1,
                title: "Title1",
                icon: <IconAhead />,
                clickType: ClickType.SELF,
              },
            ]}
            actived={3}
          />
        </div>
      </div>
    </div>
  );
}

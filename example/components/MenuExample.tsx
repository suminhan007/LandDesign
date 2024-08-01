import React from "react";
import Title from "../../packages/Title";
import Menu, { ClickType } from "../../packages/Menu";
import { IconHome } from "../../packages/Icon";

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
            active={1}
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
            active={1}
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
            active={1}
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
                  { key: 1, title: "option1", clickType: ClickType.SELF },
                  { key: 2, title: "option2", clickType: ClickType.SELF },
                  { key: 3, title: "option3", clickType: ClickType.SELF },
                ],
              },
              {
                key: 2,
                title: "Navigation(default)",
                clickType: ClickType.SELF,
              },
            ]}
            active={1}
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
            active={3}
            direction="column"
            style={{ width: 132 }}
          />
        </div>
        <Title title="定制导航样式" type="h3" />
        <div className="flex column items-center gap-24 border p-32">
          <Menu
            data={[
              { key: 1, title: "Navigation 1", clickType: ClickType.SELF },
              { key: 2, title: "Navigation 2", clickType: ClickType.SELF },
              { key: 3, title: "Navigation 3", clickType: ClickType.SELF },
            ]}
            active={1}
          />
          <Menu
            data={[
              { key: 1, title: "Navigation 1", clickType: ClickType.SELF },
              { key: 2, title: "Navigation 2", clickType: ClickType.SELF },
              { key: 3, title: "Navigation 3", clickType: ClickType.SELF },
            ]}
            active={1}
            theme={{ hoverBg: 'var(--color-bg-1)', activeBg: 'var(--color-bg-1)' }}
          />
          <Menu
            data={[
              { key: 1, title: "Navigation 1", clickType: ClickType.SELF },
              { key: 2, title: "Navigation 2", clickType: ClickType.SELF },
              { key: 3, title: "Navigation 3", clickType: ClickType.SELF },
            ]}
            active={1}
            theme={{ activeColor: 'var(--color-primary-6)', lineColor: 'var(--color-primary-6)' }}
          />
          <Menu
            data={[
              { key: 1, title: "Navigation 1", clickType: ClickType.SELF },
              { key: 2, title: "Navigation 2", clickType: ClickType.SELF },
              { key: 3, title: "Navigation 3", clickType: ClickType.SELF },
            ]}
            active={1}
            theme={{ activeColor: 'var(--color-primary-6)', activeBg: 'var(--color-primary-1)', lineColor: 'var(--color-primary-6)' }}
          />
        </div>
        <div className="flex justify-center gap-32 border p-32">
          <Menu
            data={[
              { key: 1, title: "Navigation 1", clickType: ClickType.SELF },
              { key: 2, title: "Navigation 2", clickType: ClickType.SELF },
              { key: 3, title: "Navigation 3", clickType: ClickType.SELF },
            ]}
            active={1}
            direction="column"
          />
          <Menu
            data={[
              { key: 1, title: "Navigation 1", clickType: ClickType.SELF },
              { key: 2, title: "Navigation 2", clickType: ClickType.SELF },
              { key: 3, title: "Navigation 3", clickType: ClickType.SELF },
            ]}
            active={2}
            direction="column"
            theme={{ hoverBg: 'var(--color-bg-1)', activeBg: 'var(--color-bg-1)' }}
          />
          <Menu
            data={[
              { key: 1, title: "Navigation 1", clickType: ClickType.SELF },
              { key: 2, title: "Navigation 2", clickType: ClickType.SELF },
              { key: 3, title: "Navigation 3", clickType: ClickType.SELF },
            ]}
            active={3}
            direction="column"
            theme={{ activeColor: 'var(--color-primary-6)', lineColor: 'var(--color-primary-6)' }}
          />
          <Menu
            data={[
              { key: 1, title: "Navigation 1", clickType: ClickType.SELF },
              { key: 2, title: "Navigation 2", clickType: ClickType.SELF },
              { key: 3, title: "Navigation 3", clickType: ClickType.SELF },
            ]}
            active={3}
            direction="column"
            theme={{ activeColor: 'var(--color-primary-6)', activeBg: 'var(--color-primary-1)', lineColor: 'var(--color-primary-6)' }}
          />
        </div>
        <Title title="带图标导航" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Menu
            data={[
              {
                key: 1,
                title: "Home",
                icon: <IconHome />,
                clickType: ClickType.SELF,
              },
            ]}
            active={1}
          />
        </div>
      </div>
    </div>
  );
}

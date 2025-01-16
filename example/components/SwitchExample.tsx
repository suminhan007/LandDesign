import Switch from "../../packages/Switch";
import Title from "../../packages/Title";
import Icon from "../../packages/Icon";

export default function SwitchExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规开关" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Switch />
        </div>
        <Title title="包含标题" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Switch label="是否开启" checkedLabel="是否开启" />
        </div>
        <Title title="包含提示内容" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Switch label="是否开启" checkedLabel="是否开启" iconInfo="开启后..." />
        </div>
        <Title title="禁用" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Switch label="是否开启" checkedLabel="是否开启" disabled info="禁用" />
        </div>
        <Title title="包含图标" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Switch
            label="是否开启"
            checkedLabel="是否开启"
            icon={
              <Icon name="light" size={12} stroke="var(--color-primary-6)" />
            }
            checkedIcon={
              <Icon name="dark" size={12} fill="var(--color-primary-6)" />
            }
          />
        </div>
      </div>
    </div>
  );
}

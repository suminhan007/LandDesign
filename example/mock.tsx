import AnchorExample from "./Components/AnchorExample";
import ButtonExample from "./Components/ButtonExample"
import DividerExample from "./Components/DividerExample";
import FlexExample from "./Components/FlexExample";
import GridExample from "./Components/GridExample";
import IconExample from "./Components/IconExample";
import LayoutExample from "./Components/LayoutExample";
import LinkExample from "./Components/LinkExample";
import MenuExample from "./Components/MenuExample";
import Link from "../packages/Link";
import Button from "../packages/Button";
import AffixContainerExample from "./Components/AffixContainerExample";
import BreadCrumbExample from "./Components/BreadCrumbExample";
import PaginationExample from "./Components/PaginationExample";
import StepsExample from "./Components/StepsExample";
import Icon from "../packages/Icon";
import Divider from "../packages/Divider";
import Flex from "../packages/Flex";
import Grid, { gridType } from "../packages/Grid";
import AffixContainer from "../packages/AffixContainer";
import Anchor from "../packages/Anchor";
import BreadCrumb from "../packages/BreadCrumb";
import Menu, { ClickType } from "../packages/Menu";
import Pagination from "../packages/Pagination";
import Steps from "../packages/Steps";
import Input from "../packages/Input";
import TagInput from "../packages/TagInput";
import Select from '../packages/Select';
import SelectTree from '../packages/SelectTree';
import Radio from '../packages/Radio';
import ColorPicker from '../packages/ColorPicker';
import DatePicker from '../packages/DatePicker';
import NumberInput from '../packages/NumberInput';
import Switch from '../packages/Switch';
import Slider from '../packages/Slider';
import Uploader from '../packages/Uploader';
import Rate from '../packages/Rate';

import Table from "../packages/Table";

import Title from '../packages/Title';
import Loading from "../packages/Loading";
import Pop from "../packages/Pop";
import Layout from "../packages/Layout";
import Header from "../packages/Header";
import Sider from "../packages/Sider";
import Content from "../packages/Content";
import Footer from "../packages/Footer";
import InputExample from "./Components/InputExample";
import TagInputExample from "./Components/TagInputExample";
import SelectExample from "./Components/SelectExample";
import SelectTreeExample from "./Components/SelectTreeExample";
import ImageExample from "./components/ImageExample";
import RadioExample from "./Components/RadioExample";
import Checkbox from "../packages/Checkbox";
import CheckboxExample from "./Components/CheckboxExample";
import ColorPickerExample from "./Components/ColorPickerExample";
import DatePickerExample from "./Components/DatePickerExample";
import NumberInputExample from "./Components/NumberInputExample";
import UploaderExample from "./components/UploadExample";
import SwitchExample from "./components/SwitchExample";
import SliderExample from "./components/SliderExample";
import AutoContainerExample from "./Components/AutoContainerExample";
import VideoExample from "./Components/VideoExample";
import RateExample from "./components/RateExample";
import AvatarExample from "./Components/AvatarExample";
import Avatar from "../packages/Avatar";
import BadgeExample from "./Components/BadgeExample";
import Badge from '../packages/Badge';
import CalendarExample from "./Components/CalendarExample";
import Calendar from "../packages/Calendar";
import SwitchBarExample from "./components/SwitchBarExample";
import SwitchBar from "../packages/SwitchBar";
import PopExample from "./components/PopExample";
import TitleExample from "./components/TitleExample";
import Skeleton from "../packages/Skeleton";
import SkeletonExample from "./components/SkeletonExample";
import LoadingExample from "./components/LoadingExample";
import Watermark from "../packages/Watermark";
import WatermarkExample from "./components/WatermarkExample";
import Collapse from "../packages/Collapse";
import CollapseExample from "./components/CollapseExample";
import StateExample from "./components/StateExample";
import State from "../packages/State";
import AlertExample from "./components/AlertExample";
import Alert from "../packages/Alert";
import AudioExample from "./components/AudioExample";
import Audio from "../packages/Audio";
import StatisticExample from "./Components/StatisticExample";
import Statistic from "../packages/Statistic";
import TableExample from "./components/TableExample";
import TagExample from "./components/TagExample";
import TimelineExample from "./components/TimelineExample";
import MessageExample from "./components/MessageExample";
import DialogExample from "./Components/DialogExample";
import Dialog from "../packages/Dialog";
import DrawerExample from "./Components/DrawerExample";
import PopConfirmExample from "./Components/PopConfirmExample";
import ProgressExample from "./Components/ProgressExample";
import Progress from "../packages/Progress";
import EllipsisExample from "./Components/EllipsisExample";
import Ellipsis from "../packages/Ellipsis";
import Image from "../packages/Image";
import Video from "../packages/Video";
import Tag from "../packages/Tag";
import Timeline from "../packages/Timeline";
import Message from "../packages/Message";
import HighlightTextareaExample from "./Components/HighlightTextareaExample";
import HighlightTextarea from "../packages/HighlightTextarea";
import HighlightOnlyWrapTextareaExample from "./Components/HighlightOnlyWrapTextareaExample";
import HighlightOnlyWrapTextarea from "../packages/HighlightOnlyWrapTextarea";
import GridTemplateExample from "./Components/GridTemplateExample";
import GridTemplate from "../packages/GridTemplate";
import Dropdown from "../packages/Dropdown";

export const COMMON_COMPONENTS_DATA = [
  {
    id: "icon",
    en: "Icon",
    zh: "图标",
    desc: "Land Design内置常规图标。",
    props: [
      { name: "size", type: "number", desc: "图标大小", optional: true },
      { name: "fill", type: "string", desc: "图标填充颜色", optional: true },
      { name: "stroke", type: "string", desc: "图标描边颜色", optional: true },
      {
        name: "strokeWidth",
        type: "number",
        desc: "图标填充颜色",
        optional: true,
      },
      { name: "onClick", type: "(e:any) => void", desc: "点击事件", optional: true },
      { name: "style", type: "CSSProperties", desc: "自定义图标样式", optional: true },
      { name: "className", type: "string", desc: "自定义图标类名", optional: true },
    ],
    example: <IconExample />,
    demo: <Icon name="check-fill" size={36} />,
  },
  {
    id: "button",
    en: "Button",
    zh: "按钮",
    desc: "按钮是一种命令组件，可发起一个即时操作。",
    props: [
      { name: "text", type: "string", desc: "按钮主要文案", optional: true },
      { name: "subText", type: "string", desc: "按钮次要文案", optional: true },
      { name: "icon", type: "element", desc: "按钮图标", optional: true },
      {
        name: "width",
        type: "string | number",
        desc: "按钮宽度",
        optional: true,
      },
      {
        name: "height",
        type: "string | number",
        desc: "按钮高度",
        optional: true,
      },
      {
        name: "justify",
        type: "'center' | 'start' | 'end'",
        desc: "按钮文字对齐方式",
        optional: true,
      },
      {
        name: "type",
        type: "'text' | 'background' | 'border' | 'line'",
        desc: "按钮风格",
        optional: true,
      },
      {
        name: "status",
        type: "'default' | 'primary' | 'warning' | 'danger' | 'success'",
        desc: "按钮状态",
        optional: true,
      },
      {
        name: "disabled",
        type: "boolean",
        desc: "按钮是否禁用",
        optional: true,
      },
      {
        name: "loading",
        type: "boolean",
        desc: "按钮是否加载中",
        optional: true,
      },
      {
        name: "pop",
        type: "string | element",
        desc: "按钮气泡",
        optional: true,
      },
      {
        name: "popProps",
        type: "popProps",
        desc: "Popover气泡相关属性",
        optional: true,
      },
      {
        name: "href",
        type: "string",
        desc: "跳转链接：按钮作为 a 标签",
        optional: true,
      },
      {
        name: "target",
        type: "'_self' | '_blank' | '_top' | '_parent'",
        desc: "a 标签对应的 target 属性",
      },
      { name: "onClick", type: "func", desc: "按钮点击事件" },
      { name: "style", type: "CSSProperties", desc: "自定义按钮样式", optional: true },
      { name: "className", type: "string", desc: "自定义按钮类名", optional: true },
    ],
    example: <ButtonExample />,
    demo: <Button text="按钮"></Button>,
  },
  {
    id: "link",
    en: "Link",
    zh: "链接",
    desc: "",
    props: [
      {
        name: "status",
        type: "'primary' | 'warning' | 'success' | 'error'",
        desc: "链接类型",
        optional: true,
      },
      {
        name: "disabled",
        type: "boolean",
        desc: "链接是否禁用",
        optional: true,
      },
      {
        name: "active",
        type: "boolean",
        desc: "链接是否已点击",
        optional: true,
      },
      {
        name: "tip",
        type: "element | string",
        desc: "链接提示气泡",
        optional: true,
      },
      {
        name: "tipProps",
        type: <Link href="/component?name=popover">tipProps</Link>,
        desc: "链接提示气泡属性",
        optional: true,
      },
      { name: "children", type: "element", desc: "链接内容", optional: true },
      { name: "style", type: "CSSProperties", desc: "自定义链接样式", optional: true },
      { name: "className", type: "string", desc: "自定义链接类名", optional: true },
    ],
    example: <LinkExample />,
    demo: <Link>链接</Link>,
  },
];

export const LAYOUT_COMPONENTS_DATA = [
  {
    id: "divider",
    en: "Divider",
    zh: "分割线",
    desc: "",
    props: [
      {
        name: "direction",
        type: "'row' | 'column'",
        desc: "分割线方向",
        optional: true,
      },
      { name: "size", type: "number", desc: "分割线粗细", optional: true },
      {
        name: "margin",
        type: "number",
        desc: "分割线上下或左右边距",
        optional: true,
      },
      {
        name: "type",
        type: "'solid' | 'dashed'",
        desc: "分割线类型：实线或者虚线",
        optional: true,
      },
      { name: "color", type: "string", desc: "分割线颜色", optional: true },
      {
        name: "content",
        type: "element | string",
        desc: "分割线包含的内容",
        optional: true,
      },
      {
        name: "align",
        type: "'left' | 'center' | 'right'",
        desc: "分割线包含内容时对齐方式",
        optional: true,
      },
      { name: "style", type: "CSSProperties", desc: "自定义分割线样式", optional: true },
      { name: "className", type: "string", desc: "自定义分割线类名", optional: true },
    ],
    example: <DividerExample />,
    demo: <Divider />,
  },
  {
    id: "flex",
    en: "Flex",
    zh: "弹性布局",
    desc: "弹性布局",
    props: [
      {
        name: "w",
        type: "string",
        desc: "盒子的宽度，默认为[100%]",
        optional: true,
      },
      { name: "h", type: "string", desc: "盒子的高度", optional: true },
      {
        name: "column",
        type: "boolean",
        desc: "flex 主轴的方向是否垂直",
        optional: true,
      },
      { name: "wrap", type: "boolean", desc: "元素是否换行", optional: true },
      {
        name: "justify",
        type: "'start' | 'center' | 'end'",
        desc: "元素在主轴方向上的对齐方式",
        optional: true,
      },
      {
        name: "align",
        type: "'start' | 'center' | 'end'",
        desc: "元素在交叉轴方向上的对齐方式",
        optional: true,
      },
      { name: "gap", type: "string", desc: "元素之间的间隙", optional: true },
      {
        name: "bothCenter",
        type: "boolean",
        desc: "元素是否在主轴和交叉轴方向上都居中显示",
        optional: true,
      },
      { name: "children", type: "element", desc: "自定义元素", optional: true },
      { name: "style", type: "CSSProperties", desc: "自定义Flex布局样式", optional: true },
      { name: "className", type: "string", desc: "自定义Flex布局类名", optional: true },
    ],
    example: <FlexExample />,
    demo: (
      <Flex gap={8}>
        {Array.from({ length: 3 }).map((_i, index) => (
          <div
            key={index}
            className="bg-primary flex-1"
            style={{ height: "40px" }}
          ></div>
        ))}
      </Flex>
    ),
  },
  {
    id: "grid",
    en: "Grid",
    zh: "栅格",
    props: [
      {
        name: "type",
        type: "'column-fit' | 'column-fill' | 'row-fit' | 'row-fill' | 'column-repeat' | 'row-repeat' | 'default'",
        desc: "常见的几种 grid 布局",
      },
      {
        name: "autoSize",
        type: "number",
        desc: "自动填充模式下的最小宽度/高度",
      },
      { name: "repeatNum", type: "number", desc: "按行或按列重复时的重复数量" },
      { name: "gap", type: "number | number[]", desc: "行列间隙" },
      { name: "children", type: "element", desc: "自定义元素", optional: true },
      { name: "style", type: "CSSProperties", desc: "自定义Grid布局样式", optional: true },
      { name: "className", type: "string", desc: "自定义Grid布局类名", optional: true },
    ],
    example: <GridExample />,
    demo: (
      <Grid
        className="width-100"
        gap={8}
        type={gridType.ColumnRepeat}
        repeatNum={2}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="bg-primary"
            style={{ height: "40px" }}
          ></div>
        ))}
      </Grid>
    ),
  },
  {
    id: "layout",
    en: "Layout",
    zh: "布局",
    props: [{ name: "children", type: "element", desc: "内容" },{ name: "style", type: "CSSProperties", desc: "自定义Layout样式", optional: true },
      { name: "className", type: "string", desc: "自定义Layout类名", optional: true },],
    example: <LayoutExample />,
    demo: (
      <Layout className="border width-100 ratio-1">
        <Header
          logo={<p>🌷🌷🌷</p>}
          name={<Title title="Web Site" type="h2" />}
          fixed
          filter={10}
        />
        <Layout>
          <Sider placement="left">
            <Flex bothCenter h="100%">
              SiderLeft
            </Flex>
          </Sider>
          <Content style={{ minHeight: "40px" }}>
            <Flex bothCenter h="100%">
              Content
            </Flex>
          </Content>
          <Sider placement="right">
            <Flex bothCenter h="100%">
              SiderRight
            </Flex>
          </Sider>
        </Layout>
        <Footer>
          <Flex bothCenter>Footer</Flex>
        </Footer>
      </Layout>
    ),
  },
];

export const NAV_COMPONENTS_DATA = [
  {
    id: "affixContainer",
    en: "affixContainer",
    zh: "图钉",
    desc: "图钉用于在容器内部指定位置展示内容",
    props: [
      { name: "ltOption", type: (<><Link href="#AffixContainerItemProps">AffixContainerItemProps</Link></>), desc: "左上角图钉" },
      { name: "rtOption", type: (<><Link href="#AffixContainerItemProps">AffixContainerItemProps</Link></>), desc: "右上角图钉" },
      { name: "lbOption", type: (<><Link href="#AffixContainerItemProps">AffixContainerItemProps</Link></>), desc: "左下角图钉" },
      { name: "rbOption", type: (<><Link href="#AffixContainerItemProps">AffixContainerItemProps</Link></>), desc: "右下角图钉" },
      { name: "centerOption", type: (<><Link href="#AffixContainerItemProps">AffixContainerItemProps</Link></>), desc: "中心图钉" },
      { name: "lcOption", type: (<><Link href="#AffixContainerItemProps">AffixContainerItemProps</Link></>), desc: "左侧中心图钉" },
      { name: "rcOption", type: (<><Link href="#AffixContainerItemProps">AffixContainerItemProps</Link></>), desc: "右侧中心图钉" },
      { name: "tcOption", type: (<><Link href="#AffixContainerItemProps">AffixContainerItemProps</Link></>), desc: "顶部中心图钉" },
      { name: "bcOption", type: (<><Link href="#AffixContainerItemProps">AffixContainerItemProps</Link></>), desc: "底部中心图钉" },
      { name: "customOption", type: (<><Link href="#AffixContainerItemProps">AffixContainerItemProps</Link></>), desc: "自定义位置的图钉" },
      { name: "disabled", type: "boolean", desc: "是否禁用图钉" },
      { name: "Style", type: "CSSProperties", desc: "图钉定位容器对应的style" },
      {
        name: "className",
        type: "string",
        desc: "图钉定位容器对应的className",
      },
      { name: "children", type: "element", desc: "图钉容器内容" },
      { name: "onClick", type: "(e:any) => void", desc: "图钉容器的点击事件" },
    ],
    types: [{
      name: 'AffixContainerItemProps',
      data: [
        { name: "content", type: "element", desc: "图钉元素内容" },
        { name: "gap", type: "number", desc: "快捷定位时图钉与四周的距离" },
        { name: "radius", type: "element", desc: "设置图钉圆角" },
        { name: "dark", type: "element", desc: "设置图标为暗色样式" },
        { name: "squareSize", type: "element", desc: "设置图钉为等边形，并设置大小" },
        { name: "custom", type: "element", desc: "不使用默认的图钉样式" },
        { name: "hover", type: "boolean", desc: "鼠标悬浮时隐藏图钉" },
        { name: "hoverShow", type: "boolean", desc: "鼠标悬浮时显示图钉" },
        { name: "zIndex", type: "number", desc: "设置图标的层级，默认为1" },
        { name: "Style", type: "CSSProperties", desc: "自定义图钉的style" },
        {
          name: "className",
          type: "string",
          desc: "自定义图钉的className",
        },
        { name: "onClick", type: "(e:any) => void", desc: "图钉点击事件" },
      ]
    }],
    example: <AffixContainerExample />,
    demo: (
      <AffixContainer
        className="ratio-1 border radius-8"
        style={{ width: "60%" }}
        rtOption={{
          content: <Button type="background" icon={<Icon name="copy" />} />,
          custom: true,
        }}
      />
    ),
  },
  {
    id: "anchor",
    en: "anchor",
    zh: "锚点",
    desc: "锚点用于跳转至页面指定位置。",
    props: [
        { name: "data", type: <><Link href={'#AnchorItemType'}>AnchorItemType</Link></>, desc: "desc" },
      {name:'style', type:'CSSProperties',desc:'自定义style'},
      {name:'className', type:'string',desc:'自定义className'},
    ],
    types:[{
      name: 'AnchorItemType',
      data: [
        {name:'key', type:'string',desc:'唯一标识'},
        {name:'href', type:'string',desc:'锚点链接'},
        {name:'title', type:'string',desc:'锚点标题'},
      ]
    }],
    example: <AnchorExample />,
    demo: (
      <Anchor
        data={[
          { key: "组件预览", href: "#组件预览", title: "组件预览" },
          { key: "API", href: "#API", title: "API" },
          { key: "Type", href: "#Type", title: "Type" },
        ]}

      />
    ),
  },
  {
    id: "breadCrumb",
    en: "Breadcrumb",
    zh: "面包屑",
    desc: "锚点用于跳转至页面指定位置。",
    props: [
        { name: "data", type: <><Link href={'#BreadCrumbItemType'}>BreadCrumbItemType</Link>[]</>, desc: "desc" },
      {name:'current',type: 'string',desc:'当前所在的层级'},
      {name:'onChange',type:'(item: BreadCrumbItemType) => void',desc:'点击切换事件',optional: true}
    ],
    types: [
      {
        name: 'BreadCrumbItemType',
      data:[
        {name:'key', type:'string',desc:'唯一标识'},
        {name:'label', type:'string',desc:'内容'},
        {name:'tip', type:'string'},
        {name:'maxWidth', type:'string'},
      ]}
    ],
    example: <BreadCrumbExample />,
    demo: (
      <BreadCrumb
        data={[
            { key: '1', label: "页面1" },
          { key: '2', label: "页面页面页面页面1-1", maxWidth: 100 },
          { key: '3', label: "页面页面页面页面1-1-2" },
        ]}
        current={'3'}
      />
    ),
  },
  {
    id: "menu",
    en: "Menu",
    zh: "导航菜单",
    desc: "导航菜单。",
    props: [
      {
        name: "data",
        type: (
          <>
            <Link href="#MenuItemType">MenuItemType</Link> []
          </>
        ),
        desc: "导航数据",
        optional: true,
      },
      {
        name: "active",
        type: "number",
        desc: "当前选中的导航项对应的唯一key",
        optional: true,
      },
      {
        name: "direction",
        type: "'row' | 'column'",
        desc: "导航排列方向",
        optional: true,
      },
      {
        name: "theme",
        type: (
          <>
            <Link href="#ThemeType">ThemeType</Link> []
          </>
        ),
        desc: "定制导航主题",
        optional: true,
      },
      {
        name: "border",
        type: "boollean",
        desc: "是否需要下边框",
        optional: true,
      },
      {
        name: "itemStyle",
        type: "CSSProperties",
        desc: "一级导航选项对应的 style",
        optional: true,
      },
      {
        name: "itemClassName",
        type: "string",
        desc: "一级导航选项对应的 className ",
        optional: true,
      },
    ],
    example: <MenuExample />,
    demo: (
      <Menu
        data={[
          { key: '1', title: "Navigation 1", clickType: ClickType.SELF },
          { key: '2', title: "Navigation 2", clickType: ClickType.SELF },
        ]}
        active={'1'}
        style={{ height: "64px" }}
      />
    ),
    types: [
      {
        name: "MenuItemType",
        data: [
          { name: "key", type: "number", desc: "唯一标识", optional: false },
          {
            name: "title",
            type: "string",
            desc: "导航项副标题",
            optional: true,
          },
          {
            name: "subTitle",
            type: "string",
            desc: "导航项主标题",
            optional: true,
          },
          {
            name: "icon",
            type: "string | element",
            desc: "导航项前置图标",
            optional: true,
          },
          {
            name: "isNew",
            type: "string | element | boolean",
            desc: "导航项右上角角标",
            optional: true,
          },
          {
            name: "href",
            type: "string",
            desc: "导航项对应的链接",
            optional: true,
          },
          {
            name: "clickType",
            type: <Link href="#ClickType">ClickType</Link>,
            desc: "导航项点击跳转类型",
            optional: true,
          },
          {
            name: "dropData",
            type: (
              <>
                <Link href="#MenuItemType">MenuItemType</Link> []
              </>
            ),
            desc: "导航项下拉框副导航数据",
            optional: true,
          },
        ],
        desc: "定义导航项数据类型。",
      },
    ],
  },
  {
    id: "pagination",
    en: "Pagination",
    zh: "分页",
    desc: "分页。",
    props: [
      { name: "current", type: "number", desc: "当前页码" },
      { name: "total", type: "number", desc: "总页数" },
      { name: "pageSize", type: "number", desc: "每次加载的页数" },
      { name: "showTotal", type: "boolean", desc: "是否显示总页数" },
      { name: "showInput", type: "boolean", desc: "是否显示输入框" },
      {
        name: "onChange",
        type: "(current:number) => void;",
        desc: "页码切换事件",
      },
    ],
    example: <PaginationExample />,
    demo: <Pagination total={4} current={1} pageSize={1} />,
  },
  {
    id: "step",
    en: "Steps",
    zh: "步骤条",
    desc: "步骤条。",
    props: [
      {
        name: "data",
        type: <Link href="#StepsItemType">StepsItemType</Link>,
        desc: "步骤条数据类型",
      },
      { name: "current", type: "number | string", desc: "当前进度" },
      { name: "useDivider", type: "boolean", desc: "是否显示分割线" },
      { name: "dividerWidth", type: "string", desc: "分割线宽度" },
      {
        name: "onClick",
        type: "(item: StepsItemType) => void;",
        desc: "步骤条点击事件",
      },
    ],
    example: <StepsExample />,
    demo: (
      <Steps
        data={[
          { key: 1, title: "步骤1", desc: "描述文字" },
          { key: 2, title: "步骤2", desc: "描述文字" },
          { key: 3, title: "步骤3", desc: "描述文字" },
        ]}
        current={2}
        finished={[1]}
      />
    ),
  },
  {
    id: "dropdown",
    en: "Dropdown",
    zh: "下拉菜单",
    desc: "锚点用于跳转至页面指定位置。",
    props: [
      {name:'toggle',type: 'element',desc:'下拉触发节点',optional: false},
      { name: "dropData", type: <><Link href={'#DropdownItemType'}>DropdownItemType</Link>[]</>, desc: "下拉列表数据" },
      {name:'dropContent',type: "element",desc:'自定义下拉内容',optional: true},
      {name:'placement',type:"'left'|'right'|'bottom'",desc:'下拉面板展开的方向'},
      {name:'onChange', type:'(data:DropdownItemType) => void',desc:'点击下拉列表',optional: true},
      {name:'toggleClassName',type:'string',desc:'自定义toggle节点的类名',optional: true},
      {name:'toggleStyle',type:'CSSProperties',desc:'自定义toggle节点的style',optional: true},
      {name:'dropClassName',type:'string',desc:'自定义下拉框节点的类名',optional: true},
      {name:'dropStyle',type:'CSSProperties',desc:'自定义下拉框节点的style',optional: true},
    ],
    example: <FlexExample />,
    demo: <Dropdown toggle={<Button text={'点击下拉'}/>} dropContent={<>下拉内容</>}/>,
  },
];

export const INPUT_COMPONENTS_DATA = [
  {
    id: "input",
    en: "Input",
    zh: "输入框",
    desc: "步骤条。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <InputExample />,
    demo: <Input value="" />,
  },
  {
    id: "tagInput",
    en: "TagInput",
    zh: "标签输入框",
    desc: "标签输入框。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <TagInputExample />,
    demo: <TagInput />,
  },
  {
    id: "select",
    en: "Select",
    zh: "选择器",
    desc: "Land Design内置常规图标。",
    props: [
      {
        name: "data",
        type: <Link href="#StepsItemType">SelectTreeItemType</Link>,
        desc: "数据",
      },
      { name: "placeholder", type: "string", desc: "占位符" },
      { name: "selected", type: "string | number", desc: "当前选中项" },
      { name: "width", type: "number | string", desc: "宽度" },
      { name: "title", type: "string", desc: "标题" },
      { name: "titleInfo", type: "string", desc: "标题提示内容" },
      { name: "info", type: "Element", desc: "选框提示内容" },
      { name: "disabled", type: "boolean", desc: "是否整体禁用" },
      {
        name: "onChange",
        type: "(item: SelectTreeItemType) => void",
        desc: "选择事件",
      },
    ],
    type: [
      {
        name: "SelectTreeItemType",
        data: [
          { name: "value", type: "string | number", desc: "唯一标识" },
          { name: "label", type: "string | Element", desc: "选项值" },
          { name: "tip", type: "Element", desc: "选项提示内容" },
          { name: "info", type: "Element", desc: "选项图标类型提示" },
          { name: "disabled", type: "boolean", desc: "是否禁用该选项" },
        ],
      },
    ],
    example: <SelectExample />,
    demo: <Select />,
  },
  {
    id: "selectTree",
    en: "SelectTree",
    zh: "层级选择器",
    desc: "Land Design内置常规图标。",
    props: [
      {
        name: "data",
        type: <Link href="#SelectTreeItemType">SelectTreeItemType</Link>,
        desc: "数据",
      },
      { name: "placeholder", type: "string", desc: "占位符" },
      { name: "selected", type: "string | number", desc: "当前选中项" },
      { name: "width", type: "number | string", desc: "宽度" },
      { name: "title", type: "string", desc: "标题" },
      { name: "titleInfo", type: "string", desc: "标题提示内容" },
      { name: "info", type: "Element", desc: "选框提示内容" },
      { name: "disabled", type: "boolean", desc: "是否整体禁用" },
      {
        name: "onChange",
        type: "(item: SelectTreeItemType) => void",
        desc: "选择事件",
      },
    ],
    type: [
      {
        name: "SelectTreeItemType",
        data: [
          { name: "value", type: "string | number", desc: "唯一标识" },
          { name: "label", type: "string | Element", desc: "选项值" },
          { name: "tip", type: "Element", desc: "选项提示内容" },
          { name: "info", type: "Element", desc: "选项图标类型提示" },
          { name: "disabled", type: "boolean", desc: "是否禁用该选项" },
          { name: "children", type: "SelectTreeItemType[]", desc: "二级数据" },
        ],
      },
    ],
    example: <SelectTreeExample />,
    demo: (
      <SelectTree
        data={[
          { value: "all", label: "全部" },
          {
            value: "shenzhen",
            label: "深圳市",
            children: [
              { value: "nanshan", label: "南山区" },
              { value: "futian", label: "福田区" },
              { value: "baoan", label: "宝安区" },
            ],
          },
        ]}
      />
    ),
  },
  {
    id: "radio",
    en: "Radio",
    zh: "单选列表",
    desc: "Land Design内置常规图标。",
    props: [
      {
        name: "data",
        type: <Link href="#CheckItemType">CheckItemType</Link>,
        desc: "数据类型",
      },
      { name: "checked", type: "number | string", desc: "当前选择项" },
      {
        name: "onChange",
        type: "(item: CheckItemType) => void;",
        desc: "选择事件",
      },
    ],
    type: [
      {
        name: "CheckItemType",
        data: [
          { name: "value", type: "number | string", desc: "唯一标识" },
          { name: "label", type: "string | Element", desc: "选项值" },
          { name: "info", type: "Element", desc: "选项提示内容" },
          { name: "disabled", type: "boolean", desc: "是否禁用该选项" },
        ],
      },
    ],
    example: <RadioExample />,
    demo: (
      <Radio
        data={[
          { value: 1, label: "选项1" },
          { value: 2, label: "选项2" },
          { value: 3, label: "选项3" },
        ]}
      />
    ),
  },
  {
    id: "checkbox",
    en: "Checkbox",
    zh: "多选框",
    desc: "Land Design内置常规图标。",
    props: [
      {
        name: "data",
        type: <Link href="#CheckItemType">CheckItemType</Link>,
        desc: "数据类型",
      },
      { name: "checked", type: "(number | string)[]", desc: "当前选择列表" },
      {
        name: "onChange",
        type: "(item: CheckItemType) => void;",
        desc: "选择事件",
      },
    ],
    type: [
      {
        name: "CheckItemType",
        data: [
          { name: "value", type: "number | string", desc: "唯一标识" },
          { name: "label", type: "string | Element", desc: "选项值" },
          { name: "info", type: "Element", desc: "选项提示内容" },
          { name: "disabled", type: "boolean", desc: "是否禁用该选项" },
        ],
      },
    ],
    example: <CheckboxExample />,
    demo: (
      <Checkbox
        data={[
          { value: 1, label: "选项1" },
          { value: 2, label: "选项2" },
          { value: 3, label: "选项3" },
        ]}
      />
    ),
  },
  {
    id: "switchBar",
    en: "SwitchBar",
    zh: "模块切换",
    desc: "Land Design内置常规图标。",
    example: <SwitchBarExample />,
    demo: (
      <SwitchBar
        value={1}
        data={[
          { value: 1, label: "模块1" },
          { value: 2, label: "模块2" },
          { value: 3, label: "模块3" },
        ]}
        width="300px"
      />
    ),
  },
  {
    id: "colorPicker",
    en: "ColorPicker",
    zh: "颜色选择器",
    desc: "Land Design内置常规图标。",
    props: [
      { name: "value", type: "string", desc: "外部回传的颜色值" },
      { name: "size", type: "string | number", desc: "尺寸" },
      { name: "useSelect", type: "boolean", desc: "是否可选颜色" },
      { name: "showList", type: "boolean", desc: "是否展示默认颜色列表" },
      {
        name: "defaultColorList",
        type: "string[][]",
        desc: "自定义默认颜色列表",
      },
      { name: "showOpacity", type: "boolean", desc: "是否可控制透明度" },
      { name: "input", type: "boolean", desc: "是否使用底部输入框" },
      { name: "info", type: "Element", desc: "提示内容" },
      {
        name: "onChange",
        type: "(color: string) => void;",
        desc: "颜色选择事件",
      },
      {
        name: "onCardClick",
        type: "(color: string) => void;",
        desc: "点击颜色显示块",
      },
    ],
    example: <ColorPickerExample />,
    demo: <ColorPicker value="var(--color-primary-6)" size={32} />,
  },
  {
    id: "datePicker",
    en: "DatePicker",
    zh: "日期选择器",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <DatePickerExample />,
    demo: <DatePicker />,
  },
  {
    id: "numberInput",
    en: "NumberInput",
    zh: "数字输入框",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <NumberInputExample />,
    demo: <NumberInput value={2} />,
  },
  {
    id: "switch",
    en: "Switch",
    zh: "开关",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <SwitchExample />,
    demo: <Switch label="是否开启" checkedLabel="是否开启" />,
  },
  {
    id: "slider",
    en: "Slider",
    zh: "滑动输入条",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <SliderExample />,
    demo: <Slider max={100} step={10} value={10} />,
  },
  {
    id: "rate",
    en: "Rate",
    zh: "评分",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <RateExample />,
    demo: <Rate />,
  },
  {
    id: "upload",
    en: "Upload",
    zh: "上传框",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <UploaderExample />,
    demo: <Uploader />,
  },
];

export const DISPLAY_COMPONENTS_DATA = [
  {
    id: "avatar",
    en: "Avatar",
    zh: "头像",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <AvatarExample />,
    demo: <Avatar />,
  },
  {
    id: "badge",
    en: "Badge",
    zh: "徽标数",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <BadgeExample />,
    demo: <Badge />,
  },
  {
    id: "calendar",
    en: "Calendar",
    zh: "日历",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <CalendarExample />,
    demo: <Calendar />,
  },
  {
    id: "collapse",
    en: "Collapse",
    zh: "折叠面板",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <CollapseExample />,
    demo: (
      <Collapse
        data={[
          {
            title: "折叠标题 1",
            details:
              "这部分是每个折叠面板折叠或展开的内容这部分是每个折叠面板折叠或展开的内容",
          },
          {
            title: "折叠标题 2 (展开)",
            details:
              "这部分是每个折叠面板折叠或展开的内容这部分是每个折叠面板折叠或展开的内容",
            open: true,
          },
          {
            title: "折叠标题 3",
            details:
              "这部分是每个折叠面板折叠或展开的内容这部分是每个折叠面板折叠或展开的内容",
          },
        ]}
        style={{ width: "300px" }}
      />
    ),
  },
  {
    id: "state",
    en: "State",
    zh: "状态",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <StateExample />,
    demo: <State type="empty" title="暂无内容" />,
  },
  {
    id: "image",
    en: "Image",
    zh: "图片",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <ImageExample />,
    demo: (
      <Image url="https://ingenueland.online/crochet-time/images/colorcard_default.jpeg" />
    ),
  },
  {
    id: "video",
    en: "Video",
    zh: "视频",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <VideoExample />,
    demo: (
      <Video
        src="https://asset.gdtimg.com/0bc35eaieaaabqac3d7lyztd32oeqluqbaqa.f0.mp4?dis_k=e91b096d31e564b3bf02b46ae94496d7&dis_t=1727244815"
        videoClassName="radius-8"
      />
    ),
  },
  {
    id: "audio",
    en: "Audio",
    zh: "音频",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <AudioExample />,
    demo: <Audio audioUrl="https://suminhan.cn/land-design/dapxiang.mp3" />,
  },
  {
    id: "popOver",
    en: "Popover",
    zh: "气泡",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <PopExample />,
    demo: (
      <Button text="hover" className="hover-pop">
        <Pop content="我是气泡" theme="dark" />
      </Button>
    ),
  },
  {
    id: "statistic",
    en: "Statistic",
    zh: "数值统计",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <StatisticExample />,
    demo: <Statistic value={10} unit="亿+" />,
  },
  {
    id: "table",
    en: "Table",
    zh: "表格",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <TableExample />,
    demo: (
      <Table
        className="width-100 mt-16"
        titleData={[
          { title: "时间", value: "time" },
          { title: "地点", value: "location" },
          { title: "花费", value: "cost" },
        ]}
        data={[
          { title: "8.2", value: "北京", cost: "122元" },
          { title: "8.3", value: "深圳", cost: "88元" },
        ]}
      />
    ),
  },
  {
    id: "tag",
    en: "Tag",
    zh: "标签",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <TagExample />,
    demo: <Tag icon={<Icon name="tag" size={20} />}>带图标标签</Tag>,
  },
  {
    id: "timeline",
    en: "Timeline",
    zh: "时间轴",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <TimelineExample />,
    demo: (
      <Timeline
        data={[
          { title: "事件一", subTitle: "2024-2-1" },
          { title: "事件二", subTitle: "2024-3-1", desc: "事件二的描述内容" },
          { title: "事件三", subTitle: "2024-5-1" },
        ]}
      />
    ),
  },
  {
    id: "swiper",
    en: "Swiper",
    zh: "轮播图",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
  },
];

export const FEEDBACK_COMPONENTS_DATA = [
  {
    id: "alert",
    en: "Alert",
    zh: "警告提示",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <AlertExample />,
    demo: <Alert type="success" title="提交成功！" />,
  },
  {
    id: "message",
    en: "Message",
    zh: "全局提示",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <MessageExample />,
    demo: <>
      <Button >全局提示（success）</Button>
      <Message type="success" text="全局提示（success）" show={true} /></>,
  },
  {
    id: "dialog",
    en: "Dialog",
    zh: "弹窗",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <DialogExample />,
    demo: <Dialog />,
  },
  {
    id: "drawer",
    en: "Drawer",
    zh: "抽屉",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <DrawerExample />,
    demo: <></>,
  },
  {
    id: "popConfirm",
    en: "PopConfirm",
    zh: "气泡提示框",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <PopConfirmExample />,
    demo: <></>,
  },
  {
    id: "progress",
    en: "Progress",
    zh: "进度条",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <ProgressExample />,
    demo: <Progress value={0.8} />,
  },
  {
    id: "skeleton",
    en: "Skeleton",
    zh: "骨架屏",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <SkeletonExample />,
    demo: <Skeleton />,
  },
  {
    id: "loading",
    en: "Loading",
    zh: "加载",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <LoadingExample />,
    demo: <Loading />,
  },
  {
    id: "watermark",
    en: "Watermark",
    zh: "水印",
    desc: "Land Design内置常规图标。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <WatermarkExample />,
    demo: <Watermark content="Land Design" />,
  },
];

export const TEXT_COMPONENTS_DATA = [
  {
    id: "title",
    en: "Title",
    zh: "标题",
    desc: "",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <TitleExample />,
    demo: (
      <Flex column gap={8} className="mx-auto" style={{ width: "fit-content" }}>
        <Title title="一级标题" />
        <Title title="二级标题" type="h2" />
        <Title title="三级标题" type="h3" />
      </Flex>
    ),
  },
  {
    id: "ellipsis",
    en: "Ellipsis",
    zh: "缩略显示",
    desc: "",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <EllipsisExample />,
    demo: <Ellipsis text='这是一段非常长的文字这是一段非常长的文字这是一段非常长的文字这是一段非常长的文字这是一段非常长的文字'></Ellipsis>,
  },
];

export const OTHER_COMPONENTS_DATA = [
  {
    id: "auto-Container",
    en: "AutoContainer",
    zh: "媒体自适应容器",
    desc: "",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <AutoContainerExample />,
    demo: <></>,
  },
];

export const PRO_COMPONENTS_DATA = [
  {
    id: "highlight-textarea",
    en: "HighlightTextarea",
    zh: "高亮富文本输入框",
    desc: "",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <HighlightTextareaExample />,
    demo: <HighlightTextarea />,
  },
  {
    id: "highlight-only-wrap-textarea",
    en: "HighlightOnlyWrapTextarea",
    zh: "仅支持换行的高亮富文本输入框",
    desc: "",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <HighlightOnlyWrapTextareaExample />,
    demo: <HighlightOnlyWrapTextarea />,
  },
  {
    id: "grid-template",
    en: "GridTemplate",
    zh: "宫格图模版",
    desc: "",
    props: [{ name: "type", type: "string", desc: "设置宫格数量，默认为1" },
    { name: "ratio", type: "number", desc: "设置宫格图比例，默认为1" },
    { name: "gap", type: "number", desc: "设置宫格间距，默认为2" },
    { name: "gridStyle", type: "CSSProperties", desc: "设置单个宫格样式" },
    { name: "gridClassName", type: "string", desc: "设置单个宫格类名" },
    { name: "children", type: "element", desc: "自定义功能内容，默认展示成宫格图模版" },
    ],
    example: <GridTemplateExample />,
    demo: <GridTemplate />,
  },
];


// 组件数据汇总
export const COMPONENTS_DATA = [
  {
    id: 'components-preview',
    title: "组件概览",
  },
  {
    id: "icon",
    title: "通用型",
    data: COMMON_COMPONENTS_DATA,
  },
  {
    id: "divider",
    title: "布局型",
    data: LAYOUT_COMPONENTS_DATA,
  },
  {
    id: "affixContainer",
    title: "导航型",
    data: NAV_COMPONENTS_DATA,
  },
  {
    id: "input",
    title: "数据输入型",
    data: INPUT_COMPONENTS_DATA,
  },
  {
    id: "avatar",
    title: "输入展示型",
    data: DISPLAY_COMPONENTS_DATA,
  },
  {
    id: "alert",
    title: "反馈型",
    data: FEEDBACK_COMPONENTS_DATA,
  },
  {
    id: "title",
    title: "文字型",
    data: TEXT_COMPONENTS_DATA,
  },
  {
    id: "auto-container",
    title: "其他",
    data: OTHER_COMPONENTS_DATA,
  },
  {
    id: "highlight-textarea",
    title: "业务组件",
    data: PRO_COMPONENTS_DATA,
  },
];

export const COMPONENTS_OVERVIEW_DATA = [
  {
    id: 1,
    en: "Button",
    zh: "按钮",
    desc: "Land Design内置常规图标。",
    element: <Button />,
  },
];

// 图标示例数据
export const ICON_EXAMPLE_DATA = [
  {
    id: 'nav',
    title: "导航类",
    data: ["home", "application", "more", "more-line"],
  },
  {
    id: 'social',
    title: "社交媒体类",
    data: [],
  },
  {
    id: 'interface',
    title: "用户界面类",
    data: [
      "female",
      "male",
      "preview-open",
      "preview-close",
      "avatar",
      "tag",
      "setting",
      "config-setting",
      "collection",
      "share",
      "translate",
      "light",
      "dark",
      "search",
      "refresh",
    ],
  },
  {
    id: 'media',
    title: "媒体控制类",
    data: [
      "image",
      "video-pause",
      "video-play",
      "volume",
      "volume-muted",
      "video-small-screen",
      "video-full-width",
      "loop",
    ],
  },
  {
    id: 'docs',
    title: "文件和文档类",
    data: [
      "file",
      "download",
      "upload",
      "web-page",
      "announcement",
      "audio-file",
      "book",
      "clipboard",
      "document",
      "email",
      "email-open",
      "email-download",
      "email-push",
      "email-success",
      "email-fail",
      "file-add",
      "code-file",
      "star-file",
      "text-file",
      "folder",
      "code-folder",
      "folder-download",
      "folder-add",
      "folder-upload",
      "formatting-brush",
      "instruction",
      "list-view",
      "link",
      "log",
      "note-pad",
      "schedule",
      "text-scan",
      "web-page",
      "plan",
      "calendar",
    ],
  },
  {
    id: 'e-commerce',
    title: "电子商务类",
    data: ["coupon", "ticket", "bank-card", "consume", "commodity", "dollar"],
  },
  {
    id: 'status',
    title: "反馈和状态类",
    data: [
      "check-stroke",
      "check-fill",
      "check",
      "error-stroke",
      "error-fill",
      "error",
      "info-stroke",
      "info-fill",
      "info",
      "attention-stroke",
      "attention-fill",
      "attention",
      "question-stroke",
      "question-fill",
      "question",
      "hourglass-empty",
      "hourglass-full",
      "increase",
    ],
  },
  {
    id: 'communication',
    title: "通信类",
    data: [],
  },
  {
    id: 'operate',
    title: " 操作类",
    data: [
      "switch-gear",
      "toggle",
      "collapse",
      "reload",
      "undo",
      "sort",
      "sort-descending",
      "sort-ascending",
      "back",
      "ahead",
      "last-step",
      "next-step",
      "drag",
      "add",
      "square-add",
      "dash-add",
      "clear",
      "delete",
      "copy",
      "close",
      "close-circle",
      "color-picker",
      "zoom-in-arrow",
      "zoom-out-arrow",
      "zoom-in",
      "zoom-out",
      "zoom-in-btn",
      "zoom-out-btn",
      "out",
      "adjustment",
      "alphabetical-sorting",
      "alphabetical-sorting-reverse",
      "brightness",
      "layer",
      "layer-front",
      "layer-back",
      "clear-formate",
      "edit",
      "clip-edit",
      "filter",
      "lock",
      "unlock",
      "merge-cells",
      "split-cells",
      "cursor-move",
      "line-break",
      "quote",
      "scan",
      "like",
      "star",
      "pen",
    ],
  },
  {
    id: 'style',
    title: "样式类",
    data: [
      "align-bottom",
      "align-top",
      "align-left",
      "align-right",
      "align-horizontally",
      "align-vertically",
      "text-align-left",
      "text-align-right",
      "text-align-center",
      "text-align-justify",
      "text-align-middle",
      "align-bottom-left",
      "align-bottom-center",
      "align-bottom-right",
      "align-horizontal-bottom",
      "align-horizontal-center",
      "align-horizontal-top",
      "align-left-bottom",
      "align-left-center",
      "align-left-top",
      "align-right-bottom",
      "align-right-center",
      "align-right-top",
      "align-top-left",
      "align-top-center",
      "align-top-right",
      "align-vertical-left",
      "align-vertical-center",
      "align-vertical-right",
      "flip-horizontally",
      "flip-vertically",
      "font-size",
      "line-height",
      "text-bold",
      "text-italic",
      "text-underline",
      "delete-strike",
      "line-width",
      "line-break",
      "title-h1",
      "title-h2",
      "title-h3",
      "indent-left",
      "indent-right",
      "drop-shadow-up",
      "drop-shadow-down",
      "drop-shadow-left",
      "drop-shadow-right",
      "inner-shadow-up",
      "inner-shadow-down",
      "inner-shadow-left",
      "inner-shadow-right",
      "layer",
      "check-list",
      "alphabet-list",
      "checkbox-list",
      "radio-list",
      "number-list",
      "mask",
      "tail",
    ],
  },
  {
    id: 'device',
    title: " 设备工具类",
    data: ["camera"],
  },
  {
    id: 'nature',
    title: "天气自然类",
    data: [],
  },
  {
    id: 'traffic',
    title: "交通位置类",
  },
  {
    id: 'food',
    title: "食物",
  },
];

export const ANIMATION_NAV_DATA = [
  ...[
    {
      title: 'Attention Seekers',
      children: ['bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat'],
    },
    {
      title: 'Back Entrances',
      children: ['backInDown', 'backInLeft', 'backInRight', 'backInUp'],
    },
    {
      title: 'Back Exits',
      children: ['backOutDown', 'backOutLeft', 'backOutRight', 'backOutUp'],
    },
    {
      title: 'Bouncing Entrances',
      children: ['bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp'],
    },
    {
      title: 'Bouncing Exits',
      children: ['bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp'],
    },
    {
      title: 'Fading Entrances',
      children: ['fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeInTopLeft', 'fadeInTopRight', 'fadeInBottomLeft', 'fadeInBottomRight',],
    },
    {
      title: 'Fading Exits',
      children: ['fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig', 'fadeOutTopLeft', 'fadeOutTopRight', 'fadeOutBottomLeft', 'fadeOutBottomRight'],
    },
    {
      title: 'Flippers',
      children: ['flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY']
    }
  ].map((item, index) => ({
    key: index + 1,
    title: item.title,
    open: true,
    dropData: [
      ...item.children.map((i, idx) => ({
        key: `1-${idx + 1}`,
        title: i,
      })),
    ]
  }))
]
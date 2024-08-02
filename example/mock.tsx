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
import React from "react";
import AffixContainerExample from "./Components/AffixContainerExample";
import BreadCrumbExample from "./Components/BreadCrumbExample";
import PaginationExample from "./Components/PaginationExample";


export const COMMON_COMPONENTS_DATA = [
  {
    id: 'icon',
    en: "Icon",
    zh: "图标",
    desc: "Land Design内置常规图标。",
    props: [
      { name: "size", type: "number", desc: "图标大小", optional: true },
      { name: "fill", type: "string", desc: "图标填充颜色", optional: true },
      { name: "stroke", type: "string", desc: "图标描边颜色", optional: true },
      { name: "strokeWidth", type: "number", desc: "图标填充颜色", optional: true },
    ],
    example: <IconExample />,
    demo: <></>,
  },
  {
    id: 'button',
    en: "Button",
    zh: "按钮",
    desc: "按钮是一种命令组件，可发起一个即时操作。",
    props: [
      { name: "text", type: "string", desc: "按钮主要文案", optional: true },
      { name: "subText", type: "string", desc: "按钮次要文案", optional: true },
      { name: "icon", type: "element", desc: "按钮图标", optional: true },
      { name: "width", type: "string | number", desc: "按钮宽度", optional: true },
      { name: "height", type: "string | number", desc: "按钮高度", optional: true },
      {
        name: "justify",
        type: "'center' | 'start' | 'end'",
        desc: "按钮文字对齐方式",
        optional: true
      },
      {
        name: "type",
        type: "'text' | 'background' | 'border' | 'line'",
        desc: "按钮风格",
        optional: true
      },
      {
        name: "status",
        type: "'default' | 'primary' | 'warning' | 'danger' | 'success'",
        desc: "按钮状态",
        optional: true
      },
      { name: "disabled", type: "boolean", desc: "按钮是否禁用", optional: true },
      { name: "loading", type: "boolean", desc: "按钮是否加载中", optional: true },
      { name: "pop", type: "string | element", desc: "按钮气泡", optional: true },
      { name: "popProps", type: "popProps", desc: "Popover气泡相关属性", optional: true },
      { name: "href", type: "string", desc: "跳转链接：按钮作为 a 标签", optional: true },
      {
        name: "target",
        type: "'_self' | '_blank' | '_top' | '_parent'",
        desc: "a 标签对应的 target 属性",
      },
      { name: "onClick", type: "func", desc: "按钮点击事件" },
    ],
    example: <ButtonExample />,
    demo: <></>
  },
  {
    id: 'link',
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
      { name: "disabled", type: "boolean", desc: "链接是否禁用", optional: true },
      { name: "actived", type: "boolean", desc: "链接是否已点击", optional: true },
      { name: "tip", type: "element | string", desc: "链接提示气泡", optional: true },
      { name: "tipProps", type: <Link href="#MenuItemType">tipProps</Link>, desc: "链接提示气泡属性", optional: true },
      { name: "children", type: "element", desc: "链接内容", optional: true },
    ],
    example: <LinkExample />,
    demo: <></>
  },
];

export const LAYOUT_COMPONENTS_DATA = [
  {
    id: 'divider',
    en: "Divider",
    zh: "分割线",
    desc: "",
    props: [
      { name: "direction", type: "'row' | 'column'", desc: "分割线方向", optional: true },
      { name: "size", type: "number", desc: "分割线粗细", optional: true },
      { name: "margin", type: "number", desc: "分割线上下或左右边距", optional: true },
      {
        name: "type",
        type: "'solid' | 'dashed'",
        desc: "分割线类型：实线或者虚线",
        optional: true,
      },
      { name: "color", type: "string", desc: "分割线颜色", optional: true },
      { name: "content", type: "element | string", desc: "分割线包含的内容", optional: true },
      {
        name: "align",
        type: "'left' | 'center' | 'right'",
        desc: "分割线包含内容时对齐方式",
        optional: true,
      },
    ],
    example: <DividerExample />,
    demo: <></>
  },
  {
    id: 'flex',
    en: "Flex",
    zh: "弹性布局",
    desc: "弹性布局",
    props: [
      { name: "w", type: "string", desc: "盒子的宽度，默认为[100%]", nedd: true },
      { name: "h", type: "string", desc: "盒子的高度", nedd: true },
      { name: "column", type: "boolean", desc: "flex 主轴的方向是否垂直", nedd: true },
      { name: "wrap", type: "boolean", desc: "元素是否换行", nedd: true },
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
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'grid',
    en: "Grid",
    zh: "栅格",
    props: [
      { name: "type", type: "'column-fit' | 'column-fill' | 'row-fit' | 'row-fill' | 'column-repeat' | 'row-repeat' | 'default'", desc: "常见的几种 grid 布局" },
      { name: 'autoSize', type: 'number', desc: '自动填充模式下的最小宽度/高度' },
      { name: 'repeatNum', type: 'number', desc: '按行或按列重复时的重复数量' },
      { name: 'gao', type: 'number | number[]', desc: '行列间隙' },
      { name: "children", type: "element", desc: "自定义元素", optional: true },
    ],
    example: <GridExample />,
    demo: <></>
  },
  {
    id: 'layout',
    en: "Layout",
    zh: "布局",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <LayoutExample />,
    demo: <></>
  },
  {
    id: 'space',
    en: "Space",
    zh: "间距",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <FlexExample />,
    demo: <></>
  },
];

export const NAV_COMPONENTS_DATA = [
  {
    id: '201',
    en: "affix",
    zh: "图钉",
    desc: "图钉用于在容器内部指定位置展示内容",
    props: [
      { name: "placement", type: "'lt' | 'lb' | 'rt' | 'rb'", desc: "快捷设置图钉位置" },
      { name: 'gap', type: 'number', desc: '快捷定位时图钉与四周的距离' },
      { name: 'offsetData', type: '{ left?: number, right?: number, top?: number, bottom?: number }', desc: '基于 absolute 定位的自定义位置' },
      { name: 'hover', type: 'boolean', desc: '鼠标悬浮时隐藏图钉' },
      { name: 'hoverShow', type: 'boolean', desc: '鼠标悬浮时显示图钉' },
      { name: 'innerStyle', type: 'CSSProperties', desc: '图钉元素对应的 style' },
      { name: 'innerClassName', type: 'string', desc: '图钉元素对应的 className' },
      { name: 'Style', type: 'CSSProperties', desc: '图钉定位容器对应的style' },
      { name: 'className', type: 'string', desc: '图钉定位容器对应的className' },
      { name: 'content', type: 'element', desc: '图钉元素' },
      { name: 'children', type: 'element', desc: '图钉容器元素' },
    ],
    example: <AffixContainerExample />,
    demo: <></>
  },
  {
    id: 'anchor',
    en: "anchor",
    zh: "锚点",
    desc: "锚点用于跳转至页面指定位置。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <AnchorExample />,
    demo: <></>
  },
  {
    id: 'breadCrumb',
    en: "Breadcrumb",
    zh: "面包屑",
    desc: "锚点用于跳转至页面指定位置。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <BreadCrumbExample />,
    demo: <></>
  },
  {
    id: 'menu',
    en: "Menu",
    zh: "导航菜单",
    desc: "锚点用于跳转至页面指定位置。",
    props: [
      { name: "data", type: <><Link href="#MenuItemType">MenuItemType</Link> []</>, desc: "导航数据", optional: true },
      {
        name: "active",
        type: "number",
        desc: "当前选中的导航项对应的唯一key",
        optional: true,
      },
      { name: "direction", type: "'row' | 'column'", desc: "导航排列方向", optional: true },
      { name: "theme", type: <><Link href="#ThemeType">ThemeType</Link> []</>, desc: "定制导航主题", optional: true },
      { name: 'border', type: 'boollean', desc: '是否需要下边框', optional: true },
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
    demo: <></>,
    types: [
      {
        name: 'MenuItemType',
        data: [
          { name: 'key', type: 'number', desc: '唯一标识', optional: false },
          { name: 'title', type: 'string', desc: '导航项副标题', optional: true },
          { name: 'subTitle', type: 'string', desc: '导航项主标题', optional: true },
          { name: 'icon', type: 'string | element', desc: '导航项前置图标', optional: true },
          { name: 'isNew', type: 'string | element | boolean', desc: '导航项右上角角标', optional: true },
          { name: 'href', type: 'string', desc: '导航项对应的链接', optional: true },
          { name: 'clickType', type: <Link href="#ClickType">ClickType</Link>, desc: '导航项点击跳转类型', optional: true },
          { name: 'dropData', type: <><Link href="#MenuItemType">MenuItemType</Link> []</>, desc: '导航项下拉框副导航数据', optional: true },
        ],
        desc: '定义导航项数据类型。'
      }
    ]
  },
  {
    id: 'pagination',
    en: "Pagination",
    zh: "分页",
    desc: "锚点用于跳转至页面指定位置。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <PaginationExample />,
    demo: <></>
  },
  {
    id: 'step',
    en: "Steps",
    zh: "步骤条",
    desc: "锚点用于跳转至页面指定位置。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'dropdown',
    en: "Dropdown",
    zh: "下拉菜单",
    desc: "锚点用于跳转至页面指定位置。",
    props: [{ name: "name", type: "type", desc: "desc" }],
    example: <FlexExample />,
    demo: <></>
  },
];

export const INPUT_COMPONENTS_DATA = [
  {
    id: 'input',
    en: 'Input',
    zh: '输入框',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'select',
    en: 'Select',
    zh: '选择器',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'selectTree',
    en: 'SelectTree',
    zh: '层级选择器',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'radio',
    en: 'Radio',
    zh: '单选框',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'checkbox',
    en: 'Checkbox',
    zh: '多选框',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'colorPicker',
    en: 'ColorPicker',
    zh: '颜色选择器',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'datePicker',
    en: 'DatePicker',
    zh: '日期选择器',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'numberInput',
    en: 'NumberInput',
    zh: '数字输入框',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'switch',
    en: 'Switch',
    zh: '开关',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'slider',
    en: 'Slider',
    zh: '滑动输入条',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'rate',
    en: 'Rate',
    zh: '评分',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'upload',
    en: 'Upload',
    zh: '上传框',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  }
]

export const DISPLAY_COMPONENTS_DATA = [
  {
    id: 'avatar',
    en: 'Avatar',
    zh: '头像',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'badge',
    en: 'Badge',
    zh: '徽标数',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'calendar',
    en: 'Calendar',
    zh: '日历',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'card',
    en: 'Card',
    zh: '卡片',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'carousel',
    en: 'Carousel',
    zh: '走马灯',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'collapse',
    en: 'Collapse',
    zh: '折叠面板',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'state',
    en: 'State',
    zh: '状态',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'image',
    en: 'Image',
    zh: '图片',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'video',
    en: 'Video',
    zh: '视频',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'audio',
    en: 'Audio',
    zh: '音频',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'list',
    en: 'List',
    zh: '列表',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'popOver',
    en: 'Popover',
    zh: '气泡',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'statistic',
    en: 'Statistic',
    zh: '数值统计',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'table',
    en: 'Table',
    zh: '表格',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'tag',
    en: 'Tag',
    zh: '标签',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'timeline',
    en: 'Timeline',
    zh: '时间轴',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'swiper',
    en: 'Swiper',
    zh: '轮播图',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ]
  }
]

export const FEEDBACK_COMPONENTS_DATA = [
  {
    id: 'alert',
    en: 'Alert',
    zh: '警告提示',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'message',
    en: 'Message',
    zh: '全局提示',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'dialog',
    en: 'Dialog',
    zh: '弹窗',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'drawer',
    en: 'Drawer',
    zh: '抽屉',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'popConfirm',
    en: 'PopConfirm',
    zh: '气泡提示框',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'progress',
    en: 'Progress',
    zh: '进度条',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'skeleton',
    en: 'Skeleton',
    zh: '骨架屏',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'loading',
    en: 'Loading',
    zh: '加载',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'watermark',
    en: 'Watermark',
    zh: '水印',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ]
  }
]

export const TEXT_COMPONENTS_DATA = [
  {
    id: 'title',
    en: 'Title',
    zh: '标题',
    desc: '',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'textList',
    en: 'TextList',
    zh: '文字列表',
    desc: '',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
  {
    id: 'ellipsis',
    en: 'Ellipsis',
    zh: '缩略显示',
    desc: '',
    props: [
      { name: 'name', type: "type", desc: 'desc' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
]

export const OTHER_COMPONENTS_DATA = [
  {
    id: 'icon',
    en: 'Icon',
    zh: '图标',
    desc: 'Land Design内置常规图标。',
    props: [
      { name: 'size', type: "number", desc: '图标大小' },
      { name: 'color', type: "string", desc: '图标颜色' },
    ],
    example: <FlexExample />,
    demo: <></>
  },
]

// 组件数据汇总
export const COMPONENTS_DATA = [
  {
    id: 0,
    title: '组件概览',
  },
  {
    id: 'icon',
    title: '通用型',
    data: COMMON_COMPONENTS_DATA,
  },
  {
    id: 'divider',
    title: '布局型',
    data: LAYOUT_COMPONENTS_DATA,
  },
  {
    id: 'affix',
    title: '导航型',
    data: NAV_COMPONENTS_DATA,
  },
  {
    id: 'input',
    title: '数据输入型',
    data: INPUT_COMPONENTS_DATA,
  },
  {
    id: 'avatar',
    title: '输入展示型',
    data: DISPLAY_COMPONENTS_DATA,
  },
  {
    id: 'alert',
    title: '反馈型',
    data: FEEDBACK_COMPONENTS_DATA,
  },
  {
    id: 'title',
    title: '文字型',
    data: TEXT_COMPONENTS_DATA,
  },
  {
    id: 'icon',
    title: '其他',
    data: OTHER_COMPONENTS_DATA,
  }
]

export const COMPONENTS_OVERVIEW_DATA = [
  {
    id: 1,
    en: 'Button',
    zh: '按钮',
    desc: 'Land Design内置常规图标。',
    element: <Button />,
  }
];

// 图标示例数据
export const ICON_EXAMPLE_DATA = [
  {
    title: '箭头类',
    data: [
      'arrow-line', 'arrow', 'arrow-double', 'arrow-triangle', 'arrow-to', 'collapse', 'collection', 'zoom-out', 'zoom-in', 'loop', 'download', 'out', 'reload', 'undo', 'sort', 'back', 'ahead', 'refresh'
    ]
  },
  {
    title: '提示类',
    data: [
      'check-stroke', 'check-fill', 'check', 'error-stroke', 'error-fill', 'error', 'info-stroke', 'info-fill', 'info', 'attention-stroke', 'attention-fill', 'attention'
    ]
  },
  {
    title: '交互类',
  },
  {
    title: '编辑类',
    data: [
      ''
    ]
  },
  {
    title: '文字类',
  }
]
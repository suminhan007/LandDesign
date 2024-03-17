import ButtonExample from "./components/ButtonExample"
import IconExample from "./components/IconExample"
import LinkExample from "./components/LinkExample"

export const COMMON_COMPONENTS_DATA = [
    {
        id: 1,
        en: 'Icon',
        zh: '图标',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'size', type: "number", desc: '图标大小' },
            { name: 'fill', type: "string", desc: '图标填充颜色' },
            { name: 'stroke', type: "string", desc: '图标描边颜色' },
            { name: 'strokeWidth', type: "number", desc: '图标填充颜色' },
        ],
        example: <IconExample/>,
    },
    {
        id: 2,
        en: 'Button',
        zh: '按钮',
        desc: '按钮是一种命令组件，可发起一个即时操作。',
        props: [
            { name: 'text', type: "string", desc: '按钮主要文案' },
            { name: 'subText', type: 'string', desc: '按钮次要文案' },
            { name: 'icon', type: 'element', desc: '按钮图标' },
            { name: 'width', type: "string | number", desc: '按钮宽度' },
            { name: 'height', type: 'string | number', desc: '按钮高度' },
            { name: 'justify', type: "'center' | 'start' | 'end'", desc: '按钮文字对齐方式' },
            { name: 'type', type: "'text' | 'background' | 'border' | 'line'", desc: '按钮风格' },
            { name: 'status', type: "'default' | 'primary' | 'warning' | 'danger' | 'success'", desc: '按钮状态' },
            { name: 'disabled', type: 'boolean', desc: '按钮是否禁用' },
            { name: 'loading', type: 'boolean', desc: '按钮是否加载中' },
            { name: 'pop', type: 'string | element', desc: '按钮气泡' },
            { name: 'popProps', type: 'popProps', desc: 'Popover气泡相关属性' },
            {name: 'href', type: 'string', desc: '跳转链接：按钮作为 a 标签'},
            {name: 'target', type: "'_self' | '_blank' | '_top' | '_parent'", desc: 'a 标签对应的 target 属性'},
            { name: 'onClick', type: 'func', desc: '按钮点击事件' },
        ],
        example: <ButtonExample />,
    },
    {
        id: 3,
        en: 'Link',
        zh: '链接',
        desc: '',
        props: [
            { name: 'type', type: "'primary' | 'success' | 'error' | 'wranning'", desc: '链接类型' },
            { name: 'disabled', type: 'boolean', desc: '链接是否禁用' },
            
        ],
        example: <LinkExample/>
    },
    {
        id: 4,
        en: 'Typography',
        zh: '排版',
        desc: ''
    }
    
]

export const LAYOUT_COMPONENTS_DATA = [
    {
        id: 101,
        en: 'Divider',
        zh: '分割线',
        props: [
            { name: 'direction', type: "'row' | 'column'", desc: '分割线方向' },
            { name: 'size', type: 'number', desc: '分割线粗细' },
            { name: 'margin', type: 'number', desc: '分割线上下或左右边距' },
            { name: 'type', type: "'solid' | 'dashed'", desc: '分割线类型：实线或者虚线' },
            { name: 'color', type: 'string', desc: '分割线颜色' },
            { name: 'content', type: 'element | string', desc: '分割线包含的内容' },
            { name: 'align', type: "'left' | 'center' | 'right'", desc: '分割线包含内容时对齐方式' }
        ]
    },
    {
        id: 102,
        en: 'Flex',
        zh: '弹性布局',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 103,
        en: 'Grid',
        zh: '栅格',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 104,
        en: 'Layout',
        zh: '布局',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 105,
        en: 'Space',
        zh: '间距',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
]

export const NAV_COMPONENTS_DATA = [
    {
        id: 201,
        en: 'Anchor',
        zh: '锚点',
        desc: '锚点用于跳转至页面指定位置。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 202,
        en: 'Breadcrumb',
        zh: '面包屑',
        desc: '锚点用于跳转至页面指定位置。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 203,
        en: 'Menu',
        zh: '层级菜单',
        desc: '锚点用于跳转至页面指定位置。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 204,
        en: 'Pagination',
        zh: '分页',
        desc: '锚点用于跳转至页面指定位置。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 205,
        en: 'Steps',
        zh: '步骤条',
        desc: '锚点用于跳转至页面指定位置。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 206,
        en: 'Dropdown',
        zh: '下拉菜单',
        desc: '锚点用于跳转至页面指定位置。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    }
]

export const INPUT_COMPONENTS_DATA = [
    {
        id: 301,
        en: 'Input',
        zh: '输入框',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 302,
        en: 'Select',
        zh: '选择器',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 303,
        en: 'SelectTree',
        zh: '层级选择器',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 304,
        en: 'Radio',
        zh: '单选框',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 305,
        en: 'Checkbox',
        zh: '多选框',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 306,
        en: 'ColorPicker',
        zh: '颜色选择器',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 307,
        en: 'DatePicker',
        zh: '日期选择器',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 308,
        en: 'NumberInput',
        zh: '数字输入框',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 309,
        en: 'Switch',
        zh: '开关',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 310,
        en: 'Slider',
        zh: '滑动输入条',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 311,
        en: 'Rate',
        zh: '评分',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 312,
        en: 'Upload',
        zh: '上传框',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    }
]

export const DISPLAY_COMPONENTS_DATA = [
    {
        id: 401,
        en: 'Avatar',
        zh: '头像',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 402,
        en: 'Badge',
        zh: '徽标数',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 403,
        en: 'Calendar',
        zh: '日历',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 404,
        en: 'Card',
        zh: '卡片',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 405,
        en: 'Carousel',
        zh: '走马灯',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 406,
        en: 'Collapse',
        zh: '折叠面板',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 407,
        en: 'State',
        zh: '状态',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 408,
        en: 'Image',
        zh: '图片',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 409,
        en: 'Video',
        zh: '视频',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 410,
        en: 'Audio',
        zh: '音频',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 411,
        en: 'List',
        zh: '列表',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 412,
        en: 'Popover',
        zh: '气泡',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 413,
        en: 'Statistic',
        zh: '数值统计',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 414,
        en: 'Table',
        zh: '表格',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 415,
        en: 'Tag',
        zh: '标签',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 416,
        en: 'Timeline',
        zh: '时间轴',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 417,
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
        id: 501,
        en: 'Alert',
        zh: '警告提示',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 502,
        en: 'Message',
        zh: '全局提示',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 503,
        en: 'Dialog',
        zh: '弹窗',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 504,
        en: 'Drawer',
        zh: '抽屉',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 505,
        en: 'PopConfirm',
        zh: '气泡提示框',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 506,
        en: 'Progress',
        zh: '进度条',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 507,
        en: 'Skeleton',
        zh: '骨架屏',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 508,
        en: 'Loading',
        zh: '加载',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 509,
        en: 'Warermark',
        zh: '水印',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    }
]

export const TEXT_COMPONENTS_DATA = [
    {
        id: 601,
        en: 'Title',
        zh: '标题',
        desc: '',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 602,
        en: 'TextList',
        zh: '文字列表',
        desc: '',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    },
    {
        id: 603,
        en: 'Ellipsis',
        zh: '缩略显示',
        desc: '',
        props: [
            { name: 'name', type: "type", desc: 'desc' },
        ]
    }
]

export const OTHER_COMPONENTS_DATA = [
    {
        id: 701,
        en: 'Icon',
        zh: '图标',
        desc: 'Land Design内置常规图标。',
        props: [
            { name: 'size', type: "number", desc: '图标大小' },
            { name: 'color', type: "string", desc: '图标颜色' },
        ]
    }
]
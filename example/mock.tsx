export const COMPONENTS_DATA = [
    {
        id: 1,
        en: 'Icon',
        zh: '图标'
    },
    {
        id: 2,
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
        id: 3,
        en: 'Button',
        zh: '按钮',
    }
]
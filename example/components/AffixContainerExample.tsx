import React from 'react'
import Title from '../../packages/Title'
import AffixContainer from '../../packages/AffixContainer'
import Icon from '../../packages/Icon'

export default function AffixContainerExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="图钉位置" type="h3" />
        <Title title="支持左上角、右上角、左下角、右下角、左边中间、右边中间、顶部中间、底部中间、中间 9 个位置。" type="p" />
        <div className="flex justify-center gap-24 border p-32">
          <AffixContainer
            style={{ height: '200px' }}
            className='width-100 bg-gray'
            ltOption={{
              content: 1
            }}
            rtOption={{
              content: 2
            }}
            lbOption={{
              content: 3
            }}
            rbOption={{
              content: 4
            }}
            lcOption={{
              content: 5
            }}
            rcOption={{
              content: 6
            }}
            tcOption={{
              content: 7
            }}
            bcOption={{
              content: 8
            }}
            centerOption={{
              content: 9
            }}
          />
        </div>
      </div>

      <div className="flex column gap-12">
        <Title title="自定义图钉位置" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <AffixContainer
            style={{ height: '200px' }}
            className='width-100 bg-gray'
            customOption={{
              content: '图钉',
              left: '20%',
              top: '60%',
            }}
          />
        </div>
      </div>

      <div className="flex column gap-12">
        <Title title="图钉默认样式" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <AffixContainer
            style={{ height: '200px' }}
            className='width-100 bg-gray'
            ltOption={{
              content: '浅色图钉',
            }}
            rtOption={{
              content: '深色图钉',
              dark: true,
            }}
            centerOption={{
              content: '自定义样式图钉 📌',
              custom: true,
              className: 'border-primary-light radius-4 p-8 color-primary bg-white'
            }}
          />
        </div>
      </div>

      <div className="flex column gap-12">
        <Title title="图钉显示方式" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <div className='flex-1 flex column gap-8 items-center shrink-0 fs-12 color-gray-4'>
            <AffixContainer
              style={{ height: '200px' }}
              className='width-100 bg-gray'
              centerOption={{
                content: '图钉',
              }}
            />
            一直显示
          </div>
          <div className='flex-1 flex column gap-8 items-center shrink-0 fs-12 color-gray-4'>
            <AffixContainer
              style={{ height: '200px' }}
              className='width-100 bg-gray'
              centerOption={{
                content: '图钉',
                hoverHide: true,
              }}
            />
            鼠标悬浮时隐藏
          </div>
          <div className='flex-1 flex column gap-8 items-center shrink-0 fs-12 color-gray-4'>
            <AffixContainer
              style={{ height: '200px' }}
              className='width-100 bg-gray'
              centerOption={{
                content: '图钉',
                hoverShow: true,
              }}
            />
            鼠标悬浮时显示
          </div>
        </div>
      </div>

      <div className="flex column gap-12">
        <Title title="图钉快捷样式" type="h3" />
        <Title title="通过 gap 字段快速设置图钉到容器的距离；通过 radius 属性快捷设置图钉圆角；通过 squareSize 设置圆形图钉及大小。" type="p" />
        <div className="flex justify-center gap-24 border p-32">
          <AffixContainer
            style={{ height: '200px' }}
            className='width-100 bg-gray border-dash'
            ltOption={{
              content: '图钉',
            }}
            rtOption={{
              content: '图钉',
              gap: 20,
            }}
            lbOption={{
              content: '图钉',
              gap: 0,
              radius: '0 6px 0 0',
            }}
            rbOption={{
              content: '1',
              radius: '100%',
              dark: true,
              squareSize: 24,
            }}
          />
        </div>
      </div>

    </div>
  )
}

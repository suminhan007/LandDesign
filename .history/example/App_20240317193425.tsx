import React, { useState } from 'react';
import styled from 'styled-components';
import "./app.css";
import '../style/atomic.scss';
import '../style/variable.scss';

import Button from '../packages/Button';
import Divider from '../packages/Divider';
import Table from '../packages/Table';
import Title from '../packages/Title';
import ComponentPreview from './components/ComponentPreview';

// 引入数据
import {
  COMMON_COMPONENTS_DATA,
  LAYOUT_COMPONENTS_DATA,
  NAV_COMPONENTS_DATA,
  INPUT_COMPONENTS_DATA,
  DISPLAY_COMPONENTS_DATA,
  FEEDBACK_COMPONENTS_DATA,
  TEXT_COMPONENTS_DATA,
  OTHER_COMPONENTS_DATA
} from './mock';

const Nav_Data = [
  { id: 1, data: COMMON_COMPONENTS_DATA, title: '通用型' },
  { id: 2, data: LAYOUT_COMPONENTS_DATA, title: '布局型' },
  { id: 3, data: NAV_COMPONENTS_DATA, title: '导航型' },
  { id: 4, data: INPUT_COMPONENTS_DATA, title: '数据输入型' },
  { id: 5, data: DISPLAY_COMPONENTS_DATA, title: '输入展示型' },
  { id: 6, data: FEEDBACK_COMPONENTS_DATA, title: '反馈型' },
  { id: 7, data: TEXT_COMPONENTS_DATA, title: '文字型' },
  { id: 8, data: OTHER_COMPONENTS_DATA, title: '其他' },
]

function App() {
  const [activedId, setActivedId] = useState<number>(2);
  return (
    <div>
      <StyledTopNav></StyledTopNav>
      <div className='flex'>
        <StyledLeftNav className='flex column gap-20 py-24 px-24 overflow-auto'>
          {/* <Title title='-- 组件索引' type='p' className='my-8' style={{ color: 'var(--color-primary-6)' }} /> */}
              <Button
                text='组件索引'
                width='100%'
                justify='start'
                type={activedId === 0 ? 'background' : 'text'}
                onClick={() => setActivedId(0)}
              />
          {
            Nav_Data.map(navItem =>
              <div className='flex column gap-8'>
                <Title title={`-- ${navItem.title}`} type='p' className='my-8' style={{ color: 'var(--color-primary-6)' }} />
                {
                  navItem.data?.map(navBtnItem =>
                    <Button
                      key={navBtnItem.id}
                      text={navBtnItem.en}
                      subText={navBtnItem.zh}
                      width='100%'
                      justify='start'
                      type={activedId === navBtnItem.id ? 'background' : 'text'}
                      onClick={() => setActivedId(navBtnItem.id)}
                    />
                  )
                }
              </div>
            )
          }
        </StyledLeftNav>
        <StyledRightContent className='flex column p-24 overflow-auto'>
          {/* 组件索引 */}
          {activedId === 0 && <ComponentPreview/>}
          {
            activedId != 0 && COMMON_COMPONENTS_DATA.filter(itm => itm.id === activedId).map(item =>
              <>
                <Title title={`${item.zh} ${item.en}`} type='h1' />
                <Title title={item.desc} type='p'/>
                <Divider margin={20}/>
                <Title title='1. 组件预览' type='h2' className='mb-16'/>
                  {item.example}
                <Title title='2. API' type='h2' className='my-16'/>
                <Table titleData={[{ title: '属性', value: 'props' }, { title: '类型', value: 'type' }, { title: '描述', value: 'desc' }]} data={item.props} style={{ width: '100%' }} />
                
              </>
            )
          }
        </StyledRightContent>
      </div>
    </div>
  )
}

const StyledTopNav = styled.div`
  height: 64px;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
`

const StyledLeftNav = styled.div`
    width: 240px;
    height: calc(100vh - 64px);
    flex-shrink: 0;
    background: var(--color-bg-white);
    backdrop-filter: ;
    border-right: 1px solid var(--color-border-1);
    box-sizing: border-box;
`

const StyledRightContent = styled.div`
    width: calc(100% - 48px);
    height: calc(100vh - 64px);
    box-sizing: border-box;
`

export default App

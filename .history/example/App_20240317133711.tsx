import React, { useState } from 'react';
import styled from 'styled-components';
import "./app.css";
import '../style/atomic.scss';
import '../style/variable.scss';

import Button from '../packages/Button';
import Divider from '../packages/Divider';
import Table from '../packages/Table';
import Title from '../packages/Title';
import Link from '../packages/Link';

// 引入数据
import { COMMON_COMPONENTS_DATA, LAYOUT_COMPONENTS_DATA } from './mock';
import { IconLoading } from '../packages/Icon';
const Nav_Data = [
  { id: 1, data: COMMON_COMPONENTS_DATA, title: '通用型' },
  { id: 2, data: LAYOUT_COMPONENTS_DATA, title: '布局型' },
  { id: 3, data: LAYOUT_COMPONENTS_DATA, title: '文字型' }
]

function App() {
  const [activedId, setActivedId] = useState<number>(0);
  return (
    <div>
      <StyledTopNav></StyledTopNav>
      <div className='flex'>
        <StyledLeftNav className='flex column gap-20 py-24 px-12'>
          {/* <Title title='-- 组件索引' type='p' className='my-8' style={{ color: 'var(--color-primary-6)' }} /> */}
              <Button
                text='组件索引'
                width='100%'
                justify='start'
                theme={activedId === 0 ? 'background-dark' : 'text'}
                onClick={() => setActivedId(0)}
              />
          {
            Nav_Data.map(navItem =>
              <div className='flex column gap-4'>
                <Title title={`-- ${navItem.title}`} type='p' className='my-8' style={{ color: 'var(--color-primary-6)' }} />
                {
                  navItem.data?.map(navBtnItem =>
                    <Button
                      key={navBtnItem.id}
                      text={navBtnItem.en}
                      subText={navBtnItem.zh}
                      width='100%'
                      justify='start'
                      theme={activedId === navBtnItem.id ? 'background-dark' : 'text'}
                      onClick={() => setActivedId(navBtnItem.id)}
                    />
                  )
                }
              </div>
            )
          }
        </StyledLeftNav>
        <StyledRightContent className='flex p-24'>
          {activedId === 0 && <>组件索引</>}
          {
            activedId != 0 && COMMON_COMPONENTS_DATA.filter(itm => itm.id === activedId).map(item =>
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 20 }}>
                <Title title={`${item.zh} ${item.en}`} type='h1' />
                <Title title={item.desc} type='p'/>
                <Divider />
                <Title title='1. 组件预览' type='h2' />
                <div className='width-100' style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px, 1fr))', gap: '24px' }}>
                  {item.example}
                </div>
                <Title title='3. API' type='h2' />
                <Table titleData={[{ title: '属性', value: 'props' }, { title: '类型', value: 'type' }, { title: '描述', value: 'desc' }]} data={item.props} style={{ width: '100%' }} />
                
              </div>
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
    width: 180px;
    min-height: calc(100vh - 64px);
    flex-shrink: 0;
    border-right: 1px solid var(--color-border-1);
    box-sizing: border-box;
`

const StyledRightContent = styled.div`
    width: calc(100% - 48px);
    box-sizing: border-box;
`

export default App

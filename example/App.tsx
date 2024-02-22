import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import "./app.css"
import Button from '../packages/Button'
import Divider, { DividerProps } from '../packages/Divider'

const ComponentsData = [
  { id: 1, en: 'Icon', zh: '图标' },
  { id: 2, en: 'Divider', zh: '分割线', props: [] },
  { id: 3, en: 'Button', zh: '按钮' }
]
function App() {
  const [activedId, setActivedId] = useState<number>(1)
  return (
    <div>
      <StyledTopNav></StyledTopNav>
      <StyleLayout>
        <StyledLeftNav>
          {
            ComponentsData.map(item =>
              <Button
                text={item.en}
                subText={item.zh}
                width='100%'
                justify='start'
                type={activedId === item.id ? 'background' : 'text'}
                status={activedId === item.id ? 'active' : 'default'}
                onClick={() => setActivedId(item.id)}
              />
            )
          }
        </StyledLeftNav>
        <StyledRightContent>
          {
            ComponentsData.filter(itm => itm.id === activedId).map(item =>
              <div style={{ width: '100%' }}>
                <h1>{item.en}</h1>
                <Divider margin={8} />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px, 1fr))', gap: '24px' }}>
                  <Button width='auto' text='text-default' type='text' />
                  <Button width='auto' text='text-active' type='text' status='active' />
                  <Button width='auto' text='text-loading' type='text' status='loading' />
                  <Button width='auto' text='text-disabled' type='text' status='disabled' pop="请填写完成" />

                  <Button width='auto' text='background-light-default' type='background-light' status='default' />
                  <Button width='auto' text='background-light-active' type='background-light' status='active' />
                  <Button width='auto' text='background-light-loading' type='background-light' status='loading' />
                  <Button width='auto' text='background-light-disabled' type='background-light' status='disabled' />

                  <Button width='auto' text='background-default' type='background' status='default' />
                  <Button width='auto' text='background-active' type='background' status='active' />
                  <Button width='auto' text='background-loading' type='background' status='loading' />
                  <Button width='auto' text='background-disabled' type='background' status='disabled' />

                  <Button width='auto' text='solid-default' type='border' status='default' />
                  <Button width='auto' text='solid-active' type='border' status='active' />
                  <Button width='auto' text='solid-loading' type='border' status='loading' />
                  <Button width='auto' text='solid-disabled' type='border' status='disabled' />

                  <Button width='auto' text='dashed-default' type='border-dashed' status='default' />
                  <Button width='auto' text='dashed-active' type='border-dashed' status='active' />
                  <Button width='auto' text='dashed-loading' type='border-dashed' status='loading' />
                  <Button width='auto' text='dashed-disabled' type='border-dashed' status='disabled' />

                  <Button width='auto' text='line-default' type='line' status='default' />
                  <Button width='auto' text='line-active' type='line' status='active' />
                  <Button width='auto' text='line-loading' type='line' status='loading' />
                  <Button width='auto' text='line-disabled' type='line' status='disabled' />
                </div>
              </div>
            )
          }
        </StyledRightContent>
      </StyleLayout>
    </div>
  )
}

const StyledTopNav = styled.div`
  height: 64px;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
`

const StyleLayout = styled.div`
  display: flex;  
`

const StyledLeftNav = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 24px 12px;
    width: 180px;
    min-height: calc(100vh - 64px);
    border-right: 1px solid #eee;
    box-sizing: border-box;
`

const StyledRightContent = styled.div`
    display: flex;
    padding: 24px;
    width: calc(100% - 48px);
    box-sizing: border-box;
`

export default App

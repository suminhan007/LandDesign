import React, { useState } from 'react'
import styled from 'styled-components'
import "./app.css"
import Button from '../packages/Button'
import Divider from '../packages/Divider'
import Table from '../packages/Table'
import { COMPONENTS_DATA } from './mock'

function App() {
  const [activedId, setActivedId] = useState<number>(1)
  return (
    <div>
      <StyledTopNav></StyledTopNav>
      <StyleLayout>
        <StyledLeftNav>
          {
            COMPONENTS_DATA.map(item =>
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
            COMPONENTS_DATA.filter(itm => itm.id === activedId).map(item =>
              <div style={{ width: '100%' }}>
                <h1>{item.en}</h1>
                <Divider margin={8} />
                <Table titleData={[{ title: '属性', value: 'props' }, { title: '类型', value: 'type' }, { title: '描述', value: 'desc' }]} data={item.props} style={{ width: '100%' }} />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px, 1fr))', gap: '24px' }}>
                  {/* {item.component} */}
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

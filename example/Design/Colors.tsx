import React from 'react'
import Table from '../../packages/Table'
import Title from '../../packages/Title'
import styled from 'styled-components'

export default function Colors() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="主题色" type="h3" />
        <Table
          titleData={[
            { title: '颜色', value: 'color' },
            { title: '色值', value: 'value' },
            { title: '名称', value: 'name' },
          ]}
          data={[
            { color: <StyledColorsItem style={{ backgroundColor: 'var(--color-primary-6)' }} />, value: 'var(--color-primary-6)', name: '主题色' }
          ]}
        // data={}
        />
      </div>
    </div>
  )
}

const StyledColorsItem = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;

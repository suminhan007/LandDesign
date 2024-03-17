import React from 'react'
import Title from '../../packages/Title'
import Divider from '../../packages/Divider'

export default function ComponentPreview() {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Title title='组件索引' />   
          <Divider/>
    </div>
  )
}

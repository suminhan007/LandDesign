import React from 'react'
import T
import {
  IconArrowLine,
  IconArrow,
  IconArrowDouble,
  IconArrowTriangle,
  IconArrowTo
} from '../../packages/Icon'

export default function IconExample() {
  return (
    <div className='flex'>
      <Title/>
      <IconArrowLine />
      <IconArrow />
      <IconArrowDouble />
      <IconArrowTriangle />
      <IconArrowTo/>
    </div>
  )
}

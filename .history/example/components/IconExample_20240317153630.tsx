import React from 'react'
import Title from '../../packages/T'
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

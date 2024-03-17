import React from 'react'
import Button from '../../packages/Button'

export default function ButtonExample() {
  return (
    <div className=''>
          <Button theme='text' /> <Button theme='text' href='https://tacc-creative-ui.pages.woa.com/components/CreativeFilterHistory' />
          <Button theme='text' status='primary' /> <Button theme='text' status='success' /> <Button theme='text' status='warning' /> <Button theme='text' status='danger' />
        </div>
  )
}

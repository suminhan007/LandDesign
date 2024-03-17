import React from 'react'
import Button from '../../packages/Button'

const 
export default function ButtonExample() {
  return (
    <div className='grid'>
        <Button theme='text' /> <Button theme='text' href='https://tacc-creative-ui.pages.woa.com/components/CreativeFilterHistory' />
        <Button theme='text' status='primary' /> <Button theme='text' status='success' /> <Button theme='text' status='warning' /> <Button theme='text' status='danger' />
    </div>
  )
}

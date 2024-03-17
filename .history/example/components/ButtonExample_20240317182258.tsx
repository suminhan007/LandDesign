import React from 'react';
import Title from '../../packages/Title';
import Button from '../../packages/Button';

export default function ButtonExample() {
  return (
    // <div className='grid'>
    //     <Button type='text' /> <Button type='text' href='https://tacc-creative-ui.pages.woa.com/components/CreativeFilterHistory' />
    //     <Button type='text' status='primary' /> <Button type='text' status='success' /> <Button type='text' status='warning' /> <Button type='text' status='danger' />
    // </div>
    <div className='flex column gap-12'>
    <div className='flex column gap-8'>
        <Title title='按钮类型' type='h3' />
        <div className='flex gap-12'>
          <Button/>
        </div>
    </div>
    </div>
  )
}

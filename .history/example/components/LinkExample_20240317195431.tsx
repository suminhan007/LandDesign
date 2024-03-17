import React from 'react';
import Title from '../../packages/Title';
import Link from '../../packages/Link';

export default function LinkExample() {
  return (
    <div className='flex column gap-24'>
      <div className='flex column gap-12'>
        <Title title='按钮类型' type='h3' />
              <div className='flex justify-center gap-24 border p-32'>
                  <Link>常规链接</Link>
                  <Link type=''>警告链接</Link>
                  <Link>常规链接</Link>
                  <Link>常规链接</Link>
                  <Link>常规链接</Link>
            </div>
        </div>
    </div>
  )
}

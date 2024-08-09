import React from 'react'
import Title from '../../packages/Title'
import SelectTree from '../../packages/SelectTree'

export default function SelectTreeExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规输入框" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <SelectTree data={[
            { value: 'all', label: '全部' },
            {
              value: 'shenzhen',
              label: '深圳市',
              children: [
                { value: 'nanshan', label: '南山区', },
                { value: 'futian', label: '福田区' },
                { value: 'baoan', label: '宝安区' },
              ]
            }
          ]} />
        </div>
      </div>
    </div>
  )
}

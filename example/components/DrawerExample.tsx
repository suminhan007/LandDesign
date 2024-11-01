import React, { useState } from 'react'
import Title from '../../packages/Title'
import Drawer from '../../packages/Drawer'
import Button from '../../packages/Button'
import Input from '../../packages/Input';
import Select from '../../packages/Select';
import Alert from '../../packages/Alert';

export default function DrawerExample() {
  const [show1, setShow1] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);
  const [show3, setShow3] = useState<boolean>(false);
  const [show4, setShow4] = useState<boolean>(false);
  const [show5, setShow5] = useState<boolean>(false);

  const [show6, setShow6] = useState<boolean>(false);
  const [show7, setShow7] = useState<boolean>(false);
  const [show8, setShow8] = useState<boolean>(false);
  const [show9, setShow9] = useState<boolean>(false);

  const [show10, setShow10] = useState<boolean>(false);

  const [show11, setShow11] = useState<boolean>(false);

  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规侧拉窗" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Button onClick={() => setShow1(true)}>打开侧拉窗</Button>
          <Drawer show={show1} onClose={() => setShow1(false)} onCancel={() => setShow1(false)} onSubmit={() => setShow1(false)}>这里是侧拉窗的具体内容</Drawer>
        </div>
        <Title title="自定义侧拉窗头部（标题、左侧、右侧、整体）" type="h3" />
        <div className="flex column items-center justify-center gap-24 border p-32">
          <Button onClick={() => setShow5(true)}>打开侧拉窗（侧拉窗标题）</Button>
          <Drawer show={show5} title='侧拉窗标题' onClose={() => setShow5(false)} onCancel={() => setShow5(false)} onSubmit={() => setShow5(false)}>这里是侧拉窗的具体内容</Drawer>
          <Button onClick={() => setShow2(true)}>打开侧拉窗（自定义侧拉窗头部左侧）</Button>
          <Drawer show={show2} headerLeftComponent={<Input />} onClose={() => setShow2(false)} onCancel={() => setShow2(false)} onSubmit={() => setShow2(false)}>这里是侧拉窗的具体内容</Drawer>
          <Button onClick={() => setShow3(true)}>打开侧拉窗（自定义侧拉窗头部右侧）</Button>
          <Drawer show={show3} headerRightComponent={<Select />} onClose={() => setShow3(false)} onCancel={() => setShow3(false)} onSubmit={() => setShow3(false)}>这里是侧拉窗的具体内容</Drawer>
          <Button onClick={() => setShow4(true)}>打开侧拉窗（自定义侧拉窗头部）</Button>
          <Drawer show={show4} headerComponent={<div style={{ height: '64px' }} className='flex items-center justify-center'>自定义侧拉窗头部</div>} onClose={() => setShow4(false)} onCancel={() => setShow4(false)} onSubmit={() => setShow4(false)} >这里是侧拉窗的具体内容</Drawer>
        </div>

        <Title title="自定义侧拉窗尾部（按钮文案、左侧、右侧、整体）" type="h3" />
        <div className="flex column items-center justify-center gap-24 border p-32">
          <Button onClick={() => setShow6(true)}>打开侧拉窗（侧拉窗按钮文案）</Button>
          <Drawer show={show6} title='侧拉窗标题' submitLabel='知道了' onClose={() => setShow6(false)} onSubmit={() => setShow6(false)}>这里是侧拉窗的具体内容</Drawer>
          <Button onClick={() => setShow7(true)}>打开侧拉窗（自定义侧拉窗尾部左侧）</Button>
          <Drawer show={show7} title='侧拉窗标题' footerLeftComponent={<Alert title='侧拉窗底部提示内容' />} onClose={() => setShow7(false)} onCancel={() => setShow7(false)} onSubmit={() => setShow7(false)}>这里是侧拉窗的具体内容</Drawer>
          <Button onClick={() => setShow8(true)}>打开侧拉窗（自定义侧拉窗尾部右侧）</Button>
          <Drawer show={show8} title='侧拉窗标题' footerRightComponent={<>自定义侧拉窗尾部右侧</>} onClose={() => setShow8(false)}>这里是侧拉窗的具体内容</Drawer>
          <Button onClick={() => setShow9(true)}>打开侧拉窗（自定义侧拉窗尾部）</Button>
          <Drawer show={show9} title='侧拉窗标题' onClose={() => setShow9(false)} footerComponent={<div style={{ height: '64px' }} className='flex items-center justify-center'>自定义侧拉窗尾部</div>}>这里是侧拉窗的具体内容</Drawer>
        </div>

        <Title title="带遮罩侧拉窗" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Button onClick={() => setShow10(true)}>打开侧拉窗（带遮罩）</Button>
          <Drawer show={show10} mask onClose={() => setShow10(false)} onCancel={() => setShow10(false)} onSubmit={() => setShow10(false)}>这里是侧拉窗的具体内容</Drawer>
        </div>

        <Title title="底部侧拉窗" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Button onClick={() => setShow11(true)}>打开底部侧拉窗</Button>
          <Drawer show={show11} placement='bottom' mask onClose={() => setShow11(false)} onCancel={() => setShow11(false)} onSubmit={() => setShow11(false)}>这里是侧拉窗的具体内容</Drawer>
        </div>
      </div>
    </div>
  )
}

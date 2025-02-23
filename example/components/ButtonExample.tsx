import Title from '../../packages/Title';
import Button from '../../packages/Button';
import Icon from '../../packages/Icon';
import Loading from '../../packages/Loading';

export default function ButtonExample() {
  return (
    <div className='flex column gap-24'>
      <div className='flex column gap-12'>
        <Title title='按钮类型' type='h3' />
        <div className='flex justify-center gap-24 border p-32'>
          <Button text='按钮' type='text' />
          <Button text='按钮' type='background' />
          <Button text='按钮' type='border' />
          <Button text='按钮' type='line' />
          <Button text='按钮' type='transparent' />
        </div>
      </div>

      <div className='flex column gap-12'>
        <Title title='按钮状态' type='h3' />
        <div className='flex column items-center gap-24 border p-32'>
          <div className='flex gap-24'>
            <Button text='按钮' type='text' status='default'/>
            <Button text='按钮' type='text' status='primary'/>
            <Button text='按钮' type='text' status='warning'/>
            <Button text='按钮' type='text' status='danger'/>
            <Button text='按钮' type='text' status='success'/>
          </div>
          <div className='flex gap-24'>
            <Button text='按钮' type='background' status='default'/>
            <Button text='按钮' type='background' status='primary'/>
            <Button text='按钮' type='background' status='warning'/>
            <Button text='按钮' type='background' status='danger'/>
            <Button text='按钮' type='background' status='success'/>
          </div>

          <div className='flex gap-24'>
            <Button text='按钮' type='line' status='default'/>
            <Button text='按钮' type='line' status='primary'/>
            <Button text='按钮' type='line' status='warning'/>
            <Button text='按钮' type='line' status='danger'/>
            <Button text='按钮' type='line' status='success'/>
          </div>
          <div className='flex gap-24'>
            <Button text='按钮' type='transparent' status='default'/>
            <Button text='按钮' type='transparent' status='primary'/>
            <Button text='按钮' type='transparent' status='warning'/>
            <Button text='按钮' type='transparent' status='danger'/>
            <Button text='按钮' type='transparent' status='success'/>
          </div>
        </div>
      </div>

      <div className='flex column gap-8'>
        <Title title='按钮尺寸' type='h3'/>
        <div className='flex column items-center gap-24 border p-32'>
          <div className='flex gap-24 items-center'>
            <Button text='按钮' type='border' status='default' size='small'/>
            <Button text='按钮' type='border' status='default'/>
            <Button text='按钮' type='border' status='default' size='large' />
          </div>
          <div className='flex gap-24 items-center'>
            <Button icon={<Icon name='download' />} type='border' status='default' size='small' />
            <Button icon={<Icon name='download' />} type='border' status='default' />
            <Button icon={<Icon name='download' />} type='border' status='default' size='large' />
          </div>
        </div>
      </div>

      <div className='flex column gap-8'>
        <Title title='图标按钮' type='h3' />
        <div className='flex justify-center gap-24 border p-32'>
          <Button text='下载' type='border' icon={<Icon name='download' />} />
          <Button type='border' icon={<Icon name='download' />} />
        </div>
      </div>

      <div className='flex column gap-8'>
        <Title title='加载状态按钮' type='h3' />
        <div className='flex justify-center gap-24 border p-32'>
          <Button text='保存中' type='border' icon={<Loading />} />
        </div>
      </div>
    </div>
  )
}

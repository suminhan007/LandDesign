import AutoContainer from '../../packages/AutoContainer'
import Title from '../../packages/Title'

export default function AutoContainerExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规输入框" type="h3" />
        <div className="flex justify-center gap-24 border p-32" style={{ height: '400px' }}>
          <AutoContainer ratio={89 / 50} wrapClassName='flex both-center'>
            <img className='radius-8' width='100%' src='https://cdn-bastani.stunning.kr/prod/portfolios/d0e17867-2326-4d2f-9a31-acc1d4e2f35b/contents/f3hniwKXamztM4VV.P20240302_094300270_5C7F44C7-3ECA-413A-A8FF-806ED34DD5FC.PNG' alt={''}/>
          </AutoContainer>
        </div>
      </div>
    </div>
  )
}

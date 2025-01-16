import Title from "../../packages/Title";
import GridTemplate from "../../packages/GridTemplate";

export default function GridTemplateExample() {
  const gridData = [
    '1',
    '2-1', '2-2',
    '3-1', '3-2', '3-3', '3-4',
    '4', '4-h', '4-v',
    '5-h-1', '5-h-2', '5-h-3', '5-h-4', '5-h-5', '5-h-6', '5-h-7', '5-v-1', '5-v-2', '5-v-3', '5-v-4', '5-v-5', '5-v-6', '5-v-7',
    '6-h-1', '6-h-2', '6-v-1', '6-v-2', '6-1', '6-2', '6-3', '6-4',
    '7-h-1', '7-h-2', '7-h-3', '7-v-1', '7-v-2', '7-v-3',
    '8-h-1', '8-h-2', '8-h-3', '8-h-4', '8-h-5', '8-h-6', '8-v-1', '8-v-2', '8-v-3', '8-v-4', '8-v-5', '8-v-6',
    '9'
  ]
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="设置宫格数量" type="h3" />
        <div className="flex justify-start flex-wrap gap-24 border p-32">
          {gridData.map(i => <div key={i} className="flex column gap-4 items-center fs-12 color-gray-4">
            <GridTemplate type={i} style={{ width: '100px' }} gridClassName="bg-gray" />
            {i}
          </div>)}
        </div>
        <Title title="设置宫图格比例" type="h3" />
        <div className="flex column justify-center gap-24 border p-32">
          <div className="flex gap-24 flex-wrap justify-start width-100">{gridData.map(i => <div key={i} className="flex column gap-4 items-center fs-12 color-gray-4">
            <GridTemplate type={i} ratio={9 / 16} style={{ width: '100px' }} gridClassName="bg-gray" />
            {i}
          </div>)}</div>
          <div className="flex gap-24 flex-wrap width-100">{gridData.map(i => <div key={i} className="flex column gap-4 items-center fs-12 color-gray-4">
            <GridTemplate type={i} ratio={4 / 3} style={{ width: '100px' }} gridClassName="bg-gray" />
            {i}
          </div>)}</div>
        </div>
      </div>
    </div>
  );
}

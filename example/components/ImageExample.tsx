import Title from "../../packages/Title";
import Image from "../../packages/Image";

export default function ImageExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="按钮类型" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Image url="https://cdn-bastani.stunning.kr/prod/portfolios/d0e17867-2326-4d2f-9a31-acc1d4e2f35b/contents/f3hniwKXamztM4VV.P20240302_094300270_5C7F44C7-3ECA-413A-A8FF-806ED34DD5FC.PNG" />
        </div>
      </div>
    </div>
  );
}

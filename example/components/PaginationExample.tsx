import React from "react";
import Title from "../../packages/Title";
import Pagination from "../../packages/Pagination";

export default function PaginationExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="按钮类型" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Pagination
            total={24}
            current={1}
            pageSize={5}
          />
        </div>
        <Title title="按钮禁用" type="h3" />
        <div className="flex justify-center gap-24 border p-32">

        </div>
      </div>
    </div>
  );
}

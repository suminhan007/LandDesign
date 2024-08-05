import React from "react";
import Title from "../../packages/Title";
import Pagination from "../../packages/Pagination";

export default function PaginationExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规分页" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Pagination
            total={7}
            current={1}
            pageSize={5}
          />
        </div>
        <Title title="缩略分页" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Pagination
            total={24}
            current={1}
            pageSize={5}
          />
        </div>
        <Title title="显示总页数" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Pagination
            total={24}
            current={1}
            pageSize={5}
            showTotal
          />
        </div>
        <Title title="显示自定义页码输入框" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Pagination
            total={24}
            current={1}
            pageSize={5}
            showInput
          />
        </div>
      </div>
    </div>
  );
}

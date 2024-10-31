import React from "react";
import Title from "../../packages/Title";
import Table from "../../packages/Table";

export default function TableExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="常规表格" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Table
            className="width-100"
            titleData={[
              { title: "时间", value: "time" },
              { title: "地点", value: "location" },
              { title: "花费", value: "cost" },
            ]}
            data={[
              { title: "8.2", value: "北京", cost: "122元" },
              { title: "8.3", value: "深圳", cost: "88元" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

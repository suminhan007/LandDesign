import React, { useState } from "react";
import Statistic from "../../packages/Statistic";

export default function StatisticExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <div className="flex justify-center gap-24 border p-32">
          <Statistic value="10" unit="亿+" />
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./app.css";
import "../packages/style/atomic.scss";
import "../packages/style/variable.scss";
import "../packages/style/reset.scss";
import Title from "../packages/Title";
import Header from "../packages/Header";
import { ClickType } from "../packages/Menu";
import Components from "./components";
import Design from "./Design";

function App() {
  const [page, setPage] = useState<number | string>(3);
  return (
    <div className="flex column" style={{ height: '100vh' }}>
      <Header
        borderBottom
        name={<Title title='Component Demo Lib' />}
        menuProps={{
          data: [
            // { key: 1, title: '使用指南', clickType: ClickType.SELF },
            // { key: 2, title: '设计语言', clickType: ClickType.SELF },
            { key: 3, title: '组件', clickType: ClickType.SELF }
          ],
          active: page,
          onChange: item => setPage(item.key),
        }}
        align="end"
      />
      <div className="flex-1 flex" style={{ height: '0' }}>
        {page === 2 && <Design />}
        {page === 3 && <Components />}
      </div>
    </div>
  );
}

export default App;

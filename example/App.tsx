import React, { useState } from "react";
import "./app.css";
import "../packages/styles/atomic.scss";
import "../packages/styles/variable.scss";
import "../packages/styles/reset.scss";
import Title from "../packages/Title";
import Header from "../packages/Header";
import { ClickType } from "../packages/Menu";
import Components from "./Components";
import Design from "./Design";
import Animations from "./Animations";

function App() {
  const [page, setPage] = useState<number | string>(3);
  // const [dark, setDark] = useState<boolean>(false);
  return (
    <div className="flex column" style={{ height: "100vh" }}>
      <Header
        borderBottom
        name={<Title title="Component Demo Lib" />}
        menuProps={{
          data: [
            { key: 1, title: '使用指南', clickType: ClickType.SELF },
            { key: 2, title: '设计语言', clickType: ClickType.SELF },
            {
              key: 3,
              title: "组件",
              clickType: ClickType.SELF,
            },
            { key: 4, title: '动画', clickType: ClickType.SELF },
          ],
          active: page,
          onChange: (item) => setPage(item.key),
        }}
        align="end"
      // rightComponent={<Switch label="使用黑色主题" checkedLabel="使用黑色主题" onChange={checked => setDark(checked)} />}
      />
      <div className="flex-1 flex" style={{ height: "0" }}>
        {page === 2 && <Design />}
        {page === 3 && <Components />}
        {page === 4 && <Animations />}
      </div>
    </div>
  );
}

export default App;

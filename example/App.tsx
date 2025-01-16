import  { useState } from "react";
import "./app.css";
import "../packages/styles/atomic.scss";
import "../packages/styles/variable.scss";
import "../packages/styles/reset.scss";
import Title from "../packages/Title";
import Header from "../packages/Header";
import { ClickType } from "../packages";
import Components from "./Components";
import Design from "./Design";
import Animations from "./Animations";
import Switch from "../packages/Switch";
import {Routes, Route, useNavigate} from 'react-router-dom';

function App() {
  const [page, setPage] = useState<string>('3');
  //@ts-ignore
  const [dark, setDark] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <div className="flex column" style={{ height: "100vh" }}>
      <Header
        borderBottom
        name={<Title title="Component Demo Lib" />}
        menuProps={{
          data: [
            { key: '1', title: "使用指南", clickType: ClickType.SELF,href:'/' },
            { key: '2', title: "设计语言", clickType: ClickType.SELF,href:'/design' },
            {
              key: '3',
              title: "组件",
              clickType: ClickType.SELF,
                href:'/component'
            },
            { key: '4', title: "动画", clickType: ClickType.SELF,href:'.animation' },
          ],
          active: page,
          onChange: (item) => {
              setPage(item.key);
              navigate(item.href)
          },
        }}
        align="end"
        rightComponent={
          <Switch
            label="使用黑色主题"
            checkedLabel="使用黑色主题"
            onChange={(checked) => setDark(checked)}
          />
        }
      />
      <div className="flex-1 flex" style={{ height: "0" }}>
          <Routes>
              <Route path="/" element={<Components />} />
              <Route path="/design" element={<Design />} />
              <Route path="/component" element={<Components />} />
              <Route path="/component?name=components-preview" element={<Components />} />
              <Route path="/animation" element={<Animations />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;

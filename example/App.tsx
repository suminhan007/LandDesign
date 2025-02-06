import {useEffect, useState} from "react";
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
import React from "react";

function App() {
  const [page, setPage] = useState<string>('/land-design/component/name=componentsPreview');
  //@ts-ignore
  const [dark, setDark] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
      const href = window.location.href?.split('/land-design/#/');
      if(href?.length >=2){
          const targetHref = href[1]?.split('?')[0];
          setPage(targetHref);
      }
  },[window.location.href])
  return (
    <div className="flex column" style={{ height: "100vh" }}>
      <Header
        borderBottom
        name={<Title title="Component Demo Lib" />}
        menuProps={{
          data: [
            { key: 'newer', title: "使用指南", clickType: ClickType.SELF,href:'newer' },
            { key: 'design', title: "设计语言", clickType: ClickType.SELF,href:'design' },
            {
              key: 'component',
              title: "组件",
              clickType: ClickType.SELF,
                href:'component'
            },
            { key: 'animation', title: "动画", clickType: ClickType.SELF,href:'animation' },
          ],
          active: page,
          onChange: (item) => {
              setPage(item.key);
              navigate(item.href??'/')
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
              <Route path="design" element={<Design />} />
              <Route path="component" element={<Components />} />
              <Route path="animation" element={<Animations />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;

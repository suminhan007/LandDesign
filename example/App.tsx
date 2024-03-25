import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./app.css";
import "../packages/style/atomic.scss";
import "../packages/style/variable.scss";
import "../packages/style/reset.scss";

import Button from "../packages/Button";
import Divider from "../packages/Divider";
import Table from "../packages/Table";
import Title from "../packages/Title";
import ComponentPreview from "./components/ComponentPreview";

// 引入数据
import {
  COMMON_COMPONENTS_DATA,
  LAYOUT_COMPONENTS_DATA,
  NAV_COMPONENTS_DATA,
  INPUT_COMPONENTS_DATA,
  DISPLAY_COMPONENTS_DATA,
  FEEDBACK_COMPONENTS_DATA,
  TEXT_COMPONENTS_DATA,
  OTHER_COMPONENTS_DATA,
} from "./mock";

const Nav_Data = [
  { id: 1, data: COMMON_COMPONENTS_DATA, title: "通用型" },
  { id: 2, data: LAYOUT_COMPONENTS_DATA, title: "布局型" },
  { id: 3, data: NAV_COMPONENTS_DATA, title: "导航型" },
  { id: 4, data: INPUT_COMPONENTS_DATA, title: "数据输入型" },
  { id: 5, data: DISPLAY_COMPONENTS_DATA, title: "输入展示型" },
  { id: 6, data: FEEDBACK_COMPONENTS_DATA, title: "反馈型" },
  { id: 7, data: TEXT_COMPONENTS_DATA, title: "文字型" },
  { id: 8, data: OTHER_COMPONENTS_DATA, title: "其他" },
];

function App() {
  const [activedId, setActivedId] = useState<number>(203);
  const [activedPage, setActivedPage] = useState<number>(1);
  useEffect(() => {
    if (activedId > 700) {
      setActivedPage(8);
    } else if (activedId > 600) {
      setActivedPage(7);
    } else if (activedId > 500) {
      setActivedPage(6);
    } else if (activedId > 400) {
      setActivedPage(5);
    } else if (activedId > 300) {
      setActivedPage(4);
    } else if (activedId > 200) {
      setActivedPage(3);
    } else if (activedId > 100) {
      setActivedPage(2);
    } else {
      setActivedPage(1);
    }
  }, [activedId]);
  return (
    <>
      <StyledTopNav className="flex px-24">
        <Title
          title=""
          style={{ color: "var(--color-primary-6)" }}
        />
      </StyledTopNav>
      <div className="flex">
        <StyledLeftNav className="flex column gap-20 py-24 px-24 overflow-auto">
          {/* <Title title='-- 组件索引' type='p' className='my-8' style={{ color: 'var(--color-primary-6)' }} /> */}
          <Button
            text="组件索引"
            width="100%"
            justify="start"
            type={activedId === 0 ? "background" : "text"}
            onClick={() => setActivedId(0)}
          />
          {Nav_Data.map((navItem) => (
            <div className="flex column gap-8">
              <Title
                title={`-- ${navItem.title}`}
                type="p"
                className="my-8"
                style={{ color: "var(--color-primary-4)" }}
              />
              {navItem.data?.map((navBtnItem) => (
                <Button
                  key={navBtnItem.id}
                  text={navBtnItem.en}
                  subText={navBtnItem.zh}
                  width="100%"
                  justify="start"
                  type={activedId === navBtnItem.id ? "background" : "text"}
                  onClick={() => setActivedId(navBtnItem.id)}
                />
              ))}
            </div>
          ))}
        </StyledLeftNav>
        <StyledRightContent className="flex column p-24 overflow-auto">
          {/* 组件索引 */}
          {activedId === 0 && <ComponentPreview />}
          {activedId != 0 &&
            Nav_Data[activedPage - 1].data
              .filter((itm) => itm.id === activedId)
              .map((item) => (
                <>
                  <Title title={`${item.zh} ${item.en}`} type="h1" />
                  <Title title={item.desc} type="p" />
                  <Divider margin={20} />
                  <Title title="1. 组件预览" type="h2" className="mb-16" />
                  {item.example}
                  <Title title="2. API" type="h2" className="my-16" />
                  <Table
                    titleData={[
                      { title: "属性", value: "props" },
                      { title: "类型", value: "type" },
                      { title: "描述", value: "desc" },
                      { title: "可选", value: "need", antiDesc: '必须' },
                    ]}
                    data={item.props}
                    style={{ width: "100%" }}
                  />
                  <Title title="3. Type" type="h2" className="my-16" />
                  {
                    item.types.map(type =>
                      <>
                        <Title title={type.name} type="h3" className="mt-16" />
                        <Title title={type.desc} type="p" className="mt-8" />
                        <Table
                          className="width-100 mt-16"
                          titleData={[
                            { title: "属性", value: "props" },
                            { title: "类型", value: "type" },
                            { title: "描述", value: "desc" },
                            { title: "可选", value: "need", antiDesc: '必须' },
                          ]}
                          data={type.data}
                        />
                      </>
                    )
                  }
                </>
              ))}
        </StyledRightContent>
      </div>
    </>
  );
}

const StyledTopNav = styled.div`
  position: fixed;
  width: 100vw;
  height: 64px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: var(--blur-small);
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  z-index: 1;
`;

const StyledLeftNav = styled.div`
  width: 240px;
  height: 100vh;
  padding-top: 88px;
  flex-shrink: 0;
  border-right: 1px solid var(--color-border-1);
  box-sizing: border-box;
`;

const StyledRightContent = styled.div`
  flex: 1;
  min-width: 784px;
  max-width: 960px;
  height: 100vh;
  margin: 0 auto;
  padding-top: 88px;
  box-sizing: border-box;
`;

export default App;

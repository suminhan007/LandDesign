import React, { useMemo, useState } from "react";
import styled from "styled-components";
import Title from "../../packages/Title";
import Table from "../../packages/Table";
import Divider from "../../packages/Divider";
import ComponentPreview from "./ComponentPreview";

// 引入数据
import { COMPONENTS_DATA } from "../mock";
import Menu from "../../packages/Menu";
import {useNavigate} from "react-router-dom";
type Props = {};

const Components: React.FC<Props> = ({ }) => {
    const navigate = useNavigate();
  const [active, setActive] = useState<string>("components-preview");
  const [dropActive, setDropActive] = useState<string>("components-preview");
  const href = useMemo(() => window.location.href.split('?name=')[1],[window.location.href]);
  const curItem = useMemo(() => {
    let item: any = { id: 1, en: "Icon", zh: "图标" };
    const activeGroupItem = COMPONENTS_DATA.filter(item => item.id === active)[0];
    item = activeGroupItem?.data?.filter((itm2) => itm2.id === href)[0];
    return item;
  }, [active, dropActive]);
  return (
    <>
      <Menu
        data={COMPONENTS_DATA.map((item) => ({
          key: item.id,
          title: item.title,
          open: true,
          dropData: item.data
            ? item.data.map((itm) => ({
              key: itm.id,
              title: itm.en,
              subTitle: itm.zh,
            }))
            : [],
        }))}
        active={active}
        onChange={(item) => {
          setActive(item.key);
          setDropActive(item.key);
            navigate(`/component?name=${item.key}`)
        }}
        onDropChange={(item, parentItem) => {
          setActive(parentItem.key);
          setDropActive(item.key);
            navigate(`/component?name=${item.key}`)
        }}
        dropProps={{
          active: dropActive,
          direction: "column",
          border: false,
        }}
        direction="column"
        theme={{ activeBg: "var(--color-bg-1)", lineColor: "transparent" }}
        style={{ width: "252px", height: "100%" }}
        className="py-24 overflow-auto scrollbar-none"
      />

      <div className="flex-1 p-24 height-100 overflow-auto border-box">
        <StyledRightContent className="flex column width-100">
          {/* 组件索引 */}
          {active === 'components-preview' && (
            <ComponentPreview
              onClick={(dropItem, item) => {
                setActive(item.id);
                setDropActive(dropItem.id);
              }}
            />
          )}
          {active !== 'components-preview' && (
            <>
              <Title title={`${curItem.zh} ${curItem.en}`} type="h1" />
              {curItem.desc && <Title title={curItem.desc} type="p" />}
              <Divider margin={20} />
                <div id={'组件预览'}>
                    <Title title="1. 组件预览" type="h2" className="mb-16" />
                    {curItem.example}
                </div>
                <div id={'API'}><Title title="2. API" type="h2" className="my-16"/></div>
                  {curItem.props && (
                <Table
                  titleData={[
                    { title: "属性", value: "props" },
                    { title: "类型", value: "type" },
                    { title: "描述", value: "desc" },
                  ]}
                  data={curItem.props}
                  style={{ width: "100%" }}
                />
              )}
                <div id={'Type'}>
                    {curItem.types?.length > 0 && (
                    <>
                        <Title title="3. Type" type="h2" className="my-16"/>
                        {curItem.types?.map((type) => (
                            <div key={type.id} id={type.name}>
                                <Title title={type.name} type="h3" className="mt-16"/>
                                {type.desc && <Title title={type.desc} type="p" className="mt-8"/>}
                                <Table
                                    className="width-100 mt-16"
                                    titleData={[
                                        {title: "属性", value: "props"},
                                        {title: "类型", value: "type"},
                                        {title: "描述", value: "desc"},
                                    ]}
                                    data={type.data}
                                />
                            </div>
                        ))}
                    </>
                )}</div>
            </>
          )}
        </StyledRightContent>
      </div>
    </>
  );
};

export const StyledRightContent = styled.div`
  max-width: 960px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export default Components;

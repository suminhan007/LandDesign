import React from "react";
import Title from "../../packages/Title";
import Flex from "../../packages/Flex";
import Layout from "../../packages/Layout";
import Header from "../../packages/Header";
import Sider from "../../packages/Sider";
import Content from "../../packages/Content";
import Footer from "../../packages/Footer";
import { IconRefresh } from "../../packages/Icon";

export default function LayoutExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="基本布局" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <Layout className="border width-100" style={{ height: 600 }}>
            <Header logo={<p>🌷🌷🌷</p>} name={<Title title="Web Site" type="h2" />} />
            <Layout>
              <Sider placement='left'><Flex bothCenter h="100%">SiderLeft</Flex></Sider>
              <Content style={{ minHeight: '464px' }}><Flex bothCenter h="100%">Content</Flex></Content>
              <Sider placement='right'><Flex bothCenter h="100%">SiderRight</Flex></Sider>
            </Layout>
            <Footer><Flex bothCenter>Footer</Flex></Footer>
          </Layout>
        </div>
        <Title title="固定顶部导航栏s" type="h3" />
        <div className="flex justify-center gap-24 p-32 border">
          <Layout className="border width-100" style={{ height: 600 }}>
            <Header logo={<p>🌷🌷🌷</p>} name={<Title title="Web Site" type="h2" />} fixed filter={10} />
            <Layout>
              <Sider placement='left'><Flex bothCenter h="100%">SiderLeft</Flex></Sider>
              <Content style={{ minHeight: '464px' }}><Flex bothCenter h="100%">Content</Flex></Content>
              <Sider placement='right'><Flex bothCenter h="100%">SiderRight</Flex></Sider>
            </Layout>
            <Footer><Flex bothCenter>Footer</Flex></Footer>
          </Layout>
        </div>
      </div>
    </div>
  );
}

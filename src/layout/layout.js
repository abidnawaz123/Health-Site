import React from "react";
import styles from "./style.module.scss";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import TopHeader from "../components/pages/header/Header";
import HeroSection from "../components/pages/hero/HeroSection";
import Feature from "../components/pages/features/Feature";
import Blogs from "../components/pages/blogs/Blogs";

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <div className={styles.customContainer}>
        <Layout>
          <TopHeader />
          <Content>
            <HeroSection />
            <Feature />
            <Blogs/>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    </div>
  );
};

export default MainLayout;

import React from "react";
import styles from "./style.module.scss";
import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import TopHeader from "../components/pages/header/Header";
import HeroSection from "../components/pages/hero/HeroSection";
import Feature from "../components/pages/features/Feature";
import Blogs from "../components/pages/blogs/Blogs";
import Testimonials from "../components/pages/testimonials/Testimonials";
import Pricing from "../components/pages/pricing/Pricing";
import BottomFooter from "../components/pages/footer/Footer";

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Layout>
        <TopHeader />
        <div className={styles.customContainer}>

          <Content className={styles.content}>
            <HeroSection />
            <Feature />
            <Blogs />
            <Testimonials />
            <Pricing />
          </Content>
        </div>

        <Footer className={styles.footer}>
          <BottomFooter />
        </Footer>
      </Layout>
    </div>
  );
};

export default MainLayout;

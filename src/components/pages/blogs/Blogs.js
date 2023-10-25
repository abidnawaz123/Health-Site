import React from 'react'
import styles from "./style.module.scss"
import { Card, Col, Row } from 'antd'

const Blogs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.blogSectionWrapper}>
                <h3 className={styles.blogHeading}>Our Blogs</h3>
                <p>Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here's what you can expect from our blog.</p>
            </div>
            <Row gutter={10} style={{ width: '100%' }}>
                <Col lg={12} span={12} xs={24} sm={24} md={24} style={{ border: '1px solid blue' }}>
                    Col 1</Col>
                <Col lg={12} span={12} xs={24} sm={24} md={24} style={{ border: '1px solid black' }}>
                    Col 2</Col>
            </Row>
        </div>
    )
}

export default Blogs
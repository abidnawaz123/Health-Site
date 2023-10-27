import React, { useState } from 'react'
import styles from "./style.module.scss"
import { Card, Col, Image, Row } from 'antd'
import { image } from '../../../utils/images'
import { HeartFilled, BookOutlined } from "@ant-design/icons"

const Blogs = () => {

    const [checkedIcon, setCheckedIcon] = useState(false)

    const handleIconColorChange = (key) => {
        setCheckedIcon(prevState => !prevState)
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.blogSectionWrapper}>
                    <h3 className={styles.blogHeading}>Our Blogs</h3>
                    <p>Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here's what you can expect from our blog.</p>
                </div>
                <div className={styles.rowWrapper}>
                    <Row gutter={[16, 16]}>
                        <Col  sm={24} md={12} >
                            <div className={styles.cardWrapper}>
                                <Card className={styles.card}>
                                    <img alt='blog post image' src={image.BlogPost1} width="100%" height="auto" />
                                    <div className={styles.cardTypo}>
                                        <p className={styles.headerLabel}>Weight loss</p>
                                        <h3>The Benefits of Hydration for Weight Loss</h3>
                                        <p className={styles.text}>Discover how staying hydrated can support your weight loss goals and improve overall health.</p>
                                    </div>
                                    <Card className={styles.userCardSection}>
                                        <div className={styles.userCard} >
                                            <div className={styles.customUser}>
                                                <Image src={image.SquareLogo1} preview={false} />
                                                <div>
                                                    <h3>Emily Johnson</h3>
                                                    <p>23 May 2023 - 5 min read</p>
                                                </div>
                                            </div>
                                            <div className={styles.actionButtons}>
                                                <div className={checkedIcon ? styles.actionButton1 : styles.checkedActionButton}> <HeartFilled onClick={() => {setCheckedIcon(prevState => !prevState)}} /></div>
                                                <div className={styles.actionButton2}><BookOutlined /></div>
                                            </div>
                                        </div>
                                    </Card>
                                </Card>
                            </div>
                        </Col>
                        <Col  sm={24} md={12} >
                            <div className={styles.cardWrapper}>
                                <Card className={styles.card}>
                                    <img alt='blog post image' src={image.BlogPost2} width="100%" height="auto" />
                                    <div className={styles.cardTypo}>
                                        <p className={styles.headerLabel}>Weight loss</p>
                                        <h3>The Benefits of Hydration for Weight Loss</h3>
                                        <p className={styles.text}>Discover how staying hydrated can support your weight loss goals and improve overall health.</p>
                                    </div>
                                    <Card className={styles.userCardSection}>
                                        <div className={styles.userCard} >
                                            <div className={styles.customUser}>
                                                <Image src={image.SquareLogo2} preview={false} />
                                                <div>
                                                    <h3>Emily Johnson</h3>
                                                    <p>23 May 2023 - 5 min read</p>
                                                </div>
                                            </div>
                                            <div className={styles.actionButtons}>
                                                <div className={checkedIcon ? styles.actionButton1 : styles.checkedActionButton}> <HeartFilled onClick={() => { setCheckedIcon(prevState => !prevState) }} /></div>
                                                <div className={styles.actionButton2}><BookOutlined /></div>
                                            </div>
                                        </div>
                                    </Card>
                                </Card>
                            </div>
                        </Col>
                        <Col  sm={24} md={12}>
                            <div className={styles.cardWrapper}>
                                <Card className={styles.card}>
                                    <img alt='blog post image' src={image.BlogPost3} width="100%" height="auto" />
                                    <div className={styles.cardTypo}>
                                        <p className={styles.headerLabel}>Weight loss</p>
                                        <h3>The Benefits of Hydration for Weight Loss</h3>
                                        <p className={styles.text}>Discover how staying hydrated can support your weight loss goals and improve overall health.</p>
                                    </div>
                                    <Card className={styles.userCardSection}>
                                        <div className={styles.userCard} >
                                            <div className={styles.customUser}>
                                                <Image src={image.SquareLogo3} preview={false} />
                                                <div>
                                                    <h3>Emily Johnson</h3>
                                                    <p>23 May 2023 - 5 min read</p>
                                                </div>
                                            </div>
                                            <div className={styles.actionButtons}>
                                                <div className={checkedIcon ? styles.actionButton1 : styles.checkedActionButton}> <HeartFilled onClick={() => { setCheckedIcon(prevState => !prevState) }} /></div>
                                                <div className={styles.actionButton2}><BookOutlined /></div>
                                            </div>
                                        </div>
                                    </Card>
                                </Card>
                            </div>
                        </Col>
                        <Col  sm={24} md={12}>
                            <div className={styles.cardWrapper}>
                                <Card className={styles.card}>
                                    <img alt='blog post image' src={image.BlogPost4} width="100%" height="auto" />
                                    <div className={styles.cardTypo}>
                                        <p className={styles.headerLabel}>Weight loss</p>
                                        <h3>The Benefits of Hydration for Weight Loss</h3>
                                        <p className={styles.text}>Discover how staying hydrated can support your weight loss goals and improve overall health.</p>
                                    </div>
                                    <Card className={styles.userCardSection}>
                                        <div className={styles.userCard} >
                                            <div className={styles.customUser}>
                                                <Image src={image.SquareLogo4} preview={false} />
                                                <div>
                                                    <h3>Emily Johnson</h3>
                                                    <p>23 May 2023 - 5 min read</p>
                                                </div>
                                            </div>
                                            <div className={styles.actionButtons}>
                                                <div className={checkedIcon ? styles.actionButton1 : styles.checkedActionButton}> <HeartFilled onClick={() => { setCheckedIcon(prevState => !prevState) }} /></div>
                                                <div className={styles.actionButton2}><BookOutlined /></div>
                                            </div>
                                        </div>
                                    </Card>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}

export default Blogs
import React from 'react'
import styles from "./style.module.scss"
import { Card, Col, Row } from 'antd'
import QuotesIcon from "../../../assets/images/Quotes.svg"

const Testimonials = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.testimonialsWrapper}>
                    <div className={styles.testimonialsHeading}>
                        <h3>Our Testimonials</h3>
                        <p>Our satisfied clients share their success stories and experiences on their journey to better health and well-being.</p>
                    </div>
                    <div>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card>
                                    <div>
                                        <img src={QuotesIcon} alt='quote image' />
                                        <p>
                                            I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!
                                        </p>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card>
                                    <div>
                                        <img src={QuotesIcon} alt='quote image' />
                                        <p>
                                            Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!
                                        </p>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card>
                                    <div>
                                        <img src={QuotesIcon} alt='quote image' />
                                        <p>
                                            I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!
                                        </p>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials
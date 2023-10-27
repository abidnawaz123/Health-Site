import React from 'react'
import { FEATURES, TRILORED_NUTRITION } from '../../../utils/constants'
import styles from "./style.module.scss"
import { Col, Row } from 'antd'
import { image } from '../../../utils/images'

const Feature = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.featuresWrapper}>
                    <h3>Features</h3>
                    <p>{FEATURES}</p>
                </div>
                <Row gutter={[20, 20]} style={{ width: '100%' }}>
                    <Col lg={12} span={12} xs={24} sm={24} md={24}>
                        <div className={styles.col1}>
                            <div className={styles.column1}>
                                <div>
                                    <div className={styles.iconSection}>
                                        <img alt='img' src={image.flowerIcon} height={25} width={25} /></div>
                                </div>
                                <h4>Personalized Nutrition Plans</h4>
                            </div>
                            <p>
                                {TRILORED_NUTRITION}
                            </p>
                        </div>

                    </Col>
                    <Col lg={12} span={12} xs={24} sm={24} md={24}>
                        <div className={styles.col1}>
                            <div className={styles.column1}>
                                <div>
                                    <div className={styles.iconSection}> <img alt='img' src={image.graduationIcon} height={25} width={25} /></div>
                                </div>
                                <h4>Personalized Nutrition Plans</h4>
                            </div>
                            <p>
                                {TRILORED_NUTRITION}
                            </p>
                        </div>

                    </Col>
                    <Col lg={12} span={12} xs={24} sm={24} md={24}>
                        <div className={styles.col1}>
                            <div className={styles.column1}>
                                <div>
                                    <div className={styles.iconSection}> <img alt='img' src={image.fork} height={25} width={25} /></div>
                                </div>
                                <h4>Personalized Nutrition Plans</h4>
                            </div>
                            <p>
                                {TRILORED_NUTRITION}
                            </p>
                        </div>

                    </Col>
                    <Col lg={12} span={12} xs={24} sm={24} md={24}>
                        <div className={styles.col1}>
                            <div className={styles.column1}>
                                <div>
                                    <div className={styles.iconSection}> <img alt='img' src={image.wallet} height={25} width={25} /></div>
                                </div>
                                <h4>Personalized Nutrition Plans</h4>
                            </div>
                            <p>
                                {TRILORED_NUTRITION}
                            </p>
                        </div>

                    </Col>
                    <Col lg={12} span={12} xs={24} sm={24} md={24}>
                        <div className={styles.col1}>
                            <div className={styles.column1}>
                                <div>
                                    <div className={styles.iconSection}> <img alt='img' src={image.dumbell} height={25} width={25} /></div>
                                </div>
                                <h4>Personalized Nutrition Plans</h4>
                            </div>
                            <p>
                                {TRILORED_NUTRITION}
                            </p>
                        </div>

                    </Col><Col lg={12} span={12} xs={24} sm={24} md={24}>
                        <div className={styles.col1}>
                            <div className={styles.column1}>
                                <div>
                                    <div className={styles.iconSection}> <img alt='img' src={image.backPack} height={25} width={25} /></div>
                                </div>
                                <h4>Personalized Nutrition Plans</h4>
                            </div>
                            <p>
                                {TRILORED_NUTRITION}
                            </p>
                        </div>

                    </Col>

                </Row>
            </div>

        </>
    )
}

export default Feature
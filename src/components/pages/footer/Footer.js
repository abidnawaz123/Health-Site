import React from 'react'
import styles from "./style.module.scss"
import Link from 'antd/es/typography/Link'
import { Button, Card } from 'antd'
import { NUTRITIONIST } from '../../../utils/constants'
import { MessageFilled, PhoneFilled, CaretRightFilled } from "@ant-design/icons"
import { ArrowUpOutlined } from "@ant-design/icons"

const BottomFooter = () => {
    const navLabels = ["Home", "About", "Team", "Process", "Pricing", "Blog"]

    return (
        <>
            <div className={styles.nutritions}>
                <div className={styles.container}>
                    <ul>
                        <h3>{NUTRITIONIST}</h3>
                        {
                            navLabels.map((items, ind) => {
                                return (
                                    <li key={ind}><Link href='#'>{items}</Link></li>
                                )
                            })
                        }
                        <li>
                            <div className={styles.goToTop}>
                                Go to top
                                <Button className={styles.topHeaderButton}>
                                    <a href='#'><ArrowUpOutlined /></a>
                                </Button>
                            </div>
                        </li>
                    </ul>
                    <div>
                        <Card className={styles.bottomCard}>
                           <div className={styles.bottomSubCard}>
                           <div  className={styles.iconsSection}>
                                <div className={styles.iconsWrapper}>
                                    <MessageFilled className={styles.icons} />
                                    <p>hello@squareup.com</p>
                                </div>
                                <div className={styles.iconsWrapper}>
                                    <PhoneFilled className={styles.icons} />
                                    <p>+91 91813 23 2309</p>
                                </div>
                                <div className={styles.iconsWrapper}>
                                    <CaretRightFilled className={styles.icons} />
                                    <p>Somewhere in the world</p>
                                </div>
                                <div>
                                </div>
                            </div>
                            <p>Created By Abid ©2023</p>
                           </div>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomFooter
import React from 'react'
import styles from "./style.module.scss"
import Link from 'antd/es/typography/Link'
import { Button } from 'antd'
import { NUTRITIONIST } from '../../../utils/constants'
import { ArrowUpOutlined } from "@ant-design/icons"

const BottomFooter = () => {
    const navLabels = ["Home", "About", "Team", "Process", "Pricing", "Blog"]

    return (
        <>
            <div className={styles.nutritions}>
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
            </div>
        </>
    )
}

export default BottomFooter
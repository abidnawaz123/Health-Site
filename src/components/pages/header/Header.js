import React from 'react'
import styles from "./style.module.scss"
import Link from 'antd/es/typography/Link'
import { Button } from 'antd'
import { NUTRITIONIST } from '../../../utils/constants'
import { Header } from "antd/es/layout/layout";


const TopHeader = () => {
    const navLabels = ["Home", "About", "Team", "Process", "Pricing", "Blog"]

    return (
        <>
            <Header className={styles.header} hidden={false} >
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
                        <li><Link><Button className={styles.topHeaderButton}>Contact Us</Button></Link></li>
                    </ul>
                </div>
            </Header>
        </>
    )
}

export default TopHeader
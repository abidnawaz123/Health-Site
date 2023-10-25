import React from 'react'
import { COACHING, DESCRIPTION_1, HEALTH_LABEL } from '../../../utils/constants'
import styles from "./style.module.scss"
import { Avatar, Button } from 'antd'
import { image } from '../../../utils/images'

const HeroSection = () => {
    const avatarGroup = [
        image.image1, image.image2, image.image3]

    return (
        <div className={styles.container}>
            <div className={styles.hero_section_wrapper}>
            <h3 className={styles.mainLabel}>{HEALTH_LABEL}</h3>
            <h1 className={styles.giantHeading}>{COACHING}</h1>
            <p className={styles.description_1}>{DESCRIPTION_1}</p>
            <div className={styles.buttonsGroup}>
                <Button>Get starter today</Button>
                <Button>Book a Demo</Button>
            </div>
            <div className={styles.avatarSection}>
                <div className={styles.avatarWrapper}>
                    <Avatar.Group maxCount={3} maxPopoverTrigger="click" size="large">
                        {avatarGroup.map((item, ind) => <Avatar key={ind} src={item} />)}
                    </Avatar.Group>
                </div>
                <div>
                    <span className={styles.customerAmount}>
                        430 +</span> <span className={styles.customerDetails}>Happy Customers</span>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HeroSection
import React from 'react';
import styles from '../styles/Background.module.scss';


function Background() {
    return (
        <div className={styles.background}>

            <img className={styles.city_1} src="./city-day.svg" />
            <img className={styles.city_2} src="./city-day.svg" />

            <img className={styles.flying_bird} src="./flying-bird.gif" />

            <img className={styles.sun} src="./sun.gif" />
            <img className={styles.air_ballon} src="./air_ballon.gif" />
            <img className={styles.airplane} src="./airplane.gif" />

            

        </div>
    )
}

export default Background

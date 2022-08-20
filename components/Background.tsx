import React, {useMemo} from 'react';
import styles from '../styles/Background.module.scss';

interface HourDependingStyles {
    sunTop: string | null
    citySVGURL: string
    sunLight: boolean
    isDay: boolean
}

const getHourValues = () : HourDependingStyles => {
    const hour = new Date().getHours();
    const normalizeWithNegatives = (x: number, min: number, max: number) => ( (2 * ((x-min) / (max - min))) - 1 );

    let sunTop = 0;
    let city = "city-day.svg";
    let isDay = true;

    if(hour >= 6 && hour <= 18){
        sunTop = (normalizeWithNegatives(hour, 6, 18) * 300) - 150;
        if(hour >= 6 && hour <= 11) sunTop = (sunTop + 275)*-1;
    } else {
        sunTop = null;
        city = "city-night.svg";
        isDay = false;
    }

    let sunLight = false;

    if(hour === 6 || hour === 7 || hour === 17 || hour === 18){
        sunLight = true;
    }

    return ({sunTop: sunTop ? sunTop + "px" : null, citySVGURL: city, sunLight, isDay});
    
}


export default function Background({lightning} : {lightning: number}) {

    const data : HourDependingStyles = useMemo(getHourValues, []);

    return (
        <div style={{backgroundColor: `${data.isDay ? "#d5f6ff" : "black"}`}} className={`${styles.background} ${data.sunLight ? styles.sunLight : ""}`}>

            <img className={styles.city_1} src={`./${data.citySVGURL}`} />
            <img className={styles.city_2} src={`./${data.citySVGURL}`} />

            <img className={styles.flying_bird} src="./flying-bird.gif" />

            <img style={{top: data.sunTop, visibility: data.sunTop ? "visible" : "hidden"}} className={styles.sun} src="./sun.gif" />
            <div className={styles.moon}><img className={styles.moon} src="./moon.png" /><div style={{left: `${lightning + 5}%` }} className={styles.moon_shadow}></div> </div>
            <img className={styles.air_ballon} src="./air_ballon.gif" />
            <img className={styles.airplane} src="./airplane.gif" />

        </div>
    )
}
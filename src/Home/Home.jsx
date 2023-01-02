import React from "react";
import s from './Home.module.scss'
import ava from './img/ava.png'


export const Home = ({theme}) => {
    return (
        <div className={s.container}>
            <div className={s.figure}></div>

            <div className={s.titleContainer}>
                <div className={s.wrapperTitle}>
                    <div className={s.decoration}>

                    </div>
                    <div className={s.innerWrapper}>
                        <p className={s.name}>I'm Sergey Saprankov.</p>
                        <h1 className={theme ? s.title : `${s.title} ${s.darkTitle}`}>frontend developer</h1>
                    </div>
                </div>
                <p className={theme ? s.description : `${s.description} ${s.light}`}>I'm a Belarusian based front‑end
                    developer focused on crafting clean & user‑friendly experiences, I am passionate about building
                    excellent software that improves the lives of those around me.</p>
            </div>
        </div>
    )
}
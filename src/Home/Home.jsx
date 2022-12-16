import React from "react";
import s from "./Home.module.scss"
import avatar from '../img/ava4.png'
import download from '../img/logo/download.svg'

export const Home = () => {
    return (
        <div className={s.container}>
            <div></div>

            <div className={s.titleWrapper}>
                <div className={s.titleContainer}>
                    <span className={s.upperTitle}>Hello!</span>
                    <span>I am Sergey Saprankov<span className={s.decoration}>|</span></span>
                </div>
                <div className={s.linkContainer}>
                    <div className={s.linkWrapper}>
                        <a className={s.link} href="#">
                          Download CV
                        </a>
                    </div>
                    <div className={s.linkWrapper}>
                        <a className={s.link} href="#">Contact me</a>
                    </div>
                </div>

            </div>
            <div className={s.avatarContainer}>
                <img className={s.avatar} src={avatar} alt="avatar"/>
            </div>
        </div>
    )
}
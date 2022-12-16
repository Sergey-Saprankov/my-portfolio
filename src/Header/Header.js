import React from "react";
import avatar from '../img/new1.png'
import s from './Header.module.scss'


export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.innerWrapper}>
                    <nav className={s.nav}>
                        <ul className={s.items}>
                            <li className={s.item}>
                                <a className={s.link} href="">Home</a>
                            </li>
                            <li className={s.item}>
                                <a className={s.link} href="">About</a>
                            </li>
                            <li className={s.item}>
                                <a className={s.link} href="">Portfolio</a>
                            </li>
                            <li className={s.item}>
                                <a className={s.link} href="">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className={s.wrapper}>
                        <div className={s.titleWrapper}>
                            <h1 className={s.title}>Hi, I am Sergey Saprankov</h1>
                            <span className={s.subtitle}>A professional Frontend Developer</span>
                            <p className={s.text}>Let's see why you should <span>hire me.</span></p>
                            <div>scroll down</div>
                        </div>
                        <div className={s.imgContainer}>
                            <img className={s.img} src={avatar} alt="avatar"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
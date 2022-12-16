import React from "react";
import s from './Sidebar.module.scss'
import telegram from '../img/logo/Telegram.png'
import git from '../img/logo/GitHub.png'
import gmail from '../img/logo/Gmail.png'
import linkedin from '../img/logo/Linkedin.png'

export const Sidebar = () => {
    return (
        <div className={s.container}>
            <div className={s.innerWrapper}>
                <div className={s.titleContainer}>
                    <h1 className={s.title}>
                        <span className={s.name}>Sergey Saprankov</span>
                        <span>Frontend developer</span>
                        <div className={s.decorations}></div>
                    </h1>
                </div>
                <ul className={s.items}>
                    <li className={s.item}><a className={s.link} href="#">Home</a></li>
                    <li className={s.item}><a className={s.link} href="#">Skills</a></li>
                    <li className={s.item}><a className={s.link} href="#"></a>Portfolio</li>
                    <li className={s.item}><a className={s.link} href="#"></a>Contacts</li>
                </ul>
                <div className={s.socialContainer}>
                    <ul className={s.socialItems}>
                        <li className={s.socialItem}>
                            <a href="#">
                                <img className={s.socialImg} src={telegram} alt="telegram"/>
                            </a>
                        </li>
                        <li className={s.socialItem}>
                            <a href="#">
                                <img className={s.socialImg} src={git} alt="git"/>
                            </a>
                        </li>
                        <li className={s.socialItem}>
                            <a href="#">
                                <img className={s.socialImg}  src={gmail} alt="gmail"/>
                            </a>
                        </li>
                        <li className={s.socialItem}>
                            <a href="#">
                                <img className={s.socialImg} src={linkedin} alt="linkedin"/>
                            </a>
                        </li>
                    </ul>

                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}
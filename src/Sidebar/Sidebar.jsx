import React, {useState} from 'react';
import s from './Sidebar.module.scss'
import home from './icon/home.svg'
import skills from './icon/skills.svg'
import portfolio from './icon/portfolio.svg'
import contacts from './icon/contacts.svg'
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    const [active, setActive] = useState('home')
    return (
        <div className={s.container}>
            <div className={s.innerWrapper}>
                <ul className={s.navigate}>
                    <NavLink onClick={() => setActive('home')}  to={"/"} >
                        <li className={active ? `${s.item} ${s.active}` : s.item}>
                            <h2 className={s.navTitle}>Home</h2>
                            <div className={s.linkFlex}>
                                <img className={s.navIcon} src={home} alt="home icon"/>
                            </div>
                        </li>
                    </NavLink>
                    <li className={s.item}>
                        <h2 className={s.navTitle}>Skills</h2>
                        <div className={s.linkFlex}>

                            <img className={s.navIcon} src={skills} alt="skills icon"/>

                        </div>
                    </li>
                    <li className={s.item}>
                        <h2 className={s.navTitle}>Portfolio</h2>
                        <div className={s.linkFlex}>

                                <img className={s.navIcon} src={portfolio} alt="skills icon"/>

                        </div>
                    </li>
                    <li className={s.item}>
                        <h2 className={s.navTitle}>Contacts</h2>
                        <div className={s.linkFlex}>
                                <img className={s.navIcon} src={contacts} alt="skills icon"/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
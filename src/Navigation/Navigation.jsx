import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navigation.module.scss'
import darkHome from './icon/house-dark.svg';
import lightHome from './icon/home-light.svg';
import personLight from './icon/person-light.svg';
import personDark from './icon/person-dark.svg';
import portfolioLight from './icon/briefcase-light.svg';
import portfolioDark from './icon/briefcase-fill.svg';
import contactLight from './icon/envelope-open-light.svg';
import contactDark from './icon/envelope-open-fill.svg';




export const Navigation = ({theme}) => {
    console.log(theme)
    return (
        <div className={s.navContainer}>
            <ul className={s.nav}>
                <li className={s.item}>
                    <NavLink className={(isActive) => isActive ? s.active : ''} to={'/'}>
                        {
                            theme ?
                                <img className={s.light} src={lightHome} alt="lightHome"/>
                                :
                                <img className={s.dark} src={darkHome} alt="darkHome"/>
                        }
                    </NavLink>
                </li>
                <li className={s.item}>
                    {/*<div>*/}
                    {/*    home*/}
                    {/*</div>*/}
                    <NavLink className={`${(isActive) => isActive ? s.active : ''} ${s.navLink}`} to={'/'}>
                        {
                            theme ?
                                <img className={s.light} src={personLight} alt="lightHome"/>
                                :
                                <img className={s.dark} src={personDark} alt="darkHome"/>
                        }
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={(isActive) => isActive ? s.active : ''} to={'/'}>
                        {
                            theme ?
                                <img className={s.light} src={portfolioLight} alt="portfolioLight"/>
                                :
                                <img className={s.dark} src={portfolioDark} alt="portfolioDark"/>
                        }
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={(isActive) => isActive ? s.active : ''} to={'/'}>
                        {
                            theme ?
                                <img className={s.light} src={contactLight} alt="contactLight"/>
                                :
                                <img className={s.dark} src={contactDark} alt="contactDark"/>
                        }
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
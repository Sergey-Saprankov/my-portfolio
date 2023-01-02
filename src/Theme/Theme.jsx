import React from "react";
import '../App.css';
import s from './Theme.module.scss';
import themeDark from './icon/theme.svg'
import themeLight from './icon/theme-light.svg'


export const Theme = ({theme, callBack}) => {
    return (
        <div className={s.container}>
            <div className={s.innerWrapper}>
                {theme ?
                    <div onClick={() => callBack(!theme)} className={s.iconDarkContainer}>
                        <img className={s.darkIcon} src={themeDark} alt="icon-theme"/>
                    </div> :
                    <div onClick={() => callBack(!theme)} className={s.iconLightContainer}>
                        <img className={s.lightIcon} src={themeLight} alt="icon-theme"/>
                    </div>
                }
            </div>
        </div>
    )
}
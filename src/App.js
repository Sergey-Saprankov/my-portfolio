import logo from './logo.svg';
import './App.css';
import {Header} from "./Header/Header";
import avatar from './img/new2.jpg'
import s from "./Header/Header.module.scss";
import React from "react";
import {Sidebar} from "./Sidebar/Sidebar";
import {Home} from "./Home/Home";

function App() {
    return (
        <div className={'container'}>
            <Sidebar/>
            <div className={'innerWrapper'}>
                <Home/>
            </div>
        </div>
)
    ;
}

export default App;

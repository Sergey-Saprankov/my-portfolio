import './App.css';
import {Theme} from "./Theme/Theme";
import {useState} from "react";
import {Navigation} from "./Navigation/Navigation";
import {Route, Routes} from "react-router-dom";
import {Home} from "./Home/Home";
import Sidebar from "./Sidebar/Sidebar";


function App() {
    const [theme, setTheme] = useState(true)
    console.log(theme)
    return (
        <div className={"container"}>
            <div className={"innerWrapper"}>
                <div className={"content"}>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                    </Routes>
                </div>
                <div className={"navigation"}>
                    <Sidebar/>
                </div>
            </div>
        </div>
)
    ;
}

export default App;

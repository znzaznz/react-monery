import React from "react"
import Nav from "./component/Nav"
import Switch from "./component/SwitchContain"
import "./App.scss"
import {NavLink,useLocation} from "react-router-dom";
import SvgIcon from "./component/SvgIcon";


function App() {
    const location = useLocation().pathname
    return (
    <div  className={"container"}>
        <main>
            <Switch/>
            {location !== "/money" ? <NavLink to={"/money"} className={"account"}>
                <SvgIcon name={`icon-money`} />
            </NavLink> : ""}
        </main>
        <Nav/>
    </div>
  );
}
export default App;

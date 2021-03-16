import React from 'react';
import "./index.scss";
import NavLi from "../NavLi"

export default function index() {
    return (
        <nav className={"Nav"}>
            <ul>
                <NavLi type={"tags"} name={"标签"}/>
                <NavLi type={"money"} name={"记账"}/>
                <NavLi type={"statistics"} name={"统计"}/>
            </ul>
        </nav>
    )
}
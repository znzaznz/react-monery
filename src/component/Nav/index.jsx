import React from 'react';
import "./index.scss";
import NavLi from "../NavLi"

export default function index() {
    return (
        <nav className={"Nav"}>
            <ul>
                <li>
                    <NavLi type={"tags"} name={"标签"}/>
                </li>
                <li>
                    <NavLi type={"statistics"} name={"统计"}/>
                </li>
                <li>
                    <NavLi type={"account"} name={"记账"}/>
                </li>
            </ul>
        </nav>
    )
}
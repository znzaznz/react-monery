import React from 'react';
import {NavLink} from "react-router-dom";
import "./index.scss"
require("../../icons/tags.svg");
require("../../icons/statistics.svg")
require("../../icons/money.svg")

export default function Index(props) {
    return (
        <li className={"NavLi"}>
            <NavLink to={`${props.type}`} activeClassName={"selected"}>
                <svg>
                    <use xlinkHref={`#${props.type}`}/>
                </svg>
                {props.name}
            </NavLink>
        </li>
    )
}
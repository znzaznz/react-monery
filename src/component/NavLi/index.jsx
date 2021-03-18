import React from 'react';
import {NavLink} from "react-router-dom";
import "./index.scss"
import Icon from "../Icon/index";

export default function Index(props) {
    return (
        <li className={"NavLi"}>
            <NavLink to={`${props.type}`} activeClassName={"selected"}>
                <Icon type={props.type}/>
                {props.name}
            </NavLink>
        </li>
    )
}
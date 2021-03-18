import React from 'react';
import {NavLink} from "react-router-dom";
import SvgIcon from "../SvgIcon"
import "./index.scss"

export default function Index(props) {
    return (
        <li className={"NavLi"}>
            <NavLink to={`${props.type}`} activeClassName={"selected"}>
                <SvgIcon name={props.type}/>
                {props.name}
            </NavLink>
        </li>
    )
}
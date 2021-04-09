import React from 'react';
import {NavLink} from "react-router-dom";
import SvgIcon from "../SvgIcon"
import "./index.scss"

export default function Index(props) {
    return (
        <NavLink to={`/${props.type}`} activeClassName={"selected"} className={"NavLi"}>
            <SvgIcon name={`icon-${props.type}`}/>
            {props.name}
        </NavLink>
    )
}
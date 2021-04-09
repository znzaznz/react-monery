import React from 'react';
import "./index.scss"
require("../../icons/left.svg")
require("../../icons/right.svg")

export default function index(props) {
    return (
        <svg className={"SvgIcon"}>
            <use xlinkHref={`#${props.name}`}/>
        </svg>
    )
}
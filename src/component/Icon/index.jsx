import React from 'react';
require("../../icons/tags.svg");
require("../../icons/statistics.svg")
require("../../icons/money.svg")

export default function index(props) {
    return (
        <svg>
            <use xlinkHref={`#${props.type}`}/>
        </svg>
    )}
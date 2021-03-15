import React from 'react';
import {Link} from "react-router-dom";
import "./index.scss";
require("../../icons/tags.svg");
require("../../icons/statistics.svg")
require("../../icons/money.svg")

export default function index() {
    return (
        <nav className={"Nav"}>
            <ul>
                <li>
                    <svg>
                        <use xlinkHref="#tags"/>
                    </svg>
                    <Link to={"/tags"}>标签</Link>
                </li>
                <li>
                    <svg>
                        <use xlinkHref="#money"/>
                    </svg>
                    <Link to={"/tags"}>记账</Link>
                </li>
                <li>
                    <svg>
                        <use xlinkHref="#statistics"/>
                    </svg>
                    <Link to={"/tags"}>统计</Link>
                </li>
            </ul>
        </nav>
    )
}
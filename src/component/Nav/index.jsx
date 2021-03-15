import React from 'react';
import {Link} from "react-router-dom";
import "./index.scss"

export default function index() {
    return (
        <nav className={"Nav"}>
            <ul>
                <li>
                    <svg>
                        <use xlinkHref={""}/>
                    </svg>
                    <Link to={"/tags"}>标签</Link>
                </li>
                <li><Link to={"/money"}>记账</Link></li>
                <li><Link to={"/statistics"}>统计</Link></li>
            </ul>
        </nav>
    )
}
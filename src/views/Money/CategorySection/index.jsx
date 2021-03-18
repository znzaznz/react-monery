import React from 'react';
import "./index.scss"

export default function index() {
    return (
        <div className={"CategorySection"}>
            <ol>
                <li className={"selected"}>支出</li>
                <li>收入</li>
            </ol>
        </div>
    )
}
import React from 'react';
import "./index.scss"

export default function index() {
    return (
        <div className={"NoteSection"}>
            <label>
                <span>备注</span>
                <input type="text" placeholder={"在这里添加备注"}/>
            </label>
        </div>
    )
}
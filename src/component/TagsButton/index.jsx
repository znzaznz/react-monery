import React from 'react';
import "./index.scss"

export default function index(props) {
    return (
        <div className={"TagButton"}>
            <button onClick={props.onClick}>{props.name}</button>
        </div>
    )
}
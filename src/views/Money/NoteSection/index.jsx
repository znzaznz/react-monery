import React from 'react';
import "./index.scss"
import ChangeTags from "../../../component/ChangeTags/ChangeTags";

export default function Index(props) {

    return (
        <div className={"NoteSection"}>
            <ChangeTags onChange={(inputValue)=>{props.onChange(inputValue)}}
                        value={props.note} labelName={"备注"}/>
        </div>
    )
}
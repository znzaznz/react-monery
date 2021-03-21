import React, {useRef} from 'react';
import "./index.scss"

export default function ChangeTags(props) {
    const inputValue = useRef(null)
    return (
        <div className={"ChangeTags"}>
            <label>
                <span>{props.labelName}</span>
                <input type="text" ref={inputValue} placeholder={"在这里输入内容"}
                       onChange={()=>{props.onChange(inputValue.current.value)}}
                       value={props.value}/>
            </label>
        </div>
    )
}
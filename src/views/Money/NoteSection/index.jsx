import React, {useRef} from 'react';
import "./index.scss"

export default function Index(props) {
    const inputValue = useRef(null)

    //收集数据
    const collectValue = ()=>{
        props.onChange(inputValue.current.value)
    }

    return (
        <div className={"NoteSection"}>
            <label>
                <span>备注</span>
                <input type="text" placeholder={"在这里添加备注"} ref={inputValue} onChange={collectValue} value={props.note}/>
            </label>
        </div>
    )
}
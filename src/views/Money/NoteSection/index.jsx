import React, {useRef} from 'react';
import "./index.scss"

export default function Index() {
    const inputValue = useRef(null)

    //收集数据
    const collectValue = ()=>{
        console.log(inputValue.current.value);
    }

    return (
        <div className={"NoteSection"}>
            <label>
                <span>备注</span>
                <input type="text" placeholder={"在这里添加备注"} ref={inputValue} onBlur={collectValue}/>
            </label>
        </div>
    )
}
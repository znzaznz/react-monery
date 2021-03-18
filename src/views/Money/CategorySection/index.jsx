import React, {useState} from 'react';
import "./index.scss"

export default function Index(props) {
    //定义收支情况
    const hashPayment = {"-":"支出","+":"收入"}

    //选择收支的函数
    const selectCategory = (category)=>{
        props.onChange(category)
    }

    return (
        <div className={"CategorySection"}>
            <ol>
                <li className={props.category === "-" ? "selected" : ""} onClick={()=>{selectCategory("-")}}>{hashPayment["-"]}</li>
                <li className={props.category === "+" ? "selected" : ""} onClick={()=>selectCategory("+")}>{hashPayment['+']}</li>
            </ol>
        </div>
    )
}
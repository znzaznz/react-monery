import React from 'react';
import "./index.scss"

export default function Index() {
    const buttonNum = ['1',"2",'3','删除','4','5','6','清空','7','8','9','OK','0','.']
    return (
        <div className={"NumberPadSection"}>
            <div className={"showNum"}>100</div>
            <div className={"numberPad clearfix"}>
                {buttonNum.map((item)=>{
                   return <button key={item}>{item}</button>
                })}
            </div>
        </div>
    )
}
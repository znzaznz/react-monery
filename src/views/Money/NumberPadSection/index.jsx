import React,{useState} from 'react';
import "./index.scss"
import {buttonClick} from "../../../lib/buttonClick";

export default function Index() {
    //初始化代码数据，并且得到showNum中的数字
    const buttonNum = ['1',"2",'3','删除','4','5','6','清空','7','8','9','OK','0','.']
    const [showNum,setShowNum] = useState("0")

    //设定button点击事件
    const buttonClickNum = (e)=>{
        const inputValue = e.target.textContent
        buttonClick(inputValue,showNum,setShowNum) //重构了代码
    }

    return (
        <div className={"NumberPadSection"}>
            <div className={"showNum"}>{showNum}</div>
            <div className={"numberPad clearfix"}>
                {buttonNum.map((item)=>{
                   return <button key={item} onClick={buttonClickNum}>{item}</button>
                })}
            </div>
        </div>
    )
}
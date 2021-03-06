import React,{useState} from 'react';
import "./index.scss"
import {buttonClick} from "../../../lib/buttonClick.jsx";

export default function Index(props) {
    //初始化代码数据，并且得到showNum中的数字
    const buttonNum = ['1','2','3','日期','4','5','6','+','1','2','3','-','.','0','删除','完成']
    const [showNum,setShowNum] = useState("0")

    //设定button点击事件
    const buttonClickNum = (e)=>{
        const inputValue = e.target.textContent
        if (inputValue === "OK"){
            setShowNum("0")
            props.onClick()
        }else {
            const numberStr = buttonClick(inputValue,showNum) //重构了代码
            setShowNum(numberStr);
            props.onChange(Number(numberStr))
        }
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
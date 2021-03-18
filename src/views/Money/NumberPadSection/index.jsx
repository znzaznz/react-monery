import React,{useState} from 'react';
import "./index.scss"

export default function Index() {
    //初始化代码数据，并且得到showNum中的数字
    const buttonNum = ['1',"2",'3','删除','4','5','6','清空','7','8','9','OK','0','.']
    const [showNum,setShowNum] = useState(0)

    //设定button点击事件
    const clickButtonNum = (e)=>{
        const inputValue = e.target.textContent
        const charCode = inputValue.charCodeAt();
        if (charCode >= 46 && charCode <= 57){
            console.log("数字");
        }else if (inputValue === "清空"){
            console.log("清空");
        }else if (inputValue === "删除"){
            console.log("删除");
        }else {
            console.log("ok")
        }
    }

    return (
        <div className={"NumberPadSection"}>
            <div className={"showNum"}>{showNum}</div>
            <div className={"numberPad clearfix"}>
                {buttonNum.map((item)=>{
                   return <button key={item} onClick={clickButtonNum}>{item}</button>
                })}
            </div>
        </div>
    )
}
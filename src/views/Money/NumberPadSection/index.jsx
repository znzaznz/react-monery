import React,{useState} from 'react';
import "./index.scss"

export default function Index() {
    //初始化代码数据，并且得到showNum中的数字
    const buttonNum = ['1',"2",'3','删除','4','5','6','清空','7','8','9','OK','0','.']
    const [showNum,setShowNum] = useState("0")

    //设定button点击事件
    const clickButtonNum = (e)=>{
        const inputValue = e.target.textContent
        const charCode = inputValue.charCodeAt();
        if (charCode >= 46 && charCode <= 57){
            if (showNum.length <= 17){
                if (showNum === "0" && inputValue !== "."){
                    return setShowNum(inputValue)
                }
                if (inputValue === "." && showNum.indexOf(".") !== -1){
                    return showNum;
                }
                setShowNum(showNum+inputValue)
            }else {
                alert("数字过长")
            }
        }else if (inputValue === "清空"){
            setShowNum("0")
        }else if (inputValue === "删除"){
            if (showNum.length === 1){
                setShowNum("0")
            }else {
                setShowNum(showNum.slice(0,-1))
            }
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
import React, {useState} from 'react';
import "./index.scss"

export default function Index() {
    //定义收支情况
    const [payment,setPayment] = useState("-")
    const hashPayment = {"-":"支出","+":"收入"}

    //选择收支的函数
    const selectCategory = (category)=>{
        setPayment(category)
    }

    return (
        <div className={"CategorySection"}>
            <ol>
                <li className={payment === "-" ? "selected" : ""} onClick={()=>{selectCategory("-")}}>{hashPayment["-"]}</li>
                <li className={payment === "+" ? "selected" : ""} onClick={()=>selectCategory("+")}>{hashPayment['+']}</li>
            </ol>
        </div>
    )
}
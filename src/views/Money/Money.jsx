import React, {useState} from 'react';
import TagsSection from "./TagsSection"
import NoteSection from "./NoteSection"
import CategorySection from "./CategorySection"
import NumberPadSection from "./NumberPadSection"
import {checkState} from "../../lib/checkState"
import "./index.scss"
import {connect} from "react-redux";
import {collectData} from "../../model/action/record_action";
import uuid from "react-uuid";

const defaultRecord = {
    tags:[],
    note:"",
    category:"-",
    account:0,
    date:null
}

function Money(props) {
    //建立初始数据
    const [putData,setPutData] = useState(defaultRecord)

    //子组件改变父组件数据
    const  changePutData = (data)=>{
        setPutData(()=>{
            return {
                ...putData,...data
            }
        })
    }

    //提交代码
    const submit = ()=>{
        if (checkState(putData) === true){
            props.collectData({...putData,date:new Date(),id:uuid()})
            setPutData(defaultRecord)
        }else {
            alert("请确定标签勾选和数目输入再重新输入")
        }
    }

    return (
        <div className={"Money"}>
           <TagsSection tags={putData.tags} onChange={(data)=>changePutData({tags:data})}/>
           <NoteSection onChange={(data)=>changePutData({note:data})} note={putData.note}/>
           <div className="moneywapper">
               <CategorySection category={putData.category} onChange={(data)=>changePutData({category:data})}/>
           </div>
           <NumberPadSection number={putData.account} onChange={(data)=>{changePutData({account:data})}} onClick={submit}/>
        </div>
    )
}

export default connect(state=>({record:state}),{
    collectData
})(Money)
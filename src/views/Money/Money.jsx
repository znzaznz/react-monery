import React, {useState} from 'react';
import TagsSection from "./TagsSection"
import NoteSection from "./NoteSection"
import CategorySection from "./CategorySection"
import NumberPadSection from "./NumberPadSection"
import "./index.scss"

export default function Money() {
    //建立初始数据
    const [putData,setPutData] = useState({
        tags:[],
        note:"",
        category:"-",
        account:0
    })

    //子组件改变父组件数据
    const  changePutData = (data)=>{
        setPutData(()=>{
            return {
                ...putData,...data
            }
        })
    }

    return (
        <div className={"Money"}>
           <TagsSection tags={putData.tags} onChange={(data)=>changePutData({tags:data})}/>
           <NoteSection onChange={(data)=>changePutData({note:data})}/>
           <CategorySection category={putData.category} onChange={(data)=>changePutData({category:data})}/>
           <NumberPadSection onChange={(data)=>{changePutData({account:data})}}/>
        </div>
    )
}
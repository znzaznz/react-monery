import React, {useState} from 'react';
import uuid from "react-uuid"
import "./index.scss"

export default function Index() {
    //定义标签数组
    const [tags,setTags] = useState([
        {id:uuid(),name:"衣"},
        {id:uuid(),name:"食"},
        {id:uuid(),name:"住"},
        {id:uuid(),name:"行"}])

    //添加标签
    const addTags = ()=>{
        const tagName = window.prompt("请输入您要添加的标签")
        setTags(()=>{
            return [...tags,{id:uuid(),name:tagName}]
        })
    }

    //增加选中效果
    const [selectedTags,setSelectedTags] = useState([])
    const selectedSwitch = (itemID)=>{
        return ()=>{
            if (selectedTags.indexOf(itemID) === -1){
                setSelectedTags([...selectedTags,itemID])
            }else {
                setSelectedTags(selectedTags.filter(item=>item!==itemID))
            }
        }
    }

    return (
        <div className={"TagsSection"}>
            <div>
                <ol>
                    {tags.map((item) => {
                        return <li key={item.id} className={selectedTags.indexOf(item.id)  >= 0? "selected" : ""}
                        onClick={selectedSwitch(item.id)}
                        >{item.name}</li>
                    })}
                </ol>
                <button onClick={addTags}>新增标签</button>
            </div>
        </div>
    )
}
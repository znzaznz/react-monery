import React, {useState} from 'react';
import uuid from "react-uuid"
import "./index.scss"
import {useTags} from "../../../model/useTags";

export default function Index(props) {
    const {tagsArr,addTag} = useTags()


    //增加选中效果
    const selectedTags = props.tags;
    const setSelectedTags = props.onChange
    const selectedSwitch = (itemID)=>{
        return ()=>{
            if (selectedTags.indexOf(itemID) === -1){
                setSelectedTags([...selectedTags, itemID])
            }else {
                setSelectedTags(selectedTags.filter(item=>item!==itemID))
            }
        }
    }

    return (
        <div className={"TagsSection"}>
            <div>
                <ol>
                    {tagsArr.map((item) => {
                        return <li key={item.id} className={selectedTags.indexOf(item.id) !== -1 ? "selected":""}
                        onClick={selectedSwitch(item.id)}
                        >{item.name}</li>
                    })}
                </ol>
                <button onClick={addTag}>新增标签</button>
            </div>
        </div>
    )
}
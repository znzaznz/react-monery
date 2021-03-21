import React from 'react';
import uuid from "react-uuid";

export default function index(props) {
    //增加的方法
    const addTags = ()=>{
        const tagName = window.prompt("请输入您要添加的标签")
        if (tagName === ""){
            return alert("标签不能为空哦，请重新输入")
        }else{
            props.setTags(()=>{
                return [...props.tags,{id:uuid(),name:tagName}]
            })
        }
    }

    return (
        <button onClick={addTags}>新增标签</button>
    )
}
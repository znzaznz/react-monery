import uuid from "react-uuid";
import {useState} from "react";

const defaultData = [
    {id:uuid(),name:"衣"},
    {id:uuid(),name:"食"},
    {id:uuid(),name:"住"},
    {id:uuid(),name:"行"}
]
const useTags = ()=>{
    //设置初始的tag名字
    const [tagsArr,setTagsArr] = useState([])
    //改变tag的名字
    const changeTagName = (id,newName)=>{
        setTagsArr(tagsArr.filter((item) => {
            if (item.id === id) {
                item.name = newName;
            }
            return item
        }));
    }
    //查找tag
    const selectTagName = (id)=>{
        let tagName = null;
        tagsArr.forEach((item)=>{
            if (item.id === id){
                tagName = item.name
            }
        })
        return tagName;
    }
    //增加Tag
    const addTag = ()=>{
        const tagName = window.prompt("请输入您要添加的标签")
        if (tagName !== ""){
            setTagsArr(()=>{
                return [...tagsArr,{id:uuid(),name:tagName}]
            })
        }else{
            alert("您的输入不正确哦")
        }
    }
    //删除标签
    const deleteTag = (id)=>{
        setTagsArr(tagsArr.filter((item) => {
            if (item.id !== id) {
                return item
            }
        }))
    }

    return {
        tagsArr,
        changeTagName,
        selectTagName,
        addTag,
        deleteTag
    }
}

export {useTags}
import React, {useState} from 'react';
import uuid from "react-uuid"
import AddTagsButton from "../../../component/AddTagsButton"
import "./index.scss"

export default function Index(props) {
    //定义标签数组
    const [tags,setTags] = useState([
        {id:uuid(),name:"衣"},
        {id:uuid(),name:"食"},
        {id:uuid(),name:"住"},
        {id:uuid(),name:"行"}])


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
                    {tags.map((item) => {
                        return <li key={item.id} className={selectedTags.indexOf(item.id) !== -1 ? "selected":""}
                        onClick={selectedSwitch(item.id)}
                        >{item.name}</li>
                    })}
                </ol>
                <AddTagsButton tags={tags} setTags={setTags}/>
            </div>
        </div>
    )
}
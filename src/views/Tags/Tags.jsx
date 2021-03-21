import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useTags} from "../../model/useTags";
import AddTagsButton from "../../component/AddTagsButton"
import SvgIcon from "../../component/SvgIcon"
import "./index.scss"

export default function Tags() {
    const [tagsArr,setTagsArr] = useState(useTags().defaultData)

    return (
        <div className={"Tags"}>
            <div>
                <ol>
                    {tagsArr.map((item)=>{
                        return <li key={item.id}>
                            <Link to={`/tags/${item.id}`}>
                                <span>{item.name}</span>
                                <SvgIcon name={"right"}/>
                            </Link>
                        </li>
                    })}
                </ol>
               <AddTagsButton tags={tagsArr} setTags={setTagsArr}/>
            </div>
        </div>
    )
}
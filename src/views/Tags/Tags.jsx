import React from 'react';
import {Link} from "react-router-dom";
import {useTags} from "../../model/useTags";
import TagsButton from "../../component/TagsButton"
import SvgIcon from "../../component/SvgIcon"
import "./index.scss"

export default function Tags() {
    const {tagsArr,addTag} = useTags()

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
                <TagsButton onClick={addTag} name={"新建标签"}/>
            </div>
        </div>
    )
}
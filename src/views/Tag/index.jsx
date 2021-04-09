import React from 'react';
import SvgIcon from "../../component/SvgIcon"
import {useParams}  from "react-router-dom"
import "./index.scss"
import TagsButton from "../../component/TagsButton"
import {useTags} from "../../model/useTags";
import ChangeTags from "../../component/ChangeTags/ChangeTags";
import RollBack from "../../component/RollBack/RollBack";

export default function Index() {
    //获取当前页面的tag名字并且取得要用的api
    const {tag} = useParams()
    const {selectTagName,deleteTag,changeTagName} = useTags();

    return (
        <div className={"Tag"}>
           <div className={"TagSpan"}>
               <RollBack position={"left"}/>
               <span>编辑标签</span>
               <SvgIcon/>
           </div>
            {selectTagName(tag) ?
                <div>
                    <div className="TagContainerChangeTags">
                        <ChangeTags  onChange={(inputValue)=>{changeTagName(tag,inputValue)}}
                                     value={selectTagName(tag)} labelName={"标签名:"}/>
                    </div>
                    <TagsButton name={"删除标签"} onClick={()=>{return deleteTag(tag)}}/>
                </div>
                 : <div>
                    <span>删除了</span>
                </div>}
        </div>
    )
}
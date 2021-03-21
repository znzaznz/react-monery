import React from 'react';
import SvgIcon from "../../component/SvgIcon"
import NoteSection from "../Money/NoteSection"
import {useParams,useHistory}  from "react-router-dom"
import "./index.scss"
import TagsButton from "../../component/TagsButton"
import {useTags} from "../../model/useTags";

export default function Index(props) {
    //获取当前页面的tag名字并且取得要用的api
    const {tag} = useParams()
    const {selectTagName,deleteTag} = useTags();

    //left图标的回退功能
    const history = useHistory()
    const rollBack = ()=>{
        history.goBack()
    }

    return (
        <div className={"Tag"}>
           <div className={"TagSpan"}>
               <div onClick={rollBack}>
                    <SvgIcon name={"left"}/>
               </div>
               <span>编辑标签</span>
               <SvgIcon/>
           </div>
            <div className="NoteSectionWapper">
                <NoteSection/>
            </div>
            <TagsButton name={"删除标签"} onClick={()=>{deleteTag(tag)}}/>
        </div>
    )
}
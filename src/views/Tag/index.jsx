import React, {useRef} from 'react';
import SvgIcon from "../../component/SvgIcon"
import NoteSection from "../Money/NoteSection"
import {useParams}  from "react-router-dom"
import "./index.scss"
import {useTags} from "../../model/useTags";

export default function Index(props) {
    //获取当前页面的tag名字并且取得要用的api
    let {tag} = useParams()
    const {selectTagName} = useTags();

    return (
        <div className={"Tag"}>
           <div>
               <SvgIcon name={"left"}/>
               <span>标签</span>
           </div>
            <NoteSection note={selectTagName(tag)}/>
        </div>
    )
}
import React from 'react';
import TagsSection from "../../component/TagsSection"
import NoteSection from "../../component/NoteSection"
import CategorySection from "../../component/CategorySection"
import NumberPadSection from "../../component/NumberPadSection"
import "./index.scss"

export default function Money() {
    return (
        <div className={"Money"}>
           <TagsSection/>
           <NoteSection/>
           <CategorySection/>
           <NumberPadSection/>
        </div>
    )
}
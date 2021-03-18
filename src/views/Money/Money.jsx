import React from 'react';
import TagsSection from "./TagsSection"
import NoteSection from "./NoteSection"
import CategorySection from "./CategorySection"
import NumberPadSection from "./NumberPadSection"
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
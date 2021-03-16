import React, {useState} from 'react';
import "./index.scss"

export default function Index() {
    const [tags] = useState(["衣","食","住","行"])
    const addTags = ()=>{}
    return (
        <div className={"TagsSection"}>
            <div>
                <ol>
                    {tags.map((item) => {
                        return <li key={item}>{item}</li>
                    })}
                </ol>
                <button onClick={addTags}>新增标签</button>
            </div>
        </div>
    )
}
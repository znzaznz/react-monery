import React, {useState} from 'react';
import {initializeNumber} from "../../model/initializeNumber";

export default function Tags() {
    const [tagsArr,setTagsArr] = useState(initializeNumber())

    return (
        <>
            <ol>
                {tagsArr.map((item)=>{
                    return <li key={item.id}>
                        {item.name}

                    </li>
                })}
            </ol>
        </>
    )
}
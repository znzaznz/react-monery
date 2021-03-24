import React, {useState} from 'react';
import {connect} from "react-redux";
import CategorySection from "../Money/CategorySection"
import "./index.scss"
import {useTags} from "../../model/useTags";

function Statistics(props) {
    const [category,setCategory] = useState("-")
    const {tagsArr,selectTagName} = useTags();

    return (
        <div className={"statistics"}>
            <div className="statisticswapper">
                <CategorySection category={category} onChange={(category)=>{setCategory(category)}}/>
            </div>
            <ul>
                {props.record.map((item)=>{
                    if (item.category === category){
                        return (
                            <li key={item.id}>
                                <span>
                                    {item.tags.map((item,index)=>{
                                        return index !== 0 ? `,${selectTagName(item)}` : `${selectTagName(item)}`
                                    })}
                                </span>
                                <span className={"note"}>{item.note}</span>
                                <span>{`￥${item.account}`}</span>
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}

export default connect(state=>({record:state}),{

})(Statistics)
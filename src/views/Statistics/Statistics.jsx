import React, {useState} from 'react';
import {connect} from "react-redux";
import dayjs from "dayjs";
import CategorySection from "../Money/CategorySection"
import {useTags} from "../../model/useTags";
import "./index.scss"

function Statistics(props) {
    const [category,setCategory] = useState("-")
    const {selectTagName} = useTags();

    return (
        <div className={"statistics"}>
            <div className="statisticswapper">
                <CategorySection category={category} onChange={(category)=>{setCategory(category)}}/>
            </div>
            <ul>
                {props.record.map((item)=>{
                    if (item.category === category){
                        console.log(dayjs(item.date).format('YYYY-MM-D'));
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
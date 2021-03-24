import React, {useState} from 'react';
import {connect} from "react-redux";
import dayjs from "dayjs";
import CategorySection from "../Money/CategorySection"
import {useTags} from "../../model/useTags";
import "./index.scss"

function Statistics(props) {
    const [category,setCategory] = useState("-")
    const {selectTagName} = useTags();

    //定义展示的数据
    const showRecords = props.record.filter((item)=>{
        return item.category === category
    })
    //设定按照一定的时间顺序排序
    return (
        <div className={"statistics"}>
            <div className="statisticswapper">
                <CategorySection category={category} onChange={(category)=>{setCategory(category)}}/>
            </div>
            <ul>
                {showRecords.map((item)=>{
                    return (
                            <li key={item.id}>
                                <div className={"date"}>{dayjs(item.date).format("YYYY-MM-D")}</div>
                                <div className={"recordLi"}>
                                    <span>
                                    {item.tags.map((item,index)=>{
                                        return index !== 0 ? `,${selectTagName(item)}` : `${selectTagName(item)}`
                                    })}
                                </span>
                                    <span className={"note"}>{item.note}</span>
                                    <span>{`￥${item.account}`}</span>
                                </div>
                            </li>
                    )})}
            </ul>
        </div>
    )
}

export default connect(state=>({record:state}))(Statistics)
import React, {useState} from 'react';
import {connect} from "react-redux";
import CategorySection from "../Money/CategorySection"
import {useTags} from "../../model/useTags";
import "./index.scss"
import {classifyDate} from "../../lib/dealDate";
import uuid from "react-uuid";

function Statistics(props) {
    const [category,setCategory] = useState("-")
    const {selectTagName} = useTags();

    //处理得到的数据
    const showRecords = classifyDate(props.record)
    //设定按照一定的时间顺序排序
    return (
        <div className={"statistics"}>
            <div className="statisticswapper">
                <CategorySection category={category} onChange={(category)=>{setCategory(category)}}/>
            </div>
            <ul>
                {showRecords.map((record)=>{
                    return (
                            <li key={uuid()}>
                                <div><span>{record[0].date}</span></div>
                                {
                                    record.filter((item)=>{
                                        if (item.category === category){

                                        }
                                    })
                                }
                            </li>
                    )})}
            </ul>
        </div>
    )
}

export default connect(state=>({record:state}))(Statistics)

//
// <div className={"recordLi"}>
//     <span>{item.tags.map((item,index)=>{
//             return index !== 0 ? `,${selectTagName(item)}` : `${selectTagName(item)}`
//         })}</span>
// <span className={"note"}>{item.note}</span>
// <span>{`￥${item.account}`}</span>
// </div>
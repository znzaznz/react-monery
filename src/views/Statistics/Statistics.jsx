import React, {useState} from 'react';
import {connect} from "react-redux";
import CategorySection from "../Money/CategorySection"
import {useTags} from "../../model/useTags";
import "./index.scss"
import {dealDate} from "../../lib/dealDate";
import uuid from "react-uuid";

function Statistics(props) {
    const [category,setCategory] = useState("-")
    const {selectTagName} = useTags();

    //处理得到的数据
    const showRecords = dealDate(props.record)
    //设定按照一定的时间顺序排序
    return (
        <div className={"statistics"}>
            <div className="statisticswapper">
                <CategorySection category={category} onChange={(category)=>{setCategory(category)}}/>
            </div>
            <ul>
                {
                    showRecords[category].map((record)=>{
                        return <li key={uuid()}>
                            <div className={"date"}>
                                <span>{record[0].date}</span>
                                <span>{`￥${record.reduce((preValue,item)=>{return preValue+item.account},0)}`}</span>
                            </div>
                            {
                                record.map((item)=>{
                                    return <div className={"recordLi"} key={item.id}>
                                        <span>{item.tags.map((item,index)=>{
                                            return index !== 0 ? `,${selectTagName(item)}` : `${selectTagName(item)}`
                                        })}</span>
                                        <span className={"note"}>{item.note}</span>
                                        <span>{`￥${item.account}`}</span>
                                    </div>
                                })
                            }
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default connect(state=>({record:state}))(Statistics)

//


// <li key={uuid()}>
//     <div><span>{record[0].date}</span></div>
// {
// record.filter((item)=>{
// if (item.category === category){
//
// }
// })
// }
// </li>
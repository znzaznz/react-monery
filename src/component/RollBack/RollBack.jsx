import React from 'react';
import SvgIcon from "../SvgIcon";
import {useHistory} from "react-router-dom";

export default function RollBack(props) {
    //增加回滚操作
    const history = useHistory()
    const rollBack = ()=>{
        history.goBack()
    }

    return (
        <div onClick={rollBack}>
            <SvgIcon name={props.position}/>
        </div>
    )
}
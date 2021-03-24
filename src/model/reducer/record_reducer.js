import {COLLECTDATA} from "../constant";

const record = JSON.parse(window.localStorage.getItem("record")) || [] ;
const recordReducer = (preRecord = record,action)=>{
    const {type,data} = action;
    switch (type){
        case COLLECTDATA:
            return collectData(preRecord,data);
        default:
            return preRecord
    }
}


const collectData = (preState,data)=>{
    const record = [...preState,data]
    window.localStorage.setItem("record",JSON.stringify(record))
    return record
}

export default recordReducer
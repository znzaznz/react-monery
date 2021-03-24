import COLLECTDATA from "../constant";

const record = JSON.parse(window.localStorage.getItem("record")) || [];
const recordReducer = (preRecord = record,action)=>{
    const {type,data} = action;
    switch (type){
        case COLLECTDATA:
            return data;
        default:
            return preRecord
    }
}

export default recordReducer
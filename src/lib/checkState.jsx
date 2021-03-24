//这个代码用来检查提交的数据是否有问题
const checkState = (data)=>{
    let flag = true;
    if (data["tags"].length === 0 || data["account"] === 0){
        flag = false;
    }
    return flag
}

export {checkState}
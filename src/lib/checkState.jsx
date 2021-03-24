//这个代码用来检查提交的数据是否有问题
const checkState = (data)=>{
    let flag = true;
    for (let item in data){
        if (data[item] === 0 || data[item] === []){
            flag = false;
        }
    }
    return flag
}

export {checkState}
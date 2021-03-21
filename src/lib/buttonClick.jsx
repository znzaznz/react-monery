//这个用来封装数字点击激发的事件
const buttonClick = (inputValue,value)=>{
    const charCode = inputValue.charCodeAt();
    if (charCode >= 46 && charCode <= 57){
        if (value.length <= 17){
            if (value === "0" && inputValue !== "."){
                return inputValue
            }
            if (inputValue === "." && value.indexOf(".") !== -1){
                return value;
            }
            return value+inputValue
        }else {
            alert("数字过长")
        }
    }else if (inputValue === "清空"){
        return "0"
    }else if (inputValue === "删除"){
        if (value.length === 1){
            return "0"
        }else {
            return value.slice(0,-1)
        }
    }else {
        return "0"
    }
}

export {buttonClick}
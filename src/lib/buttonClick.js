//这个用来封装数字点击激发的事件
const buttonClick = (inputValue,value,fn)=>{
    const charCode = inputValue.charCodeAt();
    if (charCode >= 46 && charCode <= 57){
        if (value.length <= 17){
            if (value === "0" && inputValue !== "."){
                return fn(inputValue)
            }
            if (inputValue === "." && value.indexOf(".") !== -1){
                return value;
            }
            fn(value+inputValue)
        }else {
            alert("数字过长")
        }
    }else if (inputValue === "清空"){
        fn("0")
    }else if (inputValue === "删除"){
        if (value.length === 1){
            fn("0")
        }else {
            fn(value.slice(0,-1))
        }
    }else {
        console.log("ok")
    }
}

export {buttonClick}
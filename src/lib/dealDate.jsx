const classifyDate = (array)=>{
    let showRecords = [];
    array.forEach((item)=>{
        let flag = true
        for (let i = 0; i < showRecords.length; i++) {
            if (showRecords[i][0].date === item.date){
                showRecords[i].push(item)
                flag = false;
                break;
            }
        }
        if (flag === true){
            const empty = []
            empty.push(item)
            showRecords.push(empty)
        }
    })
    return showRecords
}

const dealDate = (record)=>{
    const showRecords = {"-":[],"+":[]};
    record.forEach((item)=>{
        showRecords[item.category].push(item)
    })
    for(let categoryType in showRecords){
        showRecords[categoryType] = classifyDate(showRecords[categoryType])
    }
    return showRecords
}

export {dealDate}
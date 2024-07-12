export const getData =(selectedLS)=>{
    let Data = JSON.parse(localStorage.getItem(selectedLS)) || [];
    return Data;
}

export const setData =(selectedLS,data)=>{
    localStorage.setItem(selectedLS,JSON.stringify(data));
}


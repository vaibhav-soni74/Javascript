let data = Math.floor(Math.random()*10000 + 125);

function getData(dataId, getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             resolve("Success with Data Id: "+dataId); 
             console.log("Data Id :", dataId);
                console.log("Data :", data);
       if (getNextData){
        getNextData()
       }
        },1000);
    })
}

const newData = (dataId,data)=>{
    console.log("Data Id :", dataId);
    console.log("Data :", data);
}


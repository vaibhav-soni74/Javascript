let dataId =  ()=>{
    return Math.floor(Math.random()*100000)
}

let promise = new Promise((resolve, reject) => {
    console.log("Promise Recieved, Further Processing ......")
    getData(dataId(), getNextData);
    
    if(getNextData){
        resolve("Promise Resolved");
    }else{
        reject("Some error Occured");
    }
});
// console.log(promise);

function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("Data id :", dataId);
        console.log("Data :", data);
        if (getNextData,dataId){
            getNextData();
            (dataId <= 100000 && dataId>=0)? console.log("Data is Valid"):console.log("Data is Invalid"); /*dataId /= 1000;*/return dataId;
        }
    },5000)
}

function getNextData(){
   let nextData = Math.floor(Math.random()*100000);
    console.log("Next Data : ", nextData);
}

let data = Math.floor(Math.random()*10000 + 125)


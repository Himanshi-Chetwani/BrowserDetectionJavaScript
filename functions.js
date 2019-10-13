function createTxtNode(txtInput){
    let txtEle=document.createTextNode(txtInput);
    return txtEle;
}
function creatingHeader(actualJSON){
    let hEle=document.createElement("h2");
    let txtInput=actualJSON.headerTexts["headerText1"];
    let txtEle=createTxtNode(txtInput);
    hEle.appendChild(txtEle);
    return hEle;
}
function createOptions(actualJSON){
   

}
function createSelectBlock(actualJSON){
    let hEle=creatingHeader(actualJSON);
    document.body.appendChild(hEle);
    let sEle=document.createElement("select");
    let option1=actualJSON.optionsText["option1"][0];
    let option1=actualJSON.optionsText["option1"][1];
    let op1Ele=document.createElement("option");
    createTxtNode(option1);
    op1Ele.appendChild(option1);
    hEle.appendChild(sEle);
}
function readingJSONFile(){
    const url = `https://raw.githubusercontent.com/Himanshi-Chetwani/Temp/master/data.json`;
    let http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.onreadystatechange = handleHttpResponse;
    function handleHttpResponse() {
        if (http.readyState === 4 && http.status === 200) {
            callback(http.responseText);
        }
    };
    http.send(null);
}

function setCounter(){
    let counter=0;
}
function init(){
    let retval=readingJSONFile(callback=(response)=>{
        actualJSON=JSON.parse(response);
        createSelectBlock(actualJSON);
        });
    }




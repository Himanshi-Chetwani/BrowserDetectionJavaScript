const depth=0;
function createTxtNode(txtInput){
    let txtEle=document.createTextNode(txtInput);
    return txtEle;
}
function createOptions(optionTxt){
    let opEle=document.createElement("option");
    let opTxtNode=createTxtNode(optionTxt);
    opEle.appendChild(opTxtNode);
    return opEle;
}
function creatingHeader(stringTxt){
    let hEle=document.createElement("h2");
    let txtEle=createTxtNode(stringTxt);
    hEle.appendChild(txtEle);
    return hEle;
}
function createSelectBlock(optionList){
    let sEle=document.createElement("select");
    let hEle=creatingHeader(Object.keys(optionList)[0]);
    for(let i=1;i<((Object.keys(optionList)).length);i++){
        if((Object.keys(optionList)[i]=="Your Final Chosen Answer is : ")){
            hEle=creatingHeader(optionList["Your Final Chosen Answer is : "]);
            break;
        }
        optionTxt=Object.keys(optionList)[i];
        opEle=createOptions(optionTxt);
        sEle.appendChild(opEle);    
    }
    document.body.appendChild(hEle);
    hEle.after(sEle);
    sEle.addEventListener("change",()=>{
        let newVal= optionList[sEle.value];
        createSelectBlock(newVal);
    });
 
}
/*function createSelectBlock(actualJSON){
    let hEle=creatingHeader(actualJSON);
    document.body.appendChild(hEle);
    let sEle=document.createElement("select");
    let option1=actualJSON.optionsText["option1"][0];
    let option2=actualJSON.optionsText["option1"][1];
    let op1Ele=createOptions(option1);
    let op2Ele=createOptions(option2);
    let opBEle=createOptions("");
    sEle.appendChild(opBEle);
    sEle.appendChild(op1Ele);
    sEle.appendChild(op2Ele);
    hEle.after(sEle);
}*/
function readingJSONFile(){
    const url = `https://raw.githubusercontent.com/Himanshi-Chetwani/Temp/master/data_new.json`;
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
function init(){
    let retval=readingJSONFile(callback=(response)=>{
        actualJSON=JSON.parse(response);
        createSelectBlock(actualJSON.options);
        });
}




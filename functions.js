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
function createSelectBlock(optionList,counter,prev){
    let sEle=document.createElement("select");
    sEle.setAttribute("id",counter);
    prev=counter;
    counter=counter+1;
    let hEle=creatingHeader(Object.keys(optionList)[0]);
    for(let i=1;i<((Object.keys(optionList)).length);i++){
        console.log(Object.keys(optionList)[length]);
        optionTxt=Object.keys(optionList)[i];
        opEle=createOptions(optionTxt);
        sEle.appendChild(opEle);    
    }
    if((Object.keys(optionList)[length])==="Your Final Chosen Answer is : "){
        hEle1=creatingHeader("Your Destiny Takes you to ");
        hEle=creatingHeader(optionList["Your Final Chosen Answer is : "]);
        document.body.appendChild(hEle1);
        hEle1.after(hEle);
        return;
    }
    document.body.appendChild(hEle);
    hEle.after(sEle);
    sEle.addEventListener("change",()=>{
        let newVal= optionList[sEle.value];
        /*for(let i=0;i<sEle.childNodes.length;i++){
            console.log("L",sEle.childNodes.length);
            console.log("child node",sEle.childNodes[i]);
        }*/
        createSelectBlock(newVal,counter,prev);
    });
}
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
        createSelectBlock(actualJSON.options,0,-1);
        });
}




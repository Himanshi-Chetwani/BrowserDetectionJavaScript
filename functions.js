function createTxtNode(txtInput){
    let txtEle=createTxtNode(txtInput);
    return txtEle;
}
function creatingHeader(actualJSON){
    let hEle=document.createElement("h2");
    console.log(actualJSON);
    let txtInput=actualJSON.headerTexts["headerText1"];
    console.log(txtInput);
    let txtEle=createTxtNode(txtInput);
    hEle.appendChild(txtEle);
    return hEle;
}
function createSelectBlock(actualJSON){
    let hEle=creatingHeader(actualJSON);
    document.body.appendChild(hEle);
}
function readingJSONFile(){
    const url = `https://raw.githubusercontent.com/Himanshi-Chetwani/Temp/master/data.json`;
    let http = new XMLHttpRequest(),
    stuffForPage="";
    msgTag=document.getElementsByTagName("msg");
    let returnVal;
    http.open("GET", url, true);
    http.onreadystatechange = handleHttpResponse;
    function handleHttpResponse() {
        if (http.readyState === 4 && http.status === 200) {
            console.log("1",http.responseText)
            //callback(http.responseText);
        }
    };
    http.send(null);
}

function setCounter(){
    let counter=0;
}
function init(){
    let retval=readingJSONFile();
    /*callback=(response)=>{
         actualJSON=JSON.parse(response);
        console.log(actualJSON);
        createSelectBlock(actualJSON);
        
    });*/
    
}




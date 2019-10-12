function createTxtNode(txtInput){
    let txtEle=createTxtNode(txtInput);
    return txtEle;
}
function creatingHeader(){
    let hEle=document.createElement("h2");

    let txtEle=createTxtNode();

}
function createSelectBlock(){
    creatingHeader()
}
function handleHttpResponse(){
    
}
function readingJSONFile(){
    const url = `https://takeafile.com/?f=yaxukakero`;
    let http = new XMLHttpRequest()
    http.open("GET", url, true);
    http.onreadystatechange = handleHttpResponse;
    http.send(null);
    function handleHttpResponse() {
        if (http.readyState === 4 && http.status === 200) {
            document.getElementsByTagName("div")[0].innerHTML = http.responseText;
        }
    }

}
function populating1(){
    readingJSONFile();
    //createSelectBlock();
}




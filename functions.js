let win_width,    // Distance to move
    dxArr = [];     // Direction for each item
function createTxtNode(txtInput) {
    let txtEle = document.createTextNode(txtInput);
    return txtEle;
}
function createOptions(optionTxt) {
    let opEle = document.createElement("option");
    let opTxtNode = createTxtNode(optionTxt);
    opEle.appendChild(opTxtNode);
    return opEle;
}
function creatingHeader(stringTxt) {
    let hEle = document.createElement("h2");
    let txtEle = createTxtNode(stringTxt);
    hEle.appendChild(txtEle);
    return hEle;
}
function createSelectBlock(optionList, counter, prev) {
    let sEle = document.createElement("select");
    sEle.setAttribute("id", counter);
    console.log("1.When we set", counter);
    let hEle = creatingHeader(Object.keys(optionList)[0]);
    counterh = counter + 5;
    hEle.setAttribute("id", counterh);
    for (let i = 1; i < ((Object.keys(optionList)).length); i++) {
        optionTxt = Object.keys(optionList)[i];
        opEle = createOptions(optionTxt);
        sEle.appendChild(opEle);
    }
    if ((Object.keys(optionList)[length]) === "Your Final Chosen Answer is : ") {
        hEle1 = creatingHeader("Your Destiny Takes you to ");
        hEle = creatingHeader(optionList["Your Final Chosen Answer is : "]);
        hEle.setAttribute("id", "ans");
        hEle1.setAttribute("id", "ans2");
        document.body.appendChild(hEle1);
        hEle1.after(hEle);
        let fEle = createForm();
        hEle.after(fEle);
        return;
    }
    document.body.appendChild(hEle);
    hEle.after(sEle);
    sEle.addEventListener("change", () => {
        if (prev >= sEle.id) {
            for (let i = parseInt(sEle.id) + 1; i < 3; i++) {
                if (document.getElementById(i) != null) {
                    document.getElementById(i).remove();
                    document.getElementById(i + 5).remove();
                    counterh = counterh - 5;
                    counter = counter - 1;
                    console.log("2.After deleting", counter);
                }
            }
            if (document.getElementById("ans") != null) {
                document.getElementById("ans").remove();
            }
            if (document.getElementById("ans2") != null) {
                document.getElementById("ans2").remove();
            }
        }
        let newVal = optionList[sEle.value];
        prev = counter;
        counter = counter + 1;
        console.log("3.For next level.", counter);
        createSelectBlock(newVal, counter, prev);
    });
}
function readingJSONFile() {
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
function createSection(inp1) {
    let uEle = document.createElement("ul");
    let lEle = document.createElement("li");
    let labelEle = document.createElement("label");
    labelEle.setAttribute("for", inp1);
    let txtEle = createTxtNode(inp1);
    labelEle.appendChild(txtEle);
    let inpEle = document.createElement("input");
    inpEle.setAttribute("id", inp1);
    if (inp1 == "EmailID") {
        inpEle.setAttribute("type", "email");
        inpEle.setAttribute("pattern", "[A-Za-z0-9._%+-]+@rit.edu");
    }
    /*if(inp1=="Name"){
        inpEle.setAttribute("pattern","^[A-Z][a-z]+\s[A-Z][a-z]+$")
    }*/
    inpEle.setAttribute("placeholder", inp1);
    lEle.appendChild(labelEle);
    lEle.appendChild(inpEle);
    uEle.appendChild(lEle);
    return uEle;

}
function createForm() {
    let divEle = document.createElement("div");
    divEle.setAttribute("class", "formDiv");
    let hEle = creatingHeader("Sending Your Results!");
    let fEle = document.createElement("form");
    fEle.setAttribute("class", "info-form");
    fEle.setAttribute("autocomple", "on");
    let inp1 = "Name";
    let uEle1 = createSection(inp1);
    let bEle = document.createElement("button");
    bEle.setAttribute("type", "submit");
    bEle.setAttribute("name", "submit");
    let ntEle = createTxtNode("Submit Details");
    bEle.appendChild(ntEle);
    fEle.appendChild(uEle1);
    let inp2 = "EmailID";
    let uEle2 = createSection(inp2);
    fEle.appendChild(uEle2);
    fEle.appendChild(bEle);
    hEle.append(fEle);
    divEle.append(hEle);
    return divEle;

}
function dHtml() {

    dimensions();
    for (i = 1; i <= 3; i++) {
        let img = document.createElement('img');
        img.src = "heart.png";
        img.id = "move" + i;
        img.style.fontSize = "14px";
        img.style.position = "absolute";
        img.style.left = 0;
        img.style.top = i * 42 - 42 + "px";
        document.body.appendChild(img);

        moveIt("move" + i, i);

        dxArr[i] = i + 1;
    }
}
function dimensions() {
    win_width = window.innerWidth - 50;
}


function moveIt(whichOne, id) {
    let pos = parseInt(document.getElementById(whichOne).style.left);

    if ((pos < win_width && dxArr[id] > 0) || (pos > 0 && dxArr[id] < 0)) {
        let dx = (dxArr[id] + 1) % 20 + 1 || -1;
        document.getElementById(whichOne).style.left = pos + dx + "px";
    }
    else {
        dxArr[id] = dxArr[id] * -1;
    }

    setTimeout(function () {
        moveIt(whichOne, id);
    }, 20);
}

function init() {
    dHtml();
    let retval = readingJSONFile(callback = (response) => {
        actualJSON = JSON.parse(response);
        let hEle = document.createElement("h1");
        let tEle = createTxtNode("Date With Destiny");
        hEle.appendChild(tEle);
        document.body.appendChild(hEle);
        createSelectBlock(actualJSON.options, 0, -1);
    });
}




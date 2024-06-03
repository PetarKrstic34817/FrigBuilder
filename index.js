function getConfig(){
    return {
        "FrigMaps": 
        {
            "BGWild*3":"20,20,20,1,0",
            "BGH1*3":"29,53,22,22,28",
            "BGH1*3Wild":"29,53,19,22,28",
            "BGH1*4":"29,53,22,24,28",
            "BGH1*4Wild":"29,53,22,63,28",
            "BGH1*5":"29,53,22,24,42",
            "BGH1*5Wild":"29,53,22,24,19",
            "BGH2*3":"26,34,36,31,2",
            "BGH2*3Wild":"26,34,20,31,2",
            "BGH2*4":"26,34,36,30,2",
            "BGH2*4Wild":"26,34,36,0,2",
            "BGH2*5":"26,34,36,30,1",
            "BGH2*5Wild":"26,34,36,30,20",
            "BGH3*3":"36,29,40,30,25",
            "BGH3*3Wild":"36,29,18,30,25",
            "BGH3*4":"36,29,40,31,25",
            "BGH3*4Wild":"36,29,40,62,25",
            "BGH3*5":"36,29,40,31,26",
            "BGH3*5Wild":"36,29,40,31,18",
            "BGWild*3":"20,43,18,8,8",
            "BGWild*4":"20,43,18,63,8",
            "BGWild*5":"20,43,18,63,20",
            "BGL1*3":"12,11,11,12,15",
            "FSL1*3":"5,0,3,0,0",
            "BGL1*3Wild":"12,11,20,12,15",
            "BGL1*4":"12,11,11,14,15",
            "BGL1*4Wild":"12,11,11,63,15",
            "BGL1*5":"12,11,11,14,16",
            "BGL1*5Wild":"12,11,11,14,18",
            "BGL2*3":"21,35,21,19,14",
            "BGL2*3WIld":"21,35,20,19,14",
            "BGL2*4":"21,35,21,18,14",
            "BGL2*4WIld":"21,35,21,0,14",
            "BGL2*5":"21,35,21,18,16",
            "BGL2*5WIld":"21,35,21,18,19",
            "BGL3*3":"30,31,28,26,23",
            "BGL3*3Wild":"30,31,18,26,23",
            "BGL3*4":"30,31,28,27,23",
            "BGL3*4Wild":"30,31,28,62,23",
            "BGL3*5":"30,31,28,27,25",
            "BGL3*5Wild":"30,31,28,27,19",
            "BGL4*3":"11,4,23,17,12",
            "BGL4*3Wild":"11,4,19,17,12",
            "BGL4*4":"11,4,23,18,12",
            "BGL4*4Wild":"11,4,23,62,12",
            "BGL4*5":"11,4,23,18,13",
            "BGL4*5Wild":"11,4,23,18,18",
            "BGL5*3":"53,30,34,28,30",
            "BGL5*3Wild":"53,30,19,28,30",
            "BGL5*4":"53,30,34,31,30",
            "BGL5*4Wild":"53,30,34,0,30",
            "BGL5*5":"53,30,34,31,29",
            "BGL5*5Wild":"53,30,34,31,20",
            "BGL6*3":"10,8,5,8,9",
            "BGL6*3Wild":"10,8,19,8,9",
            "BGL6*4":"10,8,5,11,9",
            "BGL6*4Wild":"10,8,5,63,9",
            "BGL6*5":"10,8,5,11,8",
            "BGL6*5Wild":"10,8,5,11,20",
            "BGSC*3":"0,0,6,0,2",
            "BGBigWin":"7,6,12,7,9",
            "FS0Win":"0,0,0,0,0",
            "FSBigWin":"3,2,23,10,0",
            "BGMegaWin":"29,53,31,24,36",
            "BGEpicWin":"29,53,31,24,42",
            "TTSC*3":"2,0,8,0,4",
            "TTL1*3":"0,2,5,3,3"
        }
    };
}

function CalculateFrig(){
    let codeToTranslate = document.getElementById("input").value;
    const commands = codeToTranslate.split("+")
    let frigs = [];

    commands.forEach((element => {
        if(element.includes(';')){
            temp = element.split(';');
            for(i=0;i<temp[0];i++){
                frigs.push(MapToFrig(temp[1]))
            }
        }
        else{
            frigs.push(MapToFrig(element))
        }
    }));

    output = frigs.concat();

    console.log(output);

    document.getElementById("output").value = output;

}

function MapToFrig(value){
    return getConfig().FrigMaps[value];
}

function printConfig(){
    const config = Object.entries(getConfig().FrigMaps);
    let printString = "";
    let selectRepetitions = document.getElementById('repetitions');
    let selectFrigCodes = document.getElementById('frigCodes');
    for(i=0;i<config.length;i++){
        let optFC = document.createElement('option');
        optFC.value = config[i][0];
        optFC.innerHTML = config[i][0];
        selectFrigCodes.appendChild(optFC);
        printString = printString + config[i][0] + " : " + config[i][1] + "<br>";
    }
    //console.log(printString)
    document.getElementById("config").innerHTML = printString;
}

function repsNum()
{
    document.getElementById("repsRange").value = document.getElementById("repsNum").value;
}

function repsRange()
{
    document.getElementById("repsNum").value = document.getElementById("repsRange").value;
}

function addFrig()
{
    let addingString = "";
    const repNum = document.getElementById("repsNum").value;
    if(document.getElementById("input").value != ""){
        addingString = addingString + "+";
    }
    if(document.getElementById("frigCodes").value != ""){
        if(repNum > 1){
            addingString = addingString + repNum + ";"
        }
        addingString = addingString + document.getElementById("frigCodes").value
        document.getElementById("input").value = document.getElementById("input").value + addingString;
    }
}

function clean()
{
    document.getElementById("input").value = "";
}

function filterFrigs()
{
    const config = Object.entries(getConfig().FrigMaps);
    let selectFrigCodes = document.getElementById('frigCodes');
    while (selectFrigCodes.firstChild) {
        selectFrigCodes.firstChild.remove()
    }
    for(i=0;i<config.length;i++){
        let optFC = document.createElement('option');
        optFC.value = config[i][0];
        optFC.innerHTML = config[i][0];
        if(document.getElementById('frigFilter').value == "ALL"){
            selectFrigCodes.appendChild(optFC);
        }
        else{
            if(config[i][0].startsWith(document.getElementById('frigFilter').value)){
                selectFrigCodes.appendChild(optFC);
            }
        }
    }

}
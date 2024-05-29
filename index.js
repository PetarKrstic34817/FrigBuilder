function getConfig(){
    return {
        "FrigMaps": 
        {
            "BGWild*3":"20,20,20,1,0",
            "BGH1*3":"30,0,23,1,0",
            "BGH2*3":"30,0,23,1,0",
            "BGH3*3":"30,0,23,1,0",
            "BGL1*3":"30,0,23,1,0",
            "TTL1*3":"0,2,5,10,10",
            "BGL2*3":"30,0,23,1,0",
            "BGL3*3":"30,0,23,1,0",
            "BGL4*3":"30,0,23,1,0",
            "BGL5*3":"30,0,23,1,0",
            "BGL6*3":"30,0,23,1,0",
            "BGSC*3":"0,0,6,0,2",
            "BGBigWin":"7,6,12,7,9",
            "BGMegaWin":"29,53,31,24,36",
            "BGEpicWin":"29,53,31,24,42",
            "TTSC*3":"2,0,8,0,4"
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
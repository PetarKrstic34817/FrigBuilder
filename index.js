function getConfig(){
    return {
        "FrigMaps": 
        {
            "Wild*3":"20,20,20,1,0",
            "H1*3":"30,0,23,1,0",
            "H2*3":"30,0,23,1,0",
            "H3*3":"30,0,23,1,0",
            "L1*3":"30,0,23,1,0",
            "L2*3":"30,0,23,1,0",
            "L3*3":"30,0,23,1,0",
            "L4*3":"30,0,23,1,0",
            "L5*3":"30,0,23,1,0",
            "L6*3":"30,0,23,1,0",
            "SC*3":"0,0,6,0,2",
            "BigWin":"7,6,12,7,9",
            "MegaWin":"29,53,31,24,36",
            "EpicWin":"29,53,31,24,42",
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
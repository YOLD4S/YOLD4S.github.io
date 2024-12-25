
let answers =           ["A","D","C","A","B","C","D","C","C","B",
                        "B","A","C","D","D","D","D","A","A","D",
                        "A","A","B","D","A","B","D","C","C","C",
                        "B","A","A","C","D","A","D","D","D","A",
                        "B","D","B","D","A","D","D","B","B","D",
                        "B","A","A","D","B","D","B","C","C","B",
                        "D","C","A","B","B","B","A","C","D","B",
                        "C","A","A","D","D","D","B","D","B","B",
                        "C","A","A","C","D","C","D","A","D","C",
                        "A","A","D","D","C","A","C","A","B","C","C"];

const urlParam = new window.URLSearchParams(window.location.search);
let images_folder = urlParam.get("grup");
//let images_folder = "ihzari_images";
let img_format = ".PNG";
let MAX = answers.length;

document.getElementById("range2").innerHTML = MAX;
document.getElementById("qs").src = images_folder+"/1"+img_format;
let currentQuestion = 1;
let r3 = 1; let r4 = MAX;



function randomm(){

    document.getElementById("ans").style.visibility = "hidden";

    let r1 = parseInt(document.forms["myform"]["first"].value);
    let r2 = parseInt(document.forms["myform"]["second"].value);

    if(r1>0 && r1<=MAX && !isNaN(r1)){
        r3= r1;
    }
    if(r2>0 && r2<=MAX && !isNaN(r2)){
        r4 = r2;
    }

    if(r3>r4){
        let temp = r3;
        r3 = r4;
        r4 = temp;
    }

    document.getElementById("range1").textContent = r3;
    document.getElementById("range2").textContent = r4;

    let res = Math.floor(Math.random() * (r4 - r3 + 1)) + r3;
    currentQuestion = res;

    if(!isNaN(res)){
        document.getElementById("qs").src = "./"+images_folder+"/" + res + img_format;
    }
    else{
        console.log("Hata");
    }
    
    document.getElementById("ans").textContent = answers[res-1];

    document.forms["myform"]["first"].value = '';
    document.forms["myform"]["second"].value = '';
}


function byorderr(direction){
    document.getElementById("ans").style.visibility = "hidden";

    let r1 = parseInt(document.forms["myform"]["first"].value);
    let r2 = parseInt(document.forms["myform"]["second"].value);

    if(isNaN(r1)){
        document.forms["myform"]["first"].value = '';
    }
    if(isNaN(r2)){
        document.forms["myform"]["second"].value = '';
    }


    if(!isNaN(r2) && r2<=MAX){
        r4 = r2;
        document.forms["myform"]["second"].value = '';
        document.getElementById("range2").textContent = r2;
    }

    if(direction == 1){
        if(!isNaN(r1)){
            if(r1>MAX){
                r1=1;
            }
            currentQuestion = r1;
            r3 = r1;
            document.forms["myform"]["first"].value = '';
            document.getElementById("range1").textContent = r1;
        }else{
            if(currentQuestion+1 <= r4){
                currentQuestion+=1;
            }
            else{
                currentQuestion=r3;
            }
        }
    }
    else if(direction == -1){
        if(!isNaN(r1)){
            if(r1>MAX){
                r1=1;
            }
            currentQuestion = r1;
            r3 = r1;
            document.forms["myform"]["first"].value = '';
            document.getElementById("range1").textContent = r1;
            
        }else{
            if(currentQuestion-1 >= r3){
                currentQuestion-=1;
            }
            else{
                currentQuestion=r4;
            }
        }
    }else{
        alert("??");
    }
    document.getElementById("qs").src = "./"+images_folder+"/" + currentQuestion + img_format;
    document.getElementById("ans").textContent = answers[currentQuestion-1]; 
}

function showAnswer(){
    if(document.getElementById("ans").style.visibility == "hidden"){
        document.getElementById("ans").style.visibility = "visible";
    }
    else{
        document.getElementById("ans").style.visibility = "hidden";
    }
}

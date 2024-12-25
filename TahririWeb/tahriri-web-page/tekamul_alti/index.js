
let answers = ["D","C","B","B","C","B","B","D","C","B",
               "C","D","C","D","C","D","A","D","D","B",
               "C","B","D","A","B","C","C","A","D","A",
               "B","A","B","D","C","B","B","D","D","B",
               "B","A","C","C","C","D","D","C","D","B",
               "B","A","C","D","C","A","C","A","A","B",
               "B","B","D","A","B","D","C","D","C","C",
               "D","D","D","C","A","C","A","D","C","C",
               "A","D","D","A","D","B","A","A","D","B",
               "A","C","B","D","A","C","A","A","D","B",
               "B","D","C","D","D","A","B","B","B","C"];

let images_folder = "tekamul_alti_images";
let img_format = ".PNG";
let MAX = answers.length;

//document.getElementById("range2").innerHTML = MAX;
document.getElementById("qs").src = images_folder+"/1"+img_format;
let currentQuestion = 1;
let r3 = 1; let r4 = MAX;

document.querySelector("body > div.container.mt-1 > form > div > div.col-5.mb-3.me-0.ms-auto > input").placeholder = r3;
document.querySelector("body > div.container.mt-1 > form > div > div.col-5.mb-3.ms-0.me-auto > input").placeholder = r4;

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

    //document.getElementById("range1").textContent = r3;
    //document.getElementById("range2").textContent = r4;
    document.querySelector("body > div.container.mt-1 > form > div > div.col-5.mb-3.me-0.ms-auto > input").placeholder = r3;
    document.querySelector("body > div.container.mt-1 > form > div > div.col-5.mb-3.ms-0.me-auto > input").placeholder = r4;

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
    document.getElementById("curQues").innerHTML = currentQuestion;
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
    }
    if(!isNaN(r2) && r2>MAX){
        r4 = MAX;
    }


    document.forms["myform"]["second"].value = '';
    document.querySelector("body > div.container.mt-1 > form > div > div.col-5.mb-3.ms-0.me-auto > input").placeholder = r4;

    if(direction == 1){
        if(!isNaN(r1)){
            if(r1>MAX){
                r1=r3;
            }
            if(currentQuestion<r1){
                currentQuestion = r1;
            }
            else{
                currentQuestion+=1;
            }            
            r3 = r1;
            document.forms["myform"]["first"].value = '';
            //document.getElementById("range1").textContent = r1;
            document.querySelector("body > div.container.mt-1 > form > div > div.col-5.mb-3.me-0.ms-auto > input").placeholder = r1;
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
                r1=r3;
            }
            if(currentQuestion<r1){
                currentQuestion = r1;
            }
            else{
                currentQuestion-=1;
            }
            r3 = r1;
            document.forms["myform"]["first"].value = '';
            //document.getElementById("range1").textContent = r1;
            document.querySelector("body > div.container.mt-1 > form > div > div.col-5.mb-3.me-0.ms-auto > input").placeholder = r1;
            
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
    document.getElementById("curQues").innerHTML = currentQuestion;
}

function showAnswer(){
    if(document.getElementById("ans").style.visibility == "hidden"){
        document.getElementById("ans").style.visibility = "visible";
    }
    else{
        document.getElementById("ans").style.visibility = "hidden";
    }
}


let answers =      ["D","C","D","A","A","D","C","A","D","A", // metni akaid
                    "D","B","C","D","C","D","A","C","C","C", // metni akaid
                    "A","D","C","D","B","B","B","B","D","B", // metni akaid
                    "B","B","C",                             // metni akaid 33   
                    "B","C","D","A","C","A","B","D","C","B", // menar
                    "C","B","C","A","D","D","D","C","A","D", // menar
                    "A","A","D","B","D","A","B","D","D","D", // menar
                    "B","D","C","A","C","C","D","B","D","C", // menar
                    "D","C","A","C","C","B","D","A","D","D", // menar
                    "D","C","A","B","D","C","B",             // menar 90 
                    "D","C","A","C","C","B","D","A","D","D",  
                    "D","C","A","C","C","B","D","A","D","D",  
                    "D","C","A","C","C","B","D","A","D","D",  
                    "D","C","A","C","C","B","D","A","D","D",  
                    "D","C","A","C","C","B","D","A","D","D",  
                    "D","C","A","C","C","B","D","A","D","D",  
                    "D","C","A","C","C","B"];       

let images_folder = "ihzari_images";
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

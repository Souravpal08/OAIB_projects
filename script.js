const inputBox=document.getElementById("input-box")
const listcontainer= document.getElementById("list")

function AddTask(){
    if(inputBox.value === ''){
        alert("Please add some task!")
    }
    else{
        let li =document.createElement("li");
        li.innerHTML=inputBox.value
        listcontainer.appendChild(li)
        let span= document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span)
    }
    inputBox.value="";
    saveData()
    
}

listcontainer.addEventListener("click",function(e){
    if (e.target.tagName ==="LI"){
        e.target.classList.toggle("done");
        saveData()
        
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

//here is a function to store data in browser
function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML)
}
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data")
}
showTask();
const display= document.querySelector(".display")
const buttons=document.querySelectorAll("button")
const SpecialChar= ["%","*","/","-","+","="]
let output= "";

//define functions to calculate based on button clicked
 const calculate=(btnValue)=>{
    if(btnValue=== "=" && btnValue!= ""){

      output=eval(output.replace("%","/100"))

    }else if(btnValue=="AC"){
        output="";

    }else if(btnValue==="DEL"){
        output=output.toString().slice(0,-1)
    }else{
        //if output is empty and button is specialchars then return

        if(output==="" && SpecialChar.includes(btnValue))
        return;
        output +=btnValue
    }

    display.value=output
 }
//add eventlistner to the buttons to calculate on clicking
buttons.forEach((button)=>{
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
})
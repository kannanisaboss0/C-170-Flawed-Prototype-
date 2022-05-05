//--------------------------------C-168--------------------------------//
//---------------------------Automobiles Galore--------------------------------//
//------------------------------buttons.js--------------------------------//

//Registering a component to create html buttons 
AFRAME.registerComponent("button-renderer",{

    //Schema
    schema:{
        selectedAutomobile:{type:"string",default:{key1:"data"}},
       
    },

    //Calling a init function
    init:function(){
        //Alerting the user about the heaviness of the model
        swal({
            icon:"warning",
            text:"The model might take a longer time to load due to its size. "
        })

        
   
 
         //Creating the purchase button and giving it a partially unique id ~~(i)
         button_purchase=document.createElement("button")
         button_purchase.innerHTML="PURSCHASE"
         button_purchase.setAttribute("id","purchase_btn")
         button_purchase.setAttribute("class", "btn");
 
         //Creatng the info button and giving it a partially unique id ~~(ii)
         button_info=document.createElement("button")
         button_info.innerHTML="INFO"
         button_info.setAttribute("id","info_btn")
         button_info.setAttribute("class", "btn");
 
         //Creating the rate button and giving it a partially unique id ~~(iii)
         button_rate=document.createElement("button")
         button_rate.innerHTML="RATE"
         button_rate.setAttribute("id","rate_btn")
         button_rate.setAttribute("class", "btn");
 
         //Sourcing the division tag and appending buttons at (i),(ii),(iii) as children to it
         button_div=document.getElementById("div_btn")
         button_div.appendChild(button_purchase)
         button_div.appendChild(button_info)
         button_div.appendChild(button_rate)
 
               
       
       
    },

    
})

//------------------------------buttons.js--------------------------------//
//---------------------------Automobiles Galore--------------------------------//
//--------------------------------C-168--------------------------------//
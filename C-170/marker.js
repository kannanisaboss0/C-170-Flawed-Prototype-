//--------------------------------C-168--------------------------------//
//---------------------------Automobiles Galore--------------------------------//
//------------------------------marker.js--------------------------------//

//Registering acomponent to handle marker events
AFRAME.registerComponent("handle-marker",{

    //Schema
    schema:{

        //Value-1 -> type:array, default:[]
        assorted_vals:{type:"array",default:[]} //~~(^i)
    },


    //Calling an init function
    init: async function(){

        //Sourcing the button division tag
        div=document.getElementById("div_btn")
        
        //Adding an event listener for when the marker is found
        this.el.addEventListener("markerFound",()=>{
            
            //Declaring a new variable "automobiles" and assigning its value to a function ~~(i)
            var automobiles;
            automobiles=this.getAutomobiles();

            //Filtering out the selected automobile in accordance with the required id
            sel_automobile=automobiles.filter(automobile=>automobile.id===this.el.id)[0]
            
           
            //Sourcing the key and values of the variable, holding a dicitonary, at (i)
            key_vals=Object.keys(sel_automobile.info_modal["specs"]) //~~(ii)
            value_vals=Object.values(sel_automobile.info_modal["specs"]) //~~(iii)
            
            //Running a for loop over the keys of the dicitonary at (i)
            for (key_ele of key_vals){
                   //Delcaring a new variable that has equal values to the one at (ii) ~~(iv)
                   key_ele_changed=key_ele
            
            //Running a for loop over every single alphabet of every key      
            for(alphabet in key_ele){

                //Replacing the "_" values in the varaible at (iv), if any
                key_ele_changed=key_ele_changed.replace("_"," ")   
            }

            //Pushiing the aforementioned avlues in the form of a dicitonary into component property (^i)
             this.data.assorted_vals.push(`${key_ele_changed}:${value_vals[key_vals.indexOf(key_ele)]}`)
        }

            //Making the divsion tag visible
            div.style.display="flex"

            //Adding a sweet alert modal to affirm that the model has loaded
            swal({
                icon:"success",
                title:"LOADING SUCCESSFUL",
                timer:1500,
            })

            //Sourcing the purchase button
            purchase_button=document.getElementById("info_btn")

            //Adding an event listener for the purchase button 
            purchase_button.addEventListener("click",()=>{
 
                //Displaying a sweet alert modal to display the corresponding purchase information
                swal({
                    icon:"./icons/shopping_cart.png",
                    title:"PURCHASE",
                    text:"Price: \n USD: $10,878,821.28 \n INR:₹ 83,04,00,000 \n [import duties included] "   
                })
            })
        
            //Sourcing the info button
            info_button=document.getElementById("info_btn")

            //Adding an event listener for the info button    
            info_button.addEventListener("click",()=>{
    
                //Displaying a sweet alert modal to display the corresponding info information
                swal({
                    icon:sel_automobile.info_modal["logo_url"],
                    title:sel_automobile.info_modal["title"],
                    text:this.data.assorted_vals.join("\n")  
                })
            })
        
            //Sourcing the rate button
            rate_button=document.getElementById("rate_btn")

            //Adding an event listener for the rate button
            rate_button.addEventListener("click",()=>{
    
                //Displaying a sweet alert modal to display the corresponding rate information
                swal({
                    icon:"info",
                    title:"Rating",
                    text:"Will be available by version 0.5.0 \n (current:0.2.1)"
            })
        })
        })

        //Adding an event listener for when the marker is lost
        this.el.addEventListener("markerLost",()=>{

            //Making the divsion tag visible
            div.style.display="flex"
        }) 

        //Sourocing the button division tag
        button_dv=document.getElementById("div_btn")  
    },

    //Defining a function to avail all automobile lists from the database
    getAutomobiles: async function(){

        //Collecitng data from firestore
        return await firebase.firestore().
        collection("automobiles").get().
        then(snapshot=>{ return snapshot.docs.map(doc=> doc.data())})
    }
})

//------------------------------marker.js--------------------------------//
//---------------------------Automobiles Galore--------------------------------//
//--------------------------------C-168--------------------------------//
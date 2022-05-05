//--------------------------------C-168--------------------------------//
//---------------------------Automobiles Galore--------------------------------//
//------------------------------model.js--------------------------------//

//Registeirng a component to create markers and render them asrepsective gltf modles
AFRAME.registerComponent("ar-model-renderer",{

    //Shcema
    schema:{},

    //Calling an init function
    init:async function(){

        //Declaring a new variable "automibles" and assigning its value to that of function ~~(i)
        var automobiles= await this.getAutomobiles();
        
        //Mapping the variable at (i), which will be dictionary
        automobiles.map((automobile)=>{
            
            //Delcaring a new marker element
            var marker_el=document.createElement("a-marker");

            //Setting the type, url, cursor attributes to the marker element
            marker_el.setAttribute("type","pattern")
            marker_el.setAttribute("url",automobile.patt_url)
            marker_el.setAttribute("cursor",{rayOrigin:"mouse"})

            //Setting a cusotm attribute to the marker element, that coordinates the evnts relatiing to it being found and lost
            marker_el.setAttribute("handle-marker",{})
            
            //setting an id attribute for the marker element and appending the marker as achild of the scene
            marker_el.setAttribute("id",automobile.id)
            this.el.appendChild(marker_el)

            //Soucring the the assets tag
            assets_el=document.querySelector("#assets_mdls")

            //Creating an asset-item tag
            asset_item_el=document.createElement("a-asset-item")

            //Setting the src and id attributes to the asset-item
            asset_item_el.setAttribute("src",automobile.mod_url)
            asset_item_el.setAttribute("id",`${automobile.id}-ldr`)

            //Appending the asset-item tag as a child to the assets tag
            assets_el.appendChild(asset_item_el)
           
            //Creating a new model element
            var model_el=document.createElement("a-entity");

            //Setting the gltf-model, rotation, scale, position and gesture-handler attributes to the model element
            model_el.setAttribute("gltf-model",`#${automobile.id}-ldr`)
            model_el.setAttribute("rotation",automobile.mod_geometry.rotation)
            model_el.setAttribute("scale",automobile.mod_geometry.scale)
            model_el.setAttribute("position",automobile.mod_geometry.position)
            model_el.setAttribute("gesture-handler",{})

            //Appending the model element as a child to the marker element
            marker_el.appendChild(model_el)

            //Sourcing the title element
            title_text_el=document.querySelector("#model_el_ttl_tx")

            //Setting the text attribute to the title element
            title_text_el.setAttribute("text",{value:automobile.name})

            //Appending the title element as a child to the marker element
            marker_el.appendChild(title_text_el)

            //Sourcing the price text element
            price_text_el=document.querySelector("#model_el_prc_tx")

            //Setting the text attribute to the price text element
            price_text_el.setAttribute("text",{value:automobile.price})

            //Appending the price text element as a child to the marker element
            marker_el.appendChild(price_text_el)

            //Souricng the box element
            box_el=document.querySelector("#model_el_bx")

            //Appending the box element as a child to the marker element
            marker_el.appendChild(box_el)
        })
    },

    //Defining a function to avail data from the firestore database
    getAutomobiles: async function(){

        //Collecitng data from firestore
        return firebase.firestore()
        .collection("automobiles").get()
        .then((snapshot)=>{ return snapshot.docs.map(doc=> doc.data())})
    }
})

//------------------------------model.js--------------------------------//
//---------------------------Automobiles Galore--------------------------------//
//--------------------------------C-168--------------------------------//
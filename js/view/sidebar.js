var sidebar = function (card, model) {
	
    var sidB = card.find("#sidb");
    var topdiv = document.createElement("div");
    var button = document.createElement("button");
    var div2 = document.createElement("div");
    var myDinner = document.createElement("h4");
    var dishName = document.createElement("p");
    var cost = document.createElement("p");

    var topclass = document.createAttribute("class");
    var butType = document.createAttribute("type");
    var div2class = document.createAttribute("class");
    var butClass = document.createAttribute("class");
    var butDataToggle = document.createAttribute("data-toggle");
    var butDataTarget = document.createAttribute("data-target");
    var div2Id = document.createAttribute("id");

    var MD = document.createTextNode("My Dinner");
    var DN = document.createTextNode("Dish Name: ");
    var totcost = document.createTextNode("66 kr");
    var butInfo = document.createTextNode("expand/collapse");

    topclass.value = "d-block d-sm-none";
    div2class.value = "collapse";
    butType.value = "button";
    butClass.value =  "btn btn-warning";
    butDataToggle.value = "collapse";
    butDataTarget.value = "#content";
    div2Id.value = "content";

    topdiv.setAttribute("class", topclass.value);
    button.setAttribute("type", butType.value);
    button.setAttribute("class", butClass.value);
    button.setAttribute("data-toggle", butDataToggle.value);
    button.setAttribute("data-target", butDataTarget.value);
    div2.setAttribute("id", div2Id.value);
    div2.setAttribute("class", div2class.value);
    
    topdiv.appendChild(button);
    topdiv.appendChild(div2);
    button.appendChild(butInfo);
    myDinner.appendChild(MD);
    dishName.appendChild(DN);
    cost.appendChild(totcost);
    div2.appendChild(myDinner);        
    div2.appendChild(dishName);
    div2.appendChild(cost);




    console.log(topdiv)
    sidB.html(topdiv);


    
}
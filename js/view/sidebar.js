var sidebar = function (card, model) {
	
    var sidB = card.find("#sidb");
    var topdiv = document.createElement("nav");
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
    var div2Id2 = document.createAttribute("id");
    var onresize = document.createAttribute("onresize");
    var aria = document.createAttribute("aria-expanded");
    var ariac = document.createAttribute("aria-controls");

    var MD = document.createTextNode("My Dinner");
    var DN = document.createTextNode("Dish Name: ");
    var totcost = document.createTextNode("66 kr");
    var butInfo = document.createTextNode("expand/collapse");

    topclass.value = "navbar navbar-expand-sm navbar-light bg-light";
    aria.value = "true";
    div2class.value = "collapse";
    butType.value = "button";
    butClass.value = "btn btn-warning d-block d-sm-none";
    butDataToggle.value = "collapse";
    butDataTarget.value = "#content";
    div2Id.value = "content";
    ariac.value = ""

    topdiv.setAttribute("class", topclass.value);
    div2.setAttribute("aria-expanded", aria.value);
    button.setAttribute("type", butType.value);
    button.setAttribute("class", butClass.value);
    button.setAttribute("data-toggle", butDataToggle.value);
    button.setAttribute("data-target", butDataTarget.value);
    div2.setAttribute("class", div2class.value);
    div2.setAttribute("id", div2Id.value);

    
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
var sidebar = function (card, model) {
	
    var sidB = card.find("#sidb");
    var topdiv = document.createElement("nav");
    var topclass = document.createAttribute("class");
    topclass.value = "navbar navbar-expand-sm navbar-light bg-light";
    topdiv.setAttribute("class", topclass.value);

    var button = document.createElement("button");
    var butType = document.createAttribute("type");
    var butClass = document.createAttribute("class");
    var butDataToggle = document.createAttribute("data-toggle");
    var butDataTarget = document.createAttribute("data-target");
    var ariaExpanded = document.createAttribute("aria-expanded");
    var ariaControls = document.createAttribute("aria-controls");
    var ariaLabel = document.createAttribute("aria-label");
    butType.value = "button";
    butClass.value = "navbar-toggler";
    butDataToggle.value = "collapse";
    butDataTarget.value = "#navbarSupportedContent";
    ariaExpanded.value = "false";
    ariaControls.value = "navbarSupportedContent";
    ariaLabel.value = "Toggle navigation";
    button.setAttribute("type", butType.value);
    button.setAttribute("class", butClass.value);
    button.setAttribute("data-toggle", butDataToggle.value);
    button.setAttribute("data-target", butDataTarget.value);
    button.setAttribute("aria-expanded", ariaExpanded.value);
    button.setAttribute("aria-controls", ariaControls.value);
    button.setAttribute("aria-label", ariaLabel.value);
    topdiv.appendChild(button);
    
    var span = document.createElement("span");
    var spanClass = document.createAttribute("class");
    spanClass.value = "navbar-toggler-icon";
    span.setAttribute("class", spanClass.value);
    button.appendChild(span);
    
    var div2 = document.createElement("div");
    var div2class = document.createAttribute("class");
    var div2Id = document.createAttribute("id");
    div2class.value = "collapse navbar-collapse";
    div2Id.value = "navbarSupportedContent";
    div2.setAttribute("class", div2class.value);
    div2.setAttribute("id", div2Id.value);
    topdiv.appendChild(div2);
    
    var innerdiv = document.createElement("div");
    var innerDivClass = document.createAttribute("class");
    innerDivClass.value = "nav navbar-nav collapse navbar-collapse";
    innerdiv.setAttribute("class", innerDivClass.value);
    div2.appendChild(innerdiv);
    
    var myDinner = document.createElement("h4");
    var MD = document.createTextNode("My Dinner");
    myDinner.appendChild(MD);
    innerdiv.appendChild(myDinner);        

    var dishName = document.createElement("p");
    var DN = document.createTextNode("Dish Name: ");
    dishName.appendChild(DN);
    innerdiv.appendChild(dishName);

    var cost = document.createElement("p");
    var totcost = document.createTextNode("66 kr");
    cost.appendChild(totcost);
    innerdiv.appendChild(cost);

    
  
    





    console.log(topdiv)
    sidB.html(topdiv);


    
}
var sidebar = function (card, model) {
	
    var sidB = card.find("#sidb");
    var topdiv = document.createElement("nav");
    var topclass = document.createAttribute("class");
    topclass.value = "navbar navbar-expand-sm navbar-light bg-light";
    topdiv.setAttribute("class", topclass.value);
    var br = document.createElement("br");
    
    
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
    
    var fullCol = document.createAttribute("class");
    fullCol.value = "col-sm-12";

    
    
    var myDinner = document.createElement("h4");
    var MD = document.createTextNode("My Dinner");
    myDinner.setAttribute("class", fullCol.value);
    myDinner.appendChild(MD);
    innerdiv.appendChild(myDinner); 
    
    var inputDiv = document.createElement("div");
    var inputId = document.createAttribute("id");
    inputDiv.setAttribute("class", fullCol.value);
    inputId.value = "inputId";
    inputDiv.setAttribute("id", inputId.value);
    innerdiv.appendChild(inputDiv);    
    var peps = document.createTextNode("People: ");
    var inputBox = document.createElement("input");
    inputDiv.appendChild(peps);
    var num = document.createAttribute("type");
    num.value = "number";
    var inputBoxId = document.createAttribute("id");
    inputBoxId.value = "numId";
    var minimum = document.createAttribute("min");
    minimum.value = "1";
    var inputSize = document.createElement("maxlength");
    inputSize.value = "2";
    
    inputBox.setAttribute("maxlength", inputSize.value);
    inputBox.setAttribute("type", num.value);
    inputBox.setAttribute("id", inputBoxId.value);
    inputBox.setAttribute("min", minimum.value);
    inputDiv.append(inputBox);

    var summaryBar = document.createElement("div");
    var summaryId = document.createAttribute("id");
    var summaryClass = document.createAttribute("class");
    summaryClass.value = "row";
    summaryId.value = "summaryBar";
    summaryBar.setAttribute("id", summaryId.value);
    summaryBar.setAttribute("class", summaryClass.value);
    innerdiv.appendChild(summaryBar);
    
    var dishName = document.createElement("p");
    var DNClass = document.createAttribute("class");
    DNClass.value = "col-sm-6";
    dishName.setAttribute("class", DNClass.value);
    var DN = document.createTextNode("Dish Name");
    dishName.appendChild(DN);
    summaryBar.appendChild(dishName);
    innerdiv.appendChild(br);
    innerdiv.appendChild(br);

    var cost = document.createElement("p");
    var costClass = document.createAttribute("class");
    costClass.value = "col-sm-6";
    cost.setAttribute("class", costClass.value);
    var totcost = document.createTextNode("Total Cost");
    cost.appendChild(totcost);
    summaryBar.appendChild(cost);
    
    

    
  
    





    console.log(topdiv)
    sidB.html(topdiv);


    
}
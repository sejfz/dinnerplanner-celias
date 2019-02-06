var sidebar = function (card, model) {
	
    var sidB = card.find("#sidb");
    var topdiv = document.createElement("nav");
    var topclass = document.createAttribute("class");
    var topId = document.createAttribute("id");
    topId.value = "navId";
    topclass.value = "navbar navbar-expand-sm navbar-light";
    topdiv.setAttribute("id", topId.value);
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
    
    //NEW DIV
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

    var summaryDiv = document.createElement("div");
    var summaryDivId = document.createAttribute("id");
    var summaryDivClass = document.createAttribute("class");
    summaryDivClass.value = "col-sm-12";
    summaryDivId.value = "summaryDiv";
    summaryDiv.setAttribute("id", summaryDivId.value);
    summaryDiv.setAttribute("class", summaryDivClass.value);
    innerdiv.appendChild(summaryDiv);
    
    var summaryBar = document.createElement("div");
    var summaryId = document.createAttribute("id");
    var summaryClass = document.createAttribute("class");
    summaryClass.value = "row";
    summaryId.value = "summaryBar";
    summaryBar.setAttribute("id", summaryId.value);
    summaryBar.setAttribute("class", summaryClass.value);
    summaryDiv.appendChild(summaryBar);
    
    var dishName = document.createElement("p");
    var DNClass = document.createAttribute("class");
    DNClass.value = "col-6";
    dishName.setAttribute("class", DNClass.value);
    var DN = document.createTextNode("Dish Name");
    dishName.appendChild(DN);
    summaryBar.appendChild(dishName);
    innerdiv.appendChild(br);
    innerdiv.appendChild(br);

    var cost = document.createElement("p");
    var costClass = document.createAttribute("class");
    var costAlign = document.createAttribute("align");
    costClass.value = "col-6";
    costAlign.value = "right";
    cost.setAttribute("class", costClass.value);
    cost.setAttribute("align", costAlign.value);
    var totcost = document.createTextNode("Cost");
    cost.appendChild(totcost);
    summaryBar.appendChild(cost);
    
    //var bar = model.addDishToMenu(1);
    //var bar = model.addDishToMenu(101);
    var allSelected = model.getAllSelected();
    var x;
    console.log(allSelected)
    var priceDiv = document.createElement("div");
    var priceId = document.createAttribute("id");
    var priceClass = document.createAttribute("class");
    priceClass.value = "col-sm-12";
    priceId.value = "priceId";
    priceDiv.setAttribute("id", priceId.value);
    priceDiv.setAttribute("class", priceClass.value);
    innerdiv.appendChild(priceDiv);
    
    for (x in allSelected) {
        var tempRow = document.createElement("div");
        var tempClass = document.createAttribute("class");
        tempClass.value = "row";
        tempRow.setAttribute("class", tempClass.value);
        
        
        var nameCol = document.createElement("div");
        var xname = document.createElement("p");
        var nameOfDish = document.createTextNode(allSelected[x].name);
        xname.appendChild(nameOfDish);
        var nameColId = document.createAttribute("id");
        var nameColClass = document.createAttribute("class");
        nameColClass.value = "col-6";
        nameCol.setAttribute("class", nameColClass.value);
        nameCol.appendChild(xname);
        tempRow.appendChild(nameCol);
        
        var singleDish = [allSelected[x]];
        var totalPrice = model.getTotalMenuPrice(singleDish);
        
        var priceCol = document.createElement("div");
        var xprice = document.createElement("p");
        var priceCalc = document.createTextNode(totalPrice);
        var priceColId = document.createAttribute("id");
        var priceColClass = document.createAttribute("class");
        priceColClass.value = "col-6";
        priceCol.setAttribute("class", priceColClass.value);
        priceCol.setAttribute("align", costAlign.value);
        xprice.appendChild(priceCalc);
        priceCol.appendChild(xprice);
        tempRow.appendChild(priceCol);
        
        priceDiv.appendChild(tempRow);
    }
    var finalPrice = model.getTotalMenuPrice(allSelected);
    var finalCost = document.createElement("div");
    var finalId = document.createAttribute("id");
    var finalClass = document.createAttribute("class");
    var finalCostP = document.createElement("p");
    var finalCalc = document.createTextNode(finalPrice);
    finalCostP.appendChild(finalCalc);
    finalClass.value = "col-sm-12";
    finalId.value = "finalId";
    finalCost.setAttribute("align", costAlign.value);
    finalCost.setAttribute("class", finalClass.value);
    finalCost.setAttribute("id", finalId.value);
    finalCost.appendChild(finalCostP);
    innerdiv.appendChild(finalCost);



    console.log(topdiv)
    sidB.html(topdiv);


    
}
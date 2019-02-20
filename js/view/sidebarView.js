var sidebarView = function(container, model) {
    this.plusGuestButton = container.find("#plusGuestButton");
    this.minusGuestButton = container.find("#minusGuestButton");
    this.confirmButton = container.find("#confirmButtonId");
    
    var totalGuests = container.find("#guestnumber");
    var thePrice = container.find("#totalPrice");
    var dishPlace = container.find("#menuDishes");

    
    
    var updateNumber = function (keyString) {
        if (keyString === "guestsUpdated" || keyString === "menuUpdated") {
            var guestCount = model.getNumberOfGuests();
            totalGuests.html(guestCount);

            var allSelected = model.getAllSelected();
            var selectedList = [];

            for (x in allSelected) {
                var tempRow = document.createElement("div");
                var tempClass = document.createAttribute("class");
                tempClass.value = "row";
                tempRow.setAttribute("class", tempClass.value);


                var nameCol = document.createElement("div");
                var nameParag = document.createElement("p");
                var nameOfDish = document.createTextNode(allSelected[x].name);
                nameParag.appendChild(nameOfDish);
                var nameColId = document.createAttribute("id");
                var nameColClass = document.createAttribute("class");
                nameColClass.value = "col-4";
                nameCol.setAttribute("class", nameColClass.value);
                nameCol.appendChild(nameParag);
                tempRow.appendChild(nameCol);
                
                var removeButton = document.createElement("button");
                var removeType = document.createAttribute("type");
                var removeClass = document.createAttribute("class");
                var removeValue = document.createAttribute("value");
                var removeText = document.createTextNode("Remove");
                removeType.value = "button";
                removeClass.value = "btn btn-warning removeButtonClass col-sm-4";
                removeValue.value = allSelected[x].id;
                removeButton.setAttributeNode(removeClass);
                removeButton.setAttributeNode(removeValue);
                removeButton.setAttributeNode(removeType);
                removeButton.appendChild(removeText);
                tempRow.appendChild(removeButton);
                
                
                
                var singleDish = [allSelected[x]];
                var totalPrice = model.getTotalMenuPrice(singleDish);

                var priceCol = document.createElement("div");
                var xprice = document.createElement("p");
                var priceCalc = document.createTextNode(totalPrice);
                var priceColId = document.createAttribute("id");
                var priceColClass = document.createAttribute("class");
                priceColClass.value = "col-4";
                priceCol.setAttribute("class", priceColClass.value);
                priceCol.setAttribute("align", "right");
                xprice.appendChild(priceCalc);
                priceCol.appendChild(xprice);
                tempRow.appendChild(priceCol);

                selectedList.push(tempRow);
                
            }
            
            var ultimatePrice = model.getTotalMenuPrice(allSelected);
            dishPlace.html(selectedList);
            thePrice.html(ultimatePrice);
        }
        
    }
    this.removeButton = container.find("#menuDishes");
    updateNumber("guestsUpdated");
    model.addObserver(updateNumber);
}
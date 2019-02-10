var sidebarView = function(container, model) {
    this.plusGuestButton = container.find("#plusGuestButton");
    this.minusGuestButton = container.find("#minusGuestButton");
    this.confirmButton = container.find("#confirmButtonId");
    var totalGuests = container.find("#guestnumber");
    var thePrice = container.find("#totalPrice");
    var dishPlace = container.find("#menuDishes")

    
    
    var updateNumber = function (keyString) {
        if (keyString === "guestsUpdated") {
            var guestCount = model.getNumberOfGuests();
            totalGuests.html(guestCount);

            var adde = model.addDishToMenu(1);
            var adde = model.addDishToMenu(100);


            var allSelected = model.getAllSelected();
            var selectedList = [];

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
    updateNumber("guestsUpdated");
    model.addObserver(updateNumber);
}
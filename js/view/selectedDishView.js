
var selectedView = function (card, model) {
	
    var allName = card.find("#selected");
    this.goBack = card.find("#backToFeed");
    this.printMenu = card.find("#printButton");
    var numGuests = card.find("#numpeep");
    
    
    this.updateFinalChoices = function (keyString) {
        if (keyString === "menuUpdated" || keyString === "guestsUpdated"){
    
    
            var x;
            var divList = [];
            var selectedDishList = model.getAllSelected();
            var guests = model.getNumberOfGuests();
            for (x in selectedDishList){

                var topdiv = document.createElement("div");
                var elem = document.createElement("div");
                var div2 = document.createElement("div");
                var img = document.createElement("img");
                var namePlate = document.createElement("h4");
                var priceDiv = document.createElement("div");
                var priceTag = document.createElement("p");

                var cardid = document.createAttribute("id");
                var topclass = document.createAttribute("class");
                var divclass2 = document.createAttribute("class");
                var divclass = document.createAttribute("class");
                var divStyle = document.createAttribute("style");
                var imgClass = document.createAttribute("class");
                var src = document.createAttribute("src");
                var priceClass = document.createAttribute("class");

                var singleDish = [selectedDishList[x]];
                var singleCost = model.getTotalMenuPrice(singleDish);

                var names = document.createTextNode(selectedDishList[x].name);
                var price = document.createTextNode(singleCost);

                cardid.value = "dishid";
                divclass2.value = "card-body";
                divclass.value = "card";
                divStyle.value =  "width: 13rem;"
                imgClass.value = "card-img-top";
                src.value = selectedDishList[x].image;
                priceClass.value = "col";

                topdiv.setAttribute("class", topclass.value);
                topdiv.setAttribute("id", cardid.value);
                topdiv.setAttribute("style", divStyle.value);
                div2.setAttribute("class", divclass.value);
                priceDiv.setAttribute("class", priceClass.value);

                img.setAttribute("src", src.value);
                img.setAttribute("class", imgClass.value);


                topdiv.appendChild(elem);        
                namePlate.appendChild(names);
                elem.appendChild(img);        
                elem.appendChild(div2);
                div2.appendChild(namePlate);
                elem.appendChild(priceDiv);
                priceTag.appendChild(price);
                priceDiv.appendChild(priceTag);


                divList.push(topdiv);
            }

            allName.html(divList);
            numGuests.html(guests);
        }
    }
    this.updateFinalChoices("menuUpdated");
    model.addObserver(this.updateFinalChoices);
}

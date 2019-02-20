
var dishView = function (card, model) {
	
    var x;
   
    this.updateDishes = function (keyString) {
        if (keyString === "catchySubmit") {
            
            var divList = [];
            var allName = card.find("#pic");
            var allDishList = model.getAllDishes2();
                       
            for (x in allDishList){
                var topdiv = document.createElement("div");
                var elem = document.createElement("div");
                var div2 = document.createElement("div");
                var img = document.createElement("img");
                var dishName = document.createElement("h4");

                var cardId = document.createAttribute("id");
                var topclass = document.createAttribute("class");
                var divclass = document.createAttribute("class");
                var divStyle = document.createAttribute("style");
                var imgClass = document.createAttribute("class");
                var src = document.createAttribute("src");

                var names = document.createTextNode(allDishList[x].title);

                cardId.value = "dishid";
                divclass.value = "card";
                divStyle.value =  "width: 13rem;";
                imgClass.value = "card-img-top";
                src.value = "https://spoonacular.com/recipeImages/" + allDishList[x].image;

                topdiv.setAttribute("class", topclass.value);
                topdiv.setAttribute("id", cardId.value);
                topdiv.setAttribute("style", divStyle.value);
                div2.setAttribute("class", divclass.value);

                img.setAttribute("src", src.value);
                img.setAttribute("class", imgClass.value);
                
                var goToButton = document.createElement("button");
                var goToClass = document.createAttribute("class");
                var goToValue = document.createAttribute("value");
                var goTo = document.createTextNode("Go to dish page");
                goToClass.value = "btn btn-warning goToClass";
                goToValue.value = allDishList[x].id;
                goToButton.setAttributeNode(goToClass);
                goToButton.setAttributeNode(goToValue);
                goToButton.appendChild(goTo);
                div2.appendChild(goToButton);

                topdiv.appendChild(elem);        
                dishName.appendChild(names);
                elem.appendChild(img);        
                elem.appendChild(div2);
                div2.appendChild(dishName);

                divList.push(topdiv);
                
            }
            if (allDishList === undefined || allDishList.length == 0) {
                var errMessage = "No results found, please try again";
                divList.push(errMessage)
            } 
            allName.html(divList);
        
        }

    }
    this.dishButton = card.find("#pic");

    this.submitButton = card.find("#allTypesSubmit");
    model.addObserver(this.updateDishes);
}
 


var anotherView = function (container, model) {
    var getName = container.find("#info");
    var Menu = model.allDishesEver();
    
    var x;
    var y;
    var names = [];
    
    for (x in Menu) {
        var templist = [Menu[x]];
        var tempIngredients = model.getAllIngredients(templist);
        
        var card = document.createElement("div");
        var cardclass = document.createAttribute("class");
        var cardId = document.createAttribute("id");
        cardId.value = "noborders";
        cardclass.value = "card";
        card.setAttribute("class", cardclass.value);
        card.setAttribute("id", cardId.value);
        
        var row = document.createElement("div");
        var rowclass = document.createAttribute("class");
        rowclass.value = "row";
        row.setAttribute("class", rowclass.value);
        card.appendChild(row);
        
        var imgdiv = document.createElement("div");
        var colatt = document.createAttribute("class");
        colatt.value = "col-sm-4";
        imgdiv.setAttribute("class", colatt.value);
        row.appendChild(imgdiv);
        
        var img = document.createElement("img");
        var imgId = document.createAttribute("id");
        var src = document.createAttribute("src");
        src.value = "images/" + Menu[x].image;
        imgId.value = "nicePic";
        img.setAttribute("src", src.value);
        img.setAttribute("id", imgId.value);
        imgdiv.appendChild(img);
        
        var infodiv = document.createElement("div");
        infodiv.setAttribute("class", colatt.value);
        row.appendChild(infodiv);
        
        var name = document.createElement("h3");
        var ingredients = document.createElement("p");
        var ingredString = "";
        for (y in tempIngredients) {
            
            if (tempIngredients[tempIngredients.length - 1] == tempIngredients[y]){
                ingredString += tempIngredients[y].name;
            }
            else {
                ingredString += tempIngredients[y].name + ", ";
            }
        }
        var ingred = document.createTextNode(ingredString);
        ingredients.appendChild(ingred);
        infodiv.appendChild(name);
        infodiv.appendChild(ingredients);
        
        var description = document.createTextNode(Menu[x].description);
        var nameOfDish = document.createTextNode(Menu[x].name);
        name.appendChild(nameOfDish);
        
        var preparationDiv = document.createElement("div");
        preparationDiv.setAttribute("class", colatt.value);
        row.appendChild(preparationDiv);
        
        var headline = document.createElement("h3");
        var prep = document.createTextNode("Preparation");
        headline.appendChild(prep);
        
        var prepP = document.createElement("p");
        prepP.appendChild(description);
        
        preparationDiv.appendChild(headline);
        preparationDiv.appendChild(prepP);
        
        names.push(card);
        
    }

    getName.html(names);

}
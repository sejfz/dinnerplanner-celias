
var selectedView = function (card, model) {
	
    var allName = card.find("#selected");
    var x;
    var divList = [];
    var suparr = model.getAllSelected();
    for (x in suparr){
        
        var topdiv = document.createElement("div");
        var elem = document.createElement("div");
        var div2 = document.createElement("div");
        var img = document.createElement("img");
        var p = document.createElement("h4");
        var priceDiv = document.createElement("div");
        var priceTag = document.createElement("p");
        
        var cardid = document.createAttribute("id");
        var topclass = document.createAttribute("class");
        var divclass2 = document.createAttribute("class");
        var divclass = document.createAttribute("class");
        var divStyle = document.createAttribute("style");
        var classs = document.createAttribute("class");
        var src = document.createAttribute("src");
        var priceClass = document.createAttribute("class");
        
        var singleDish = [suparr[x]];
        var singleCost = model.getTotalMenuPrice(singleDish);
        
        var names = document.createTextNode(suparr[x].name);
        var price = document.createTextNode(singleCost);
        
        cardid.value = "dishid";
        divclass2.value = "card-body";
        divclass.value = "card";
        divStyle.value =  "width: 13rem;"
        p.value = "new thing";
        classs.value = "card-img-top";
        src.value = "images/" + suparr[x].image;
        priceClass.value = "col";

        topdiv.setAttribute("class", topclass.value);
        topdiv.setAttribute("id", cardid.value);
        //elem.setAttribute("class", divclass.value);
        topdiv.setAttribute("style", divStyle.value);
        div2.setAttribute("class", divclass.value);
        priceDiv.setAttribute("class", priceClass.value);
        
        img.setAttribute("src", src.value);
        img.setAttribute("class", classs.value);
        
        
        topdiv.appendChild(elem);        
        p.appendChild(names);
        elem.appendChild(img);        
        elem.appendChild(div2);
        div2.appendChild(p);
        elem.appendChild(priceDiv);
        priceTag.appendChild(price);
        priceDiv.appendChild(priceTag);
        
        
        divList.push(topdiv);
    }
    
    allName.html(divList);
    
}

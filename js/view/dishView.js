
var dishView = function (card, model) {
	
    var allName = card.find("#dishView");
    var x;
    var divList = [];
    for (x in dishes){
        var elem = document.createElement("div");
        
        var divclass = document.createAttribute("class");
        divclass.value = "card";
        
        elem.setAttribute("class", divclass.value);
        
        console.log(elem)
        
        var img = document.createElement("img");
        elem.appendChild(img);
        
        var classs = document.createAttribute("class");
        var src = document.createAttribute("src");
        classs.value = "card-img-top";
        src.value = "images/" + dishes[x].image;
        
        img.setAttribute("src", src.value);
        img.setAttribute("class", classs.value);
        
        divList.push(elem);
        console.log(divList)
    }

    /*var fullmenu = model.getFullMenu();
    var stri = "";
    var str = "";
    for (x in fullmenu) {
        stri += "<img class=\"card-img-top\" src=\"images/" + fullmenu[x].image + "\" alt=\"" + fullmenu[x].name + "\">" + fullmenu[x].name + </br>;
        
        str = ;
        
        
    }*/
    //allName.appendChild(divList);
    allName.get(0).appendChild(divList)
}
 

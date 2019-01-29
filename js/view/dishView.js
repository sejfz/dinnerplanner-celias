
var dishView = function (card, model) {
	
    var allName = card.find("#dish");
    var fullmenu = model.getFullMenu();
    var x;
    var stri = "";
    for (x in fullmenu) {
        stri += "<img class=\"card-img-top\" src=\"images/" + fullmenu[x].image + "\" alt=\"" + fullmenu[x].image + "\">" + fullmenu[x].name + "<br/>";
    }

    allName.html(stri);
}
 


var dishView = function (card, model) {
	
    var allName = card.find("#dish");
    var fullmenu = model.getFullMenu();
    var x;
    var stri = "";
    for (x in fullmenu) {
        stri += fullmenu[x].name + "<br/>";
    }

    allName.html(stri);
}
 

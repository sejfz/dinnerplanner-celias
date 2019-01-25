
var dishView = function (card, model) {
	
    var allName = card.find("#name");
    var fullmenu = model.getFullMenu();
    var x;
    var str = "";
    for (x in fullmenu) {
        str += fullmenu[x].name + "<br/>";
    }
    console.log(str);

    allName.html(str);
}
 

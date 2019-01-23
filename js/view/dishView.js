
var dishView = function (card, model) {
	
    var allName = card.find("#name");
    allName.html(model.getFullMenu());
}
 

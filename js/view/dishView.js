
var dishView = function (card, model) {
	
    var allName = card.find("#names");
    allName.html(model.getFullMenu());
}
 

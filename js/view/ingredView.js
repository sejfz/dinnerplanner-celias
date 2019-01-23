
var ingredView = function (card, model) {
	
    var allIngredients = card.find("#ingredientList");
    allIngredients.html(model.getAllIngredients());
}

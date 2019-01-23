
var ingredView = function (card, model) {
	console.log(model)
    var allIngredients = card.find("#ingredientList");
    allIngredients.html(model.getAllIngredients());
}

$(function() {
	//We instantiate our model
	var model = new DinnerModel();
    var container = $("#ingredView")
    console.log(container);
    var IngredientView = new ingredView(container, model);
	
    // ADD BOTH FIND AND DISH VIEW HERE

});
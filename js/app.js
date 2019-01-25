$(function() {
        
    	var model = new DinnerModel();

    var container2 = $("#dishView")
    var fullMenu = new dishView(container2, model);
	//We instantiate our model
    var container = $("#ingredView")
    console.log(container);
    var IngredientView = new ingredView(container, model);

	
    // ADD BOTH FIND AND DISH VIEW HERE

});
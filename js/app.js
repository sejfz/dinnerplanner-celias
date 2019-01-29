$(function() {
        
    var model = new DinnerModel();
    var container = $("#ingredView")
    var IngredientView = new ingredView(container, model);
    
   var container2 = $("#dishView")
    var fullMenu = new dishView(container2, model);
	//We instantiate our model


});

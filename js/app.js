$(function() {
       
    // Views here
    
    var model = new DinnerModel();
    var container1 = $("#firstView")
    var firstPageView = new firstView(container1, model);
    
    var container = $("#ingredView")
    var IngredientView = new ingredView(container, model);
    
    var container2 = $("#dishView")
    var fullMenu = new dishView(container2, model);

    var container3 = $("#displayView")
    var DisplayView = new displayView(container3, model);
    
    var container8 = $("#sidebar")
    var sideb = new sidebar(container8, model);
    
    var container9 = $("#anotherView")
    var otherView = new anotherView(container9, model);
    
    var container10 = $("#selectedDishView")
    var selView = new selectedView(container10, model);

    var container4 = $("#topVie")
    var topp = new topView(container4, model);
    
    var container7 = $("#totcostView")
    var TotCostView = new totcostView(container7, model);
    
    // Controllers here
    
	var homePageController = new homeController(firstPageView, model, fullMenu);
	var dishViewbController = new dishController(fullMenu, model);
	var sidebController = new sidebarController(sideb, model);


    
    
});

$(function() {
        
    var model = new DinnerModel();
    var container = $("#ingredView")
    var IngredientView = new ingredView(container, model);
    
    var container2 = $("#dishView")
    var fullMenu = new dishView(container2, model);

    var container3 = $("#displayView")
    var DisplayView = new displayView(container3, model);
    
    var container5 = $("#bannerView")
    var BannerView = new bannerView(container5, model);
    
    var container6 = $("#selectedDishView")
    var SelectedDishView = new selectedDishView(container6, model);
    
    var container7 = $("#totcostView")
    var TotCostView = new totcostView(container7, model);
    
    var container8 = $("#sidebar")
    var TotCostView = new sidebar(container8, model);
    
    var container9 = $("#anotherView")
    var AnotherView = new anotherView(container9, model);
    
});

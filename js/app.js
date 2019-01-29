$(function() {
        
    var model = new DinnerModel();
    var container = $("#ingredView")
    var IngredientView = new ingredView(container, model);
    
    var container2 = $("#dishView")
    var fullMenu = new dishView(container2, model);
	//We instantiate our model

    var container3 = $("#displayView")
    var DisplayView = new displayView(container3, model);
    
    var container4 = $("#sidebarView")
    var SidebarView = new sidebarView(container4, model);
    
    var container5 = $("#bannerView")
    var BannerView = new bannerView(container5, model);
});

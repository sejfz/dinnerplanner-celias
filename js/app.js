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
    var displayV = new displayView(container3, model);
    
    var container8 = $("#sidebar")
    //var sideb = new sidebar(container8, model);
    var sideb = new sidebarView(container8, model);
    
    var container9 = $("#anotherView")
    var otherView = new anotherView(container9, model);
    
    var container10 = $("#selectedDishView")
    var selView = new selectedView(container10, model);

    var container4 = $("#topVie")
    var topp = new topView(container4, model);
    
    var container7 = $("#totcostView")
    var TotCostView = new totcostView(container7, model);
    
    // Controllers here
    
	var homePageController = new homeController(firstPageView, model, fullMenu, this);
	var dishViewbController = new dishController(fullMenu, model, this);
	var sidebController = new sidebarController(sideb, model, this);
    var displayController = new displayViewController(displayV, model, this);
    var ingredientController = new ingredientViewController(IngredientView, model, this);
    var selectedDishController = new selectedDishViewController(selView, model, this);
    var anotherController = new anotherViewController(otherView, model, this);

    
    //hide or show
    this.hideAll = function () {
        document.getElementById("firstView").style.display = "none";
        document.getElementById("displayView").style.display = "none";
        document.getElementById("ingredView").style.display = "none";
        document.getElementById("finalPage").style.display = "none";    
        document.getElementById("dishView").style.display = "none";
        document.getElementById("sidebar").style.display = "none";
        document.getElementById("summaryView").style.display = "none";
    }
    
    this.showDishes = function() {
        this.hideAll();
        document.getElementById("sidebar").style.display = "inline";
        document.getElementById("dishView").style.display = "inline";
    }
    
    this.showSelectedDish = function() {
        this.hideAll();
        document.getElementById("sidebar").style.display = "inline";
        document.getElementById("displayView").style.display = "inline";
        document.getElementById("ingredView").style.display = "inline";
    }
    
    this.showPrint = function() {
        this.hideAll();
        document.getElementById("summaryView").style.display = "inline";
    }
    
    this.showFinalPage = function(){
        this.hideAll();
        document.getElementById("finalPage").style.display = "inline";
    }
    
});


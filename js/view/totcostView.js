
var totcostView = function (container, model) {
    var getTotCost = container.find("#total");
    model.addDishToMenu(1);
    
    var str = "";

    str = model.getTotalMenuPrice();
    
    getTotCost.html(str);

}
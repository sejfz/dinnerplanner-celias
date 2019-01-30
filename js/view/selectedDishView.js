
var selectedDishView = function (container, model) {
    var getCost = container.find("#cost");
    model.addDishToMenu(1);
    
    var str = "";
    str = model.getTotalMenuPrice();
    
    getCost.html(str);

}

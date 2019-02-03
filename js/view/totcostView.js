
var totcostView = function (container, model) {
    var getTotCost = container.find("#total");
    
    var str = "";
    var selected = model.getAllSelected();
    str = model.getTotalMenuPrice(selected);
    
    getTotCost.html(str);

}
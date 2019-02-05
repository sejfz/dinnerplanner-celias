
var totcostView = function (container, model, view2) {
    var getTotCost = container.find("#total");
    
    var str = "";
    var x;
    var selected = model.getAllSelected();
    str = model.getTotalMenuPrice(selected);
    getTotCost.html(str);

}
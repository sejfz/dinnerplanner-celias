
var totcostView = function (container, model) {
    var getTotCost = container.find("#total");
    
    var str = "";
    var x;
    var selected = model.getAllSelected();
    console.log(selected)
    str = model.getTotalMenuPrice(selected);
    console.log(str)
    getTotCost.html(str);

}
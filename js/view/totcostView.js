
var totcostView = function (container, model, view2) {
    this.updateTotalPrice = function(keyString) {
        if (keyString === "menuUpdated" || keyString === "guestsUpdated"){    
            var getTotCost = container.find("#total");

            var str = "";
            var selected = model.getAllSelected();
            str = model.getTotalMenuPrice(selected);
            getTotCost.html(str);
        }
    }
    this.updateTotalPrice("menuUpdated");
    model.addObserver(this.updateTotalPrice);
}
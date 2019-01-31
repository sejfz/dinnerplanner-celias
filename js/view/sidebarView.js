
var sidebarView = function (container, model) {
    var getMoney = container.find("#money");
    
    var str = "";
    str =   model.getTotalMenuPrice();
    
    getMoney.html(str);
}

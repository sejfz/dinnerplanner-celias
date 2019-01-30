
var sidebarView = function (container, model) {
    var getMoney = container.find("#money");
    var getDishName = container.find("#name");
    model.addDishToMenu(1);
    
    var str = "";
    var str2 = "";
    str =   model.getTotalMenuPrice();
    str2 = dishes[0].name + " ";
    
    getMoney.html(str);
    getDishName.html(str2);
    
}

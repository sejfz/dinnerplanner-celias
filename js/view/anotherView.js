
var anotherView = function (container, model) {
    var getName = container.find("#name");
    var Menu = model.getFullMenu();
    
    var x;
    var y;
    var names = [];
    
    for (x in Menu) {
        var dish = Menu[x];
        names += dish.name + " ";
        console.log(names);
        }

    getName.html(names);

}
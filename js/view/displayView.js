
var displayView = function (container, model) {
    var getName = container.find("#name");
    //var getInstr = container.find("#instructions");
    
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

    //var str = "";
    //var str2 = "";
    //var str3 ="";

    //str = dishes[0].name;
    //str2 = dishes[0].description;
    
    //getName.html(str);
    //getInstr.html(str2);


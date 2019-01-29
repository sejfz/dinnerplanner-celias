
var displayView = function (container, model) {
    var getName = container.find("#name");
    var getPic = container.find("#pictures");
    var getInstr = container.find("#instructions");
    
    var str = "";
    var str2 = "";
    var str3 ="";

    str = dishes[0].name;
    str2 = "<img src=\"images/" + dishes[0].image + "\">";
    str3 = dishes[0].description;
    
    getName.html(str);
    getPic.html(str2);
    getInstr.html(str3);
}

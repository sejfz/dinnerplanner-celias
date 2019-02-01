
var displayView = function (container, model) {
    var getName = container.find("#name");
    var getInstr = container.find("#instructions");
    var getPic = container.find("#pictures")
    
    var str = "";
    var str2 = "";
    var str3 ="";

    str = dishes[0].name;
    str2 = dishes[0].description;
    str3 = "<img src=\"images/" + dishes[0].image + "\">";
    
    getName.html(str);
    getInstr.html(str2);
    getPic.html(str3);

}
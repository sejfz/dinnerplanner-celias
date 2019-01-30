
var mydinnerView1 = function (card, model) {
    var getName = container.find("#name");
    
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

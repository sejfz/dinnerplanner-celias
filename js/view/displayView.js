
var displayView = function (container, model) {
    var getName = container.find("#name");
    var getInstr = container.find("#instructions");
    var getPic = container.find("#pictures");
    this.backButton = container.find("#backButton");
    this.updateCurrentDish = function(keyString) {       
        if (keyString === "updateCurrentDish") {
            var str = "";
            var str2 = "";
            var str3 ="";

            var chosen = model.getDisplayDish();
            
            console.log(chosen.preparation)
            console.log(chosen.ingredients)
            str = chosen.name;
            str2 = chosen.preparation;
            str3 = "<img src=\""+ chosen.image +"\">";
            
            getName.html(str);
            getInstr.html(str2);
            getPic.html(str3);
        }
    }
    model.addObserver(this.updateCurrentDish);
}
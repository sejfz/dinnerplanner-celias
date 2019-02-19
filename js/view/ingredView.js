
var ingredView = function (card, model) {
    var allIngredients = card.find("#ingredientList");
    this.addToMenu = card.find("#addToMenu");
    var getPeople = card.find("#numpeep");
    this.updateIngredients = function (keyString) {
        if (keyString === "updateIngredients" || keyString === "guestsUpdated" || keyString === "updateCurrentDish"){
            
            var x;
            var str = "";
            var str2 = "";

            var currentDish = model.getDisplayDish();
            if (currentDish != undefined){
                var arr = model.getAllIngredients([currentDish]);
                var numguest = model.getNumberOfGuests();
                for (x in arr) {
                    str += numguest * arr[x].amount + " " + arr[x].unit + " " + arr[x].name + " " + numguest * arr[x].price + " SEK" + "<br/>";
                    }

                str += "<strong> Total: " + model.getTotalMenuPrice([currentDish]) + "</strong>";
                str2 = numguest;
                allIngredients.html(str);
                getPeople.html(str2);
            }
        }
    }
    this.updateIngredients("updateIngredients")
    model.addObserver(this.updateIngredients);

}

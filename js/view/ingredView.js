
var ingredView = function (card, model) {
    var allIngredients = card.find("#ingredientList");
    model.addDishToMenu(1);
    var x;
    var str = "";
    var arr = model.getAllIngredients();
    var numguest = model.getNumberOfGuests();
    for (x in arr) {
        str += numguest * arr[x].quantity + " " + arr[x].unit + " " + arr[x].name + " " + numguest * arr[x].price + " SEK" + "<br/>";
        }
    
    allIngredients.html(str);
    
}

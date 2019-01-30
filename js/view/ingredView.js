
var ingredView = function (card, model) {
    var allIngredients = card.find("#ingredientList");
    model.addDishToMenu(1);
    
    var getPeople = card.find("#numpeep");
    
    var x;
    var str = "";
    var str2 = "";

    var arr = model.getAllIngredients();
    var numguest = model.getNumberOfGuests();
    for (x in arr) {
        str += numguest * arr[x].quantity + " " + arr[x].unit + " " + arr[x].name + " " + numguest * arr[x].price + " SEK" + "<br/>";
        }
    
    str += "<strong> Total: " + model.getTotalMenuPrice() + "</strong>";
    str2 = numguest;
    
    allIngredients.html(str);
    getPeople.html(str2);
}

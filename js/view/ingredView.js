
var ingredView = function (card, model) {
    var allIngredients = card.find("#ingredientList");
    var x;
    var str = "";
    var arr = model.getAllIngredients();
    for (x in arr) {
            str += arr[x].quantity + " " + arr[x].unit + " " + arr[x].name + " " + arr[x].price + " SEK" + "<br/>";
        }
    
    allIngredients.html(str);
    
}

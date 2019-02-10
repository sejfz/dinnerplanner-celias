var displayViewController = function (view, model) {
    var display = document.getElementById("displayView");
    var foodFeed = document.getElementById("dishView");
    var ingredients = document.getElementById("ingredView");
    
    view.backButton.click(function(){
        display.style.display = "none";
        foodFeed.style.display = "inline";
        ingredients.style.display = "none";
    })
}
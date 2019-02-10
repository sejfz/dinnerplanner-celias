var selectedDishViewController = function (view, model) {
    var sideb = document.getElementById("sidebar");
    var foodFeed = document.getElementById("dishView");
    var finalPage = document.getElementById("finalPage");
    var ingred = document.getElementById("ingredView");
    var display = document.getElementById("displayView");
    var another = document.getElementById("summaryView");
    
    view.goBack.click(function(){
        ingred.style.display = "none";
        display.style.display = "none";
        sideb.style.display = "inline";
        foodFeed.style.display = "inline";
        finalPage.style.display = "none";
    })
    
    view.printMenu.click(function(){
        ingred.style.display = "none";
        display.style.display = "none";
        another.style.display = "inline";
        finalPage.style.display = "none";
    })
}
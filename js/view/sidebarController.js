var sidebarController = function (view, model) {
	
    
    var sideb = document.getElementById("sidebar");
    var foodFeed = document.getElementById("dishView");
    var finalPage = document.getElementById("finalPage");
    var ingred = document.getElementById("ingredView");
    var display = document.getElementById("displayView");

    
    view.plusGuestButton.click(function(){
        model.setNumberOfGuests(model.getNumberOfGuests() + 1);
    });
    
    view.minusGuestButton.click(function(){
        model.setNumberOfGuests(model.getNumberOfGuests() - 1);
    });

    view.confirmButton.click(function(){
        ingred.style.display = "none";
        display.style.display = "none";
        sideb.style.display = "none";
        foodFeed.style.display = "none";
        finalPage.style.display = "inline";
    })
}
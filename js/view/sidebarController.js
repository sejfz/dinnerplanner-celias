var sidebarController = function (view, model) {
	
    
    var sideb = document.getElementById("sidebar");
    var foodFeed = document.getElementById("dishView");
    var finalPage = document.getElementById("finalPage");

    
    view.plusGuestButton.click(function(){
        console.log("plus")
        model.setNumberOfGuests(model.getNumberOfGuests() + 1);
        console.log(model.getNumberOfGuests())
    });
    
    view.minusGuestButton.click(function(){
        model.setNumberOfGuests(model.getNumberOfGuests() - 1);
    });

    view.confirmButton.click(function(){
        sideb.style.display = "none";
        foodFeed.style.display = "none";
        finalPage.style.display = "inline";
    })
}
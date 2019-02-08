var homeController = function (view, model, view2) {
	

    var first = document.getElementById("firstView");
    var sideb = document.getElementById("sidebar");
    var foodFeed = document.getElementById("dishView");


    view.buttonClick().addEventListener("click", function(){
        first.style.display = "none";
        sideb.style.display = "inline";
        foodFeed.style.display = "inline";
        view2.submitButton.click();
        } , false);

}
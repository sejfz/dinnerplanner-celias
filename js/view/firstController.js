var homeController = function (view, model) {
	

    var first = document.getElementById("firstView");
    var sideb = document.getElementById("sidebar");
    var foodFeed = document.getElementById("dishView");

    
    view.buttonClick().addEventListener("click", function(){
        first.style.display = "none";
        sideb.style.display = "block";
        foodFeed.style.display = "block";

        
    } , false);

}
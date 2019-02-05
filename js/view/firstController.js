var homeController = function (view, model) {
	

    var x = document.getElementById("firstView");
    
    view.listener().addEventListener("click", function(){
        x.style.display = "none";
    } , false);

}
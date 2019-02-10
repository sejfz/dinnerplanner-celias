var anotherViewController = function (view, model) {
    var sideb = document.getElementById("sidebar");
    var foodFeed = document.getElementById("dishView");
    var another = document.getElementById("summaryView");
    
    view.backButton.click(function(){
        sideb.style.display = "inline";
        foodFeed.style.display = "inline";
        another.style.display = "none";
    })
}
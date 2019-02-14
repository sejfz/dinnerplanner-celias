var dishController = function (view, model) {
	
    //console.log(document.getElementById("allTypes").value)
    var display = document.getElementById("displayView");
    var foodFeed = document.getElementById("dishView");
    var ingredients = document.getElementById("ingredView");
    
    view.updatee("catchySubmit");
    view.submitButton.click( function() {
     //   alert("jag funkar");
        this.filterId = document.getElementById("filterInput").value;
        this.selected = document.getElementById("allTypes").value;

        var f = model.getAllDishes(this.selected, this.filterId);
        console.log(f)
        model.setAllDishes(f);
        console.log(model.newDishList(f))
    })
    //console.log(view.dishButton)
    view.dishButton.click( function(e) {
        //alert(e.target.value);
        var dishId = e.target.value;
        var chosen = model.setDisplayDish(dishId);
        display.style.display = "inline";
        foodFeed.style.display = "none";
        ingredients.style.display = "inline";
    })
    
    
    

}
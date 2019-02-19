var dishController = function (view, model) {
	
    //console.log(document.getElementById("allTypes").value)
    var display = document.getElementById("displayView");
    var foodFeed = document.getElementById("dishView");
    var ingredients = document.getElementById("ingredView");
    var newList = [];
    view.submitButton.click( function() {
     //   alert("jag funkar");
        document.getElementById("loader").style.display = "block";
        this.filterId = document.getElementById("filterInput").value;
        this.selected = document.getElementById("allTypes").value;
        //console.log(model.getDishById());
        model.getAllDishes(this.selected, this.filterId)
        .then(function(dishes){
            newList = [];
            for (i in dishes){
                newList.push(dishes[i]);
            }
            var setDish = model.setAllDishes(newList);
            document.getElementById("loader").style.display = "none";
            return setDish;
        
        })
        //console.log(newList)

        
        //console.log(model.newDishList(f))
        view.updatee("catchySubmit");
    })
    //console.log(view.dishButton)
    view.dishButton.click( function(e) {
        //alert(e.target.value);
        document.getElementById("displayLoader").style.display = "block";
        var dishId = e.target.value;
        var currentDish = model.getDishById(dishId)
        .then(function(obj){
            console.log(obj)
            var chosen = model.setDisplayDish(obj);
            document.getElementById("displayLoader").style.display = "none";
            return chosen;
        })
        ;
        display.style.display = "inline";
        foodFeed.style.display = "none";
        ingredients.style.display = "inline";
    })
    
    
    

}
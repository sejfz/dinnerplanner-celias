var dishController = function (view, model, app) {
    
    var newList = [];
    view.submitButton.click( function() {
        document.getElementById("loader").style.display = "block";
        this.filterId = document.getElementById("filterInput").value;
        this.selected = document.getElementById("allTypes").value;
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
        .catch(function(err){
            alert("Sorry, something went wrong while fetching the data. Please check your internet connection.")
        })

        
        view.updateDishes("catchySubmit");
    })
    view.dishButton.click( function(e) {
        document.getElementById("displayLoader").style.display = "block";
        var dishId = e.target.value;
        var currentDish = model.getDishById(dishId)
        .then(function(obj){
            var chosen = model.setDisplayDish(obj, this.selected);
            document.getElementById("displayLoader").style.display = "none";
            return chosen;
        })
        app.showSelectedDish();
        
    })
    
    
    

}
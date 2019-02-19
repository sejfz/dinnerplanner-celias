var ingredientViewController = function(view, model) {
    view.addToMenu.click(function(){
        var selected = model.getDisplayDish();
        var add = model.addDishToMenu(selected.id, model.getAllDishes2());
        console.log(add)
        document.getElementById("confirmButtonId").removeAttribute("disabled");

    })
}
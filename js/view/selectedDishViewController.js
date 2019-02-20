var selectedDishViewController = function (view, model, app) {
    
    view.goBack.click(function(){
        app.showDishes();
    })
    
    view.printMenu.click(function(){
        app.showPrint();
    })
}
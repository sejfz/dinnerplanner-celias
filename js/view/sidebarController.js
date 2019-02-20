var sidebarController = function (view, model, app) {
	
    
    view.plusGuestButton.click(function(){
        model.setNumberOfGuests(model.getNumberOfGuests() + 1);
    });
    
    view.minusGuestButton.click(function(){
        model.setNumberOfGuests(model.getNumberOfGuests() - 1);
    });

    view.removeButton.click(function(e){
        var dishId = e.target.value;
        var selectedList = model.getAllSelected();
        model.removeDishFromMenu(dishId, selectedList);
        
    });
    
    view.confirmButton.click(function(){
        app.showFinalPage();
    })
}
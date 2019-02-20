var homeController = function (view, model, view2, app) {


    view.firstButton.click(function(){
        app.showDishes();
        view2.submitButton.click();
        });

}
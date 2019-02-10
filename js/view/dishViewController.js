var dishController = function (view, model) {
	
    //console.log(document.getElementById("allTypes").value)

    view.updatee("catchySubmit");
    view.submitButton.click( function() {
     //   alert("jag funkar");
        this.filterId = document.getElementById("filterInput").value;
        this.selected = document.getElementById("allTypes").value;

        var f = model.getAllDishes(this.selected, this.filterId);
        console.log(f)
        model.setAllDishes(f);
    })
    console.log(view.dishButton)
    view.dishButton.click( function() {
        alert("click");
    })
    
    
    

}
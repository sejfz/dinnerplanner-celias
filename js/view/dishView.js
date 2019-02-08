
var dishView = function (card, model) {
	
    var x;
   
    //this.selected = document.getElementById("allTypes").options[document.getElementById("allTypes").selectedIndex].value;
    //    console.log(this.selected + "selected");
    
    console.log("utanför update")
    this.updatee = function (catchyName) {
        console.log("inne i update");
        if (catchyName === "catchySubmit") {
            
            
            var tom;
            var suparr = model.getAllDishes2();
            //console.log(suparr + "this is suparr");
            var allName = card.find("#pic");
            var divList = [];
            for (x in suparr){
                var topdiv = document.createElement("div");
                var elem = document.createElement("div");
                var div2 = document.createElement("div");
                var img = document.createElement("img");
                var p = document.createElement("h4");

                var cardid = document.createAttribute("id");
                var topclass = document.createAttribute("class");
                var divclass2 = document.createAttribute("class");
                var divclass = document.createAttribute("class");
                var divStyle = document.createAttribute("style");
                var classs = document.createAttribute("class");
                var src = document.createAttribute("src");

                var names = document.createTextNode(suparr[x].name);

                cardid.value = "dishid";
                divclass2.value = "card-body";
                divclass.value = "card";
                divStyle.value =  "width: 13rem;";
                p.value = "new thing";
                classs.value = "card-img-top";
                src.value = "images/" + suparr[x].image;


                topdiv.setAttribute("class", topclass.value);
                topdiv.setAttribute("id", cardid.value);
                //elem.setAttribute("class", divclass.value);
                topdiv.setAttribute("style", divStyle.value);
                div2.setAttribute("class", divclass.value);

                img.setAttribute("src", src.value);
                img.setAttribute("class", classs.value);


                topdiv.appendChild(elem);        
                p.appendChild(names);
                elem.appendChild(img);        
                elem.appendChild(div2);
                div2.appendChild(p);

                //console.log(topdiv);


                divList.push(topdiv);
            }
        /*var allTypes = card.find("#allTypes");
        console.log(allTypes)
        var object = model.getAllTypes();
        var select = document.createElement("select");
        var option = document.createElement("option");
        var optionValue = document.createAttribute("value");
        var optionName = document.createTextNode("All");
        optionValue.value = "all"
        option.setAttribute("value", optionValue.value);
        option.appendChild(optionName);
        select.appendChild(option);*/



        //console.log(document.getElementById("allTypesSubmit"));


        allName.html(divList);

        }
    }
    /*var objectList = ["<option value=\"all\">All</option>"];
    var object = model.getAllTypes();
    var allTypes = card.find("#allTypes");
    for (stuff in object){
        var option = document.createElement("option");
        var optionValue = document.createAttribute("value");
        var optionName = document.createTextNode(object[stuff].charAt(0).toUpperCase() + object[stuff].slice(1));
        optionValue.value = object[stuff];
        option.setAttribute("value", optionValue.value);
        option.appendChild(optionName);
        objectList.push(option);
        console.log(option)
    }
    allTypes.html(objectList);*/
    this.submitButton = card.find("#allTypesSubmit");

    model.addObserver(this.updatee);
}
 

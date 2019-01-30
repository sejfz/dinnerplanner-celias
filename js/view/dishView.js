
var dishView = function (card, model) {
	
    var allName = card.find("#pic");
    var x;
    var divList = [];
    var suparr = model.allDishesEver();
    for (x in suparr){
        
        var elem = document.createElement("div");
        var div2 = document.createElement("div");
        var img = document.createElement("img");
        var p = document.createElement("h4");
        
        
        var divclass2 = document.createAttribute("class");
        var divclass = document.createAttribute("class");
        var divStyle = document.createAttribute("style");
        var classs = document.createAttribute("class");
        var src = document.createAttribute("src");
        
        var names = document.createTextNode(suparr[x].name);
        
        divclass2.value = "card-body";
        divclass.value = "card";
        divStyle.value =  "w3-card-4 w3-dark-grey"
        p.value = "new thing";
        classs.value = "card-img-top";
        src.value = "images/" + suparr[x].image;

        
        elem.setAttribute("class", divclass.value);
        elem.setAttribute("style", divStyle.value);
        div2.setAttribute("class", divclass.value);
        
        
        

        
        img.setAttribute("src", src.value);
        img.setAttribute("class", classs.value);
        

        p.appendChild(names);
        elem.appendChild(img);        
        elem.appendChild(div2);
        div2.appendChild(p);
        
        
        
        
        divList.push(elem);
        console.log(elem)
        allName.html(elem);
    }
    
    allName.html(divList);
    
}
 

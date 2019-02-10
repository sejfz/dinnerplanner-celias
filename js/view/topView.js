
var topView = function (card, model) {
    var niceHeader = card.find("#header");
    
    var topdiv = document.createElement("div");
    var text = document.createElement("h1");
    var place = document.createElement("p");

    var topclass = document.createAttribute("class");
    var stylish = document.createAttribute("style");
    var class2 = document.createAttribute("class");

    var DP = document.createTextNode("Dinner Planner");
    
    topclass.value = "container-fluid";
    stylish.value = "background-color: antiquewhite";
    class2.value = "text-center";

    topdiv.setAttribute("class", topclass.value);
    topdiv.setAttribute("style", stylish.value);
    place.setAttribute("class", class2.value);

    text.appendChild(DP);
    text.appendChild(DP);
    topdiv.appendChild(text);
    topdiv.appendChild(place);
    niceHeader.html(topdiv);

    }

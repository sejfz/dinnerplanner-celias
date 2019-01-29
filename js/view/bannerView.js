var bannerView = function (container, model) {
    var getMoney = container.find("#numpeep");
    
    var str = "";
    str =   model.getNumberOfGuests();
    
    getMoney.html(str);
}

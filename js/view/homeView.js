var homeView = function (container, model) {
	
	/**
	 * IMPORTANT: Never use $('someSelector') directly in the views. Always use container.find
	 * or some other way of searching only among the containers child elements. In this way you
	 * make your view code modular and ensure it dosn't break if by mistake somebody else
	 * in some other view gives the same ID to another element.
	 * 
	 */
  
	var numberOfGuests = container.find("#numberOfGuests");

	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	/**
	 * Here we use @var {jQuery object} numberOfGuests that is a reference to <span>
	 * in our view to dynamically set it's value to "Hello World".
	 */
	numberOfGuests.html();
	
}


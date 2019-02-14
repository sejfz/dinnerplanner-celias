//DinnerModel Object constructor
var DinnerModel = function () {
 
	//TODO Lab 1 implement the data structure that will hold number of guest
	// and selected dishes for the dinner menu
    var filterWord;
    var numberOfGuests = 1;
    var listObservers = [];
    var totMenuPrice = 0;
    var chosenDish;
    var allDishesAPI = [];
    
    
    var yourDish = {
        'id': -1,
        'name': "",
        'image': "",
        'summary': "",
        'ingredients': [],
        'price': 0,
        'preparation': []
    };
    
    // console.log(listObservers);

    
    this.addObserver = function(o) {
        listObservers.push(o);
        //console.log("lägg till observer")
    }

    
    var notifyObservers = function(object) {
        // console.log(object);
        for(var thisObserver = 0; thisObserver < listObservers.length; thisObserver++){
            listObservers[thisObserver](object);
        }
    }
    
    
    var dishList = [];
    this.getAllSelected = function(){
        return dishList;
    }
    
    
	this.setNumberOfGuests = function(num) {
        numberOfGuests = num;
        if (numberOfGuests < 1) {
            numberOfGuests = 1;
        }
        notifyObservers("guestsUpdated");
        //we assume set will be used to update getGuest by user clicking in more guests
	}
	
	this.getNumberOfGuests = function() {
            return numberOfGuests;
	}

    
	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
        var listNames = [];
        var x;
        for (x in dishes) {
            if (type === dishes.type) {
                listNames.push(dishes[x]);
        }
            // console.log(listNames);
        }
        // console.log(listNames);
        return listNames;
        
	}

    
	//Returns all the dishes on the menu.
    this.getFullMenu = function() {
        var x;
        var alldish = [];
        for (x in dishes){
            var dish = dishes[x];
            alldish.push(dish);
        }
        return alldish;
    }

    
	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function(list) {
        var ingredientList = [];
        var x;
        var y;
        for (x in list) {
            var dish = list[x];
            for (y in dish.ingredients) {
                var finDish = dish.ingredients[y];
                ingredientList.push(finDish);
                }
            }
        return ingredientList;
    }

    
	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function(list) {
        var ingList = this.getAllIngredients(list);
        var totPrice = 0;
        for(dish in ingList){
            var prices = ingList[dish].price;
            totPrice += prices;
        }
        totPrice = totPrice * this.getNumberOfGuests();
        return totPrice + " SEK";
		//TODO Lab 1
	}
    

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
        var newDish;
        
        for (dish in dishes){
            if (dishes[dish].id === id) {
                newDish = dishes[dish];
                for (dish in dishList){
                    if (dishList[dish].type === newDish.type){
                        this.removeDishFromMenu(dishList[dish].id, dishList);
                    }
                }
                dishList.push(newDish);
            }
        }
        console.log(dishList)
        notifyObservers("menuUpdated");
    }
    
    
	//Removes dish from menu
	this.removeDishFromMenu = function(id, arr) {

        for(dish in arr){
            if(id === arr[dish].id){
                arr.splice(dish, 1);
            }
        }
        return arr;
	}

    
	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
    /*this.getAllDishes = function(type,filter) {
        if (type === "all") {
            var allTypes = this.getAllTypes();
            var fullList = [];
            var finalArray = [];
            for (thing in allTypes) {
                fullList.push(this.getAllDishes(allTypes[thing], filter));
            }
            for (arrays in fullList) {
                finalArray = finalArray.concat(fullList[arrays]);
                 console.log(finalArray);

            }
            return finalArray;
        }
	  return dishes.filter(function(dish) {
		let found = true;
		if(filter){
			found = false;
			dish.ingredients.forEach(function(ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1)
			{
				found = true;
			}
		}
	  	return dish.type == type && found;
	  });	

	}*/
    
    this.setAllDishes = function(type) {
        filterWord = type;
        notifyObservers("catchySubmit");
        
    }
    
    
    this.getAllDishes2 = function() {
        return filterWord;
    }
    

	//function that returns a dish of specific ID
	this.getDish = function (id) {
        for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
	}
    
    
    this.setDisplayDish = function(id) {
        chosenDish = this.getDish(id);
        notifyObservers("updateCurrentDish");
    }
    
    
    this.getDisplayDish = function() {
        return chosenDish;
        
    }
    
    
    this.getAllTypes = function () {
        var allTypeList = [];
        for (type in dishes) {
            var newType = dishes[type].type;
            if (allTypeList.includes(newType) == false){
                allTypeList.push(dishes[type].type);
            } 
        }
        return allTypeList;
    }
    
    
    this.allDishesEver = function(){
        return dishes;
    }
    
    
    this.newDishList = function(arr) {
        for (dish in arr){
            console.log(arr[dish].id)
            var newItem = this.getDishById(arr[dish].id);
            console.log(newItem)
        }
    }
    

    // fetch attempts go here babey
    
    this.getDishById = function(){
        return fetch('http://sunset.nada.kth.se:8080/iprog/group/51/recipes/684100/summary', {
            headers:{'X-Mashape-Key': '3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767'
                    }
      }).then(response => response.json())
        .then(data => data)
    }

    
    this.getAllDishes = function (type, filter) {
        var fetchLink;
        fetchLink = 'http://sunset.nada.kth.se:8080/iprog/group/51/recipes/search?query='+filter+'&type'+type+'number=60'
        
        return fetch(fetchLink,  {
            headers:{'X-Mashape-Key': '3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767'
                    }
      }).then(response => response.json())
        .then(data => data.results)
    }
    

    
}

	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	/*var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];*/

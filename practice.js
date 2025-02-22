// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  //git test change
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var counter = 0;
  _.each(numbers, function(number, index, collection) {
    if (number % 5 === 0) {
      counter ++;
    }
  });
  return counter;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter(fruits, function (fruit) { return fruit === targetFruit; });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter(fruits, function(fruit) { return fruit[0] === letter; });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function(dessert) { return dessert.type === 'cookie'; } );
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {

  var sum = _.reduce(products, function(memo, num) {
    return memo + Number(num.price.slice(-(num.price.length - 1)));
  }, 0);
  return sum;

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var i = 0;

  var resultObject = _.reduce(desserts, function(memo, dessert) {
    i ++;
    if (dessert.type in memo) {
      memo[dessert.type] ++;
    } else {
      memo[dessert.type] = 1;
    }
    return memo;
  }, {});

  return resultObject;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var resultz = _.reduce(movies, function (moviesResult, item) {
    if (item['releaseYear'] >= 1990 && item['releaseYear'] <= 2000) {
      moviesResult.push(item['title']);
    }
    return moviesResult;
  }, []);
  return resultz;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var resultz = _.reduce(movies, function (booleanResult, item) {
    if (item['runtime'] < timeLimit && booleanResult === false) {
      booleanResult = true;
    }
    return booleanResult;
  }, false);
  return resultz;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  var mapUpperCase = _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
  return mapUpperCase;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  var results = _.map(desserts, function(dessert) {
    if ('flour' in dessert['ingredients']) {
      dessert['glutenFree'] = false;
    } else {
      dessert['glutenFree'] = true;
    }
    return dessert;
  });
  return results;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  var saleResults = _.map(groceries, function(grocery) {
    groceryPrice = grocery['price'].slice(-(grocery['price'].length - 1));
    grocery['salePrice'] = '$' + (groceryPrice * (1 - coupon)).toFixed(2);
    return grocery;
  });
  return saleResults;
};

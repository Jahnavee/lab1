/**
 * Created by Sony on 9/9/2016.
 */
// link to filesystem module //
var fs = require('fs');

// load food list asynchronouslu
var food = fs.readFile('food.txt', 'utf8', function (err, food) {
    if(err) {
        console.log(err);
    }
      else {
          console.log(food);
        console.log('\nDRINKS');
    }
});

console.log('FOOD');

//repeat eith drinks
var drinks = fs.readFile('drinks.txt', 'utf8',function (err, drinks) {
    if(err) {
        console.log(err);
    }
     else {
         console.log(drinks);
    }

});
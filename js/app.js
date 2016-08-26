$('.button').on('click', function(){
  var userInput = parseInt($('.input').val());
   
  var someShit = fizzbuzz(userInput);  
  
  $('.main ul').append(someShit);  
});


function fizzbuzz(num){
   var countArray = [];
  
     for (var i=1; i<=num; i++)
  {
    if (i%15 == 0)
     countArray =  myPush(countArray, "fizzbuzz");
    
    else if (i%3 == 0)
     countArray =  myPush(countArray, "fizz");
    
    else if (i%5 == 0)
     countArray =  myPush(countArray, "buzz");
    
    else
     countArray =  myPush(countArray, i);    
    };
   
  return countArray;
};


function myPush(array, string) {
  array.push(string + "<br/>");
  return array;
}


$('.input').on('click', function(){
 
  $('.main ul').html('');
  counterArray.length = 0;   
});
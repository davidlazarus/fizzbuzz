var countArray = [];
s
for (var i=1; i<=100; i++)
  {
    if (i%15 == 0)
        countArray.push("fizzbuzz" + "<br/>");
    
    else if (i%3 == 0)
        countArray.push("fizz" + "<br/>");
    
    else if (i%5 == 0)
        countArray.push("buzz" + "<br/>");
    
    else
        countArray.push(i + "<br/>");
    
    };

console.log(countArray);
$('.button').on('click', function(){
  $('.main ul').append(countArray);
});

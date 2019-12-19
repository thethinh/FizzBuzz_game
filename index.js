var i=1;
var logic = function()
{
    if(i%3 === 0 && i%5 !==0)
    {
        console.log("Sphinx");
        i++;
    }
    else if(i%5 === 0 && i%3 !== 0)
    {
        console.log("Software");
        i++;
    }
    else if(i%3===0 && i%5===0)
    {
        console.log("Sphinx Software");
        i++;
    }
    else
    {
        console.log(i);
        i++;
    }
}

var fizzbuzz = setInterval(function(){
    
    logic();
    if(i>100)
    {
        clearInterval(fizzbuzz);
    }
},10)

fizzbuzz;
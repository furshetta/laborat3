let price = prompt("Enter the price");
if (price.charAt(0) === "$") 
{
    var y = x.substr(1);
    alert(y * 2.6);
} else if (price.charAt(0) === "L") 
{
    y = price.substr(1);
    alert(y / 2.6);
}
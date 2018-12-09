let str = prompt("Enter String");

var l = str.length;

if(l <=15){
    alert(str);
}
else {
    alert(str.substr(0, 15)+'...');
}
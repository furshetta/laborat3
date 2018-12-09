var arr = [];                               
for (var i = 0; i < 10; i++) {              
    arr.push(prompt('Enter grade ' + (i + 1))); 
}

alert('Full array: ' + arr.join(', '));    
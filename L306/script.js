var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 4, 5];
isEqual(arr1, arr2); // returns true

var arrObj1 = [1, 2, {
	a: 1,
	b: 2,
	c: 3
}, 4, 5];
var arrObj2 = [1, 2, {
	c: 3,
	b: 2,
	a: 1
}, 4, 5];
isEqual(arrObj1, arrObj2); // returns true

var arr1 = [1, 2, 3, 4, 5];
var arr3 = [5, 4, 3, 2, 1];
isEqual(arr1, arr3); // returns false



/*function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}


*/
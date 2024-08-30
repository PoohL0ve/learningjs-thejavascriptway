/**
 * Objects are created using the {} and are
 * key-value pairs
 */

const crushes = {
    flirts: 0,  // use commas for items
    relations: 2,
    makeOuts: 4,
};

// to find the number of keys use 'in' or Object.key()
let allKeys = 0
for (let key in crushes) {
    allKeys++;
}
console.log(allKeys);
console.log(Object.keys(crushes)); // prints the keys 

// The values can be modified using [] or .
// the keys can be deleted: delete crushes.flirts

// count the elements in an array
// place them in an object
function countElements(elements) {
    let checkObject = {};

    for (i = 0; i < elements.length; i++) {
        if (!checkObject[elements[i]]) {
            checkObject[elements[i]] = 1;
        } else {
            checkObject[elements[i]] += 1;
        }
    }
    return checkObject;
}

console.log(countElements(['a', 'a', 'g', 'm', 'm']));

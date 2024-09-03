function countVowels(str) {

    let count = 0;

    for (i = 0; i < str.length; i++) {
       if ((str.charAt(i) === 'a') || (str.charAt(i) === 'A')) {
            count++;
       } else if ((str.charAt(i) === 'e') || (str.charAt(i) === 'E')) {
        count++;
       } else if ((str.charAt(i) === 'o') || (str.charAt(i) === 'O')) {
        count++;
       } else if ((str.charAt(i) === 'i') || (str.charAt(i) === 'I')) {
        count++;
       } else if ((str.charAt(i) === 'u') || (str.charAt(i) === 'U')) {
        count++;
       }
    }
    return count;

}

console.log(countVowels('aEiOu'));

// A String can be converted to a number:
// Explicitly: Number(), parseInt, parseFloat,
// Implicitly: +stringName
// Values to Strings" .toString, String(), + ""
// An object can be converted to JSON format using:
// JSON.stringify({}) and JSON.parse() to object
// The loose equality == performs type conversions

const personJson = `
    { 
        "name": "PW",
        "age": 39,
        "isReal": true  
    }
`;
// no comma after the final item
console.log(JSON.parse(personJson));
const values = [2, 4, 6];

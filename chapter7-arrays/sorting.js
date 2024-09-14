/**
 * The default sort() function sorts elements based
 * on their string value. To sort numbers properly use the 
 * comparison function: numbers.sort(function comparison(a, b)).
 * We can use the localeCompare to compare strings, which 
 * return -1 (values after), 1 (preceding values), and 0:
 * 'a'.localeCompare('b'): 1 
 */

let values = [5, 2, 8, 1];
let sortedValues = values.sort(
    function comparison(a, b) {
        if (a < b) {
            return - 1;
        }
        if (b < a) {
            return 1;
        }
        return 0;
    }
);
console.log(sortedValues);

const desSort = values.sort(
    function comparison(a, b) {
        if (a > b) {
            return -1;
        }
        if (b > a) {
            return 1;
        }
        return 0;
    }
);
console.log(desSort);

// Comparing strings
let letters = ['c', 'a', 'b'];
function sortString(strs) {
    const sortedLetters = strs.sort((a,b) => {
        return a.localeCompare(b);
    });
    return sortedLetters;
};
console.log(sortString(letters));

function descendStrings(strs) {
    const desString = strs.sort((a, b) => {
        return b.localeCompare(a);
    })
    return desString;
};
console.log(descendStrings(letters));

// Sorting Objects by properties
const students = [
    { id: 1, graduated: true, grade: 86 },
    { id: 2, graduated: false, grade: 96 },
    { id: 3, graduated: false, grade: 78 },
    { id: 4, graduated: true, grade: 96 },
];
function sortedStudents(student) {
    const sortGrad = student.sort((a, b) => {
        if (a.graduated && !b.graduated) {
            return -1;
        }
        if (b.graduated && !a.graduated) {
            return 1;
        }
        return b.grade - a.grade;
    });
    
    return sortGrad;
}
console.log(sortedStudents(students));
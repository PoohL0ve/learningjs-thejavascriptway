/**
 * The filter method, allows for the selection
 * of elements based on a condition, based on true or false.
 * The second argument is the position/index
 */
const numbers = [4, 3, 5, 2, 7, 8, 1];
function filterLessFive(arr) {
    const lessFive = arr.filter((n) => {
        return n < 5;
    })
    return lessFive;
}
console.log(filterLessFive(numbers));

// filtering objects
const potentials = [
    {name: 'Tara', score: 2},
    {name: 'Abe', score: 4},
    {name: 'Ari', score: 3}
]
const goodScore = potentials.filter((h) => {
    return h.score >= 3;
});
console.log(goodScore);
/**
 * The map function goes through every element in the array
 * It can take any type of function: arr.map(sqaured)
 * The position of an element can be found with map
 */

const numbers = [2, 5, 7, 9];
const addOne = numbers.map((n) => {
    return n += 2;
});
console.log(addOne);

// Using builtin function
const check = [-1, -2, 3, -6].map(Math.abs);
console.log(check);

// With objects
const teamList = [
    {id: 2, score: 4},
    {id: 5, score: 2}
];
function addScore(players) {
    const newScore = players.map((x) => {
        return {
            id: x.id,
            score: x.score + 10
        }
    });
    return newScore;
}
console.log(addScore(teamList));

// Position of an element using i
numbers.map((x, i) => {
    console.log(i);
})
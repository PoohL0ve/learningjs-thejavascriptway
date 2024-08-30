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
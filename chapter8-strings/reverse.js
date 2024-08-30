// String reversal and Palindrome

function reverse(string) {
    let newString = '';

    for (i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

console.log(reverse("short"));

function isPalindrome(string) {
    let reverseString = '';

    for (i = string.length - 1; i >= 0; i--) {
        reverseString += string[i];
    }
    if (reverseString === string) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome('pop'));
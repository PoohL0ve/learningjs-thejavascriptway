/**
 * Callbacks allow you to execute code at a future time
 */
 // Use setTimeout to call a function after a certain millisec
 function runCallback(callbackFunction) {
    return setTimeout(() => {  // use anonymous functions
        callbackFunction()
    }, 1000)
}

// Using callbacks with a map
function map(arr, callback) {
    const newValues = [];

    for (i = 0; i < arr.length; i++) {
        let value = callback(arr[i]);
        newValues.push(value);
    }
    return newValues;
    
}

// Using async/await:
async function getData() {
    const result = await serverCall();

    // this will not run until serverCall resolves/rejects
    return result;
}
/**
 * It is equivalent to:
 * function getData() {
    return serverCall().then((result) => {
        return result;
    });
    }
 */
// The async/await can use try/catch for errors
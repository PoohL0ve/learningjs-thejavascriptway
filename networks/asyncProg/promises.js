/**
 * Promises allow us to configure callback functions
 * JS is single-threaded, thus promises and callbacks
 * help reduce the blokage by allowing the engine to go back to
 * a certain code.
 * Promise can use.catch() to handle errors
 * There is a Promise library that handles resolves and rejects
 */

const promise = getServerData();

// similar to using a callback function argument,
// except we wire up the callback using .then 
promise.then(function(data) {
    // this function is called asynchronously
    // once the server has responded with data
    console.log('got data', data);
});

// The excutor function is for wrapping asynchronous action
// ...and providing callbacks for the result
const p1 = new Promise(function executor(resolve, reject) {
    runAnimation(function() {
        resolve();
    });
});
// the callbacks can be invoked at different places
p1.then(() => { showDialog(); });
p1.then(() => { removeAnimation(); });
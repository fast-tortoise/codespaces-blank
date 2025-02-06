const fs = require("fs");

// fs.readFile("testfile.txt", "utf-8", function(err, data){
//     console.log(data)
// })

function myFunction(){
    let promise = new Promise((resolve, reject) => {
        fs.readFile("testfile.txt", "utf-8", function(err, data){
            if(err){
                reject(err)            }
            resolve(data);
        });
    });
    return promise;
}

function logIt(data){
    console.log(data)
}

myFunction().then(logIt).catch(error => {
    console.error("Error reading file:", error); // Log the actual error
  });




function myFunctionAsync() {
    try {
        const data = new Promise((resolve, reject) => {
        fs.readFile("testfile.txt", "utf-8", (err, data) => {
            if (err) {
            reject(err);
            return;
            }
            resolve(data);
        });
        });
        return data; // Return the data if the promise resolves
    } catch (error) {
        console.error("Error reading file:", error);
        throw error; // Re-throw the error if you want the caller to handle it.
    }
}

async function useMyFunctionAsync() {
    try {
      const content = await myFunctionAsync();
      console.log("Async/Await File Content:", content);
    } catch (error) {
      console.error("Error caught by caller:", error); // Handle the error here
    }
}

useMyFunctionAsync();

// you cannot directly use async and await without Promises.  They are fundamentally linked.

// Here's why:

// async Function: When you declare a function as async, it implicitly returns a Promise.  
// Even if you don't explicitly create a Promise inside the function, the async keyword wraps the function's return value in a Promise.

// await Operator: The await operator is designed to work only with Promises.
// It pauses the execution of the async function until the Promise resolves (or rejects).  It then retrieves the resolved value of the Promise.  You cannot use await with a regular, non-Promise value.
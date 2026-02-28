console.log("Bro,");
console.log("Consistency");
console.log("is");
console.log("the");
console.log("key");
console.log("to");
setTimeout(function(){
    console.log("This is exceuted after 5sec, using setTimeout");
}, 5000);
console.log("success");

setTimeout(function(){
    console.log("Bro!");
}, 1000);
setTimeout(function(){
    console.log("BE CONSISTENT IN YOUR WORK AND HAVE PATIENCE ");
}, 2000);
setTimeout(function(){
    console.log("SUCCESS WILL DEFINITELY COME TO YOU!");
}, 4000);

// This is called callback hell, when we have to do multiple asynchronous operations one after another, we end up with nested callbacks which can be hard to read and maintain. To avoid this, we can use Promises or async/await in JavaScript.

// Example of callback hell:
function fetchData(callback) {
    setTimeout(function() {
        callback("Data fetched");
    }, 2000);
}   
fetchData(function(data) {
    console.log(data);  
    fetchData(function(data) {
        console.log(data);  
        fetchData(function(data) {
            console.log(data);  
        });
    });
});
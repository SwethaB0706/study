// generator function; a function with a * in it's definition is called a generator function
function* printValues() {
    for(let i = 100; i < 105; i++) {
        yield i; // it passes the value of i to the caller function; it stops and allows the caller to continue
        console.log("**** After yielding", i);
    }
}

function doSomething() {
    // console.log("**** calling printValues()")
    // printValues();
    let print = printValues();
    console.log("****Inside doSomething function 1");
    console.log(print.next().value);
    console.log("****Inside doSomething function 2");
    console.log(print.next().value);
    console.log("****Inside doSomething function 3");
    console.log(print.next().value);
    console.log("****Inside doSomething function 4");
    console.log(print.next().value);
    console.log("****Inside doSomething function 5");
    console.log(print.next().value);
}

doSomething();
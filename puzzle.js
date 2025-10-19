for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 100);
}

// i=0, fun(0)
// i=1, fun(5) 100ms
// i=2  fun(5) 200ms
// i=3  fun(5) 300ms
// i=4  fun(5) 400ms
// i is global scope variable  so every fun would share reference to same i by the time they will execute i will have been 5

// output: 5, 5, 5, 5, 5



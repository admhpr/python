var d = 'hey';
first();

function first() {
    var a = 'hello';
    second();

    function second() {
        var b = 'hi';
        third();

    }
}

function third() {
    var c = 'Adam';
    console.log(d);
}
// this doer not have acces to the first or second function.
// the third function has access to everything.

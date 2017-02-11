//a function to calculate the age of a person and then add them to an array that validates if they are old enough to enter the 'club' (18+)

function printFullAge(years) {
    var ages = [];
    var fullAge = [];

    for (var i = 0; i < years.length; i++) {
        ages[i] = 2017 - years[i];
    }

    for (i = 0; i < ages.length; i++) {
        if (ages[i] >- 18) {
            console.log('Person ' + (i+1) + ' is ' + ages[i] + ' years old and can enter the club.');
            fullAge.push(true);
        }else {
            console.log('Person ' + (i+1) + ' is ' + ages[i] + ' years old and cannot enter the club.');
            fullAge.push(false);
        }
    }

    return fullAge;
}


var years = [ 2001, 1989, 1982, 2017, 1987];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);

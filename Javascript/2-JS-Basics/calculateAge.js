function calculateAge(yearOfBirth){
    var age = 2016 - yearOfBirth;
    return age;
}

var JohnAge = calculateAge(1990);
var MikeAge = calculateAge(1969);
var MaryAge = calculateAge(1945);
console.log(JohnAge);

function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(retirement);
}

yearsUntilRetirement("John", 1990);

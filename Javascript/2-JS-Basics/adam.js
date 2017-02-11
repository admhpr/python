var adam = {

    name: 'Adam',
    lastName: 'Harpur',
    yearOfBirth: 1989,
    job: 'computer tech',
    married: true,
    calculateAge: function() {
       this.age = 2017 - this.yearOfBirth;
    }

};

// call the fucnction within the object.
adam.calculateAge();
console.log(adam.age);

// loops

for (var i = 0; i < 10; i++) {
    console.log(i);
}

var names = ['Adam','Jane','Mary','Mark','Bob'];

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--){
    console.log(names[i]);
}

var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}
for (var i = 1; i <= 5; i++){
         if (i === 3) {
        break;
    }

    console.log(i);
}

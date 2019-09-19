"use strict";
function createPerson(person) {
    var result = '';
    if (person.name) {
        result = person.name;
    }
    return { desc: result };
}
var per = createPerson({ name: 'iafine' });
console.log(per);

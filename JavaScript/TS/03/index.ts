interface Person {
  name: string;
  age?: number;
}

function createPerson(person: Person): { desc: string } {
  let result = '';
  if (person.name) {
    result = person.name;
  }
  return { desc: result };
}

let per = createPerson({ name: 'iafine' });
console.log(per);

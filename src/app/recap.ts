const username : string = "1";
const sum = (a: number, b: number) => {
  return a + b;
}

sum(1, 2);

class Person {
  constructor(public age: number, public lastName: string) {}
};

const joaquin = new Person(21, "D:");

joaquin.age;


# TypeScript Key Concepts: `keyof`, Union, and Intersection Types


## What is the use of the keyof keyword in TypeScript? Provide an example.

### 📘 Answer: Keyof is a keyword used to extract keys from an interface or a types or from an object type. 



## 💻 Full Example Code

```ts
// keyof example
interface HeroOfProgrammingHero {
  name: string;
  age: number;
}

type Person = keyof HeroOfProgrammingHero;

function getValue(person: HeroOfProgrammingHero, property: Person): string | number {
  const value = person[property];
  console.log(`The Hero of PH's ${property} is ${value}`);
  return value;
}

const jVai: HeroOfProgrammingHero = {
  name: 'Jhankar Mahbub',
  age: 40
};

const result = getValue(jVai, 'name');
console.log(result);




## Provide an example of using union and intersection types in TypeScript.

// union types
type Dog = {
  bark: () => void;
};

type Cat = {
  meow: () => void;
};

type Pet = Dog | Cat;

function speak(pet: Pet) {
  if ("bark" in pet) {
    pet.bark();
  } else {
    pet.meow();
  }
}

const dog: Dog = { bark: () => console.log("Woof!") };
const cat: Cat = { meow: () => console.log("Meow!") };

speak(dog); 
speak(cat);

// intersection types
type CanWalk = {
  walk: () => void;
};

type CanSwim = {
  swim: () => void;
};

type Amphibian = CanWalk & CanSwim;

const frog: Amphibian = {
  walk: () => console.log("Walking"),
  swim: () => console.log("Swimming")
};

frog.walk(); 
frog.swim();
```


## Installation

Ensure Node.js and TypeScript are installed.

Save the above code in a file named main.ts.

Compile it using the TypeScript compiler:

```cmd
 code .
 
 npm i ts-node-dev --save-dev

 ts-node-dev --respawn --transpile-only .\src\assignmentProblem.ts
```
    




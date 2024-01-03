
let s: string = "some+num";
console.log(s)

// Boolean variable
let isStudent: boolean = true;

// Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];

// Tuple: Array with fixed number of elements of different types
let person: [string, number] = ["Alice", 30];

// Enum: Named constants
enum Color {
  Red,
  Green,
  Blue,
}

let chosenColor: Color = Color.Green;



// Function with parameter types and return type
function add(x: number, y: number): number {
    return x + y;
  }
  
// Optional and default parameters
function greet(name: string, greeting?: string): string {
    return `${greeting || "Hello"}, ${name}!`;
}


// Interface
interface Person {
    name: string;
    age: number;
}
  
// Object with the specified interface
let user: Person = {
    name: "Alice",
    age: 28,
};

// Type assertion
let someValue: any = "hello";
let strLength: number = (someValue as string).length;


// Class
class Animal {
  // Constructor
  constructor(public name: string) {}

  // Method
  makeSound(): string {
    return "Some generic sound";
  }
}

// Inheritance
class Dog extends Animal {
  // Override method
  makeSound(): string {
    return "Woof!";
  }
}

// Creating instances
let cat = new Animal("Whiskers");
let dog = new Dog("Buddy");

console.log(cat.makeSound()); // Some generic sound
console.log(dog.makeSound()); // Woof!


// Generic function
function identity<T>(arg: T): T {
  return arg;
}

// Generic interface
interface Box<T> {
  value: T;
}

let numberBox: Box<number> = { value: 42 };
let stringBox: Box<string> = { value: "Hello, generics!" };


// Enum
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let playerDirection: Direction = Direction.Up;

// Union Types
function printId(id: number | string): void {
  console.log(`ID: ${id}`);
}

printId(123);       // ID: 123
printId("ABC456");  // ID: ABC456



let isWorldSaved: boolean = false;

export function saveTheWorld(): string {
  if (isWorldSaved) {
    return `Too late, world has already been saved`;
  } else {
    isWorldSaved = true;
    return `Hurray, you just saved the world`;
  }
}


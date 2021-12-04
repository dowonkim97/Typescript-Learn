/* const name = "kim",
  age = 25,
  gender = "male";
 */

const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

console.log(sayHi("kim", 25, "male"));

export {};

const name = "ibrar"
const repoCount = 50

// console.log(name + repoCount + " Value");       this is wrong

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // this is right

const gameName = new String('ibrar_ID_com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-4, 2)
console.log(anotherString);

const newStringOne = "   ibrar    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('_'));
const name ="Kusal"
const repoCount=5
//console.log(name+ repoCount)

console.log(`Hello Everybody ${name} my repo count is${repoCount}`)

const gameName= new String(`Pubg`)

console.log(gameName[0])

console.log(gameName.length)// 4 auxa total length
console.log(gameName.toUpperCase())//capital letter ma auxa
console.log(gameName.charAt(3))//g is printed

let newString=gameName.substring(0,3)
console.log(newString)

const anotherString= gameName.slice(0,2)/// we can
//use for negative number
console.log(anotherString)


const newStringOne =" Kushal "
console.log(newStringOne)
console.log(newStringOne.trim())///The gap of Kushal will 
//be removed

const url="https://kusal.com/kushal20%Rimal"
console.log(url.replace("20%", "%40"))//to replace the data


console.log(url.includes("kusal"))///to show the given data in the code //


const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ")
console.log(words[3])//it returns fox becuase it has 3 words

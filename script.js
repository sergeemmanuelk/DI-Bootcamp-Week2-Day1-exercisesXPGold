//Exercise 1 : Favorite Color

let sentence = ["my","favorite","color","is","blue"]

console.log(sentence.join(' '))

//Exercise 2 : Mixup

let str1 = "mix"
let str2 = "pod"

str1.replace("mi", "po")
str2.replace("po", "mi")

let str3 = str1.replace("mi", "po") + ' ' + str2.replace("po", "mi")

console.log(str3)

//Exercise 3 : Calculator


let num1 = prompt("Enter a number : ")
num1 = parseInt(num1)
let num2 = prompt("Enter a second number : ")
num2 = parseInt(num2)
alert(`La somme de ${num1} et ${num2} est ${num1+num2}`)
// ########### Givens ###########
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// ########### Exercises: Level 1 ###########

// 12
let even_sum = 0;
let odd_sum = 0;
for(let  i = 0; i <= 100; i++){
    if(i % 2 == 0){
        even_sum += i;
    }else{
        odd_sum += i;
    }
}

let arr1 = []
arr1.push(even_sum)
arr1.push(odd_sum)

console.log(arr1)

// 13
let arr2 = []
for(let  i = 0; i <= 5; i++){
    arr2.push(Math.floor(Math.random()*11))
}

console.log(arr2)

// 14
let arr3 = [];

while (arr3.length < 5) {
  let randomeNumber = Math.floor(Math.random() * 11);
  if (!arr3.includes(randomeNumber)) {
    arr3.push(randomeNumber);
  }
}

console.log(arr3);

//  15
let characters1 = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let id1 = ''
for(let  i = 0; i <6; i++){
    let random_index = Math.floor(Math.random() * characters1.length)
    id1 += characters1[random_index]
}
console.log(id1)

// ########### Exercises: Level 2 ###########

//  1
let characters2 = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let id2 = ''

// lets give the upper limit of the length of id (10)
let random_length = Math.floor(Math.random() * 11) 

for(let  i = 0; i < random_length; i++){
    let random_index = Math.floor(Math.random() * characters2.length)
    id2 += characters2[random_index]
}
console.log(id2)

//  2
let characters3 = '0123456789ABCDEF'
let hexadecimal = ''

for(let  i = 0; i < 6; i++){
    let random_index = Math.floor(Math.random() * characters3.length)
    hexadecimal += characters3[random_index]
}
hexadecimal = "#" + hexadecimal
console.log(hexadecimal)

//  3
let rgb = 'rgb('
let value_array = []
for(let  i = 0; i < 3; i++){
    let random_value = Math.floor(Math.random() * 256)
    value_array.push(random_value)
}

rgb = rgb + value_array.join(',') + ')'
console.log(rgb)

//  4
let uppercae_list = []
for (let i = 0; i < countries.length; i++) {
 uppercae_list.push(countries[i].toUpperCase());
}
console.log(uppercae_list)

//  5
let country_length = [];
for (let i = 0; i < countries.length; i++) {
  country_length.push(countries[i].length);
}
console.log(country_length);

//  6
let country_list = [];
for (let i = 0; i < countries.length; i++) {
  let country = [];
  country.push(countries[i])
  country.push(countries[i].substring(0, 3).toUpperCase())
  country.push(countries[i].length)

  country_list.push(country);
}
console.log(country_list);

//  7
let country_with_land = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].toLowerCase().includes("land")) {
    country_with_land.push(countries[i]);
  }
}
if (country_with_land.length > 0) {
  console.log(country_with_land);
} else {
  console.log("All these countries are without land");
}

//  8
let country_endwith_ia = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].toLowerCase().endsWith("ia")) {
    country_endwith_ia.push(countries[i]);
  }
}
if (country_endwith_ia.length > 0) {
  console.log(country_endwith_ia);
} else {
  console.log("These are countries ends without ia");
}

// 9
country_longest_name = countries[0]
let longest = countries[0].length

for (let i = 1; i < countries.length; i++) {
  if (countries[i].length > longest) {
    country_longest_name = countries[i]
    longest = countries[i].length
  }
}

console.log(country_longest_name)

//  10
let countries_with_5 = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].length == 5) {
    countries_with_5.push(countries[i]);
  }
}
console.log(countries_with_5);

//  11
//  same with 9 above

//  12

let webTechs_list = [];
for (let i = 0; i < webTechs.length; i++) {
  let webTech = [];
  webTech.push(webTechs[i])
  webTech.push(webTechs[i].length)

  webTechs_list.push(webTech);
}
console.log(webTechs_list);

//  13
let mern_acronym = "";
for (let i = 0; i < mernStack.length; i++) {
  mern_acronym += mernStack[i][0];
}
console.log(mern_acronym);

//  14
for (const webTech of webTechs){
    console.log(webTech)
}

//  15
const fruit = ['banana', 'orange', 'mango', 'lemon']
const fruit_reversed = []

for(let i = fruit.length - 1; i >= 0; i--){
    fruit_reversed.push(fruit[i])
}
console.log(fruit_reversed)

//  16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
const fullStack_concat = fullStack[0].concat(fullStack[1])

for(let tech of  fullStack_concat){
    console.log(tech.toUpperCase())
}
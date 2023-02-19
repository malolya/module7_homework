//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
const userMalysheva = {
    name: 'Olya',
    age: 26,
    city: 'Berdsk',
}
const userMalysheva1 = Object.create(userMalysheva)
userMalysheva1.name = 'Tanya';
userMalysheva1.age = 1;

const ownProperty = function(argument) {
    for(let key in argument) {
    if(argument.hasOwnProperty(key))
    console.log(key)
}
}

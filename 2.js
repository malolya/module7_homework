//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
const userMalysheva = {
    name: 'Olya'
    age: 26,
    city: 'Berdsk',
}

function user() {
    for (let name in userMalysheva) {
        if(userMalysheva.hasOwnProperty('name')) {
            alert('меня зовут ' +userMalysheva.name)
        }
        else {
            alert('не указано имя');
        }
    }
}
user()
console.log(userMalysheva.hasOwnProperty('name'));
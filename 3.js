//Написать функцию, которая создает пустой объект, но без прототипа.
function fun() {
    let obj = Object.create(null);
    return Object.create(null);
}
console.log(fun())
let user = {
    name: 'Bob',
    age: 25,
    isAdmin: true,
};
user["city of residence"] = 'Москва';

user.age = 27;
delete user["city of residence"];

let info = prompt('Какую информацию хотите узнать о пользователе?');

alert(user[info]);
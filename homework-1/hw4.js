let obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
}
for (let name in obj){
    let salary = obj[name];
    console.log(`${name} — зарплата ${salary} долларов`)
}
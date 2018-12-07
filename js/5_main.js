let arr = ['strocka',111,'string',777];

console.log(arr[1]);
/*  alert -- прекращает загрузку скриптов пока не заероеся окно браузера */
//alert(arr[0]); 

//confirm('Уйти со страницы ?');

// let answer = confirm('Уйти со страницы ?');
// console.log(answer);

let answer = prompt('Есть ли Вам 18 ?','Да'); /* вместо ДА можно оставить пустые кавычки, чтобы не было ошибок в IE */
//console.log(answer);
console.log(typeof(answer)); /*  таким образом можно проверять тип данных   ( выведется в консоль )*/

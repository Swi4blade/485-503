//Задание 485
// //№1
// function setText(selector, text) {
// 	let elem = document.querySelector(selector);
// 	elem.textContent = text;
// }
// setText('#elem1', 'text1');
// setText('#elem2', 'text2');
// //№2
// function setAttr(selector, attrName, attrValue) {
//     let elem = document.querySelector(selector);
//     elem.setAttribute(attrName, attrValue);
//     }
//     setAttr('#elem3', 'id', 'new-elem3');
//     setAttr('#elem4', 'id', 'new-elem4');

//Задание 486
// //№1
// function appendText(selector, text) {
// let elems = document.querySelectorAll(selector);

// for (let elem of elems) {
// elem.textContent += text;
//     }
// }
// appendText('.elem', 'Мой текст');

//Задание 487
// //№1
// forEach('.elem', function(elem) {
// elem.textContent = elem.textContent + '!';
// });

// function forEach(selector, func) {
// let elems = document.querySelectorAll(selector);

// for (let elem of elems) {
// func(elem);
//     }
// }

//Задание 488
// //№1
// forEach('.elem', function(elem, index) {
// elem.textContent = index + elem.textContent;
// });

// function forEach(selector, func) {
// let elems = document.querySelectorAll(selector);

// for (let i = 0; i < elems.length; i++) {
// func(elems[i], i);
//     }
// }

//Задание 489
// //№1
// function appendText(elem, text){
// elem.textContent = elem.textContent + text;
// }
// let elem1 = document.getElementById('elem1');
// appendText(elem1, ', мир');
// let elem2 = document.getElementById('elem2');
// appendText(elem2, ', всем');
// //№2
// function appendText2(elem, text){
// elem.textContent = elem.textContent + text;
// }

// let elems = document.querySelectorAll('.div');

// for (let elem of elems) {
// appendText2(elem, '!');
// }
// //№3
// function setValue(inputElem, text){
// inputElem.value = text;
// }

// let input1 = document.querySelector('.input');
// setValue(input1, 'Hello world!');

//Задание 490
// //№1
// function appendText(elems, text) {
// for (let elem of elems) {
// elem.textContent = elem.textContent + text;
//     }
// }
// let elems = document.querySelectorAll('.elem');
// appendText(elems, 'text');
// //№2
// function appendElem(ulElem, text){
// let li = document.createElement('li');
// li.textContent = text;
// ulElem.appendChild(li);
// }

// let ul1 = document.querySelector('#ul1');
// appendElem(ul1, 'Новый элемент списка');
// //№3
// function appendElem2(ulElem, text){
// let li = document.createElement('li');
// li.textContent = text;
// ulElem.appendChild(li);
// }

// let ul2 = document.querySelector('#ul2');
// let arr = ['text1', 'text2', 'text3'];

// for (let i = 0; i < arr.length; i++) {
// appendElem2(ul2, arr[i]);
// }

//Задание 491
// //№1
// function createTable(rows, cols, parent) {
// let table = document.createElement('table');

// for (let i = 0; i < rows; i++) {
// let tr = document.createElement('tr');
// for (let j = 0; j < cols; j++) {
// let td = document.createElement('td');
// tr.appendChild(td);
//         }
// table.appendChild(tr);
//     }

// parent.appendChild(table);
// }

// let div = document.querySelector('#elem');
// createTable(3, 4, div);

//Задание 492
// //№2
// function createTable(rows, cols) {
//     let table = document.createElement('table');

//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr');

//         for (let j = 0; j < cols; j++) {
//             let td = document.createElement('td');
//             td.innerHTML = i * j;
//             tr.appendChild(td);
//         }

//         table.appendChild(tr);
//     }

//     return table;
// }

// let div = document.querySelector('#elem1');
// let table = createTable(3, 4);
// table.style.color = 'red';
// div.appendChild(table);

// let div2 = document.querySelector('#elem');
// let table2 = createTable(3, 4);
// div2.appendChild(table2);


//Задание 493
// //№1
// function createTableByArr(arr) {
//     let table = document.createElement('table');
//     for (let i = 0; i < arr.length; i++) {
//         let tr = document.createElement('tr');

//         for (let j = 0; j < arr[i].length; j++) {
//             let td = document.createElement('td');
//             td.innerHTML = arr[i][j];
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     return table;
// }

// let div = document.querySelector('#elem');
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let table = createTableByArr(arr);
// div.appendChild(table);

//Задание 497
// //№1
// ;(function (selector1, selector2, selector3, selector4) {
//     let input1 = document.querySelector(selector1);
//     let input2 = document.querySelector(selector2);
//     let input3 = document.querySelector(selector3);
//     let button = document.querySelector((selector4))
//     function sum() {
//         return +input1.value + +input2.value + +input3.value
//     }
//     button.addEventListener('click', function () {
//         console.log(sum())
//     })
// })('#input1', '#input2', '#input3', '#button');

//Задание 501
// //№1
// ;(function() {
//     let str1 = 'переменная модуля';
//     let str2 = 'переменная модуля';
//     let str3 = 'переменная модуля';

//     function func1() {
//         alert('функция модуля');
//     }
//     function func2() {
//         alert('функция модуля');
//     }
//     function func3() {
//         alert('функция модуля');
//     }
//     window.str1 = str1;
//     window.func1 = func1;
//     window.func2 = func2;
//     window.func3 = func3;
// })();


//Задание 502
// // №1
// ;(function() {
//     let str1 = 'переменная модуля';
//     let str2 = 'переменная модуля';
//     let str3 = 'переменная модуля';

//     function func1() {
//         alert('функция модуля');
//     }
//     function func2() {
//         alert('функция модуля');
//     }
//     function func3() {
//         alert('функция модуля');
//     }
//     function func4() {
//         alert('функция модуля');
//     }
//     function func5() {
//         alert('функция модуля');
//     }
//     window.module = {str1, str2, func1, func2, func3, func4, func5};
// })();

//Задание 503
// №1
;(function () {
    function avg1(arr) {
        return sum(arr, 1) / arr.length;
    }

    function avg2(arr) {
        return sum(arr, 2) / arr.length;
    }

    function avg3(arr) {
        return sum(arr, 3) / arr.length;
    }

    function sum(arr, pow) {
        let res = 0;

        for (let elem of arr) {
            res += elem ** pow;
        }

        return res;
    }
    window.arrMod = {avg1, avg2, avg3}
})();
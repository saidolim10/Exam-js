// Examen JavaScript Amaliy savollar


// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:Pasdan yozib keting kodini



//  javobi

// let numb = 5
// let bolingan = numb % 2
// alert(bolingan)



// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini


// javob


// let random = Math.round(Math.random() * 10)
// alert(random)


// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring!

// сделать число 12.510 целым

// ответ должен выйти 12

// javob: 12 chiqishi kerak!


// javob

// let numb = 12.510
// let floor = Math.floor(numb)
// alert(floor)



// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini  topib va alertga chiqaring!.

// с помощью  найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// Javob:Kodini yozib bering

// javob

// let str = 'Mars It School'
// let lenght = str.length
// alert(lenght)


// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering

// javob

// let str = 'Mars It School'
// for (let i = 0; i < 10; i++) {
//     console.log(str)
// }



// 6-savol

// let harflar = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering

// javob


// let harflar = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]

// console.log(harflar[17] + harflar[0] + harflar[7] + harflar[2] + harflar[13] + harflar[10] + harflar[7] + harflar[11])




// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering

// javob

// let age = prompt('yosh kriting')

// if (age > 18) {
//     console.log('Balogatga yetkansiz')
// } else if (age == 18) {
//     console.log('balogat yoshi muborak')
// } else {
//     console.log('Balogatka yetmagansiz')
// }






// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering


// let names = prompt('Ismingizni Kriting')

// console.log(names.split('').reverse().join(''))






// 9-savol DOM

// Promtdan ismigizni kiriting va yoshingizni kiriting va uni style berilgan holda DOM ga chiqaring


// Javob:Kodini yozib bering



// let asmo = document.querySelector("body");
// let savol = prompt('Ismingizni kiriting');
// let savol1 = prompt('Familiyangizni kiriting');
// let savol2 = prompt('Yoshingizni kiriting');


// let div = document.querySelector(".kotta");
// div.style.padding = '20px';
// div.style.width = '500px';
// div.style.height = '300px';
// div.style.borderRadius = '30px';
// let h1 = document.querySelector("h1")
// h1.innerHTML = `1) Isming: ${savol}`
// h1.style.fontSize = "38px"
// h1.style.color = "darkblue"
// let h2 = document.querySelector("h2")
// h2.innerHTML = `2) familiangiz: ${savol1}`
// h2.style.fontSize = "38px"
// h2.style.color = "darkblue"
// let h3 = document.querySelector("h3")
// h3.innerHTML = `3) yoshingz: ${savol2}`
// h3.style.fontSize = "38px"
// h3.style.color = "darkblue"






// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring

// найти и вывести четные массивы в консоль, с помощью методов


// Javob :Kodini yozib bering



// javob

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let juft = []

// for (let i = 0; i < sonlar.length; i++) {
//     const e = sonlar[i];
//     if (e % 2) {

//     } else {
//         juft.push(e)
//     }
// }

// console.log(juft);





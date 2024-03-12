// 1. Barcha so'zlarni bosh harfi katta bo'lsin
// function capitalize(str) {
//   let words = str.split(" ");
//   let array = [];
//   for (let i = 0; i < words.length; i++) {
//     array.push(words[i][0].toUpperCase() + words[i].slice(1).toLowerCase());
//   }
//   return array.join(" ");
// }
// console.log(capitalize("hello world")); // Hello World
// console.log(capitalize("Lorem ipsum dolor")); // Lorem Ipsum Dolor

// 2. Yildan asrni toping faqat methodlardan foydalanmang
// function century(year) {
//   return (year - (year % 100)) / 100 + 1;
// }

// console.log(century(2024)); // 21
// console.log(century(1441)); // 15
// console.log(century(2000)); // 21
// console.log(century(571)); // 6

// 3. stringdagi ortiqcha "space"larni olib tashlang
// let removeSpace = (str) => {
//   words = str.trim().split(/\s+/);
//   return words.join(" ");
// };

// console.log(removeSpace("  Salom   dunyo  ")); // Salom dunyo
// console.log(removeSpace("  Lorem   ipsum dolor  ")); // Lorem ipsum dolor

// 4. Namuna bo'yicha qaytaring
// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// function gimmeTheLetters(sp) {
//   let [start, end] = sp.split("-");
//   let index1 = alphabet.indexOf(start.toLowerCase());
//   let index2 = alphabet.indexOf(end.toLowerCase()) + 1;
//   let result = alphabet.slice(index1, index2);
//   return sp === sp.toLowerCase() ? result : result.toUpperCase();
// }

// console.log(gimmeTheLetters("a-z")); // "abcdefghijklmnopqrstuvwxyz"
// console.log(gimmeTheLetters("h-o")); // "hijklmno"
// console.log(gimmeTheLetters("Q-Z")); // "QRSTUVWXYZ"

// 5. Arrayni har bir qiymatini kvadrad qilib yangi array qaytarasiz faqat methodsiz
// let squareArray = function (arr) {
//   let result = [];
//   for (i = 0; i < arr.length; i++) {
//     result[i] = arr[i] ** 2;
//   }
//   return result;
// };

// console.log(squareArray([1, 2, 3])); // [1, 4, 9]
// console.log(squareArray([5, 3, 7, 9])); // [25,9,49,81]

// 6. ishoralar bir xil bo'lsa o'zini qaytaramiz aks holda "0" qaytaramiz
// function neutralise(s1, s2) {
//   let result = "";
//   if (s1.length !== s2.length) {
//     return `o'zaro teng bo'lmagan "string" lar kiritdingiz kiritdingiz, iltimos qaytadan urinib ko'ring`;
//   }
//   for (i = 0; i < s1.length; i++) {
//     if ((s1[i] === "+" && s2[i] === "-") || (s1[i] === "-" && s2[i] === "+")) {
//       result += "0";
//     } else {
//       result += s1[i];
//     }
//   }
//   return result;
// }
// console.log(neutralise("--++--", "++--++")); // "000000"
// console.log(neutralise("-+-+-+", "-+-+-+")); // "-+-+-+"
// console.log(neutralise("-++-", "-+-+")); // "-+00"

// 7. har bir raqamni darajaga ko'tarib number qilib qaytaring
// function squareDigits(num) {
//   let result = "";
//   let numStr = num.toString();
//   for (let i = 0; i < numStr.length; i++) {
//     result += (parseInt(numStr[i]) ** 2).toString();
//   }
//   return +result;
// }

// console.log(squareDigits(3212)); // 9414
// console.log(squareDigits(9119)); // 811181

// 8. Namuna bo'yicha qaytaring
// function likes(names) {
//   if (names.length == 0) {
//     return `no one likes this`;
//   } else if (names.length == 1) {
//     return `${names[0]} likes this`;
//   } else if (names.length == 2) {
//     return `${names[0]} and ${names[1]} like this`;
//   } else if (names.length == 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   } else if (names.length >= 3) {
//     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//   }
// }

// console.log(likes([])); // "no one likes this"
// console.log(likes(["Peter"])); // "Peter likes this"
// console.log(likes(["Jacob", "Alex"])); // "Jacob and Alex like this"
// console.log(likes(["Max", "John", "Mark"])); // "Max, John and Mark like this"
// console.log(likes(["Alex", "Jacob", "Mark", "Max", "Laylo"])); // "Alex, Jacob and 3 others like this"

// 9. Eng uzun so'zni toping
// function longestWord(str) {
//   let array = str.split(" ");
//   let length = 0;
//   let word = "";
//   for (i = 0; i < array.length; i++) {
//     if (array[i].length > length) {
//       length = array[i].length;
//       word = array[i];
//     }
//   }
//   return word;
// }

// console.log(longestWord("Lorem ipsum dolor sit amet consectetur")); //consectetur
// console.log(longestWord("salom uzbekistan dunyosi")); // uzbekistan

// getter va setter qo'shamiz mana shu "class"larga
// class CheckPayment {
//   constructor(name, isPayment) {
//     this.name = name;
//     this.isPayment = isPayment;
//   }

//   getStatusPayment() {
//     if (this.isPayment) {
//       return `${this.name}, hush kelibsiz!`;
//     } else {
//       // new Error
//       return `${this.name} to'lov qilmagansiz. Shuning uchun tizimga kirishga ruxsat etilmagan.`;
//     }
//   }
// }

// let payment = new CheckPayment("Maqsadjon", true);
// console.log(payment.getStatusPayment());
//      /////////////////
class CheckPayment {
  constructor(name, isPayment) {
    this.name = "";
    this.isPayment = true;
  }
  get name() {
    return this.name;
  }
  set name({ name, isPayment }) {
    this.name = name;
    this.isPayment = isPayment;
  }
  get getStatusPayment() {
    if (this.isPayment) {
      return `${this.name}, hush kelibsiz!`;
    } else {
      return `${this.name} to'lov qilmagansiz. Shuning uchun tizimga kirishga ruxsat etilmagan.`;
    }
  }
}

let payment = new CheckPayment("Maqsadjon", true);
console.log(payment.getStatusPayment);

class CircleArea {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}
let radius = new CircleArea(10);
console.log(radius.getArea());

// bu masala ixtiyoriy
// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

// O'tgan darsda vazifasidagi CLASS larni get va set da yasalgani:
// CLASS-1
// class Cartoons {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }
// class cartoonCompany extends Cartoons {
//   constructor(name, year, company) {
//     super(name, year);
//     this.company = company;
//   }
//   getCartoon() {
//     return `${this.name} is released in ${this.year} by ${this.company}`;
//   }
// }
// let cartoon = new cartoonCompany("Kunfu panda4", 2024, "DreamWorks");
// console.log(cartoon.getCartoon());

// // CLASS-2
// class Moives {
//   constructor(name, company) {
//     this.name = name;
//     this.company = company;
//   }
//   Director() {
//     return `Joss Whedon`;
//   }
// }
// class getDirector extends Moives {
//   constructor(name, company, director) {
//     super(name, company);
//     this.director = director;
//   }
//   isDirector() {
//     if (this.Director() == this.director) {
//       return `${this.name} made by ${
//         this.company
//       } company and director is ${this.Director()}`;
//     }
//     return `${this.Director()} isn't director of ${this.name}`;
//   }
// }
// let result1 = new getDirector("Avengers", "Marvel", "Joss Whedon");
// let result2 = new getDirector("Kunfu panda4", "DreamWorks", "Mike Mitchell");

// console.log(result1.isDirector());
// console.log(result2.isDirector());

// CLASS-3
// let num = +prompt(`0 dan 9 gacha bitta tahminiy son kiriting`);
// let random = Math.floor(Math.random() * 10);
// class randomNumber {
//   constructor() {}
//   isEqual() {
//     if ((num = random)) {
//       return `Tabriklaymiz siz latorayani yutdingiz!`;
//     }
//     return `kechirasiz siz kiritgan son to'g'ri kelmadi, qaytadan urinib ko'ring :)`;
//   }
// }
// let result = new randomNumber();
// console.log(result.isEqual());

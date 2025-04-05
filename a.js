// 1. Создайте класс Product, который будет иметь свойства name, price и quantity. Напишите метод
// getTotalCost(products), который принимает список продуктов и возвращает общую стоимость всех
// товаров в каталоге.
// Входные: Product("Apple", 2, 5) → Результат: 10
// Входные: Product("Orange", 3, 4)→ Результат: 12

// class Product {
//     constructor(name, price, quantity){
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//     }

//     getTotalCost = () =>{
//         return this.price * this.quantity;
//     }
// }

// const res = new Product("Apple", 2, 5);
// console.log(res.getTotalCost());

// 2. Создайте класс Student, который будет содержать имя, возраст и массив оценок. Напишите метод
// getAverageGrade(), который возвращает средний балл студента.
// Входные: Student("Alice", 20, [5, 4, 5, 3, 4]) → Результат: "Alice (20) имеет средний балл 4.2"
// Входные: Student("Bob", 22, [3, 2, 3, 4, 3]) → Результат: "Bob (22) имеет средний балл 3.0"
// Входные: Student("John", 19, [4, 4, 4, 5, 5]) → Результат: "John (19) имеет средний балл 4.4«

// class Student {
//     constructor(name, age, marks){
//         this.name = name;
//         this.age = age;
//         this.marks = marks;
//     }

//     getAverageGrade = () =>{
//         return `${this.name} (${this.age}) имеет средний балл ${this.marks.reduce((sum, el) => sum + el, 0) / this.marks.length}` 
//     }
// }

// const res = new Student("Alice", 20, [5, 4, 5, 3, 4])
// console.log(res.getAverageGrade());

// 3. *Реализуйте класс CommonPrefix, который будет принимать массив строк. В классе должен быть
// метод findLongestPrefix(), который возвращает самый длинный общий префикс среди всех строк в
// массиве. Если общего префикса нет, метод возвращает пустую строку.
// Входные: new CommonPrefix(["flower", "flow", "flight"]) → Результат: "fl"
// Входные: new CommonPrefix(["dog", "racecar", "car"]) → Результат: ""
// Входные: new CommonPrefix(["interview", "interval", "internet"]) → Результат: "inte"

// class CommonPrefix{
//     constructor(strings){
//         this.strings = strings;
//     }
    
//     findLongestPrefix = () =>{
//         let result = this.strings[0];
//         let flag = true;
//         while(flag){
//             let temp = this.strings.every((el) => el.includes(result) ? true : false)
//             if(temp){
//                 flag = false;
//                 return result;
//             }    
//             else result = result.slice(0, result.length - 1)
//         }
//     }
// }

// const res = new CommonPrefix(["interview", "interval", "internet"]);
// console.log(res.findLongestPrefix());

// 4. Создайте класс TwoSum, который будет принимать массив целых чисел nums и целое число target.
// Реализуйте метод findIndices(), который возвращает индексы двух чисел, сумма которых равна
// target. Гарантируется, что существует ровно одно решение, и вы не можете использовать один и
// тот же элемент дважды.
// Условия:
// • Массив nums содержит только целые числа.
// • Вы можете вернуть индексы в любом порядке.
// • Для каждого набора входных данных существует ровно одно решение.
// Входные: new TwoSum([2, 7, 11, 15], 9) → Результат: [0, 1]
// Объяснение: Поскольку nums[0] + nums[1] == 9, мы возвращаем [0, 1].
// Входные: new TwoSum([3, 2, 4], 6)→ Результат: [1, 2]
// Входные: new TwoSum([2, 3, 4], 6)→ Результат: [0, 2]

// class TwoSum{
//     constructor(nums, target){
//         this.nums = nums;
//         this.target = target;
//     }

//     findIndices = () =>{
//         const arr = [];
//         for(let i = 0; i < this.nums.length; i++){
//             if(this.nums[i] + this.nums[i+1] == this.target) arr.push(i, i+1)
//         }
//         return arr;
//     }
// }

// const res = new TwoSum([2, 7, 11, 15], 9);
// console.log(res.findIndices());

// 5. Создайте родительский класс Number, который будет хранить число. Затем создайте дочерний
// класс PalindromeChecker, который будет проверять, является ли это число палиндромом.
// Входные: new PalindromeChecker(-121) → Результат: false
// Входные: new PalindromeChecker(10) → Результат: false
// Входные: new PalindromeChecker(12321) → Результат: true

// class Number{
//     constructor(num){
//         this.num = num;
//     }
// }

// class PalindromeChecker extends Number{
//     constructor(num){
//         super(num);
//     }

//     isChecked = () =>{
//         return this.num.toString() == this.num.toString().split('').reverse().join('')
//     }
// }

// const res = new PalindromeChecker(12321);
// console.log(res.isChecked());

// 6. Создайте родительский класс Number, который будет хранить статичное число. Затем создайте
// дочерний класс SquareRootCalculator, который будет содержать метод calculateSquareRoot(),
// вычисляющий квадратный корень этого числа без использования встроенной функции Math.sqrt().
// Входные: new SquareRootCalculator(16) → Результат: 4
// Входные: new SquareRootCalculator(25) → Результат: 5
// Входные: new SquareRootCalculator(1) → Результат: 1

// class Number{
//     constructor(num){
//         this.num = num;
//     }
// }

// class SquareRootCalculator extends Number{
//     constructor(num){
//         super(num);
//     }

//     calculateSquareRoot = () =>{
//         let result = 0;

//         for(let i = 0;;i++){
//             if(i * i == this.num) {
//                 result = i;
//                 break;
//             }
//         }
//         if(result == null) return "undefined"
//         return result;
//     }
// }

// const res = new SquareRootCalculator(16)
// console.log(res.calculateSquareRoot());

// 7. Создайте родительский класс NumberGenerator, который будет генерировать и возвращать
// случайное число с помощью метода generateNumber(). Затем создайте дочерний класс
// SquareRootCalculator, который переопределяет метод generateNumber() и находит квадратный
// корень этого числа без использования встроенной функции Math.sqrt().
// Входные: new SquareRootCalculator().generateNumber() (предположим, сгенерированное число 16)→
// Результат: 4
// Входные: new SquareRootCalculator().generateNumber() (предположим, сгенерированное число 25) →
// Результат: 5

// class NumberGenerator{
//     generateNumber(){
//         const number = Math.floor(Math.random()*100)
//         return number;
//     }
// }

// class SquareRootCalculator extends NumberGenerator{
//     generateNumber = () =>{
//         let num = super.generateNumber();

//         for(let i = 0;i <= num;i++){
//             if(i * i == num) return i
//         }
//         return "undefined"
//     }
// }

// const res = new SquareRootCalculator();
// console.log(res.generateNumber());

// 8. Создайте родительский класс NumberArrayGenerator, который будет генерировать массив чисел
// от 1 до 8 с помощью метода generateArray(). Затем создайте дочерний класс EvenNumberFilter,
// который переопределяет метод generateArray() и оставляет в массиве только чётные числа.
// Входные: new EvenNumberFilter().generateArray() → Результат: [2, 4, 6, 8]

// class NumberArrayGenerator{
//     generateArray(){
//         const arr = [];

//         for(let i = 0; i < 8; i++){
//             arr.push(Math.floor(Math.random()*20))
//         }
//         return arr;
//     }
// }

// class EvenNumberFilter extends NumberArrayGenerator{
//     generateArray(){
//         const arr = super.generateArray();
//         return arr.filter((el) =>{
//             if(el % 2 == 0) return true;
//         })
//     }
// }

// const res = new EvenNumberFilter()
// console.log(res.generateArray());

// 9. Создайте родительский класс RandomNumberArrayGenerator, который будет генерировать массив
// случайных чисел с помощью метода generateArray(). Затем создайте дочерний класс MultipleFilter,
// который переопределяет метод generateArray() и оставляет в массиве только те числа, которые
// кратны 3 или 7.
// Входные: new MultipleFilter().generateArray() → Результат: [21, 14, 9] (может быть другим, так как числа
// случайные)
// Входные: new RandomNumberArrayGenerator().generateArray() → Результат: [13, 21, 8, 9, 14, 27] (может быть
// другим, так как числа случайные)

// class RandomNumberArrayGenerator{
//     generateArray(){
//         const arr = [];

//         for(let i = 0; i < 8; i++){
//             arr.push(Math.floor(Math.random()*20))
//         }
//         return arr;
//     }
// }

// class MultipleFilter extends RandomNumberArrayGenerator{
//     generateArray(){
//         const arr = super.generateArray();

//         return arr.filter((el) =>{
//             if(el % 3 == 0 || el % 7 == 0) return true
//         })
//     }
// }

// const res = new MultipleFilter();
// console.log(res.generateArray());

// 10. Создайте родительский класс NumberProcessor, который будет содержать массив чисел [1, -1, -4, 3, 3,
// 5, 4, 4, 2, 2, 2] и метод processNumbers(), который оставляет в массиве только положительные числа.
// Затем создайте дочерний класс UniqueNumberProcessor, который переопределяет метод
// processNumbers() и удаляет дубликаты из массива.
// Входные: new NumberProcessor().processNumbers() → Результат: [1, 2, 3, 4, 5]

// class NumberProcessor{
//     arr = [1, -1, -4, 3, 3, 5, 4, 4, 2, 2, 2];

//     processNumbers(){
//         return this.arr.filter((el) =>{
//             if(el > 0) return true;
//         })
//     }
// }

// class UniqueNumberProcessor extends NumberProcessor{
//     processNumbers(){
//         const arr = super.processNumbers().sort();

//         const res = [];

//         for(let i = 0; i < arr.length; i++){
//             if(arr[i] != arr[i+1]) res.push(arr[i])
//         }
//         return res;
//     }
// }

// const result = new UniqueNumberProcessor();
// console.log(result.processNumbers());

// 11. *Создайте класс PascalsTriangle, который будет принимать количество строк
// numRows и содержать метод generateTriangle(), возвращающий первые
// numRows строк треугольника Паскаля.
// Входные: new PascalsTriangle(5).generateTriangle() → Результат: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1],
// [1, 4, 6, 4, 1]]
// Входные: new PascalsTriangle(1).generateTriangle() → Результат: [[1]]

class PascalsTriangle{
    constructor(numRows){
        this.numRows = numRows;
    }

    generateTriangle(){
        const arr = [];
        
    }
}
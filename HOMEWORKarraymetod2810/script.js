
// 1. отфильтровать нечетные числа filter map
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const oddNumbers = numbers.filter(num => num % 2 !==0);
console.log(oddNumbers);

// 2. Отфильтровать строки длинее 5 символов
const words = ['apple', 'cat', 'banana', 'dog', 'elephant', 'car', 'bat']
const newWords = words.filter(word => word.length > 5);
console.log(newWords);

// 3. Оставить только строки
const mixedTypes = [123, 'apple', { fruit: 'apple' }, 'banana', true, 'car', false];
const wordString = mixedTypes.filter(word =>  typeof word === 'string');
console.log(wordString);

// 4. Офильтровать строки которые начинаются на a
const words2 = ['apple', 'banana', 'apricot', 'grape', 'avocado', 'kiwi']
const newWords = words2.filter(word => word.charAt(0) === 'a' ) 
console.log(newWords);

//  5. Отфильтровать строки, которые не содержат букву e
const words3 = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi']
const newWords = words3.filter(word =>!word.includes ('e') ) 
console.log(newWords);

// 6. Посложнее. Отфильтровать студентов с оценками выше 80
const students = [
    { name: 'John', grade: 85 },
    { name: 'Jane', grade: 78 },
    { name: 'Doe', grade: 90 },
    { name: 'Smith', grade: 76 },
    { name: 'Chris', grade: 81 },
  ]
  const bestStudents = students.filter(stud => stud.grade > 80);
  console.log(bestStudents);

  // 7. Сложная. Отфильтровать повторяющиеся числа
// можно использовать indexOf()
const duplicates = [1, 2, 3, 2, 4, 5, 5, 6, 7, 8]
const filterDuplicates = duplicates.filter ((num,i,duple)=> {
    return duple.indexOf(num)===i;
})

console.log(filterDuplicates);  

// 2.1 Добавить восклицательный знак в конце каждого слова
const words2 = ['hello', 'world', 'javascript']

// 2.2  Добавить нумерацию каждого слова 1. Apple etc.
const words1 = ['apple', 'banana', 'cherry']
const numWord = words1.map((num,i) =>`${i+1}.${num}`);
console.log(numWord);


// 2.3 Сделать все числа положительными


const numbers3 = [1, -2, 3, -4, 5];

const posietievNumbers = numbers3.map(num => Math.abs(num));

console.log(posietievNumbers);

// 2.4 Сделать каждое число строкой
const numbers4 = [5, 10, 15, 20]
const stringNumber = numbers4.map(num => num + '');
console.log(stringNumber);

const numbers4 = [5, 10, 15, 20];

const stringNumbers = numbers4.map(num => String(num));

console.log(stringNumbers);

// 2.5 Умножить каждый элемент на его индекс
const numbers5 = [1, 2, 3, 4, 5]
const indexNumbers = numbers5.map((num ,i )=> num * i);
console.log(indexNumbers);
// 2.6 Прибавить к числу 10 если его индекс кратен 3
const numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const indextreeNum = numbers6.map((num,i) => (i % 3 === 0) ? (num + 10) : num);
console.log(indextreeNum);


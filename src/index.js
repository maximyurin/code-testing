// Функции 1-го блока

/**
 * Функция расчёта суммы чисел. Функция проверяют чтобы тип введённых аргументов был number.
 * @param num1 <-- Первый аргумент функции, тип number.
 * @param num2 <-- Второй аргумент функции, тип number.
 * @returns {void} <-- Функция возвращает сумму переданых аргументов.
 */
function sum(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }
  return reportError(`Одно из значений не является числом!!!!`);
}

/**
 * Функция расчёта разницы чисел. Функция проверяют чтобы тип введённых аргументов был number.
 * @param num1 <-- Первый аргумент функции, тип number.
 * @param num2 <-- Второй аргумент функции, тип number.
 * @returns {void} <-- Функция возвращает разницу переданых аргументов.
 */
function diff(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 - num2;
  }
  reportError(`Одно из значений не является числом!!!!`);
}

/**
 * Функция расчёта умножения чисел. Функция проверяют чтобы тип введённых аргументов был number.
 * @param num1 <-- Первый аргумент функции, тип number.
 * @param num2 <-- Второй аргумент функции, тип number.
 * @returns {void} <-- Функция возвращает результат умножения аргументов.
 */
function multi(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 * num2;
  }
  reportError(`Одно из значений не является числом!!!!`);
}

/**
 * Функция расчёта деления чисел. Функция проверяют чтобы тип введённых аргументов был number.
 * В случае если кторой аргумент будет равен 0, будет получена ошибка, так как на 0 делить нельзя.
 * @param num1 <-- Первый аргумент функции, тип number.
 * @param num2 <-- Второй аргумент функции, тип number.
 * @returns {void} <-- Функция возвращает результат деления аргументов.
 */
function division(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    if (num2 === 0) {
      reportError(`На ноль делить нельзя, введите новое число!`);
    }
    return num1 / num2;
  }
  reportError(`Одно из значений не является числом!!!!`);
}

/**
 * Функция ищет максимальное число в массиве
 * @param array <-- Аргументом данной функции обязательно должен быть массив!
 */
function maxNumber(array) {
  let maxNumberInTestArray = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      if (array[i] > maxNumberInTestArray) {
        maxNumberInTestArray = array[i];
      }
    }
  }
  return maxNumberInTestArray;
}

/**
 * Функция ищет минимальное число в массиве
 * @param array <-- Аргументом данной функции обязательно должен быть массив!
 */
function minNumber(array) {
  let minNumberInTestArray = Infinity;
  for (let element of array) {
    if (typeof element === "number") {
      if (element < minNumberInTestArray) {
        minNumberInTestArray = element;
      }
    }
  }
  return minNumberInTestArray;
}

// Функции 2-го блока

// Функция-конструктор Accumulator, включающая 2 собстенных метода increment и decrement.
function Accumulator(initialValue) {
  this.value = initialValue;
}

// Метод Increment
Accumulator.prototype.increment = function () {
  this.value++;
};

// Метод Decrement
Accumulator.prototype.decrement = function () {
  this.value--;
};

// Функция-конструктор CancelableAccumulator
function CancelableAccumulator(initialValue) {
  Accumulator.call(this, initialValue);
  this.initialValue = initialValue;
}

// Прототипное наследование
CancelableAccumulator.prototype = Object.create(Accumulator.prototype);

// Метод Clear
CancelableAccumulator.prototype.clear = function () {
  this.value = this.initialValue;
};

// Функции 3-го блока

// 1
function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// 2
function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHello = function () {
  return `Hi. My name is ${this.name} and I'm ${this.age} years old`;
};

// 3
function calculator(init = 0) {
  init++;
  return function () {
    return init++;
  };
}

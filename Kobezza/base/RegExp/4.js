// Необходимо создать итератор на основе исходной строки. Строка представляет собой подмножество JSON без вложенных объектов или массивов.

// \w - любой латинский символ, цифры нижнее подчеркивание
// + - от 1 го до бесконечности
// \s - любой пробельный символ
// * - от 0 до бесконечности
// \d - любое число

const myRegExp = /"(\w+)":\s*("[^"]*"|\d+)/g

// [['"a": 1', 'a', '1'], ['"b": "2"', 'b', '"2"']]
console.log([...'{"a": 1, "b": "2"}'.matchAll(myRegExp)])

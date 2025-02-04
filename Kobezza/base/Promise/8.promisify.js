// Необходимо написать функцию, которая бы принимала функцию ожидающую callback и возвращала новую функцию.
// Новая функция вместо callback должна возвращать Promise.
// Предполагается, что исходная функция принимает callback последним параметром,
// т. е. если функция принимает другие аргументы,
// то они идут ДО callback. Сам callback первым параметром принимает объект ошибки или null,
// а вторым возвращаемое значение (если нет ошибки).

function openFile(file, cb) {
	fs.readFile(file, cb)
}

const openFilePromise = promisify(openFile)

openFilePromise('foo.txt').then(console.log, console.error)

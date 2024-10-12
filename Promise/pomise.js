// sleep
const sleep = time =>
	new Promise(resolve => setTimeout(resolve('hello '), time))

// В этом случае выполниться только первый resolve и в результате будет номер таймера
const sleep2 = time =>
	new Promise(resolve => resolve(setTimeout(() => resolve('hello'), time)))

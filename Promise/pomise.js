//  sleep
const sleep = time => new Promise(resolve => setTimeout(resolve, time))

const sleepAsync = async time => {
	setTimeout(() => {}, time)
}

//  В этом случае выполниться только первый resolve и в результате будет номер таймера
const sleep2 = time =>
	new Promise(resolve => resolve(setTimeout(() => resolve('hello'), time)))

//  rejectAfterSleep
const rejectAfterSleep = (time, err) =>
	new Promise((_, reject) => {
		setTimeout(() => reject(err), time)
	})

// timeout
const timeout = (action, time) => {
	return Promise.race([
		action,
		setTimeout(() => Promise.reject(new Error('Timeout')), time),
	])
}

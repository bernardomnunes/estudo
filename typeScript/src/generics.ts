const returnValue = <T>(value: T): T => value

const message = returnValue<String>('Hello')

const getFirstValueArray = <T>(array: T[]): T => array[0]

const firstStringArray = getFirstValueArray(['1', '2', '3', 5])
console.log(firstStringArray)

const returnPromise = async () => [1, 2, 3, '4']
console.log(returnPromise())

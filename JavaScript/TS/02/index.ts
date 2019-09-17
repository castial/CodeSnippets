const isDone: boolean = false
console.log('isDone: ', isDone)

// 数字
const decLiteral: number = 6
console.log('decLiteral: ', decLiteral)

// 字符串
const realname: string = 'iafine'
console.log('realname: ', realname)

// 数组
const list: string[] = ['1', '2', '3']
console.log('list: ', list)

// 元组
const tuple: [string, number, number] = ['hello', 12, 22]
console.log('tuple: ', tuple)

// 枚举
enum Color {
    Red,
    Green,
    Blue
}
const color: Color = Color.Red
console.log('color: ', color)

// Any
let notSure: any = 4
notSure = false
console.log('notSure: ', notSure)

// Void
const unuse: void = undefined
console.log('unuse: ', unuse)

// 断言
const value: any = 'this is a string'
const valueLength: number = (value as string).length
console.log('valueLength: ', valueLength)



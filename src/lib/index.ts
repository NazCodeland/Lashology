// place files you want to import through the `$lib` alias in this folder.





// The as const assertion in TypeScript is used to indicate that the values
//  of the properties of object should be treated as literals, not as general
//  types. This is known as a “const assertion”.

// By using 'as const', we're telling TypeScript that 'object' is a constant 
// where 'name' is specifically the string literal "John", not just any string.
const object = {
  name: "John",
  age: 30
} as const;

const onlyAcceptsJohn = (name: "John") => { console.log(name) }

onlyAcceptsJohn(object.name)
// ----------------------------------------------------------------------------


type toUppercaseWithPrefix<T extends string> = `COOl:${Uppercase<T>}`;

type Example1 = toUppercaseWithPrefix<"hello">
//    ^? 
type Example2 = toUppercaseWithPrefix<"goodbye">
//    ^? 
// ----------------------------------------------------------------------------


const returnWhatsPassedIn = <T>(arg: T) => {
  return arg
}

// the generic type of <T> is inferred from the function call argument
const result1 = returnWhatsPassedIn(1)
const result2 = returnWhatsPassedIn("hello")



const wrapWithArg = <T>(arg: T) => {
  return { arg }
}

wrapWithArg(1)
wrapWithArg("hello")
// ----------------------------------------------------------------------------



const set = new Set<Record<string, string>>()
//    ^?

set.add({ '': '' })
set.add({ 123123: '' })



set.forEach(member => { member })
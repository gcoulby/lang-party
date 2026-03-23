import type { Section } from '../types/content'

export const gotchas: Section = {
  id: 'gotchas',
  slug: 'gotchas',
  group: 'differences',
  title: 'Gotchas',
  description: 'The things that will burn you. Especially == vs ===, type coercion, and prototype surprises.',
  concepts: [
    {
      id: 'gotcha-equality',
      title: '== vs ===',
      tag: 'gotcha',
      panels: [
        {
          lang: 'java',
          code: `// Java: == compares object identity for reference types
String a = new String("hello");
String b = new String("hello");

a == b;       // false — different objects
a.equals(b);  // true — same content

// Primitives: == compares values (safe)
int x = 5, y = 5;
x == y; // true`,
        },
        {
          lang: 'cpp',
          code: `// C++: == is an operator, overloaded per type
std::string a = "hello";
std::string b = "hello";

a == b;  // true — std::string overloads == to compare content

// Pointer comparison
std::string* pa = &a;
std::string* pb = &b;
pa == pb; // false — different addresses`,
        },
        {
          lang: 'js',
          code: `// == performs type coercion — results are surprising
0   == false;    // true
0   == '';       // true
0   == '0';      // true
''  == false;    // true
null == undefined; // true
null == false;   // false (!)
NaN == NaN;      // false (!)

// === is strict equality — no coercion
0   === false;   // false
0   === '';      // false
null === undefined; // false

// Rule: NEVER use ==. Always use ===.`,
        },
        {
          lang: 'ts',
          code: `// TS doesn't prevent == but type-checking catches many coercion bugs
// With strict mode, comparing incompatible types is a compile error

// Still allowed (both sides could be number):
const x: number = 0;
const y: number | boolean = false;
x == y; // allowed — types overlap

// Better: always use ===
x === 0; // true
0 === false; // TS error: 'This condition will always return false since
             // the types 'number' and 'boolean' have no overlap'`,
        },
      ],
      callout: {
        variant: 'warn',
        content: 'Never use `==` in JS/TS. Ever. There is no situation where `==` is the right choice and `===` is not. Configure ESLint `eqeqeq: error` to enforce this.',
      },
    },
    {
      id: 'gotcha-nan',
      title: 'NaN',
      tag: 'gotcha',
      panels: [
        {
          lang: 'java',
          code: `// Java: NaN exists for double/float
double nan = Double.NaN;
nan == nan;                      // false
Double.isNaN(nan);               // true

// Integer division by zero throws ArithmeticException
int result = 5 / 0; // throws!`,
        },
        {
          lang: 'cpp',
          code: `#include <cmath>
double nan = std::numeric_limits<double>::quiet_NaN();
nan == nan;          // false
std::isnan(nan);     // true

// Integer division by zero: undefined behaviour
int x = 5 / 0; // undefined behaviour!`,
        },
        {
          lang: 'js',
          code: `// NaN is a number type — check with Number.isNaN, not ==
typeof NaN;      // 'number' (!!)
NaN === NaN;     // false
NaN == NaN;      // false

// Bad check:
if (x == NaN) {} // always false — NaN != anything

// Safe checks:
Number.isNaN(NaN);     // true
Number.isNaN('text');  // false (no coercion)
isNaN('text');         // true (global isNaN coerces — bad!)

// Sources of NaN:
parseInt('abc');       // NaN
0 / 0;                 // NaN
Math.sqrt(-1);         // NaN
Number(undefined);     // NaN`,
        },
        {
          lang: 'ts',
          code: `// TS doesn't prevent NaN — it's just a number
const x: number = NaN; // valid TS

// Always use Number.isNaN(), never isNaN()
function safeDiv(a: number, b: number): number | null {
    if (b === 0) return null;
    return a / b;
}

// Type guard for NaN-safety
function isValidNumber(n: number): boolean {
    return !Number.isNaN(n) && Number.isFinite(n);
}`,
        },
      ],
      callout: {
        variant: 'warn',
        content: '`typeof NaN === "number"` is one of JS\'s most infamous quirks. Use `Number.isNaN()` not `isNaN()` — the global `isNaN` coerces strings to numbers first.',
      },
    },
    {
      id: 'gotcha-type-coercion',
      title: 'Type Coercion',
      tag: 'gotcha',
      panels: [
        {
          lang: 'java',
          code: `// Java: very limited implicit coercion — mostly numeric widening
int    i = 42;
long   l = i;    // widening: safe
double d = l;    // widening: safe

// No string + number magic:
// "value: " + 42  works — but it's toString() under the hood
String s = "value: " + 42; // "value: 42"`,
        },
        {
          lang: 'cpp',
          code: `// C++: implicit conversions exist (be careful)
int    i = 42;
double d = i;    // widening: safe
int    j = 3.9;  // truncates to 3 — no warning by default!

// Use explicit casts for safety:
int k = static_cast<int>(3.9); // explicit — clear intent`,
        },
        {
          lang: 'js',
          code: `// JS coercion is aggressive and surprising
'5' + 3;       // '53'  — 3 is coerced to string
'5' - 3;       // 2     — '5' coerced to number for -
'5' * '3';     // 15    — both coerced
true + true;   // 2
[] + [];        // ''    — both coerce to ''
[] + {};        // '[object Object]'
{} + [];        // 0     — {} parsed as empty block!

// Number conversions:
Number('');    // 0
Number(null);  // 0
Number(false); // 0
Number(undefined); // NaN
Number('3px'); // NaN`,
        },
        {
          lang: 'ts',
          code: `// TS prevents most coercion via type checking
// But coercion still happens at RUNTIME for 'any' typed values

const x: string = '5';
const y: number = 3;
// x + y; // TS error: operator '+' cannot be applied

// Explicit conversion:
const sum = Number(x) + y;  // 8

// Template literals do safe toString:
const msg = \`value: \${y}\`;  // 'value: 3'

// Danger zone: 'any' bypasses all checks
const z: any = '5';
z + 3; // '53' — TS allows it, runtime coerces`,
        },
      ],
    },
    {
      id: 'gotcha-hoisting',
      title: 'Hoisting',
      tag: 'gotcha',
      note: 'JS/TS only',
      panels: [
        {
          lang: 'js',
          code: `// var declarations are hoisted to function top — initialized to undefined
console.log(x); // undefined — not an error!
var x = 5;
console.log(x); // 5

// let and const are hoisted but NOT initialized (temporal dead zone)
console.log(y); // ReferenceError: Cannot access 'y' before init
let y = 10;

// Function DECLARATIONS are fully hoisted
greet('Alice'); // works!
function greet(name) { return 'Hello ' + name; }

// Function EXPRESSIONS are not
hello('Bob'); // TypeError: hello is not a function
var hello = function(name) { return 'Hi ' + name; };`,
        },
        {
          lang: 'ts',
          code: `// TS catches hoisting issues at compile time (with strict mode)
// But they still exist at runtime in compiled JS

// This is a TS error:
// console.log(x); // Block-scoped variable 'x' used before its declaration
const x = 5;

// Function declarations work anywhere in the file — fully hoisted
greet('Alice'); // OK in both TS and runtime

function greet(name: string): string {
    return \`Hello \${name}\`;
}`,
        },
      ],
      callout: {
        variant: 'warn',
        content: '`var` hoisting is why `var` must never be used. `const` and `let` have temporal dead zones — use them, and declare variables at the top of their block.',
      },
    },
    {
      id: 'gotcha-optional-chaining',
      title: 'Truthy / Falsy',
      tag: 'gotcha',
      note: 'JS/TS only',
      panels: [
        {
          lang: 'js',
          code: `// JS falsy values — all these are false in a boolean context:
// false, 0, -0, 0n, '', null, undefined, NaN

// Truthy surprises:
if ([])    console.log('empty array is truthy');  // prints!
if ({})    console.log('empty object is truthy'); // prints!
if ('0')   console.log('"0" is truthy');          // prints!
if (-1)    console.log('negative is truthy');     // prints!

// Ternary traps:
const count = 0;
const msg = count ? 'has items' : 'empty'; // 'empty' — 0 is falsy!

// Safe: explicit comparison
const msg2 = count > 0 ? 'has items' : 'empty';

// Nullish coalescing vs OR:
const a = 0   ?? 'default'; // 0    (0 is not null/undefined)
const b = 0   || 'default'; // 'default' (0 is falsy)`,
        },
        {
          lang: 'ts',
          code: `// TS strict mode helps but doesn't eliminate all truthy traps
// The classic 0/empty string issue still compiles

const count: number = 0;
const msg = count ? 'has items' : 'empty'; // 'empty' — valid TS, runtime surprise

// Prefer explicit null checks:
const data: string | null = getDataMaybeNull();
const result = data !== null ? data : 'fallback';

// Or nullish coalescing (only null/undefined):
const result2 = data ?? 'fallback';

// Guard: check the type, not truthiness
const items: string[] = [];
if (items.length > 0) {   // explicit — not just 'if (items)'
    process(items);
}`,
        },
      ],
      callout: {
        variant: 'warn',
        content: 'Never use `||` for defaults when `0`, `""`, or `false` are valid values. Use `??` (nullish coalescing) instead — it only triggers on `null` and `undefined`.',
      },
    },
    {
      id: 'gotcha-reference-vs-value',
      title: 'Reference vs Value Semantics',
      tag: 'gotcha',
      panels: [
        {
          lang: 'java',
          code: `// Java: primitives by value, objects by reference
int a = 5;
int b = a;
b = 10;
System.out.println(a); // 5 — primitive, copied

int[] arr1 = {1, 2, 3};
int[] arr2 = arr1; // reference copy — same array!
arr2[0] = 99;
System.out.println(arr1[0]); // 99 — both point to same array

// Deep copy
int[] arr3 = arr1.clone();
arr3[0] = 0;
System.out.println(arr1[0]); // 99 — arr1 unaffected`,
        },
        {
          lang: 'cpp',
          code: `// C++: value semantics by default (copy constructor)
std::vector<int> v1 = {1, 2, 3};
std::vector<int> v2 = v1; // deep copy — independent
v2[0] = 99;
std::cout << v1[0]; // 1 — v1 unaffected

// Reference semantics: explicit ref or pointer
std::vector<int>& ref = v1;
ref[0] = 99;
std::cout << v1[0]; // 99 — same object`,
        },
        {
          lang: 'js',
          code: `// JS: primitives by value, objects/arrays by reference
let a = 5;
let b = a;
b = 10;
console.log(a); // 5 — primitive, copied

const arr1 = [1, 2, 3];
const arr2 = arr1; // reference — same array
arr2[0] = 99;
console.log(arr1[0]); // 99 — both see the change

// Shallow copy:
const arr3 = [...arr1];       // spread
const arr4 = arr1.slice();    // slice
const obj2 = { ...obj };      // spread object

// Deep copy (simple objects):
const obj3 = JSON.parse(JSON.stringify(obj)); // lossy for Date, undefined
// Or: structuredClone(obj) — modern, handles more types`,
        },
        {
          lang: 'ts',
          code: `// TS can enforce immutability with 'readonly'
const arr1: readonly number[] = [1, 2, 3];
// arr1[0] = 99; // compile error — readonly

const obj: Readonly<{ x: number }> = { x: 1 };
// obj.x = 2; // compile error

// Still reference semantics at runtime:
const arr2: number[] = [1, 2, 3];
const arr3 = arr2; // reference
arr3[0] = 99;
console.log(arr2[0]); // 99

// structuredClone for deep copy (Node 17+, modern browsers)
const deep = structuredClone(arr2);`,
        },
      ],
    },
  ],
}

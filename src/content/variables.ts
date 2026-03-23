import type { Section } from '../types/content'

export const variables: Section = {
  id: 'variables',
  slug: 'variables',
  group: 'basics',
  title: 'Variables & Types',
  description: 'Declaration, mutability, type inference, and primitive types across Java, C++, and JS/TS.',
  concepts: [
    {
      id: 'var-declaration',
      title: 'Variable Declaration',
      tag: 'similar',
      panels: [
        {
          lang: 'java',
          code: `// Java: explicit type required (pre-Java 10)
int count = 0;
String name = "Alice";
double price = 9.99;

// Java 10+: local type inference
var items = new ArrayList<String>();
var total = 42;`,
        },
        {
          lang: 'cpp',
          code: `// C++: explicit type
int count = 0;
std::string name = "Alice";
double price = 9.99;

// C++11: auto (type inference)
auto items = std::vector<std::string>{};
auto total = 42;`,
        },
        {
          lang: 'js',
          code: `// JS: prefer const for all non-reassigned values
const count = 0;
const name = 'Alice';
const price = 9.99;

// let for values that change
let total = 0;
total += 42;`,
        },
        {
          lang: 'ts',
          code: `// TS: same as JS, with optional type annotation
const count: number = 0;
const name: string = 'Alice';
const price: number = 9.99;

// Type is inferred — annotation not required here
const total = 42;        // inferred: number
let running = false;     // inferred: boolean`,
        },
      ],
      callout: {
        variant: 'warn',
        content: 'Never use `var` in modern JS/TS. It has function scope (not block scope) and is hoisted — both are footguns.',
      },
    },
    {
      id: 'const-final',
      title: 'Constants / Final',
      tag: 'similar',
      panels: [
        {
          lang: 'java',
          code: `final int MAX_SIZE = 100;
final String VERSION = "1.0.0";

// Class-level constant
static final double PI = 3.14159265358979;`,
        },
        {
          lang: 'cpp',
          code: `const int MAX_SIZE = 100;
const std::string VERSION = "1.0.0";

// Prefer constexpr for compile-time constants
constexpr double PI = 3.14159265358979;`,
        },
        {
          lang: 'js',
          code: `const MAX_SIZE = 100;
const VERSION = '1.0.0';
const PI = 3.14159265358979;

// Note: const prevents reassignment, not mutation
const arr = [1, 2, 3];
arr.push(4); // OK — array contents can change`,
        },
        {
          lang: 'ts',
          code: `const MAX_SIZE = 100;          // inferred: number
const VERSION = '1.0.0';      // inferred: string

// const assertion — narrows to literal type
const CONFIG = { port: 3000, host: 'localhost' } as const;
// CONFIG.port is 3000, not number`,
        },
      ],
    },
    {
      id: 'primitive-types',
      title: 'Primitive Types',
      tag: 'breaking',
      panels: [
        {
          lang: 'java',
          code: `// 8 primitive types
boolean flag = true;
byte  b = 127;
short s = 32767;
int   i = 2_147_483_647;
long  l = 9_223_372_036_854_775_807L;
float  f = 3.14f;
double d = 3.14;
char   c = 'A';  // UTF-16 code unit`,
        },
        {
          lang: 'cpp',
          code: `bool   flag = true;
char   c    = 'A';
short  s    = 32767;
int    i    = 2147483647;
long   l    = 9223372036854775807L;
float  f    = 3.14f;
double d    = 3.14;

// C++11: fixed-width integers
#include <cstdint>
uint8_t  byte = 255;
int32_t  i32  = 42;`,
        },
        {
          lang: 'js',
          code: `// JS has one numeric type: Number (IEEE 754 double)
const i   = 42;
const d   = 3.14;
const big = 9007199254740991; // Number.MAX_SAFE_INTEGER

// BigInt for integers beyond MAX_SAFE_INTEGER
const huge = 9007199254740992n;

const flag = true;
const c    = 'A';   // strings, not chars`,
        },
        {
          lang: 'ts',
          code: `// Same runtime types as JS; TS adds compile-time checks
const i: number  = 42;
const d: number  = 3.14;
const flag: boolean = true;
const c: string  = 'A';       // no char type — string

// BigInt
const huge: bigint = 9007199254740992n;

// Literal types
const one: 1 = 1;
const dir: 'left' | 'right' = 'left';`,
        },
      ],
      callout: {
        variant: 'warn',
        content: '`0.1 + 0.2 !== 0.3` in JS (and any IEEE 754 language). Use integer arithmetic or a decimal library for money.',
      },
    },
    {
      id: 'null-undefined',
      title: 'Null / Undefined',
      tag: 'breaking',
      panels: [
        {
          lang: 'java',
          code: `String s = null;     // reference types can be null
// int x = null;     // compile error — primitives cannot

// Java 8+ Optional to avoid null
Optional<String> opt = Optional.ofNullable(s);
String val = opt.orElse("default");`,
        },
        {
          lang: 'cpp',
          code: `// Raw pointer can be nullptr (C++11)
std::string* s = nullptr;

// Prefer std::optional (C++17)
#include <optional>
std::optional<std::string> opt = std::nullopt;
std::string val = opt.value_or("default");`,
        },
        {
          lang: 'js',
          code: `// JS has BOTH null (intentional absence) and
// undefined (variable declared but not assigned)
let a;          // undefined
let b = null;   // null

// Nullish coalescing: ?? returns right side if left is null/undefined
const val = b ?? 'default';  // 'default'

// Optional chaining: ?. short-circuits on null/undefined
const len = b?.length;       // undefined (no throw)`,
        },
        {
          lang: 'ts',
          code: `// With strictNullChecks (default in strict mode):
// null and undefined are not assignable to other types

let a: string | undefined;
let b: string | null = null;

const val = b ?? 'default';    // string

// Non-null assertion (use sparingly)
const el = document.getElementById('root')!;

// Optional chaining
const len = b?.length;         // number | undefined`,
        },
      ],
      callout: {
        variant: 'warn',
        content: 'Always enable `strict` in tsconfig. Without it, `null` and `undefined` silently creep into every type — which is the same bug `Optional` was invented to prevent.',
      },
    },
    {
      id: 'type-inference',
      title: 'Type Inference',
      tag: 'similar',
      panels: [
        {
          lang: 'java',
          code: `// Java 10+ local variable type inference
var count = 0;              // int
var name  = "Alice";        // String
var items = List.of(1,2,3); // List<Integer>

// Diamond operator (Java 7+)
var map = new HashMap<String, Integer>();`,
        },
        {
          lang: 'cpp',
          code: `// C++11 auto
auto count = 0;              // int
auto name  = std::string{"Alice"};
auto items = std::vector{1, 2, 3}; // C++17 deduction

// decltype: get the type of an expression
decltype(count) other = 5;  // int`,
        },
        {
          lang: 'js',
          code: `// JS is dynamically typed — no inference, no types
// Values have types; variables don't
const count = 0;        // runtime: number
const name  = 'Alice';  // runtime: string`,
        },
        {
          lang: 'ts',
          code: `// TS infers types from initialiser — annotation optional
const count = 0;        // inferred: 0 (literal)
const name  = 'Alice';  // inferred: string
const items = [1,2,3];  // inferred: number[]

// Generic function inference
function identity<T>(x: T): T { return x }
const n = identity(42); // T inferred as number`,
        },
      ],
    },
  ],
}

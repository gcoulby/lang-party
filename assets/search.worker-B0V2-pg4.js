(function(){"use strict";const o=[{id:"variables",slug:"variables",group:"basics",title:"Variables & Types",description:"Declaration, mutability, type inference, and primitive types across Java, C++, and JS/TS.",concepts:[{id:"var-declaration",title:"Variable Declaration",tag:"similar",panels:[{lang:"java",code:`// Java: explicit type required (pre-Java 10)
int count = 0;
String name = "Alice";
double price = 9.99;

// Java 10+: local type inference
var items = new ArrayList<String>();
var total = 42;`},{lang:"cpp",code:`// C++: explicit type
int count = 0;
std::string name = "Alice";
double price = 9.99;

// C++11: auto (type inference)
auto items = std::vector<std::string>{};
auto total = 42;`},{lang:"python",code:`x: int = 42
name: str = "Alice"
active: bool = True

# Type annotation is optional — Python infers
count = 0
`},{lang:"go",code:`// Short declaration (type inferred)
x := 42
name := "Alice"
active := true

// Explicit declaration
var age int = 30
var score float64
`},{lang:"js",code:`// JS: prefer const for all non-reassigned values
const count = 0;
const name = 'Alice';
const price = 9.99;

// let for values that change
let total = 0;
total += 42;`},{lang:"ts",code:`// TS: same as JS, with optional type annotation
const count: number = 0;
const name: string = 'Alice';
const price: number = 9.99;

// Type is inferred — annotation not required here
const total = 42;        // inferred: number
let running = false;     // inferred: boolean`}],callout:{variant:"warn",content:"Never use `var` in modern JS/TS. It has function scope (not block scope) and is hoisted — both are footguns."}},{id:"const-final",title:"Constants / Final",tag:"similar",panels:[{lang:"java",code:`final int MAX_SIZE = 100;
final String VERSION = "1.0.0";

// Class-level constant
static final double PI = 3.14159265358979;`},{lang:"cpp",code:`const int MAX_SIZE = 100;
const std::string VERSION = "1.0.0";

// Prefer constexpr for compile-time constants
constexpr double PI = 3.14159265358979;`},{lang:"python",code:`# No built-in const — use UPPER_SNAKE_CASE convention
MAX_SIZE = 100
PI = 3.14159

# typing.Final signals no re-assignment to type checkers
from typing import Final
MAX_RETRIES: Final = 3
`},{lang:"go",code:`const MaxSize = 100
const Pi = 3.14159

// Typed constant
const Greeting string = "hello"

// iota for enumerations
const (
    Small = iota  // 0
    Medium        // 1
    Large         // 2
)
`},{lang:"js",code:`const MAX_SIZE = 100;
const VERSION = '1.0.0';
const PI = 3.14159265358979;

// Note: const prevents reassignment, not mutation
const arr = [1, 2, 3];
arr.push(4); // OK — array contents can change`},{lang:"ts",code:`const MAX_SIZE = 100;          // inferred: number
const VERSION = '1.0.0';      // inferred: string

// const assertion — narrows to literal type
const CONFIG = { port: 3000, host: 'localhost' } as const;
// CONFIG.port is 3000, not number`}]},{id:"primitive-types",title:"Primitive Types",tag:"breaking",panels:[{lang:"java",code:`// 8 primitive types
boolean flag = true;
byte  b = 127;
short s = 32767;
int   i = 2_147_483_647;
long  l = 9_223_372_036_854_775_807L;
float  f = 3.14f;
double d = 3.14;
char   c = 'A';  // UTF-16 code unit`},{lang:"cpp",code:`bool   flag = true;
char   c    = 'A';
short  s    = 32767;
int    i    = 2147483647;
long   l    = 9223372036854775807L;
float  f    = 3.14f;
double d    = 3.14;

// C++11: fixed-width integers
#include <cstdint>
uint8_t  byte = 255;
int32_t  i32  = 42;`},{lang:"python",code:`age: int = 30
price: float = 9.99
name: str = "Alice"
active: bool = True
none_val: None = None

# Python ints are arbitrary-precision — no overflow
big: int = 10 ** 100
`},{lang:"go",code:`var age int = 30
var price float64 = 9.99
var name string = "Alice"
var active bool = true
var nothing interface{} = nil

// Explicit int sizes when needed
var b byte = 255  // uint8
var r rune = 'A'  // int32 (Unicode code point)
`},{lang:"js",code:`// JS has one numeric type: Number (IEEE 754 double)
const i   = 42;
const d   = 3.14;
const big = 9007199254740991; // Number.MAX_SAFE_INTEGER

// BigInt for integers beyond MAX_SAFE_INTEGER
const huge = 9007199254740992n;

const flag = true;
const c    = 'A';   // strings, not chars`},{lang:"ts",code:`// Same runtime types as JS; TS adds compile-time checks
const i: number  = 42;
const d: number  = 3.14;
const flag: boolean = true;
const c: string  = 'A';       // no char type — string

// BigInt
const huge: bigint = 9007199254740992n;

// Literal types
const one: 1 = 1;
const dir: 'left' | 'right' = 'left';`}],callout:{variant:"warn",content:"`0.1 + 0.2 !== 0.3` in JS (and any IEEE 754 language). Use integer arithmetic or a decimal library for money."}},{id:"null-undefined",title:"Null / Undefined",tag:"breaking",panels:[{lang:"java",code:`String s = null;     // reference types can be null
// int x = null;     // compile error — primitives cannot

// Java 8+ Optional to avoid null
Optional<String> opt = Optional.ofNullable(s);
String val = opt.orElse("default");`},{lang:"cpp",code:`// Raw pointer can be nullptr (C++11)
std::string* s = nullptr;

// Prefer std::optional (C++17)
#include <optional>
std::optional<std::string> opt = std::nullopt;
std::string val = opt.value_or("default");`},{lang:"python",code:`# Python has only None — no undefined equivalent
value: str | None = None

# Idiomatic None check
if value is None:
    print("no value")

# Falsy check (like JS !value)
if not value:
    print("falsy")
`},{lang:"go",code:`// Go has nil for pointers, interfaces, maps, slices, channels
var p *int = nil    // nil pointer
var s []int = nil   // nil slice (valid, len=0)
var m map[string]int = nil  // nil map

// Zero values — Go initialises everything
var x int    // 0
var s2 string // ""
var b bool   // false
`},{lang:"js",code:`// JS has BOTH null (intentional absence) and
// undefined (variable declared but not assigned)
let a;          // undefined
let b = null;   // null

// Nullish coalescing: ?? returns right side if left is null/undefined
const val = b ?? 'default';  // 'default'

// Optional chaining: ?. short-circuits on null/undefined
const len = b?.length;       // undefined (no throw)`},{lang:"ts",code:`// With strictNullChecks (default in strict mode):
// null and undefined are not assignable to other types

let a: string | undefined;
let b: string | null = null;

const val = b ?? 'default';    // string

// Non-null assertion (use sparingly)
const el = document.getElementById('root')!;

// Optional chaining
const len = b?.length;         // number | undefined`}],callout:{variant:"warn",content:"Always enable `strict` in tsconfig. Without it, `null` and `undefined` silently creep into every type — which is the same bug `Optional` was invented to prevent."}},{id:"type-inference",title:"Type Inference",tag:"similar",panels:[{lang:"java",code:`// Java 10+ local variable type inference
var count = 0;              // int
var name  = "Alice";        // String
var items = List.of(1,2,3); // List<Integer>

// Diamond operator (Java 7+)
var map = new HashMap<String, Integer>();`},{lang:"cpp",code:`// C++11 auto
auto count = 0;              // int
auto name  = std::string{"Alice"};
auto items = std::vector{1, 2, 3}; // C++17 deduction

// decltype: get the type of an expression
decltype(count) other = 5;  // int`},{lang:"python",code:`# Python always infers — annotations are optional metadata
count = 0           # int
message = "hello"   # str
items = [1, 2, 3]   # list[int]

# mypy / pyright use hints for static analysis
def greet(name: str) -> str:
    return f"Hello, {name}"
`},{lang:"go",code:`// := infers type from the right-hand side
count := 0            // int
message := "hello"    // string
items := []int{1, 2, 3}  // []int

// var with initialiser also infers
var ratio = 3.14      // float64
`},{lang:"js",code:`// JS is dynamically typed — no inference, no types
// Values have types; variables don't
const count = 0;        // runtime: number
const name  = 'Alice';  // runtime: string`},{lang:"ts",code:`// TS infers types from initialiser — annotation optional
const count = 0;        // inferred: 0 (literal)
const name  = 'Alice';  // inferred: string
const items = [1,2,3];  // inferred: number[]

// Generic function inference
function identity<T>(x: T): T { return x }
const n = identity(42); // T inferred as number`}]}]},{id:"functions",slug:"functions",group:"basics",title:"Functions",description:"Function declarations, signatures, overloading, lambdas, and higher-order patterns.",concepts:[{id:"fn-declaration",title:"Function Declaration",tag:"similar",panels:[{lang:"java",code:`public int add(int a, int b) {
    return a + b;
}

// Void method
public void greet(String name) {
    System.out.println("Hello, " + name);
}`},{lang:"cpp",code:`int add(int a, int b) {
    return a + b;
}

// void function
void greet(const std::string& name) {
    std::cout << "Hello, " << name << "
";
}`},{lang:"python",code:`def add(a: int, b: int) -> int:
    return a + b

result = add(3, 4)  # 7
`},{lang:"go",code:`func add(a, b int) int {
    return a + b
}

result := add(3, 4)  // 7
`},{lang:"js",code:`function add(a, b) {
    return a + b;
}

function greet(name) {
    console.log('Hello, ' + name);
}`},{lang:"ts",code:`function add(a: number, b: number): number {
    return a + b;
}

function greet(name: string): void {
    console.log('Hello, ' + name);
}`}]},{id:"fn-arrow",title:"Arrow / Lambda Functions",tag:"similar",panels:[{lang:"java",code:`// Java 8+ lambda (implements a functional interface)
Comparator<String> byLength =
    (a, b) -> a.length() - b.length();

// Method reference
Function<String, Integer> len = String::length;

// Multi-line lambda
Runnable task = () -> {
    System.out.println("running");
};`},{lang:"cpp",code:`// C++11 lambda
auto byLength = [](const std::string& a,
                   const std::string& b) {
    return a.length() < b.length();
};

// Capture by value [=] or by reference [&]
int threshold = 5;
auto isLong = [threshold](const std::string& s) {
    return s.length() > threshold;
};`},{lang:"python",code:`# lambda: single expression only
double = lambda x: x * 2
print(double(5))  # 10

# For multi-line, use def
def triple(x: int) -> int:
    return x * 3

# map with lambda
nums = [1, 2, 3]
doubled = list(map(lambda x: x * 2, nums))
`},{lang:"go",code:`// Go has no lambdas, but functions are first-class values
double := func(x int) int {
    return x * 2
}
fmt.Println(double(5))  // 10

// Passed as argument
nums := []int{1, 2, 3}
apply := func(n int, f func(int) int) int { return f(n) }
fmt.Println(apply(4, double))  // 8
`},{lang:"js",code:`// Arrow function — concise syntax
const add = (a, b) => a + b;

// Arrow function with body
const clamp = (val, min, max) => {
    if (val < min) return min;
    if (val > max) return max;
    return val;
};

// Single-param, no parens needed
const double = x => x * 2;`},{lang:"ts",code:`const add = (a: number, b: number): number => a + b;

const clamp = (val: number, min: number, max: number): number => {
    if (val < min) return min;
    if (val > max) return max;
    return val;
};

// Arrow function type annotation
const double: (x: number) => number = x => x * 2;`}],callout:{variant:"info",content:"Arrow functions in JS/TS do not have their own `this`. They capture `this` from the enclosing scope — unlike regular `function` declarations."}},{id:"fn-default-params",title:"Default Parameters",tag:"similar",panels:[{lang:"java",code:`// Java has no default parameters — use overloads
public String greet(String name) {
    return greet(name, "Hello");
}
public String greet(String name, String prefix) {
    return prefix + ", " + name + "!";
}`},{lang:"cpp",code:`// C++ has default arguments (right-to-left only)
std::string greet(const std::string& name,
                  const std::string& prefix = "Hello") {
    return prefix + ", " + name + "!";
}

// Call: greet("Alice") or greet("Alice", "Hi")`},{lang:"python",code:`def greet(name: str, greeting: str = "Hello") -> str:
    return f"{greeting}, {name}!"

greet("Alice")          # "Hello, Alice!"
greet("Alice", "Hi")    # "Hi, Alice!"

# NOTE: never use mutable defaults
# def bad(items=[]):  # BUG — shared across calls
# def good(items=None):
#     if items is None: items = []
`},{lang:"go",code:`// Go has no default params — use variadic or options pattern
func greet(name string, args ...string) string {
    greeting := "Hello"
    if len(args) > 0 {
        greeting = args[0]
    }
    return greeting + ", " + name + "!"
}

greet("Alice")        // "Hello, Alice!"
greet("Alice", "Hi")  // "Hi, Alice!"
`},{lang:"js",code:`function greet(name, prefix = 'Hello') {
    return prefix + ', ' + name + '!';
}

greet('Alice');          // 'Hello, Alice!'
greet('Alice', 'Hi');    // 'Hi, Alice!'`},{lang:"ts",code:`function greet(name: string, prefix = 'Hello'): string {
    return \`\${prefix}, \${name}!\`;
}

// Default inferred as string — no annotation needed
greet('Alice');          // 'Hello, Alice!'
greet('Alice', 'Hi');    // 'Hi, Alice!'`}]},{id:"fn-rest-spread",title:"Variadic / Rest Parameters",tag:"similar",panels:[{lang:"java",code:`// Varargs — must be last parameter
public int sum(int... numbers) {
    int total = 0;
    for (int n : numbers) total += n;
    return total;
}

sum(1, 2, 3);     // 6
sum(new int[]{1, 2, 3}); // same`},{lang:"cpp",code:`// C++11: variadic templates
template<typename... Args>
int sum(Args... args) {
    return (args + ...);  // C++17 fold expression
}

// Or traditional approach with initializer_list
int sum(std::initializer_list<int> nums) {
    int total = 0;
    for (int n : nums) total += n;
    return total;
}`},{lang:"python",code:`# *args collects positional arguments
def sum_all(*args: int) -> int:
    return sum(args)

sum_all(1, 2, 3)  # 6

# **kwargs collects keyword arguments
def config(**kwargs: str) -> None:
    for k, v in kwargs.items():
        print(f"{k}={v}")

# Spread: * unpacks into function call
nums = [1, 2, 3]
print(*nums)  # 1 2 3

merged = {**{"a": 1}, **{"b": 2}}  # {a:1, b:2}
`},{lang:"go",code:`// Variadic parameters with ...
func sumAll(nums ...int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}

sumAll(1, 2, 3)      // 6

// Spread a slice into variadic call
nums := []int{1, 2, 3}
sumAll(nums...)      // 6
`},{lang:"js",code:`// Rest parameter collects remaining args into array
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3);       // 6

// Spread: unpack array into args
const nums = [1, 2, 3];
sum(...nums);        // 6`},{lang:"ts",code:`function sum(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3);        // 6

// Typed spread
const nums: number[] = [1, 2, 3];
sum(...nums);         // 6`}]},{id:"fn-overloading",title:"Function Overloading",tag:"breaking",panels:[{lang:"java",code:`// Java: true runtime overloading by parameter types
public int process(int x) {
    return x * 2;
}
public double process(double x) {
    return x * 2.0;
}
public String process(String s) {
    return s.repeat(2);
}`},{lang:"cpp",code:`// C++: also true runtime overloading
int    process(int x)         { return x * 2; }
double process(double x)      { return x * 2.0; }
std::string process(const std::string& s) {
    return s + s;
}`},{lang:"python",code:`from typing import overload, Union

# @overload gives type-checker hints; one impl handles all cases
@overload
def process(x: int) -> int: ...
@overload
def process(x: str) -> str: ...

def process(x: Union[int, str]) -> Union[int, str]:
    if isinstance(x, int):
        return x * 2
    return x.upper()

process(5)      # 10
process("hi")   # "HI"
`},{lang:"go",code:`// Go has no overloading — use different names or interfaces
func doubleInt(x int) int    { return x * 2 }
func doubleStr(x string) string { return x + x }

// Or use an interface
func double(x interface{}) interface{} {
    switch v := x.(type) {
    case int:
        return v * 2
    case string:
        return v + v
    }
    return x
}
`},{lang:"js",code:`// JS has no overloading — one function, handle types manually
function process(x) {
    if (typeof x === 'number') return x * 2;
    if (typeof x === 'string') return x.repeat(2);
    throw new TypeError('unsupported type');
}`},{lang:"ts",code:`// TS overload signatures (compile-time only — single impl)
function process(x: number): number;
function process(x: string): string;
function process(x: number | string): number | string {
    if (typeof x === 'number') return x * 2;
    return x.repeat(2);
}

// process(1)    → number
// process('hi') → string`}],callout:{variant:"info",content:"TS overloads are **compile-time only**. There is one function at runtime. The overload signatures constrain call sites; the implementation signature is never directly callable."}}]},{id:"classes",slug:"classes",group:"basics",title:"Classes & OOP",description:"Class syntax, constructors, inheritance, access modifiers, and object patterns.",concepts:[{id:"class-basic",title:"Basic Class",tag:"similar",panels:[{lang:"java",code:`public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge()     { return age; }

    @Override
    public String toString() {
        return name + " (" + age + ")";
    }
}`},{lang:"cpp",code:`class Person {
public:
    Person(std::string name, int age)
        : name_(std::move(name)), age_(age) {}

    const std::string& getName() const { return name_; }
    int getAge() const { return age_; }

    std::string toString() const {
        return name_ + " (" + std::to_string(age_) + ")";
    }

private:
    std::string name_;
    int age_;
};`},{lang:"python",code:`class Animal:
    def __init__(self, name: str) -> None:
        self.name = name

    def speak(self) -> str:
        return f"{self.name} makes a sound"

dog = Animal("Rex")
print(dog.speak())  # "Rex makes a sound"
`},{lang:"go",code:`type Animal struct {
    Name string
}

func (a Animal) Speak() string {
    return a.Name + " makes a sound"
}

// Constructor function (convention)
func NewAnimal(name string) Animal {
    return Animal{Name: name}
}

dog := NewAnimal("Rex")
fmt.Println(dog.Speak())  // "Rex makes a sound"
`},{lang:"js",code:`class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age  = age;
    }

    getName() { return this.#name; }
    getAge()  { return this.#age; }

    toString() {
        return \`\${this.#name} (\${this.#age})\`;
    }
}`},{lang:"ts",code:`class Person {
    constructor(
        private readonly name: string,
        private readonly age: number,
    ) {}

    getName(): string { return this.name; }
    getAge(): number  { return this.age; }

    toString(): string {
        return \`\${this.name} (\${this.age})\`;
    }
}`}],callout:{variant:"info",content:"TS constructor parameter properties (`private readonly name: string`) declare and assign the field in one line. No `this.name = name` boilerplate needed."}},{id:"class-inheritance",title:"Inheritance",tag:"similar",panels:[{lang:"java",code:`public class Animal {
    protected String name;
    public Animal(String name) { this.name = name; }
    public String speak() { return "..."; }
}

public class Dog extends Animal {
    public Dog(String name) { super(name); }

    @Override
    public String speak() { return "Woof!"; }
}

Animal a = new Dog("Rex");
a.speak(); // "Woof!" — dynamic dispatch`},{lang:"cpp",code:`class Animal {
public:
    Animal(std::string name) : name_(std::move(name)) {}
    virtual std::string speak() const { return "..."; }
    virtual ~Animal() = default; // virtual destructor!
protected:
    std::string name_;
};

class Dog : public Animal {
public:
    Dog(std::string name) : Animal(std::move(name)) {}
    std::string speak() const override { return "Woof!"; }
};

std::unique_ptr<Animal> a = std::make_unique<Dog>("Rex");
a->speak(); // "Woof!" — requires virtual`},{lang:"python",code:`class Animal:
    def __init__(self, name: str) -> None:
        self.name = name

    def speak(self) -> str:
        return "..."

class Dog(Animal):
    def speak(self) -> str:  # override
        return f"{self.name} barks"

dog = Dog("Rex")
print(dog.speak())  # "Rex barks"
print(isinstance(dog, Animal))  # True
`},{lang:"go",code:`// Go has no inheritance — use embedding for composition
type Animal struct{ Name string }
func (a Animal) Speak() string { return a.Name + " makes a sound" }

type Dog struct {
    Animal  // embed — promotes methods
    Breed string
}

func (d Dog) Speak() string {  // override
    return d.Name + " barks"
}

dog := Dog{Animal: Animal{Name: "Rex"}, Breed: "Labrador"}
fmt.Println(dog.Speak())  // "Rex barks"
`},{lang:"js",code:`class Animal {
    constructor(name) { this.name = name; }
    speak() { return '...'; }
}

class Dog extends Animal {
    speak() { return 'Woof!'; }
}

const a = new Dog('Rex');
a.speak(); // 'Woof!'
a instanceof Animal; // true`},{lang:"ts",code:`class Animal {
    constructor(protected readonly name: string) {}
    speak(): string { return '...'; }
}

class Dog extends Animal {
    override speak(): string { return 'Woof!'; }
}

const a: Animal = new Dog('Rex');
a.speak(); // 'Woof!'
a instanceof Dog; // true`}],callout:{variant:"warn",content:"In C++, methods are **not** virtual by default — you must explicitly mark them `virtual` to get polymorphic dispatch. In Java and JS/TS, all instance methods are virtual."}},{id:"class-access",title:"Access Modifiers",tag:"similar",panels:[{lang:"java",code:`public class Vault {
    public    int visible = 1;    // everyone
    protected int subclass = 2;   // package + subclass
    /* package */ int pkg = 3;    // same package only
    private   int secret = 4;     // this class only

    public int getSecret() { return secret; }
}`},{lang:"cpp",code:`class Vault {
public:
    int visible = 1;    // everyone

protected:
    int subclass = 2;   // subclasses

private:
    int secret = 4;     // this class only
    // Note: no "package" concept in C++

public:
    int getSecret() const { return secret; }
};`},{lang:"python",code:`class BankAccount:
    def __init__(self, balance: float) -> None:
        self.owner = "Alice"      # public (convention)
        self._balance = balance   # "protected" (convention)
        self.__secret = "key"     # name-mangled (_BankAccount__secret)

    def get_balance(self) -> float:
        return self._balance

# Python has no true private — it is convention, not enforced
account = BankAccount(100.0)
print(account.owner)     # "Alice" — accessible
print(account._balance)  # works (convention says don't)
`},{lang:"go",code:`// Go uses capitalisation: Exported = public, lowercase = package-private
type bankAccount struct {
    owner   string   // package-private
    balance float64  // package-private
}

func (b bankAccount) Balance() float64 {  // Exported method
    return b.balance
}

func NewBankAccount(owner string, balance float64) bankAccount {
    return bankAccount{owner: owner, balance: balance}
}
`},{lang:"js",code:`class Vault {
    visible = 1;       // public (default)
    #secret = 4;       // private (hard private — enforced at runtime)

    getSecret() { return this.#secret; }
}

// No protected in JS
// No package-private concept`},{lang:"ts",code:`class Vault {
    public    visible  = 1;    // default
    protected subclass = 2;    // soft: compile-time only
    private   tsSecret = 4;    // soft: compile-time only
    readonly #jsSecret = 4;    // hard: JS private field

    getSecret(): number { return this.tsSecret; }
}`}],callout:{variant:"warn",content:"TS `private` is **compile-time only** — it is erased at runtime. JS `#privateField` is enforced by the runtime and cannot be accessed externally by any means."}},{id:"class-static",title:"Static Members",tag:"similar",panels:[{lang:"java",code:`public class Counter {
    private static int count = 0;

    public Counter() { count++; }

    public static int getCount() { return count; }
    public static void reset()   { count = 0; }
}

Counter.getCount(); // static call — no instance needed`},{lang:"cpp",code:`class Counter {
public:
    Counter() { ++count_; }

    static int getCount()  { return count_; }
    static void reset()    { count_ = 0; }

private:
    static int count_;  // declaration
};

int Counter::count_ = 0; // definition (in .cpp)`},{lang:"python",code:`class MathUtils:
    PI = 3.14159  # class variable (shared across instances)

    @staticmethod
    def square(n: float) -> float:
        return n * n

    @classmethod
    def circle_area(cls, r: float) -> float:
        return cls.PI * r * r

MathUtils.square(4)         # 16.0
MathUtils.circle_area(5)    # 78.54...
`},{lang:"go",code:`// Go has package-level variables and functions — no static members
const Pi = 3.14159

func Square(n float64) float64 {
    return n * n
}

func CircleArea(r float64) float64 {
    return Pi * r * r
}

Square(4)       // 16.0
CircleArea(5)   // 78.54...
`},{lang:"js",code:`class Counter {
    static #count = 0;

    constructor() { Counter.#count++; }

    static getCount() { return Counter.#count; }
    static reset()    { Counter.#count = 0; }
}

Counter.getCount(); // no instance needed`},{lang:"ts",code:`class Counter {
    static #count = 0;

    constructor() { Counter.#count++; }

    static getCount(): number { return Counter.#count; }
    static reset(): void      { Counter.#count = 0; }
}

Counter.getCount(); // number`}]}]},{id:"interfaces",slug:"interfaces",group:"basics",title:"Interfaces",description:"Contracts, structural typing, abstract classes, and duck typing across languages.",concepts:[{id:"interface-basic",title:"Interface / Protocol",tag:"breaking",panels:[{lang:"java",code:`// Java: nominal typing — must explicitly implement
public interface Printable {
    void print();
    default String label() { return "Printable"; }
}

public class Report implements Printable {
    @Override
    public void print() {
        System.out.println("Printing report...");
    }
}

// Checked at compile time: Report IS-A Printable`},{lang:"cpp",code:`// C++: no interface keyword — use abstract class
class Printable {
public:
    virtual void print() = 0;   // pure virtual
    virtual std::string label() const { return "Printable"; }
    virtual ~Printable() = default;
};

class Report : public Printable {
public:
    void print() override {
        std::cout << "Printing report...
";
    }
};`},{lang:"python",code:`from typing import Protocol

# Protocol = structural typing (no explicit "implements")
class Drawable(Protocol):
    def draw(self) -> None: ...
    def area(self) -> float: ...

class Circle:
    def __init__(self, radius: float) -> None:
        self.radius = radius
    def draw(self) -> None:
        print(f"circle r={self.radius}")
    def area(self) -> float:
        import math
        return math.pi * self.radius ** 2

def render(shape: Drawable) -> None:
    shape.draw()

render(Circle(5))  # works — Circle satisfies Drawable
`},{lang:"go",code:`// Go interfaces are implicit — no "implements" keyword
type Drawable interface {
    Draw()
    Area() float64
}

type Circle struct{ Radius float64 }

func (c Circle) Draw()         { fmt.Printf("circle r=%.1f\\n", c.Radius) }
func (c Circle) Area() float64 { return math.Pi * c.Radius * c.Radius }

func render(d Drawable) { d.Draw() }

render(Circle{Radius: 5})  // Circle satisfies Drawable automatically
`},{lang:"js",code:`// JS: no interface keyword — duck typing only
// A value "implements" a contract if it has the right shape

class Report {
    print() {
        console.log('Printing report...');
    }
}

// No explicit declaration needed — if it has print(), it works
function printAll(items) {
    items.forEach(item => item.print());
}`},{lang:"ts",code:`// TS: structural typing — shape matters, not name
interface Printable {
    print(): void;
    label?(): string;   // optional method
}

class Report implements Printable {
    print(): void {
        console.log('Printing report...');
    }
}

// This also satisfies Printable — no extends/implements needed:
const obj = { print: () => console.log('hi') };
const p: Printable = obj; // valid`}],callout:{variant:"info",content:"TS uses **structural typing** (duck typing). A class does not need to declare `implements Foo` to be assignable to `Foo` — it just needs the right shape. Java uses **nominal typing** — you must explicitly declare the relationship."}},{id:"interface-extend",title:"Interface Inheritance",tag:"similar",panels:[{lang:"java",code:`public interface Shape {
    double area();
}

public interface Colored {
    String getColor();
}

// Multiple interface implementation is allowed
public interface ColoredShape extends Shape, Colored {}

public class Circle implements ColoredShape {
    private double radius;
    private String color;

    public Circle(double r, String c) {
        radius = r; color = c;
    }

    @Override public double area()  { return Math.PI * radius * radius; }
    @Override public String getColor() { return color; }
}`},{lang:"cpp",code:`class Shape {
public:
    virtual double area() const = 0;
    virtual ~Shape() = default;
};

class Colored {
public:
    virtual std::string getColor() const = 0;
    virtual ~Colored() = default;
};

class Circle : public Shape, public Colored {
public:
    Circle(double r, std::string c)
        : radius_(r), color_(std::move(c)) {}

    double area() const override {
        return 3.14159 * radius_ * radius_;
    }
    std::string getColor() const override { return color_; }

private:
    double radius_;
    std::string color_;
};`},{lang:"python",code:`from typing import Protocol
from abc import ABC, abstractmethod

class Printable(Protocol):
    def print(self) -> None: ...

class Loggable(Protocol):
    def log(self, msg: str) -> None: ...

# Combine protocols
class PrintLoggable(Printable, Loggable, Protocol): ...

# Abstract base classes for enforcement at instantiation
class Shape(ABC):
    @abstractmethod
    def area(self) -> float: ...

# class Bad(Shape): pass  # TypeError: can't instantiate
`},{lang:"go",code:`type Reader interface { Read(p []byte) (n int, err error) }
type Writer interface { Write(p []byte) (n int, err error) }

// Interface composition — embed other interfaces
type ReadWriter interface {
    Reader
    Writer
}

// Any type implementing both Read and Write satisfies ReadWriter
type Buffer struct{ data []byte }
func (b *Buffer) Read(p []byte) (int, error)  { /* ... */; return 0, nil }
func (b *Buffer) Write(p []byte) (int, error) { /* ... */; return len(p), nil }
`},{lang:"js",code:`// JS: no interfaces — mix behaviour with mixins or composition
const ShapeMixin = (Base) => class extends Base {
    area() { throw new Error('area() not implemented'); }
};

const ColoredMixin = (Base) => class extends Base {
    getColor() { return this.color; }
};

class Circle extends ColoredMixin(ShapeMixin(class {})) {
    constructor(radius, color) {
        super();
        this.radius = radius;
        this.color  = color;
    }
    area() { return Math.PI * this.radius ** 2; }
}`},{lang:"ts",code:`interface Shape {
    area(): number;
}

interface Colored {
    getColor(): string;
}

// Intersection type — alternative to extends
type ColoredShape = Shape & Colored;

class Circle implements Shape, Colored {
    constructor(
        private readonly radius: number,
        private readonly color: string,
    ) {}

    area(): number { return Math.PI * this.radius ** 2; }
    getColor(): string { return this.color; }
}`}]},{id:"interface-vs-type",title:"interface vs type (TS)",tag:"similar",note:"TS only",panels:[{lang:"python",code:`from typing import TypedDict, Protocol
from dataclasses import dataclass

# TypedDict: shape of a dict (like TS interface for data)
class User(TypedDict):
    id: int
    name: str
    email: str

# Protocol: structural behaviour contract
class Hashable(Protocol):
    def __hash__(self) -> int: ...

# dataclass: auto-generates __init__, __repr__, __eq__
@dataclass
class Point:
    x: float
    y: float
`},{lang:"go",code:`// struct: data shape
type User struct {
    ID    int
    Name  string
    Email string
}

// interface: behaviour contract
type Stringer interface {
    String() string
}

// type alias
type UserID = int

// type definition (new distinct type)
type Celsius float64
type Fahrenheit float64
// Can't accidentally mix Celsius and Fahrenheit — distinct types
`},{lang:"ts",code:`// interface: open (can be re-opened / merged)
interface User {
    id: number;
    name: string;
}
interface User {
    email: string;  // merged — User now has id, name, email
}

// type alias: closed, more flexible
type Point = { x: number; y: number };
type ID    = string | number;          // union — not possible with interface
type Pair<T> = [T, T];                 // tuple alias

// Rule of thumb:
// - use interface for object shapes that others may extend
// - use type for unions, tuples, and mapped types`}]}]},{id:"generics",slug:"generics",group:"basics",title:"Generics",description:"Type parameters, constraints, variance, and generic patterns.",concepts:[{id:"generics-basic",title:"Generic Functions",tag:"similar",panels:[{lang:"java",code:`// Type parameter <T>
public <T> T identity(T value) {
    return value;
}

// Generic class
public class Box<T> {
    private T value;
    public Box(T value) { this.value = value; }
    public T get()      { return value; }
}

Box<String> strBox = new Box<>("hello");
String s = strBox.get(); // no cast needed`},{lang:"cpp",code:`// Function template
template<typename T>
T identity(T value) {
    return value;
}

// Class template
template<typename T>
class Box {
public:
    Box(T value) : value_(std::move(value)) {}
    const T& get() const { return value_; }
private:
    T value_;
};

Box<std::string> strBox{"hello"};
auto s = strBox.get();`},{lang:"python",code:`from typing import TypeVar

T = TypeVar("T")

def first(items: list[T]) -> T:
    return items[0]

first([1, 2, 3])   # int
first(["a", "b"])  # str

# Python 3.12+ syntax:
# def first[T](items: list[T]) -> T:
#     return items[0]
`},{lang:"go",code:`// Go generics (1.18+)
func first[T any](items []T) T {
    return items[0]
}

first([]int{1, 2, 3})   // 1 — int
first([]string{"a"})    // "a" — string
`},{lang:"js",code:`// JS: no generics — use JSDoc for IDE hints only
/**
 * @template T
 * @param {T} value
 * @returns {T}
 */
function identity(value) {
    return value;
}

class Box {
    constructor(value) { this.value = value; }
    get() { return this.value; }
}`},{lang:"ts",code:`function identity<T>(value: T): T {
    return value;
}

class Box<T> {
    constructor(private readonly value: T) {}
    get(): T { return this.value; }
}

const strBox = new Box('hello');  // Box<string> inferred
const s = strBox.get();            // string`}]},{id:"generics-constraints",title:"Generic Constraints",tag:"similar",panels:[{lang:"java",code:`// Upper bound: T must extend Comparable<T>
public <T extends Comparable<T>> T max(T a, T b) {
    return a.compareTo(b) >= 0 ? a : b;
}

// Multiple bounds
public <T extends Comparable<T> & Serializable>
    T clampAndStore(T val) { ... }

// Wildcard: accept List of any subtype of Number
public double sum(List<? extends Number> nums) {
    return nums.stream()
               .mapToDouble(Number::doubleValue)
               .sum();
}`},{lang:"cpp",code:`// C++20 concept constraint
#include <concepts>

template<std::totally_ordered T>
T max(T a, T b) {
    return a >= b ? a : b;
}

// Requires clause (C++20)
template<typename T>
requires std::is_arithmetic_v<T>
T sum(std::initializer_list<T> nums) {
    T total{};
    for (auto n : nums) total += n;
    return total;
}

// Pre-C++20: SFINAE or static_assert
template<typename T,
         typename = std::enable_if_t<std::is_arithmetic_v<T>>>
T square(T x) { return x * x; }`},{lang:"python",code:`from typing import TypeVar

# Bound TypeVar — T must be int or float
Numeric = TypeVar("Numeric", int, float)

def add(a: Numeric, b: Numeric) -> Numeric:
    return a + b

add(1, 2)      # 3   — int
add(1.5, 2.5)  # 4.0 — float
# add("a", "b")  # type error
`},{lang:"go",code:`import "golang.org/x/exp/constraints"

// Constrain T to numeric types
func add[T constraints.Number](a, b T) T {
    return a + b
}

add(1, 2)          // 3
add(1.5, 2.5)      // 4.0

// Custom constraint interface
type Stringer interface {
    String() string
}
func print[T Stringer](v T) { fmt.Println(v.String()) }
`},{lang:"js",code:`// No constraints — runtime checks only
function max(a, b) {
    if (typeof a !== typeof b)
        throw new TypeError('types must match');
    return a >= b ? a : b;
}`},{lang:"ts",code:`// extends constrains the type parameter
function max<T extends { valueOf(): number }>(a: T, b: T): T {
    return a.valueOf() >= b.valueOf() ? a : b;
}

// keyof constraint — common pattern
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = { name: 'Alice', age: 30 };
getProperty(user, 'name'); // string
getProperty(user, 'age');  // number
// getProperty(user, 'x'); // compile error`}]},{id:"generics-utility-types",title:"Utility Types (TS)",tag:"breaking",note:"TS only",panels:[{lang:"python",code:`from typing import Optional, Union, Callable

# Optional[X] is shorthand for Union[X, None]
def find(items: list[str], key: str) -> Optional[str]:
    return next((i for i in items if i == key), None)

# Union — accept multiple types
def parse(raw: Union[str, int]) -> str:
    return str(raw)

# Callable[[arg_types], return_type]
def apply(fn: Callable[[int], int], x: int) -> int:
    return fn(x)
`},{lang:"go",code:`// Go standard library generics
// maps.Keys, slices.Contains, etc. (Go 1.21+)
import "slices"

// Optional via pointer (nil = absent)
func find(items []string, key string) *string {
    for _, v := range items {
        if v == key { return &v }
    }
    return nil
}

// Functional helpers using generics
func Map[T, U any](items []T, f func(T) U) []U {
    result := make([]U, len(items))
    for i, v := range items {
        result[i] = f(v)
    }
    return result
}
`},{lang:"ts",code:`interface User {
    id: number;
    name: string;
    email: string;
}

// Partial — all fields optional
type UserUpdate = Partial<User>;

// Required — all fields required
type FullUser = Required<User>;

// Pick — subset of fields
type UserPreview = Pick<User, 'id' | 'name'>;

// Omit — all except specified
type PublicUser = Omit<User, 'email'>;

// Record — map type
type ScoreMap = Record<string, number>;

// ReturnType — extract function return type
function getUser(): User { return { id: 1, name: 'A', email: 'a@b.com' }; }
type UserResult = ReturnType<typeof getUser>; // User`}]}]},{id:"errors",slug:"errors",group:"basics",title:"Error Handling",description:"Exceptions, checked vs unchecked, error types, and result patterns.",concepts:[{id:"errors-try-catch",title:"try / catch / finally",tag:"similar",panels:[{lang:"java",code:`try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.err.println("Math error: " + e.getMessage());
} catch (Exception e) {
    System.err.println("Unexpected: " + e);
} finally {
    System.out.println("always runs");
}

// Multi-catch (Java 7+)
try {
    riskyOperation();
} catch (IOException | SQLException e) {
    handleError(e);
}`},{lang:"cpp",code:`try {
    int result = riskyOperation();
} catch (const std::invalid_argument& e) {
    std::cerr << "Invalid arg: " << e.what() << "
";
} catch (const std::exception& e) {
    std::cerr << "Error: " << e.what() << "
";
} catch (...) {
    std::cerr << "Unknown error
";
}

// C++ has no finally — use RAII or scope_exit
{
    std::ifstream file("data.txt");
    // file closes automatically when scope exits`},{lang:"python",code:`try:
    result = int("abc")
except ValueError as e:
    print(f"parse error: {e}")
except (TypeError, RuntimeError) as e:
    print(f"other error: {e}")
else:
    print("no error")  # runs if no exception
finally:
    print("always runs")
`},{lang:"go",code:`// Go uses multiple return values — no exceptions
result, err := strconv.Atoi("abc")
if err != nil {
    fmt.Printf("parse error: %v\\n", err)
    return
}
fmt.Println(result)

// defer runs on function exit (like finally)
defer func() { fmt.Println("always runs") }()
`},{lang:"js",code:`try {
    const result = JSON.parse(badJson);
} catch (err) {
    // err can be anything — no type guarantee
    console.error(err.message);
} finally {
    cleanup();
}

// Rethrowing
try {
    riskyOp();
} catch (err) {
    if (err instanceof TypeError) throw err;
    console.warn('recoverable:', err);
}`},{lang:"ts",code:`try {
    const result = JSON.parse(badJson);
} catch (err) {
    // err is unknown in strict TS — must narrow
    if (err instanceof Error) {
        console.error(err.message);
    } else {
        console.error(String(err));
    }
} finally {
    cleanup();
}`}],callout:{variant:"warn",content:"In TS (and modern JS), caught errors are typed `unknown`, not `Error`. Always check `err instanceof Error` before accessing `.message`."}},{id:"errors-custom",title:"Custom Error Types",tag:"similar",panels:[{lang:"java",code:`// Checked exception (must be declared or caught)
public class ValidationException extends Exception {
    private final String field;

    public ValidationException(String field, String msg) {
        super(msg);
        this.field = field;
    }

    public String getField() { return field; }
}

// Unchecked exception
public class AppError extends RuntimeException {
    public AppError(String message) { super(message); }
    public AppError(String message, Throwable cause) {
        super(message, cause);
    }
}`},{lang:"cpp",code:`#include <stdexcept>

class ValidationError : public std::runtime_error {
public:
    ValidationError(const std::string& field,
                    const std::string& msg)
        : std::runtime_error(msg), field_(field) {}

    const std::string& field() const { return field_; }

private:
    std::string field_;
};

// Throw and catch
throw ValidationError("email", "invalid format");`},{lang:"python",code:`class ValidationError(Exception):
    def __init__(self, field: str, message: str) -> None:
        self.field = field
        super().__init__(f"{field}: {message}")

class NotFoundError(Exception):
    pass

def find_user(user_id: int) -> dict:
    if user_id <= 0:
        raise ValidationError("id", "must be positive")
    raise NotFoundError(f"user {user_id} not found")
`},{lang:"go",code:`import "errors"
import "fmt"

// Sentinel errors for type-checking with errors.Is
var ErrNotFound = errors.New("not found")

// Structured error with context
type ValidationError struct {
    Field   string
    Message string
}

func (e *ValidationError) Error() string {
    return fmt.Sprintf("%s: %s", e.Field, e.Message)
}

func findUser(id int) error {
    if id <= 0 {
        return &ValidationError{Field: "id", Message: "must be positive"}
    }
    return fmt.Errorf("user %d: %w", id, ErrNotFound)
}
`},{lang:"js",code:`class ValidationError extends Error {
    constructor(field, message) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

try {
    throw new ValidationError('email', 'invalid format');
} catch (err) {
    if (err instanceof ValidationError) {
        console.error(err.field, err.message);
    }
}`},{lang:"ts",code:`class ValidationError extends Error {
    readonly name = 'ValidationError' as const;

    constructor(
        readonly field: string,
        message: string,
    ) {
        super(message);
    }
}

try {
    throw new ValidationError('email', 'invalid format');
} catch (err) {
    if (err instanceof ValidationError) {
        // err.field and err.message typed correctly
        console.error(\`\${err.field}: \${err.message}\`);
    }
}`}]},{id:"errors-result",title:"Result / Either Pattern",tag:"breaking",panels:[{lang:"java",code:`// Java uses Optional or throws for errors
// No built-in Result type, but can build one:
public sealed interface Result<T>
    permits Result.Ok, Result.Err {

    record Ok<T>(T value) implements Result<T> {}
    record Err<T>(String error) implements Result<T> {}
}

Result<Integer> parse(String s) {
    try {
        return new Result.Ok<>(Integer.parseInt(s));
    } catch (NumberFormatException e) {
        return new Result.Err<>("not a number: " + s);
    }
}`},{lang:"cpp",code:`// C++23: std::expected
#include <expected>

std::expected<int, std::string>
parseNumber(const std::string& s) {
    try {
        return std::stoi(s);
    } catch (...) {
        return std::unexpected("not a number: " + s);
    }
}

auto result = parseNumber("42");
if (result) {
    std::cout << *result;
} else {
    std::cerr << result.error();
}`},{lang:"python",code:`from dataclasses import dataclass
from typing import Generic, TypeVar, Union

T = TypeVar("T")
E = TypeVar("E", bound=BaseException)

@dataclass
class Ok(Generic[T]):
    value: T

@dataclass
class Err(Generic[E]):
    error: E

Result = Union[Ok[T], Err[E]]

def divide(a: float, b: float) -> Result:
    if b == 0:
        return Err(ZeroDivisionError("cannot divide by zero"))
    return Ok(a / b)

match divide(10, 2):
    case Ok(value=v): print(f"result: {v}")
    case Err(error=e): print(f"error: {e}")
`},{lang:"go",code:`// Go's idiomatic Result pattern: (T, error)
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("cannot divide by zero")
    }
    return a / b, nil
}

// Usage — must check error explicitly
result, err := divide(10, 2)
if err != nil {
    fmt.Printf("error: %v\\n", err)
    return
}
fmt.Printf("result: %v\\n", result)
`},{lang:"js",code:`// Common pattern: return [error, value] tuple
function parseNumber(s) {
    const n = Number(s);
    if (isNaN(n)) return [new Error('not a number'), null];
    return [null, n];
}

const [err, value] = parseNumber('42');
if (err) {
    console.error(err.message);
} else {
    console.log(value);
}`},{lang:"ts",code:`// Discriminated union Result type
type Result<T, E = Error> =
    | { ok: true;  value: T }
    | { ok: false; error: E }

function parseNumber(s: string): Result<number, string> {
    const n = Number(s);
    if (isNaN(n)) return { ok: false, error: 'not a number' };
    return { ok: true, value: n };
}

const result = parseNumber('42');
if (result.ok) {
    console.log(result.value); // number
} else {
    console.error(result.error); // string
}`}],callout:{variant:"info",content:"The Result/Either pattern avoids exceptions for expected failures (validation, parsing). Reserve `throw` for truly unexpected states."}}]},{id:"async",slug:"async",group:"basics",title:"Async",description:"Promises, async/await, futures, and concurrent patterns.",concepts:[{id:"async-promise-future",title:"Promise / Future / CompletableFuture",tag:"similar",panels:[{lang:"java",code:`// Java: CompletableFuture (Java 8+)
CompletableFuture<String> future =
    CompletableFuture.supplyAsync(() -> {
        return fetchData();  // runs on ForkJoinPool
    });

future
    .thenApply(data -> data.toUpperCase())
    .thenAccept(result -> System.out.println(result))
    .exceptionally(err -> {
        System.err.println("Failed: " + err.getMessage());
        return null;
    });`},{lang:"cpp",code:`// C++11: std::future / std::async
#include <future>

std::future<std::string> future =
    std::async(std::launch::async, []() {
        return fetchData();
    });

// Blocks until result is available
try {
    std::string result = future.get();
    std::cout << result << "
";
} catch (const std::exception& e) {
    std::cerr << "Failed: " << e.what() << "
";
}`},{lang:"python",code:`import asyncio

# Python uses coroutines instead of Promises
async def fetch_data() -> str:
    await asyncio.sleep(1)  # non-blocking pause
    return "data"

# asyncio.gather = Promise.all
async def main() -> None:
    a, b = await asyncio.gather(fetch_data(), fetch_data())
    print(a, b)

asyncio.run(main())
`},{lang:"js",code:`// Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), 1000);
});

promise
    .then(result => console.log(result))
    .catch(err   => console.error(err))
    .finally(()  => console.log('cleanup'));

// Promise.all — parallel
Promise.all([fetchA(), fetchB()])
    .then(([a, b]) => console.log(a, b));`},{lang:"ts",code:`// Promise<T> carries the resolved type
const promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve('done'), 1000);
});

promise.then((result: string) => console.log(result));

// Promise.all with typed tuple
const [a, b]: [User, Post[]] = await Promise.all([
    fetchUser(1),
    fetchPosts(1),
]);`}]},{id:"async-await",title:"async / await",tag:"similar",panels:[{lang:"java",code:`// Java has no async/await — use CompletableFuture chains
// or Java 21 virtual threads (Project Loom)

// Virtual threads (Java 21+)
try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
    Future<String> user  = scope.fork(() -> fetchUser(1));
    Future<Post[]> posts = scope.fork(() -> fetchPosts(1));

    scope.join().throwIfFailed();
    process(user.get(), posts.get());
}`},{lang:"cpp",code:`// C++20 coroutines — low-level, needs a framework
// (cppcoro, Asio, or similar)
#include <cppcoro/task.hpp>

cppcoro::task<std::string> fetchUser(int id) {
    auto response = co_await httpGet("/user/" + std::to_string(id));
    co_return response.body();
}

cppcoro::task<void> run() {
    auto user = co_await fetchUser(1);
    std::cout << user << "
";
}`},{lang:"python",code:`import asyncio
import aiohttp  # third-party async HTTP client

async def get_user(user_id: int) -> dict:
    async with aiohttp.ClientSession() as session:
        async with session.get(f"/api/users/{user_id}") as resp:
            return await resp.json()

async def main() -> None:
    user = await get_user(1)
    print(user["name"])

asyncio.run(main())
`},{lang:"js",code:`async function loadProfile(userId) {
    try {
        const user  = await fetchUser(userId);
        const posts = await fetchPosts(userId);
        return { user, posts };
    } catch (err) {
        console.error('load failed:', err);
        throw err;
    }
}

// Parallel — don't await one-by-one if independent
async function loadProfileFast(userId) {
    const [user, posts] = await Promise.all([
        fetchUser(userId),
        fetchPosts(userId),
    ]);
    return { user, posts };
}`},{lang:"ts",code:`async function loadProfile(userId: number): Promise<Profile> {
    try {
        const user  = await fetchUser(userId);   // User
        const posts = await fetchPosts(userId);  // Post[]
        return { user, posts };
    } catch (err) {
        if (err instanceof NetworkError) throw err;
        throw new Error('load failed', { cause: err });
    }
}

// Parallel
const [user, posts] = await Promise.all([
    fetchUser(userId),
    fetchPosts(userId),
]);`}],callout:{variant:"warn",content:"Do **not** `await` in a loop if the calls are independent. Use `Promise.all` for parallel execution — sequential `await` is 2–N× slower."}},{id:"async-error-handling",title:"Async Error Handling",tag:"gotcha",panels:[{lang:"java",code:`// CompletableFuture: use exceptionally or handle
CompletableFuture.supplyAsync(() -> riskyOp())
    .handle((result, err) -> {
        if (err != null) return "fallback";
        return result;
    });`},{lang:"cpp",code:`// std::future: exception propagated through get()
auto f = std::async(std::launch::async, []() {
    if (fail) throw std::runtime_error("failed");
    return 42;
});

try {
    int val = f.get(); // exception re-thrown here
} catch (const std::runtime_error& e) { ... }`},{lang:"python",code:`import asyncio

async def risky() -> str:
    await asyncio.sleep(0.1)
    raise ConnectionError("network timeout")

async def main() -> None:
    # Single await with try/except
    try:
        result = await risky()
    except ConnectionError as e:
        print(f"caught: {e}")

    # gather with return_exceptions=True — like Promise.allSettled
    results = await asyncio.gather(
        risky(), risky(),
        return_exceptions=True,
    )
    for r in results:
        if isinstance(r, Exception):
            print(f"error: {r}")
`},{lang:"js",code:`// Unhandled promise rejections are a common gotcha
// BAD — rejection swallowed silently
async function bad() {
    fetchData(); // no await, no catch
}

// GOOD
async function good() {
    try {
        const data = await fetchData();
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

// Or attach .catch() to the promise chain
fetchData().then(use).catch(handleError);`},{lang:"ts",code:`// Unhandled rejections crash Node.js and log in browsers
// Always handle: try/catch or .catch()

process.on('unhandledRejection', (err) => {
    console.error('FATAL:', err);
    process.exit(1);
});

// Wrap in try/catch — err is unknown
async function safe(): Promise<string | null> {
    try {
        return await riskyFetch();
    } catch (err) {
        if (err instanceof Error) console.error(err.message);
        return null;
    }
}`}]}]},{id:"collections",slug:"collections",group:"basics",title:"Collections",description:"Arrays, lists, maps, sets, and iteration across the languages.",concepts:[{id:"collections-array-list",title:"Array / List",tag:"similar",panels:[{lang:"java",code:`// Fixed-size array
int[] nums = {1, 2, 3, 4, 5};

// Dynamic list (ArrayList)
List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.get(0);       // "Alice"
names.size();       // 2

// Immutable list (Java 9+)
List<String> fixed = List.of("x", "y", "z");

// Stream operations
names.stream()
     .filter(n -> n.startsWith("A"))
     .map(String::toUpperCase)
     .collect(Collectors.toList());`},{lang:"cpp",code:`// Raw array
int nums[] = {1, 2, 3, 4, 5};

// std::vector (dynamic array)
std::vector<std::string> names{"Alice", "Bob"};
names.push_back("Carol");
names[0];            // "Alice"
names.size();        // 3

// Immutable: std::array (size fixed at compile time)
std::array<int, 3> fixed{1, 2, 3};

// Range-based iteration (C++11)
for (const auto& name : names) {
    std::cout << name << "
";
}`},{lang:"js",code:`// Array literals
const nums  = [1, 2, 3, 4, 5];
const names = ['Alice', 'Bob'];

names.push('Carol');
names[0];            // 'Alice'
names.length;        // 3

// Functional methods (all return new arrays)
nums.filter(n => n > 2);       // [3, 4, 5]
nums.map(n => n * 2);          // [2, 4, 6, 8, 10]
nums.reduce((a, b) => a + b);  // 15

// Spread & destructuring
const copy = [...nums];
const [first, second, ...rest] = nums;`},{lang:"ts",code:`const nums: number[]      = [1, 2, 3, 4, 5];
const names: string[]     = ['Alice', 'Bob'];

// Readonly array — no mutation
const fixed: readonly string[] = ['x', 'y', 'z'];
// fixed.push('w'); // compile error

// Tuple — fixed-length, typed per position
const pair: [string, number] = ['Alice', 30];

// Functional methods with inferred types
const doubled = nums.map(n => n * 2);  // number[]
const long    = names.filter(n => n.length > 3); // string[]`}]},{id:"collections-map",title:"Map / Dictionary",tag:"similar",panels:[{lang:"java",code:`Map<String, Integer> scores = new HashMap<>();
scores.put("Alice", 95);
scores.put("Bob",   87);

scores.get("Alice");          // 95
scores.getOrDefault("X", 0);  // 0
scores.containsKey("Bob");    // true
scores.size();                // 2

// Immutable map (Java 9+)
Map<String, Integer> fixed = Map.of("a", 1, "b", 2);

// Iteration
for (var entry : scores.entrySet()) {
    System.out.println(entry.getKey() + "=" + entry.getValue());
}`},{lang:"cpp",code:`// std::unordered_map (hash map)
std::unordered_map<std::string, int> scores{
    {"Alice", 95}, {"Bob", 87}
};

scores["Alice"];         // 95
scores["Carol"] = 92;    // insert
scores.count("Bob");     // 1 (exists) or 0 (not)
scores.size();           // 3

// std::map (ordered, O(log n))
std::map<std::string, int> ordered{{"b", 2}, {"a", 1}};

for (const auto& [key, val] : scores) {
    std::cout << key << "=" << val << "
";
}`},{lang:"js",code:`// Map — ordered insertion, any key type
const scores = new Map();
scores.set('Alice', 95);
scores.set('Bob',   87);

scores.get('Alice');       // 95
scores.has('Bob');         // true
scores.size;               // 2

// Object literal — fine for string keys
const obj = { Alice: 95, Bob: 87 };

// Iteration
for (const [key, val] of scores) {
    console.log(key, val);
}

scores.forEach((val, key) => console.log(key, val));`},{lang:"ts",code:`const scores = new Map<string, number>();
scores.set('Alice', 95);
scores.set('Bob',   87);

scores.get('Alice');      // number | undefined
scores.has('Bob');        // boolean

// Object with index signature
const obj: Record<string, number> = { Alice: 95, Bob: 87 };

// Strongly-typed object shape (not a Map)
interface ScoreBoard {
    [name: string]: number;
}`}]},{id:"collections-set",title:"Set",tag:"similar",panels:[{lang:"java",code:`Set<String> tags = new HashSet<>();
tags.add("typescript");
tags.add("react");
tags.add("typescript"); // duplicate — ignored

tags.contains("react");  // true
tags.size();             // 2

// Immutable set (Java 9+)
Set<String> fixed = Set.of("a", "b", "c");`},{lang:"cpp",code:`// std::unordered_set (hash set)
std::unordered_set<std::string> tags{
    "typescript", "react"
};
tags.insert("typescript"); // duplicate — ignored

tags.count("react");   // 1 (exists)
tags.size();           // 2

// std::set (ordered, O(log n))
std::set<int> sorted{3, 1, 2}; // stored as 1, 2, 3`},{lang:"js",code:`const tags = new Set(['typescript', 'react']);
tags.add('typescript'); // duplicate — ignored

tags.has('react');      // true
tags.size;              // 2

// Set operations via spread
const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);
const union     = new Set([...a, ...b]);
const intersect = new Set([...a].filter(x => b.has(x)));`},{lang:"ts",code:`const tags = new Set<string>(['typescript', 'react']);
tags.add('typescript');

tags.has('react');     // boolean
tags.size;             // number

// Type-safe set operations
function intersection<T>(a: Set<T>, b: Set<T>): Set<T> {
    return new Set([...a].filter(x => b.has(x)));
}`}]},{id:"collections-destructuring",title:"Destructuring",tag:"breaking",panels:[{lang:"java",code:`// Java: no destructuring syntax
// Use getters or manual assignment
Person p = new Person("Alice", 30);
String name = p.getName();
int    age  = p.getAge();

// Java 21 record patterns (preview)
if (p instanceof Person(String n, int a)) {
    System.out.println(n + " is " + a);
}`},{lang:"cpp",code:`// C++17 structured bindings
auto person = std::make_tuple("Alice", 30);
auto [name, age] = person;

// With std::pair
std::pair<std::string, int> p{"Alice", 30};
auto [n, a] = p;

// In range-based for loop
std::map<std::string, int> m{{"a", 1}, {"b", 2}};
for (auto& [key, val] : m) {
    std::cout << key << "=" << val << "
";
}`},{lang:"js",code:`// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// Object destructuring
const { name, age, city = 'Unknown' } = person;

// Rename
const { name: personName } = person;

// Nested
const { address: { street } } = user;

// In function params
function greet({ name, age }) {
    return \`\${name} is \${age}\`;
}`},{lang:"ts",code:`// Array destructuring
const [first, second, ...rest]: number[] = [1, 2, 3, 4, 5];

// Object destructuring with types
const { name, age }: { name: string; age: number } = person;

// Default value
const { city = 'Unknown' } = person;

// In function params — param properties typed inline
function greet({ name, age }: { name: string; age: number }) {
    return \`\${name} is \${age}\`;
}`}]}]},{id:"modules",slug:"modules",group:"basics",title:"Modules",description:"Import, export, namespaces, and module systems.",concepts:[{id:"modules-export-import",title:"Export & Import",tag:"breaking",panels:[{lang:"java",code:`// Java: package + import
// File: com/example/utils/MathUtils.java
package com.example.utils;

public class MathUtils {
    public static int add(int a, int b) { return a + b; }
    public static int mul(int a, int b) { return a * b; }
}

// Usage (another file):
import com.example.utils.MathUtils;
// or wildcard:
import com.example.utils.*;

int result = MathUtils.add(1, 2);`},{lang:"cpp",code:`// C++: headers + #include (traditional)
// mathutils.hpp
#pragma once
namespace utils {
    int add(int a, int b);
    int mul(int a, int b);
}

// mathutils.cpp
#include "mathutils.hpp"
int utils::add(int a, int b) { return a + b; }
int utils::mul(int a, int b) { return a * b; }

// Usage:
#include "mathutils.hpp"
int result = utils::add(1, 2);

// C++20 modules (new approach)
import utils;
int result = utils::add(1, 2);`},{lang:"js",code:`// Named exports
// mathUtils.js
export function add(a, b) { return a + b; }
export function mul(a, b) { return a * b; }
export const PI = 3.14159;

// Default export
export default class Calculator { ... }

// Import — named
import { add, mul } from './mathUtils.js';

// Import — default
import Calculator from './mathUtils.js';

// Import — all named exports as namespace
import * as math from './mathUtils.js';
math.add(1, 2);`},{lang:"ts",code:`// Named exports with types
// mathUtils.ts
export function add(a: number, b: number): number {
    return a + b;
}

export type MathOp = (a: number, b: number) => number;

// Type-only import (erased at compile time)
import type { MathOp } from './mathUtils';
import { add } from './mathUtils';

// Re-export
export { add } from './mathUtils';
export type { MathOp } from './mathUtils';`}],callout:{variant:"info",content:"Use `import type` in TS for type-only imports. These are fully erased at compile time and cannot cause circular dependency issues at runtime."}},{id:"modules-namespaces",title:"Namespaces",tag:"similar",panels:[{lang:"java",code:`// Java packages are the namespace system
package com.myapp.domain.user;

// Fully qualified name avoids ambiguity
java.util.Date d1 = new java.util.Date();
// vs
java.sql.Date  d2 = new java.sql.Date(0L);`},{lang:"cpp",code:`namespace myapp {
    namespace domain {
        class User {
            std::string name;
        };
    }
}

// Usage
myapp::domain::User u;

// Using declaration (avoid in headers)
using namespace myapp::domain;
User u2;

// Namespace alias
namespace dom = myapp::domain;`},{lang:"js",code:`// JS has no namespace keyword
// Use module files + import/export for scoping

// Or group related exports in an object:
const StringUtils = {
    trim: (s) => s.trim(),
    truncate: (s, n) => s.slice(0, n),
};

export { StringUtils };`},{lang:"ts",code:`// TS has namespace keyword (avoid for new code — use modules)
namespace StringUtils {
    export function trim(s: string): string { return s.trim(); }
    export function truncate(s: string, n: number): string {
        return s.slice(0, n);
    }
}

// Namespaces are useful for augmenting global libraries:
declare namespace NodeJS {
    interface ProcessEnv {
        DATABASE_URL: string;
        PORT?: string;
    }
}`}]},{id:"modules-cjs-esm",title:"CommonJS vs ESM",tag:"gotcha",note:"JS/TS only",panels:[{lang:"js",code:`// CommonJS (Node.js legacy, .cjs files)
const path   = require('path');
const { add } = require('./mathUtils');
module.exports = { result: add(1, 2) };

// ES Modules (modern, .mjs or "type":"module" in package.json)
import path from 'path';
import { add } from './mathUtils.js'; // .js required in ESM!
export const result = add(1, 2);

// Top-level await — ESM only
const data = await fetch('/api/data').then(r => r.json());`},{lang:"ts",code:`// TS always uses ESM syntax — tsc or bundler converts
import path from 'path';
import { add } from './mathUtils';  // .ts ext omitted

// tsconfig: "module": "ESNext" + "moduleResolution": "bundler"
// handles the .js extension requirement automatically

// Dynamic import — available in both CJS and ESM
const { heavy } = await import('./heavyModule');

// Type for dynamic import
type LazyModule = typeof import('./heavyModule');`}],callout:{variant:"warn",content:'Mixing CJS and ESM causes subtle runtime errors. Pick one. For new projects, use ESM (`"type": "module"` in package.json). For Node.js libraries, output both with a bundler.'}}]},{id:"conceptual",slug:"conceptual",group:"differences",title:"Conceptual Gaps",description:"Ideas that exist in Java/C++ but work fundamentally differently in JS/TS — or don't exist at all.",concepts:[{id:"concept-prototypes",title:"Prototype Chain vs Class Hierarchy",tag:"breaking",panels:[{lang:"java",code:`// Java: nominal class hierarchy
// Classes are blueprints; objects are instances
// Inheritance is declared, checked at compile time

class Animal { }
class Dog extends Animal { }

Dog d = new Dog();
// d's class is Dog, parent is Animal — fixed at compile time`},{lang:"cpp",code:`// C++: same — nominal class hierarchy
// Multiple inheritance allowed
class Animal {};
class Pet {};
class Dog : public Animal, public Pet {};

Dog d;
// d's class tree is fixed at compile time`},{lang:"js",code:`// JS: prototype-based inheritance
// Every object has a [[Prototype]] link — not a class copy

function Animal(name) { this.name = name; }
Animal.prototype.speak = function() { return '...'; };

function Dog(name) { Animal.call(this, name); }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.speak = function() { return 'Woof'; };

// class syntax is syntactic sugar over this
class Cat extends Animal {
    speak() { return 'Meow'; }
}

// You can modify prototypes at runtime — don't
Array.prototype.last = function() { return this[this.length - 1]; }; // evil`},{lang:"ts",code:`// TS adds static types but the runtime is still prototype-based
// class is still syntactic sugar — no real class hierarchy at runtime

class Animal {
    constructor(readonly name: string) {}
    speak(): string { return '...'; }
}
class Dog extends Animal {
    override speak(): string { return 'Woof'; }
}

// Structural check — not nominal:
const fake = { name: 'Bob', speak: () => 'Hi' };
const a: Animal = fake; // valid — same shape`}],callout:{variant:"info",content:"JS `class` is syntactic sugar over prototype chains. The runtime still uses prototypes. This matters when debugging, using `Object.getPrototypeOf`, or working with frameworks that manipulate prototypes."}},{id:"concept-this",title:"The `this` Problem",tag:"breaking",panels:[{lang:"java",code:`// Java: this always refers to the current instance
// It never changes based on how a method is called
public class Timer {
    private int count = 0;

    public void tick() {
        this.count++; // always refers to this Timer instance
    }

    public void start() {
        // Passing method reference: still bound correctly
        scheduler.run(this::tick);
    }
}`},{lang:"cpp",code:`// C++: 'this' is a pointer to the current object
// Like Java, 'this' binding is stable in member functions
class Timer {
    int count = 0;
public:
    void tick() {
        this->count++;
    }

    // std::bind or lambda to capture 'this'
    auto getCallback() {
        return [this]() { this->tick(); };
    }
};`},{lang:"js",code:`// JS: 'this' depends on HOW a function is called, not where defined
class Timer {
    count = 0;

    tick() { this.count++; }

    start() {
        // BUG: 'this' is lost when passed as callback
        setInterval(this.tick, 1000); // this is undefined (strict mode)

        // FIX 1: arrow function (captures 'this' lexically)
        setInterval(() => this.tick(), 1000);

        // FIX 2: .bind()
        setInterval(this.tick.bind(this), 1000);
    }
}`},{lang:"ts",code:`// TS can detect 'this' errors with noImplicitThis + explicit this param
class Timer {
    count = 0;

    // 'this' param is a fake param — erased at compile time
    // it tells TS what 'this' must be when this function is called
    tick(this: Timer): void {
        this.count++;
    }

    start(): void {
        // Error: the 'this' context of type 'void' is not assignable to 'Timer'
        // setInterval(this.tick, 1000);

        // Correct:
        setInterval(() => this.tick(), 1000);
    }
}`}],callout:{variant:"warn",content:"In JS/TS, **always use arrow functions for callbacks** inside class methods unless you know exactly what `this` will be. Lost `this` is one of the most common JS bugs."}},{id:"concept-closures",title:"Closures",tag:"breaking",panels:[{lang:"java",code:`// Java: anonymous classes / lambdas capture effectively-final vars
int multiplier = 3; // effectively final
Function<Integer, Integer> triple = n -> n * multiplier;

// multiplier = 4; // would make lambda invalid — compile error

// Java doesn't have first-class closures with mutable captures
// Workaround: use array or AtomicInteger
int[] counter = {0};
Runnable inc = () -> counter[0]++;`},{lang:"cpp",code:`// C++: lambdas can capture by value [=] or reference [&]
int multiplier = 3;

// Capture by value — snapshot at creation
auto triple = [multiplier](int n) { return n * multiplier; };
multiplier = 10; // triple still uses 3

// Capture by reference — sees later changes
auto liveTriple = [&multiplier](int n) { return n * multiplier; };
multiplier = 10; // liveTriple now uses 10

// Mutable closure (modifies local copy)
auto counter = [count = 0]() mutable { return ++count; };`},{lang:"js",code:`// JS: functions close over variables, not values
function makeCounter(start = 0) {
    let count = start; // captured by reference
    return {
        inc: () => ++count,
        get: () => count,
        reset: () => { count = start; },
    };
}

const c = makeCounter(10);
c.inc(); // 11
c.inc(); // 12
c.get(); // 12

// Classic loop-closure bug (var, not let):
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0); // logs 3, 3, 3 — NOT 0, 1, 2
}
// Fix: use let (block-scoped)
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0); // logs 0, 1, 2`},{lang:"ts",code:`function makeCounter(start = 0) {
    let count = start;
    return {
        inc: (): number => ++count,
        get: (): number => count,
        reset: (): void => { count = start; },
    };
}

// Return type inferred correctly
const c = makeCounter(10);
c.inc(); // number: 11

// The classic var-loop bug is avoided — use const/let always
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0); // 0, 1, 2
}`}],callout:{variant:"warn",content:"The `var` loop closure bug (`for (var i...)` logging the final value) is one of the most famous JS traps. `let` fixes it. This is why `var` must never be used."}},{id:"concept-event-loop",title:"Event Loop vs Threads",tag:"breaking",panels:[{lang:"java",code:`// Java: true multi-threading
Thread t = new Thread(() -> {
    // Runs concurrently on a separate OS thread
    processData();
});
t.start();
t.join(); // wait for completion

// ExecutorService for thread pools
ExecutorService pool = Executors.newFixedThreadPool(4);
Future<String> result = pool.submit(() -> fetchData());
String data = result.get(); // blocks until done`},{lang:"cpp",code:`// C++: true multi-threading (C++11)
#include <thread>
#include <future>

std::thread t([] { processData(); });
t.join();

// std::async for futures
auto result = std::async(std::launch::async,
                         [] { return fetchData(); });
std::string data = result.get();`},{lang:"js",code:`// JS: single-threaded event loop — no shared mutable state
// Concurrency via non-blocking I/O callbacks, not threads

// This does NOT run in parallel — it queues a callback
setTimeout(() => console.log('later'), 0);
console.log('now'); // prints first

// Web Workers for true parallelism (separate context, message passing)
const worker = new Worker('heavy.js');
worker.postMessage({ data: bigArray });
worker.onmessage = (e) => console.log(e.data);

// Node.js: worker_threads module
const { Worker } = require('worker_threads');`},{lang:"ts",code:`// Same event loop model as JS
// async/await does NOT create threads — it yields control

async function main(): Promise<void> {
    console.log('1');
    await new Promise(r => setTimeout(r, 0));
    console.log('3'); // executes after current call stack clears
}
console.log('2'); // prints between 1 and 3

// Worker thread with types
import { Worker, isMainThread, parentPort } from 'worker_threads';

if (isMainThread) {
    const w = new Worker(__filename);
    w.on('message', (result: number) => console.log(result));
} else {
    parentPort?.postMessage(heavyCompute());
}`}],callout:{variant:"info",content:"JS is single-threaded. `async/await` is not parallelism — it is cooperative multitasking. CPU-bound work blocks the event loop. Move heavy computation to a Web Worker or worker_threads."}},{id:"concept-memory",title:"Memory Management",tag:"breaking",panels:[{lang:"java",code:`// Java: garbage collected — no manual memory management
// Objects are allocated on the heap; GC reclaims unreachable objects

String s = new String("hello"); // heap allocation
s = null; // eligible for GC — but GC decides when

// No destructors — use try-with-resources for cleanup
try (var conn = new DBConnection()) {
    conn.query("SELECT 1");
} // conn.close() called automatically`},{lang:"cpp",code:`// C++: manual memory OR smart pointers (prefer smart pointers)

// Raw pointer — don't use in modern C++
int* raw = new int(42);
delete raw; // must manually free

// std::unique_ptr — exclusive ownership, auto-deleted
auto ptr = std::make_unique<MyClass>(args...);

// std::shared_ptr — shared ownership, ref-counted
auto shared = std::make_shared<MyClass>(args...);

// Stack allocation — destroyed at end of scope
{
    MyClass obj(args...); // RAII: constructor/destructor called
} // obj destroyed here`},{lang:"js",code:`// JS: garbage collected like Java
// V8 uses generational GC — most allocations are cheap

const obj = { data: new Array(1000000) };
// obj is GC'd when no longer reachable — no destructor

// WeakRef / FinalizationRegistry for cache patterns
const cache = new WeakMap(); // keys GC'd when unreachable
cache.set(someObj, computedValue);

// No way to force GC — don't try
// Memory leaks: forgotten event listeners, closures over large data
element.addEventListener('click', handler);
// Remember to remove when done:
element.removeEventListener('click', handler);`},{lang:"ts",code:`// Same GC model as JS — TS adds no memory semantics

// Common leak: closures keeping references alive
class Component {
    private handlers: Array<() => void> = [];

    mount(): void {
        const handler = () => this.update();
        window.addEventListener('resize', handler);
        this.handlers.push(handler); // track for cleanup
    }

    unmount(): void {
        this.handlers.forEach(h =>
            window.removeEventListener('resize', h)
        );
        this.handlers = [];
    }

    private update(): void { /* ... */ }
}`}]}]},{id:"gotchas",slug:"gotchas",group:"differences",title:"Gotchas",description:"The things that will burn you. Especially == vs ===, type coercion, and prototype surprises.",concepts:[{id:"gotcha-equality",title:"== vs ===",tag:"gotcha",panels:[{lang:"java",code:`// Java: == compares object identity for reference types
String a = new String("hello");
String b = new String("hello");

a == b;       // false — different objects
a.equals(b);  // true — same content

// Primitives: == compares values (safe)
int x = 5, y = 5;
x == y; // true`},{lang:"cpp",code:`// C++: == is an operator, overloaded per type
std::string a = "hello";
std::string b = "hello";

a == b;  // true — std::string overloads == to compare content

// Pointer comparison
std::string* pa = &a;
std::string* pb = &b;
pa == pb; // false — different addresses`},{lang:"js",code:`// == performs type coercion — results are surprising
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

// Rule: NEVER use ==. Always use ===.`},{lang:"ts",code:`// TS doesn't prevent == but type-checking catches many coercion bugs
// With strict mode, comparing incompatible types is a compile error

// Still allowed (both sides could be number):
const x: number = 0;
const y: number | boolean = false;
x == y; // allowed — types overlap

// Better: always use ===
x === 0; // true
0 === false; // TS error: 'This condition will always return false since
             // the types 'number' and 'boolean' have no overlap'`}],callout:{variant:"warn",content:"Never use `==` in JS/TS. Ever. There is no situation where `==` is the right choice and `===` is not. Configure ESLint `eqeqeq: error` to enforce this."}},{id:"gotcha-nan",title:"NaN",tag:"gotcha",panels:[{lang:"java",code:`// Java: NaN exists for double/float
double nan = Double.NaN;
nan == nan;                      // false
Double.isNaN(nan);               // true

// Integer division by zero throws ArithmeticException
int result = 5 / 0; // throws!`},{lang:"cpp",code:`#include <cmath>
double nan = std::numeric_limits<double>::quiet_NaN();
nan == nan;          // false
std::isnan(nan);     // true

// Integer division by zero: undefined behaviour
int x = 5 / 0; // undefined behaviour!`},{lang:"js",code:`// NaN is a number type — check with Number.isNaN, not ==
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
Number(undefined);     // NaN`},{lang:"ts",code:`// TS doesn't prevent NaN — it's just a number
const x: number = NaN; // valid TS

// Always use Number.isNaN(), never isNaN()
function safeDiv(a: number, b: number): number | null {
    if (b === 0) return null;
    return a / b;
}

// Type guard for NaN-safety
function isValidNumber(n: number): boolean {
    return !Number.isNaN(n) && Number.isFinite(n);
}`}],callout:{variant:"warn",content:'`typeof NaN === "number"` is one of JS\'s most infamous quirks. Use `Number.isNaN()` not `isNaN()` — the global `isNaN` coerces strings to numbers first.'}},{id:"gotcha-type-coercion",title:"Type Coercion",tag:"gotcha",panels:[{lang:"java",code:`// Java: very limited implicit coercion — mostly numeric widening
int    i = 42;
long   l = i;    // widening: safe
double d = l;    // widening: safe

// No string + number magic:
// "value: " + 42  works — but it's toString() under the hood
String s = "value: " + 42; // "value: 42"`},{lang:"cpp",code:`// C++: implicit conversions exist (be careful)
int    i = 42;
double d = i;    // widening: safe
int    j = 3.9;  // truncates to 3 — no warning by default!

// Use explicit casts for safety:
int k = static_cast<int>(3.9); // explicit — clear intent`},{lang:"js",code:`// JS coercion is aggressive and surprising
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
Number('3px'); // NaN`},{lang:"ts",code:`// TS prevents most coercion via type checking
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
z + 3; // '53' — TS allows it, runtime coerces`}]},{id:"gotcha-hoisting",title:"Hoisting",tag:"gotcha",note:"JS/TS only",panels:[{lang:"js",code:`// var declarations are hoisted to function top — initialized to undefined
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
var hello = function(name) { return 'Hi ' + name; };`},{lang:"ts",code:`// TS catches hoisting issues at compile time (with strict mode)
// But they still exist at runtime in compiled JS

// This is a TS error:
// console.log(x); // Block-scoped variable 'x' used before its declaration
const x = 5;

// Function declarations work anywhere in the file — fully hoisted
greet('Alice'); // OK in both TS and runtime

function greet(name: string): string {
    return \`Hello \${name}\`;
}`}],callout:{variant:"warn",content:"`var` hoisting is why `var` must never be used. `const` and `let` have temporal dead zones — use them, and declare variables at the top of their block."}},{id:"gotcha-optional-chaining",title:"Truthy / Falsy",tag:"gotcha",note:"JS/TS only",panels:[{lang:"js",code:`// JS falsy values — all these are false in a boolean context:
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
const b = 0   || 'default'; // 'default' (0 is falsy)`},{lang:"ts",code:`// TS strict mode helps but doesn't eliminate all truthy traps
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
}`}],callout:{variant:"warn",content:'Never use `||` for defaults when `0`, `""`, or `false` are valid values. Use `??` (nullish coalescing) instead — it only triggers on `null` and `undefined`.'}},{id:"gotcha-reference-vs-value",title:"Reference vs Value Semantics",tag:"gotcha",panels:[{lang:"java",code:`// Java: primitives by value, objects by reference
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
System.out.println(arr1[0]); // 99 — arr1 unaffected`},{lang:"cpp",code:`// C++: value semantics by default (copy constructor)
std::vector<int> v1 = {1, 2, 3};
std::vector<int> v2 = v1; // deep copy — independent
v2[0] = 99;
std::cout << v1[0]; // 1 — v1 unaffected

// Reference semantics: explicit ref or pointer
std::vector<int>& ref = v1;
ref[0] = 99;
std::cout << v1[0]; // 99 — same object`},{lang:"js",code:`// JS: primitives by value, objects/arrays by reference
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
// Or: structuredClone(obj) — modern, handles more types`},{lang:"ts",code:`// TS can enforce immutability with 'readonly'
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
const deep = structuredClone(arr2);`}]}]},{id:"ecosystem",slug:"ecosystem",group:"ecosystem",title:"Tool Equivalents",description:"Java and C++ tools mapped to their JS/TS equivalents. ★ = recommended first pick.",concepts:[],ecoMappings:[{from:"Maven / Gradle",fromLabel:"Java",to:["★ pnpm","npm","yarn"],note:"pnpm is fastest and strictest about dependency isolation. All three use package.json."},{from:"Make / CMake",fromLabel:"C++",to:["★ pnpm scripts","Makefile","just"],note:"Most JS projects use npm/pnpm scripts for build tasks."},{from:"javac / java",fromLabel:"Java",to:["★ tsc","esbuild","swc"],note:"tsc is the reference compiler. esbuild and swc are faster but skip type-checking."},{from:"g++ / clang++",fromLabel:"C++",to:["★ tsc","esbuild","swc"],note:"Same as Java — tsc for correctness, esbuild/swc for speed in CI."},{from:"JAR / WAR packaging",fromLabel:"Java",to:["★ Vite","esbuild","Rollup","webpack"],note:"Vite is standard for web apps. Rollup for libraries. webpack for legacy projects."},{from:"Static lib / .so / .dll",fromLabel:"C++",to:["★ npm package","Rollup library mode"],note:"Publish to npm. Use Rollup to generate CJS + ESM dual output."},{from:"JUnit 5",fromLabel:"Java",to:["★ Vitest","Jest"],note:"Vitest is the modern choice for Vite projects. Jest for legacy/non-Vite."},{from:"Google Test / Catch2",fromLabel:"C++",to:["★ Vitest","Jest"],note:"Same ecosystem — pick based on your bundler."},{from:"Mockito",fromLabel:"Java",to:["★ Vitest (vi.fn, vi.mock)","Jest mocks"],note:"Built-in mocking — no separate library needed."},{from:"Selenium",fromLabel:"Java",to:["★ Playwright","Cypress"],note:"Playwright is the modern end-to-end standard. Works across all browsers."},{from:"Checkstyle / PMD",fromLabel:"Java",to:["★ ESLint","oxlint","Biome"],note:"ESLint is most configurable. Biome combines linting + formatting in one tool."},{from:"clang-format / clang-tidy",fromLabel:"C++",to:["★ Prettier","Biome"],note:"Prettier for formatting only. Biome for formatting + linting."},{from:"JVM",fromLabel:"Java",to:["★ Node.js","Bun","Deno"],note:"Node.js is the standard. Bun is faster for scripts. Deno for security-first workloads."},{from:"Native executable",fromLabel:"C++",to:["★ Node.js","Bun compile","Deno compile"],note:"Node.js for servers. Bun compile / Deno compile for single-file executables."},{from:"Spring Boot",fromLabel:"Java",to:["★ Fastify","Express","Hono","NestJS"],note:"Fastify for performance. NestJS if you want Spring-like structure. Hono for edge runtimes."},{from:"Crow / Drogon",fromLabel:"C++",to:["★ Fastify","Hono"],note:"Fastify is the fastest mainstream Node.js server framework."},{from:"Hibernate / JPA",fromLabel:"Java",to:["★ Drizzle ORM","Prisma","Kysely"],note:"Prisma for DX. Drizzle for type safety + SQL control. Kysely for query builder."},{from:"SLF4J / Logback",fromLabel:"Java",to:["★ pino","winston"],note:"pino is the fastest Node.js logger with structured JSON output."},{from:"Jackson / Gson",fromLabel:"Java",to:["★ zod","valibot","superjson"],note:"JSON.parse is built-in. Use zod/valibot to validate and infer types from parsed data."},{from:"Bean Validation (JSR-380)",fromLabel:"Java",to:["★ zod","valibot"],note:"zod schemas double as type definitions and runtime validators."},{from:"Spring IoC / Guice",fromLabel:"Java",to:["★ manual DI (factory functions)","tsyringe","inversify"],note:"Manual DI is idiomatic in JS/TS. DI containers exist but are uncommon outside NestJS."}]},{id:"frameworks",slug:"frameworks",group:"ecosystem",title:"UI Frameworks",description:"UI and application framework equivalents. ★ = recommended first pick for new projects.",concepts:[],ecoMappings:[{from:"JavaFX",fromLabel:"Java",to:["★ React","Vue","Svelte","Angular"],note:"React is the dominant choice. Vue is gentler for beginners. Svelte compiles away the runtime. Angular for large teams wanting a full framework."},{from:"Qt (QML)",fromLabel:"C++",to:["★ React","Vue","Svelte"],note:"React maps best to Qt's declarative component model. All three compile to efficient DOM updates."},{from:"Swing / AWT",fromLabel:"Java",to:["★ React","Angular"],note:"Swing's imperative mutation model is closest to Angular's two-way binding. React's unidirectional flow is the modern standard."},{from:"wxWidgets / GTK (C++)",fromLabel:"C++",to:["★ React","Svelte"],note:"Widget-based GUI maps loosely to component trees. Svelte's compiled output is closest to native widget efficiency."},{from:"Spring MVC (server-rendered)",fromLabel:"Java",to:["★ Next.js","Remix","Astro"],note:"Next.js for React-based SSR/SSG. Remix for form-centric apps. Astro for content-heavy static sites."},{from:"Thymeleaf / JSP",fromLabel:"Java",to:["★ Astro","Next.js"],note:"Server-side templating maps directly to Astro (zero-JS by default) or Next.js server components."},{from:"JUCE (audio/desktop)",fromLabel:"C++",to:["★ Electron","Tauri"],note:"Electron bundles a Chromium runtime (large but battle-tested). Tauri uses the OS WebView (smaller, Rust backend)."},{from:"JavaFX Properties / Bindings",fromLabel:"Java",to:["★ Zustand","Jotai","Redux Toolkit"],note:"Zustand for simple shared state. Jotai for atomic state. Redux Toolkit for complex event-sourced state."},{from:"Qt Signals & Slots",fromLabel:"C++",to:["★ Zustand","Jotai"],note:"Signals/slots map to reactive stores. Jotai atoms are the closest conceptual equivalent."},{from:"Electron (Java wrapper)",fromLabel:"Java",to:["★ Electron","Tauri"],note:"Electron is the standard for cross-platform desktop apps. Tauri is faster and lighter using OS WebViews."},{from:"Qt (cross-platform native)",fromLabel:"C++",to:["★ Tauri","Electron"],note:"Tauri is the modern lightweight option. Electron for maximum browser API compatibility."},{from:"Android (Java)",fromLabel:"Java",to:["★ React Native","Expo"],note:"React Native for full native bridge. Expo adds managed workflow and OTA updates on top of React Native."},{from:"Qt Mobile",fromLabel:"C++",to:["★ React Native","Capacitor"],note:"Capacitor wraps a web app in a native shell — minimal native code. React Native for performance-critical mobile apps."}]}];function i(a){const r=[];for(const e of a){r.push({sectionId:e.id,sectionTitle:e.title,searchText:e.title.toLowerCase(),label:e.title});for(const n of e.concepts)r.push({sectionId:e.id,sectionTitle:e.title,conceptId:n.id,conceptTitle:n.title,searchText:n.title.toLowerCase(),label:`${n.title} — ${e.title}`})}return r}function l(a,r){const e=r.trim().toLowerCase();if(e.length===0)return[];const n=[];for(const t of a){const s=t.searchText;s===e?n.push({entry:t,score:3}):s.startsWith(e)?n.push({entry:t,score:2}):s.includes(e)&&n.push({entry:t,score:1})}return n.sort((t,s)=>s.score-t.score),n.slice(0,8).map(({entry:t})=>({sectionId:t.sectionId,sectionTitle:t.sectionTitle,conceptId:t.conceptId,conceptTitle:t.conceptTitle,label:t.label}))}const c=i(o);self.onmessage=a=>{const r=l(c,a.data);self.postMessage(r)}})();

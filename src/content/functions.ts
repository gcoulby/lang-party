import type { Section } from '../types/content'

export const functions: Section = {
  id: 'functions',
  slug: 'functions',
  group: 'basics',
  title: 'Functions',
  description: 'Function declarations, signatures, overloading, lambdas, and higher-order patterns.',
  concepts: [
    {
      id: 'fn-declaration',
      title: 'Function Declaration',
      tag: 'similar',
      panels: [
        {
          lang: 'java',
          code: `public int add(int a, int b) {
    return a + b;
}

// Void method
public void greet(String name) {
    System.out.println("Hello, " + name);
}`,
        },
        {
          lang: 'cpp',
          code: `int add(int a, int b) {
    return a + b;
}

// void function
void greet(const std::string& name) {
    std::cout << "Hello, " << name << "\n";
}`,
        },
        {
          lang: 'python',
          code: `def add(a: int, b: int) -> int:
    return a + b

result = add(3, 4)  # 7
`,
        },
        {
          lang: 'go',
          code: `func add(a, b int) int {
    return a + b
}

result := add(3, 4)  // 7
`,
        },
        {
          lang: 'js',
          code: `function add(a, b) {
    return a + b;
}

function greet(name) {
    console.log('Hello, ' + name);
}`,
        },
        {
          lang: 'ts',
          code: `function add(a: number, b: number): number {
    return a + b;
}

function greet(name: string): void {
    console.log('Hello, ' + name);
}`,
        },
      ],
    },
    {
      id: 'fn-arrow',
      title: 'Arrow / Lambda Functions',
      tag: 'similar',
      panels: [
        {
          lang: 'java',
          code: `// Java 8+ lambda (implements a functional interface)
Comparator<String> byLength =
    (a, b) -> a.length() - b.length();

// Method reference
Function<String, Integer> len = String::length;

// Multi-line lambda
Runnable task = () -> {
    System.out.println("running");
};`,
        },
        {
          lang: 'cpp',
          code: `// C++11 lambda
auto byLength = [](const std::string& a,
                   const std::string& b) {
    return a.length() < b.length();
};

// Capture by value [=] or by reference [&]
int threshold = 5;
auto isLong = [threshold](const std::string& s) {
    return s.length() > threshold;
};`,
        },
        {
          lang: 'python',
          code: `# lambda: single expression only
double = lambda x: x * 2
print(double(5))  # 10

# For multi-line, use def
def triple(x: int) -> int:
    return x * 3

# map with lambda
nums = [1, 2, 3]
doubled = list(map(lambda x: x * 2, nums))
`,
        },
        {
          lang: 'go',
          code: `// Go has no lambdas, but functions are first-class values
double := func(x int) int {
    return x * 2
}
fmt.Println(double(5))  // 10

// Passed as argument
nums := []int{1, 2, 3}
apply := func(n int, f func(int) int) int { return f(n) }
fmt.Println(apply(4, double))  // 8
`,
        },
        {
          lang: 'js',
          code: `// Arrow function — concise syntax
const add = (a, b) => a + b;

// Arrow function with body
const clamp = (val, min, max) => {
    if (val < min) return min;
    if (val > max) return max;
    return val;
};

// Single-param, no parens needed
const double = x => x * 2;`,
        },
        {
          lang: 'ts',
          code: `const add = (a: number, b: number): number => a + b;

const clamp = (val: number, min: number, max: number): number => {
    if (val < min) return min;
    if (val > max) return max;
    return val;
};

// Arrow function type annotation
const double: (x: number) => number = x => x * 2;`,
        },
      ],
      callout: {
        variant: 'info',
        content: 'Arrow functions in JS/TS do not have their own `this`. They capture `this` from the enclosing scope — unlike regular `function` declarations.',
      },
    },
    {
      id: 'fn-default-params',
      title: 'Default Parameters',
      tag: 'similar',
      panels: [
        {
          lang: 'java',
          code: `// Java has no default parameters — use overloads
public String greet(String name) {
    return greet(name, "Hello");
}
public String greet(String name, String prefix) {
    return prefix + ", " + name + "!";
}`,
        },
        {
          lang: 'cpp',
          code: `// C++ has default arguments (right-to-left only)
std::string greet(const std::string& name,
                  const std::string& prefix = "Hello") {
    return prefix + ", " + name + "!";
}

// Call: greet("Alice") or greet("Alice", "Hi")`,
        },
        {
          lang: 'python',
          code: `def greet(name: str, greeting: str = "Hello") -> str:
    return f"{greeting}, {name}!"

greet("Alice")          # "Hello, Alice!"
greet("Alice", "Hi")    # "Hi, Alice!"

# NOTE: never use mutable defaults
# def bad(items=[]):  # BUG — shared across calls
# def good(items=None):
#     if items is None: items = []
`,
        },
        {
          lang: 'go',
          code: `// Go has no default params — use variadic or options pattern
func greet(name string, args ...string) string {
    greeting := "Hello"
    if len(args) > 0 {
        greeting = args[0]
    }
    return greeting + ", " + name + "!"
}

greet("Alice")        // "Hello, Alice!"
greet("Alice", "Hi")  // "Hi, Alice!"
`,
        },
        {
          lang: 'js',
          code: `function greet(name, prefix = 'Hello') {
    return prefix + ', ' + name + '!';
}

greet('Alice');          // 'Hello, Alice!'
greet('Alice', 'Hi');    // 'Hi, Alice!'`,
        },
        {
          lang: 'ts',
          code: `function greet(name: string, prefix = 'Hello'): string {
    return \`\${prefix}, \${name}!\`;
}

// Default inferred as string — no annotation needed
greet('Alice');          // 'Hello, Alice!'
greet('Alice', 'Hi');    // 'Hi, Alice!'`,
        },
      ],
    },
    {
      id: 'fn-rest-spread',
      title: 'Variadic / Rest Parameters',
      tag: 'similar',
      panels: [
        {
          lang: 'java',
          code: `// Varargs — must be last parameter
public int sum(int... numbers) {
    int total = 0;
    for (int n : numbers) total += n;
    return total;
}

sum(1, 2, 3);     // 6
sum(new int[]{1, 2, 3}); // same`,
        },
        {
          lang: 'cpp',
          code: `// C++11: variadic templates
template<typename... Args>
int sum(Args... args) {
    return (args + ...);  // C++17 fold expression
}

// Or traditional approach with initializer_list
int sum(std::initializer_list<int> nums) {
    int total = 0;
    for (int n : nums) total += n;
    return total;
}`,
        },
        {
          lang: 'python',
          code: `# *args collects positional arguments
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
`,
        },
        {
          lang: 'go',
          code: `// Variadic parameters with ...
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
`,
        },
        {
          lang: 'js',
          code: `// Rest parameter collects remaining args into array
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3);       // 6

// Spread: unpack array into args
const nums = [1, 2, 3];
sum(...nums);        // 6`,
        },
        {
          lang: 'ts',
          code: `function sum(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3);        // 6

// Typed spread
const nums: number[] = [1, 2, 3];
sum(...nums);         // 6`,
        },
      ],
    },
    {
      id: 'fn-overloading',
      title: 'Function Overloading',
      tag: 'breaking',
      panels: [
        {
          lang: 'java',
          code: `// Java: true runtime overloading by parameter types
public int process(int x) {
    return x * 2;
}
public double process(double x) {
    return x * 2.0;
}
public String process(String s) {
    return s.repeat(2);
}`,
        },
        {
          lang: 'cpp',
          code: `// C++: also true runtime overloading
int    process(int x)         { return x * 2; }
double process(double x)      { return x * 2.0; }
std::string process(const std::string& s) {
    return s + s;
}`,
        },
        {
          lang: 'python',
          code: `from typing import overload, Union

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
`,
        },
        {
          lang: 'go',
          code: `// Go has no overloading — use different names or interfaces
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
`,
        },
        {
          lang: 'js',
          code: `// JS has no overloading — one function, handle types manually
function process(x) {
    if (typeof x === 'number') return x * 2;
    if (typeof x === 'string') return x.repeat(2);
    throw new TypeError('unsupported type');
}`,
        },
        {
          lang: 'ts',
          code: `// TS overload signatures (compile-time only — single impl)
function process(x: number): number;
function process(x: string): string;
function process(x: number | string): number | string {
    if (typeof x === 'number') return x * 2;
    return x.repeat(2);
}

// process(1)    → number
// process('hi') → string`,
        },
      ],
      callout: {
        variant: 'info',
        content: 'TS overloads are **compile-time only**. There is one function at runtime. The overload signatures constrain call sites; the implementation signature is never directly callable.',
      },
    },
  ],
}

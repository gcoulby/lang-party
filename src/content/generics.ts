import type { Section } from '../types/content'

export const generics: Section = {
  id: 'generics',
  slug: 'generics',
  group: 'basics',
  title: 'Generics',
  description: 'Type parameters, constraints, variance, and generic patterns.',
  concepts: [
    {
      id: 'generics-basic',
      title: 'Generic Functions',
      tag: 'similar',
      panels: [
        {
          lang: 'java',
          code: `// Type parameter <T>
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
String s = strBox.get(); // no cast needed`,
        },
        {
          lang: 'cpp',
          code: `// Function template
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
auto s = strBox.get();`,
        },
        {
          lang: 'python',
          code: `from typing import TypeVar

T = TypeVar("T")

def first(items: list[T]) -> T:
    return items[0]

first([1, 2, 3])   # int
first(["a", "b"])  # str

# Python 3.12+ syntax:
# def first[T](items: list[T]) -> T:
#     return items[0]
`,
        },
        {
          lang: 'go',
          code: `// Go generics (1.18+)
func first[T any](items []T) T {
    return items[0]
}

first([]int{1, 2, 3})   // 1 — int
first([]string{"a"})    // "a" — string
`,
        },
        {
          lang: 'js',
          code: `// JS: no generics — use JSDoc for IDE hints only
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
}`,
        },
        {
          lang: 'ts',
          code: `function identity<T>(value: T): T {
    return value;
}

class Box<T> {
    constructor(private readonly value: T) {}
    get(): T { return this.value; }
}

const strBox = new Box('hello');  // Box<string> inferred
const s = strBox.get();            // string`,
        },
      ],
    },
    {
      id: 'generics-constraints',
      title: 'Generic Constraints',
      tag: 'similar',
      panels: [
        {
          lang: 'java',
          code: `// Upper bound: T must extend Comparable<T>
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
}`,
        },
        {
          lang: 'cpp',
          code: `// C++20 concept constraint
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
T square(T x) { return x * x; }`,
        },
        {
          lang: 'python',
          code: `from typing import TypeVar

# Bound TypeVar — T must be int or float
Numeric = TypeVar("Numeric", int, float)

def add(a: Numeric, b: Numeric) -> Numeric:
    return a + b

add(1, 2)      # 3   — int
add(1.5, 2.5)  # 4.0 — float
# add("a", "b")  # type error
`,
        },
        {
          lang: 'go',
          code: `import "golang.org/x/exp/constraints"

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
`,
        },
        {
          lang: 'js',
          code: `// No constraints — runtime checks only
function max(a, b) {
    if (typeof a !== typeof b)
        throw new TypeError('types must match');
    return a >= b ? a : b;
}`,
        },
        {
          lang: 'ts',
          code: `// extends constrains the type parameter
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
// getProperty(user, 'x'); // compile error`,
        },
      ],
    },
    {
      id: 'generics-utility-types',
      title: 'Utility Types (TS)',
      tag: 'breaking',
      note: 'TS only',
      panels: [
        {
          lang: 'python',
          code: `from typing import Optional, Union, Callable

# Optional[X] is shorthand for Union[X, None]
def find(items: list[str], key: str) -> Optional[str]:
    return next((i for i in items if i == key), None)

# Union — accept multiple types
def parse(raw: Union[str, int]) -> str:
    return str(raw)

# Callable[[arg_types], return_type]
def apply(fn: Callable[[int], int], x: int) -> int:
    return fn(x)
`,
        },
        {
          lang: 'go',
          code: `// Go standard library generics
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
`,
        },
        {
          lang: 'ts',
          code: `interface User {
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
type UserResult = ReturnType<typeof getUser>; // User`,
        },
      ],
    },
  ],
}

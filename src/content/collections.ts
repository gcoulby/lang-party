import type { Section } from '../types/content'

export const collections: Section = {
  id: 'collections',
  slug: 'collections',
  group: 'basics',
  title: 'Collections',
  description: 'Arrays, lists, maps, sets, and iteration across the languages.',
  concepts: [
    {
      id: 'collections-array-list',
      title: 'Array / List',
      tag: 'similar',
      panels: [
        {
          lang: 'java',
          code: `// Fixed-size array
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
     .collect(Collectors.toList());`,
        },
        {
          lang: 'cpp',
          code: `// Raw array
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
    std::cout << name << "\n";
}`,
        },
        {
          lang: 'js',
          code: `// Array literals
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
const [first, second, ...rest] = nums;`,
        },
        {
          lang: 'ts',
          code: `const nums: number[]      = [1, 2, 3, 4, 5];
const names: string[]     = ['Alice', 'Bob'];

// Readonly array — no mutation
const fixed: readonly string[] = ['x', 'y', 'z'];
// fixed.push('w'); // compile error

// Tuple — fixed-length, typed per position
const pair: [string, number] = ['Alice', 30];

// Functional methods with inferred types
const doubled = nums.map(n => n * 2);  // number[]
const long    = names.filter(n => n.length > 3); // string[]`,
        },
      ],
    },
    {
      id: 'collections-map',
      title: 'Map / Dictionary',
      tag: 'similar',
      panels: [
        {
          lang: 'java',
          code: `Map<String, Integer> scores = new HashMap<>();
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
}`,
        },
        {
          lang: 'cpp',
          code: `// std::unordered_map (hash map)
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
    std::cout << key << "=" << val << "\n";
}`,
        },
        {
          lang: 'js',
          code: `// Map — ordered insertion, any key type
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

scores.forEach((val, key) => console.log(key, val));`,
        },
        {
          lang: 'ts',
          code: `const scores = new Map<string, number>();
scores.set('Alice', 95);
scores.set('Bob',   87);

scores.get('Alice');      // number | undefined
scores.has('Bob');        // boolean

// Object with index signature
const obj: Record<string, number> = { Alice: 95, Bob: 87 };

// Strongly-typed object shape (not a Map)
interface ScoreBoard {
    [name: string]: number;
}`,
        },
      ],
    },
    {
      id: 'collections-set',
      title: 'Set',
      tag: 'similar',
      panels: [
        {
          lang: 'java',
          code: `Set<String> tags = new HashSet<>();
tags.add("typescript");
tags.add("react");
tags.add("typescript"); // duplicate — ignored

tags.contains("react");  // true
tags.size();             // 2

// Immutable set (Java 9+)
Set<String> fixed = Set.of("a", "b", "c");`,
        },
        {
          lang: 'cpp',
          code: `// std::unordered_set (hash set)
std::unordered_set<std::string> tags{
    "typescript", "react"
};
tags.insert("typescript"); // duplicate — ignored

tags.count("react");   // 1 (exists)
tags.size();           // 2

// std::set (ordered, O(log n))
std::set<int> sorted{3, 1, 2}; // stored as 1, 2, 3`,
        },
        {
          lang: 'js',
          code: `const tags = new Set(['typescript', 'react']);
tags.add('typescript'); // duplicate — ignored

tags.has('react');      // true
tags.size;              // 2

// Set operations via spread
const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);
const union     = new Set([...a, ...b]);
const intersect = new Set([...a].filter(x => b.has(x)));`,
        },
        {
          lang: 'ts',
          code: `const tags = new Set<string>(['typescript', 'react']);
tags.add('typescript');

tags.has('react');     // boolean
tags.size;             // number

// Type-safe set operations
function intersection<T>(a: Set<T>, b: Set<T>): Set<T> {
    return new Set([...a].filter(x => b.has(x)));
}`,
        },
      ],
    },
    {
      id: 'collections-destructuring',
      title: 'Destructuring',
      tag: 'breaking',
      panels: [
        {
          lang: 'java',
          code: `// Java: no destructuring syntax
// Use getters or manual assignment
Person p = new Person("Alice", 30);
String name = p.getName();
int    age  = p.getAge();

// Java 21 record patterns (preview)
if (p instanceof Person(String n, int a)) {
    System.out.println(n + " is " + a);
}`,
        },
        {
          lang: 'cpp',
          code: `// C++17 structured bindings
auto person = std::make_tuple("Alice", 30);
auto [name, age] = person;

// With std::pair
std::pair<std::string, int> p{"Alice", 30};
auto [n, a] = p;

// In range-based for loop
std::map<std::string, int> m{{"a", 1}, {"b", 2}};
for (auto& [key, val] : m) {
    std::cout << key << "=" << val << "\n";
}`,
        },
        {
          lang: 'js',
          code: `// Array destructuring
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
}`,
        },
        {
          lang: 'ts',
          code: `// Array destructuring
const [first, second, ...rest]: number[] = [1, 2, 3, 4, 5];

// Object destructuring with types
const { name, age }: { name: string; age: number } = person;

// Default value
const { city = 'Unknown' } = person;

// In function params — param properties typed inline
function greet({ name, age }: { name: string; age: number }) {
    return \`\${name} is \${age}\`;
}`,
        },
      ],
    },
  ],
}

import type { Section } from '../types/content'

export const conceptual: Section = {
  id: 'conceptual',
  slug: 'conceptual',
  group: 'differences',
  title: 'Conceptual Gaps',
  description: 'Ideas that exist in Java/C++ but work fundamentally differently in JS/TS — or don\'t exist at all.',
  concepts: [
    {
      id: 'concept-prototypes',
      title: 'Prototype Chain vs Class Hierarchy',
      tag: 'breaking',
      panels: [
        {
          lang: 'java',
          code: `// Java: nominal class hierarchy
// Classes are blueprints; objects are instances
// Inheritance is declared, checked at compile time

class Animal { }
class Dog extends Animal { }

Dog d = new Dog();
// d's class is Dog, parent is Animal — fixed at compile time`,
        },
        {
          lang: 'cpp',
          code: `// C++: same — nominal class hierarchy
// Multiple inheritance allowed
class Animal {};
class Pet {};
class Dog : public Animal, public Pet {};

Dog d;
// d's class tree is fixed at compile time`,
        },
        {
          lang: 'js',
          code: `// JS: prototype-based inheritance
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
Array.prototype.last = function() { return this[this.length - 1]; }; // evil`,
        },
        {
          lang: 'ts',
          code: `// TS adds static types but the runtime is still prototype-based
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
const a: Animal = fake; // valid — same shape`,
        },
      ],
      callout: {
        variant: 'info',
        content: 'JS `class` is syntactic sugar over prototype chains. The runtime still uses prototypes. This matters when debugging, using `Object.getPrototypeOf`, or working with frameworks that manipulate prototypes.',
      },
    },
    {
      id: 'concept-this',
      title: 'The `this` Problem',
      tag: 'breaking',
      panels: [
        {
          lang: 'java',
          code: `// Java: this always refers to the current instance
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
}`,
        },
        {
          lang: 'cpp',
          code: `// C++: 'this' is a pointer to the current object
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
};`,
        },
        {
          lang: 'js',
          code: `// JS: 'this' depends on HOW a function is called, not where defined
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
}`,
        },
        {
          lang: 'ts',
          code: `// TS can detect 'this' errors with noImplicitThis + explicit this param
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
}`,
        },
      ],
      callout: {
        variant: 'warn',
        content: 'In JS/TS, **always use arrow functions for callbacks** inside class methods unless you know exactly what `this` will be. Lost `this` is one of the most common JS bugs.',
      },
    },
    {
      id: 'concept-closures',
      title: 'Closures',
      tag: 'breaking',
      panels: [
        {
          lang: 'java',
          code: `// Java: anonymous classes / lambdas capture effectively-final vars
int multiplier = 3; // effectively final
Function<Integer, Integer> triple = n -> n * multiplier;

// multiplier = 4; // would make lambda invalid — compile error

// Java doesn't have first-class closures with mutable captures
// Workaround: use array or AtomicInteger
int[] counter = {0};
Runnable inc = () -> counter[0]++;`,
        },
        {
          lang: 'cpp',
          code: `// C++: lambdas can capture by value [=] or reference [&]
int multiplier = 3;

// Capture by value — snapshot at creation
auto triple = [multiplier](int n) { return n * multiplier; };
multiplier = 10; // triple still uses 3

// Capture by reference — sees later changes
auto liveTriple = [&multiplier](int n) { return n * multiplier; };
multiplier = 10; // liveTriple now uses 10

// Mutable closure (modifies local copy)
auto counter = [count = 0]() mutable { return ++count; };`,
        },
        {
          lang: 'js',
          code: `// JS: functions close over variables, not values
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
    setTimeout(() => console.log(i), 0); // logs 0, 1, 2`,
        },
        {
          lang: 'ts',
          code: `function makeCounter(start = 0) {
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
}`,
        },
      ],
      callout: {
        variant: 'warn',
        content: 'The `var` loop closure bug (`for (var i...)` logging the final value) is one of the most famous JS traps. `let` fixes it. This is why `var` must never be used.',
      },
    },
    {
      id: 'concept-event-loop',
      title: 'Event Loop vs Threads',
      tag: 'breaking',
      panels: [
        {
          lang: 'java',
          code: `// Java: true multi-threading
Thread t = new Thread(() -> {
    // Runs concurrently on a separate OS thread
    processData();
});
t.start();
t.join(); // wait for completion

// ExecutorService for thread pools
ExecutorService pool = Executors.newFixedThreadPool(4);
Future<String> result = pool.submit(() -> fetchData());
String data = result.get(); // blocks until done`,
        },
        {
          lang: 'cpp',
          code: `// C++: true multi-threading (C++11)
#include <thread>
#include <future>

std::thread t([] { processData(); });
t.join();

// std::async for futures
auto result = std::async(std::launch::async,
                         [] { return fetchData(); });
std::string data = result.get();`,
        },
        {
          lang: 'js',
          code: `// JS: single-threaded event loop — no shared mutable state
// Concurrency via non-blocking I/O callbacks, not threads

// This does NOT run in parallel — it queues a callback
setTimeout(() => console.log('later'), 0);
console.log('now'); // prints first

// Web Workers for true parallelism (separate context, message passing)
const worker = new Worker('heavy.js');
worker.postMessage({ data: bigArray });
worker.onmessage = (e) => console.log(e.data);

// Node.js: worker_threads module
const { Worker } = require('worker_threads');`,
        },
        {
          lang: 'ts',
          code: `// Same event loop model as JS
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
}`,
        },
      ],
      callout: {
        variant: 'info',
        content: 'JS is single-threaded. `async/await` is not parallelism — it is cooperative multitasking. CPU-bound work blocks the event loop. Move heavy computation to a Web Worker or worker_threads.',
      },
    },
    {
      id: 'concept-memory',
      title: 'Memory Management',
      tag: 'breaking',
      panels: [
        {
          lang: 'java',
          code: `// Java: garbage collected — no manual memory management
// Objects are allocated on the heap; GC reclaims unreachable objects

String s = new String("hello"); // heap allocation
s = null; // eligible for GC — but GC decides when

// No destructors — use try-with-resources for cleanup
try (var conn = new DBConnection()) {
    conn.query("SELECT 1");
} // conn.close() called automatically`,
        },
        {
          lang: 'cpp',
          code: `// C++: manual memory OR smart pointers (prefer smart pointers)

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
} // obj destroyed here`,
        },
        {
          lang: 'js',
          code: `// JS: garbage collected like Java
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
element.removeEventListener('click', handler);`,
        },
        {
          lang: 'ts',
          code: `// Same GC model as JS — TS adds no memory semantics

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
}`,
        },
      ],
    },
  ],
}

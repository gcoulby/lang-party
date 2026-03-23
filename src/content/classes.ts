import type { Section } from '../types/content'

export const classes: Section = {
  id: 'classes',
  slug: 'classes',
  group: 'basics',
  title: 'Classes & OOP',
  description: 'Class syntax, constructors, inheritance, access modifiers, and object patterns.',
  concepts: [
    {
      id: 'class-basic',
      title: 'Basic Class',
      tag: 'similar',
      panels: [
        {
          lang: 'java',
          code: `public class Person {
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
}`,
        },
        {
          lang: 'cpp',
          code: `class Person {
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
};`,
        },
        {
          lang: 'js',
          code: `class Person {
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
}`,
        },
        {
          lang: 'ts',
          code: `class Person {
    constructor(
        private readonly name: string,
        private readonly age: number,
    ) {}

    getName(): string { return this.name; }
    getAge(): number  { return this.age; }

    toString(): string {
        return \`\${this.name} (\${this.age})\`;
    }
}`,
        },
      ],
      callout: {
        variant: 'info',
        content: 'TS constructor parameter properties (`private readonly name: string`) declare and assign the field in one line. No `this.name = name` boilerplate needed.',
      },
    },
    {
      id: 'class-inheritance',
      title: 'Inheritance',
      tag: 'similar',
      panels: [
        {
          lang: 'java',
          code: `public class Animal {
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
a.speak(); // "Woof!" — dynamic dispatch`,
        },
        {
          lang: 'cpp',
          code: `class Animal {
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
a->speak(); // "Woof!" — requires virtual`,
        },
        {
          lang: 'js',
          code: `class Animal {
    constructor(name) { this.name = name; }
    speak() { return '...'; }
}

class Dog extends Animal {
    speak() { return 'Woof!'; }
}

const a = new Dog('Rex');
a.speak(); // 'Woof!'
a instanceof Animal; // true`,
        },
        {
          lang: 'ts',
          code: `class Animal {
    constructor(protected readonly name: string) {}
    speak(): string { return '...'; }
}

class Dog extends Animal {
    override speak(): string { return 'Woof!'; }
}

const a: Animal = new Dog('Rex');
a.speak(); // 'Woof!'
a instanceof Dog; // true`,
        },
      ],
      callout: {
        variant: 'warn',
        content: 'In C++, methods are **not** virtual by default — you must explicitly mark them `virtual` to get polymorphic dispatch. In Java and JS/TS, all instance methods are virtual.',
      },
    },
    {
      id: 'class-access',
      title: 'Access Modifiers',
      tag: 'similar',
      panels: [
        {
          lang: 'java',
          code: `public class Vault {
    public    int visible = 1;    // everyone
    protected int subclass = 2;   // package + subclass
    /* package */ int pkg = 3;    // same package only
    private   int secret = 4;     // this class only

    public int getSecret() { return secret; }
}`,
        },
        {
          lang: 'cpp',
          code: `class Vault {
public:
    int visible = 1;    // everyone

protected:
    int subclass = 2;   // subclasses

private:
    int secret = 4;     // this class only
    // Note: no "package" concept in C++

public:
    int getSecret() const { return secret; }
};`,
        },
        {
          lang: 'js',
          code: `class Vault {
    visible = 1;       // public (default)
    #secret = 4;       // private (hard private — enforced at runtime)

    getSecret() { return this.#secret; }
}

// No protected in JS
// No package-private concept`,
        },
        {
          lang: 'ts',
          code: `class Vault {
    public    visible  = 1;    // default
    protected subclass = 2;    // soft: compile-time only
    private   tsSecret = 4;    // soft: compile-time only
    readonly #jsSecret = 4;    // hard: JS private field

    getSecret(): number { return this.tsSecret; }
}`,
        },
      ],
      callout: {
        variant: 'warn',
        content: 'TS `private` is **compile-time only** — it is erased at runtime. JS `#privateField` is enforced by the runtime and cannot be accessed externally by any means.',
      },
    },
    {
      id: 'class-static',
      title: 'Static Members',
      tag: 'similar',
      panels: [
        {
          lang: 'java',
          code: `public class Counter {
    private static int count = 0;

    public Counter() { count++; }

    public static int getCount() { return count; }
    public static void reset()   { count = 0; }
}

Counter.getCount(); // static call — no instance needed`,
        },
        {
          lang: 'cpp',
          code: `class Counter {
public:
    Counter() { ++count_; }

    static int getCount()  { return count_; }
    static void reset()    { count_ = 0; }

private:
    static int count_;  // declaration
};

int Counter::count_ = 0; // definition (in .cpp)`,
        },
        {
          lang: 'js',
          code: `class Counter {
    static #count = 0;

    constructor() { Counter.#count++; }

    static getCount() { return Counter.#count; }
    static reset()    { Counter.#count = 0; }
}

Counter.getCount(); // no instance needed`,
        },
        {
          lang: 'ts',
          code: `class Counter {
    static #count = 0;

    constructor() { Counter.#count++; }

    static getCount(): number { return Counter.#count; }
    static reset(): void      { Counter.#count = 0; }
}

Counter.getCount(); // number`,
        },
      ],
    },
  ],
}

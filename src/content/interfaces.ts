import type { Section } from '../types/content'

export const interfaces: Section = {
  id: 'interfaces',
  slug: 'interfaces',
  group: 'basics',
  title: 'Interfaces',
  description: 'Contracts, structural typing, abstract classes, and duck typing across languages.',
  concepts: [
    {
      id: 'interface-basic',
      title: 'Interface / Protocol',
      tag: 'breaking',
      panels: [
        {
          lang: 'java',
          code: `// Java: nominal typing — must explicitly implement
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

// Checked at compile time: Report IS-A Printable`,
        },
        {
          lang: 'cpp',
          code: `// C++: no interface keyword — use abstract class
class Printable {
public:
    virtual void print() = 0;   // pure virtual
    virtual std::string label() const { return "Printable"; }
    virtual ~Printable() = default;
};

class Report : public Printable {
public:
    void print() override {
        std::cout << "Printing report...\n";
    }
};`,
        },
        {
          lang: 'js',
          code: `// JS: no interface keyword — duck typing only
// A value "implements" a contract if it has the right shape

class Report {
    print() {
        console.log('Printing report...');
    }
}

// No explicit declaration needed — if it has print(), it works
function printAll(items) {
    items.forEach(item => item.print());
}`,
        },
        {
          lang: 'ts',
          code: `// TS: structural typing — shape matters, not name
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
const p: Printable = obj; // valid`,
        },
      ],
      callout: {
        variant: 'info',
        content: 'TS uses **structural typing** (duck typing). A class does not need to declare `implements Foo` to be assignable to `Foo` — it just needs the right shape. Java uses **nominal typing** — you must explicitly declare the relationship.',
      },
    },
    {
      id: 'interface-extend',
      title: 'Interface Inheritance',
      tag: 'similar',
      panels: [
        {
          lang: 'java',
          code: `public interface Shape {
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
}`,
        },
        {
          lang: 'cpp',
          code: `class Shape {
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
};`,
        },
        {
          lang: 'js',
          code: `// JS: no interfaces — mix behaviour with mixins or composition
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
}`,
        },
        {
          lang: 'ts',
          code: `interface Shape {
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
}`,
        },
      ],
    },
    {
      id: 'interface-vs-type',
      title: 'interface vs type (TS)',
      tag: 'similar',
      note: 'TS only',
      panels: [
        {
          lang: 'ts',
          code: `// interface: open (can be re-opened / merged)
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
// - use type for unions, tuples, and mapped types`,
        },
      ],
    },
  ],
}

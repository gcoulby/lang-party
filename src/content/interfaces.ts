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
          lang: 'python',
          code: `from typing import Protocol

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
`,
        },
        {
          lang: 'go',
          code: `// Go interfaces are implicit — no "implements" keyword
type Drawable interface {
    Draw()
    Area() float64
}

type Circle struct{ Radius float64 }

func (c Circle) Draw()         { fmt.Printf("circle r=%.1f\\n", c.Radius) }
func (c Circle) Area() float64 { return math.Pi * c.Radius * c.Radius }

func render(d Drawable) { d.Draw() }

render(Circle{Radius: 5})  // Circle satisfies Drawable automatically
`,
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
          lang: 'python',
          code: `from typing import Protocol
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
`,
        },
        {
          lang: 'go',
          code: `type Reader interface { Read(p []byte) (n int, err error) }
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
`,
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
          lang: 'python',
          code: `from typing import TypedDict, Protocol
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
`,
        },
        {
          lang: 'go',
          code: `// struct: data shape
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
`,
        },
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

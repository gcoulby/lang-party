import type { Section } from '../types/content'

export const modules: Section = {
  id: 'modules',
  slug: 'modules',
  group: 'basics',
  title: 'Modules',
  description: 'Import, export, namespaces, and module systems.',
  concepts: [
    {
      id: 'modules-export-import',
      title: 'Export & Import',
      tag: 'breaking',
      panels: [
        {
          lang: 'java',
          code: `// Java: package + import
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

int result = MathUtils.add(1, 2);`,
        },
        {
          lang: 'cpp',
          code: `// C++: headers + #include (traditional)
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
int result = utils::add(1, 2);`,
        },
        {
          lang: 'js',
          code: `// Named exports
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
math.add(1, 2);`,
        },
        {
          lang: 'ts',
          code: `// Named exports with types
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
export type { MathOp } from './mathUtils';`,
        },
      ],
      callout: {
        variant: 'info',
        content: 'Use `import type` in TS for type-only imports. These are fully erased at compile time and cannot cause circular dependency issues at runtime.',
      },
    },
    {
      id: 'modules-namespaces',
      title: 'Namespaces',
      tag: 'similar',
      panels: [
        {
          lang: 'java',
          code: `// Java packages are the namespace system
package com.myapp.domain.user;

// Fully qualified name avoids ambiguity
java.util.Date d1 = new java.util.Date();
// vs
java.sql.Date  d2 = new java.sql.Date(0L);`,
        },
        {
          lang: 'cpp',
          code: `namespace myapp {
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
namespace dom = myapp::domain;`,
        },
        {
          lang: 'js',
          code: `// JS has no namespace keyword
// Use module files + import/export for scoping

// Or group related exports in an object:
const StringUtils = {
    trim: (s) => s.trim(),
    truncate: (s, n) => s.slice(0, n),
};

export { StringUtils };`,
        },
        {
          lang: 'ts',
          code: `// TS has namespace keyword (avoid for new code — use modules)
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
}`,
        },
      ],
    },
    {
      id: 'modules-cjs-esm',
      title: 'CommonJS vs ESM',
      tag: 'gotcha',
      note: 'JS/TS only',
      panels: [
        {
          lang: 'js',
          code: `// CommonJS (Node.js legacy, .cjs files)
const path   = require('path');
const { add } = require('./mathUtils');
module.exports = { result: add(1, 2) };

// ES Modules (modern, .mjs or "type":"module" in package.json)
import path from 'path';
import { add } from './mathUtils.js'; // .js required in ESM!
export const result = add(1, 2);

// Top-level await — ESM only
const data = await fetch('/api/data').then(r => r.json());`,
        },
        {
          lang: 'ts',
          code: `// TS always uses ESM syntax — tsc or bundler converts
import path from 'path';
import { add } from './mathUtils';  // .ts ext omitted

// tsconfig: "module": "ESNext" + "moduleResolution": "bundler"
// handles the .js extension requirement automatically

// Dynamic import — available in both CJS and ESM
const { heavy } = await import('./heavyModule');

// Type for dynamic import
type LazyModule = typeof import('./heavyModule');`,
        },
      ],
      callout: {
        variant: 'warn',
        content: 'Mixing CJS and ESM causes subtle runtime errors. Pick one. For new projects, use ESM (`"type": "module"` in package.json). For Node.js libraries, output both with a bundler.',
      },
    },
  ],
}

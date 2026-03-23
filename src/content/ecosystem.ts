import type { Section } from '../types/content'

export const ecosystem: Section = {
  id: 'ecosystem',
  slug: 'ecosystem',
  group: 'ecosystem',
  title: 'Tool Equivalents',
  description: 'Java and C++ tools mapped to their JS/TS equivalents. ★ = recommended first pick.',
  concepts: [],
  ecoMappings: [
    // ── Build & Package ──────────────────────────────────────────────────────
    {
      from: 'Maven / Gradle',
      fromLabel: 'Java',
      to: ['★ pnpm', 'npm', 'yarn'],
      note: 'pnpm is fastest and strictest about dependency isolation. All three use package.json.',
    },
    {
      from: 'Make / CMake',
      fromLabel: 'C++',
      to: ['★ pnpm scripts', 'Makefile', 'just'],
      note: 'Most JS projects use npm/pnpm scripts for build tasks.',
    },
    {
      from: 'javac / java',
      fromLabel: 'Java',
      to: ['★ tsc', 'esbuild', 'swc'],
      note: 'tsc is the reference compiler. esbuild and swc are faster but skip type-checking.',
    },
    {
      from: 'g++ / clang++',
      fromLabel: 'C++',
      to: ['★ tsc', 'esbuild', 'swc'],
      note: 'Same as Java — tsc for correctness, esbuild/swc for speed in CI.',
    },
    // ── Bundler ───────────────────────────────────────────────────────────────
    {
      from: 'JAR / WAR packaging',
      fromLabel: 'Java',
      to: ['★ Vite', 'esbuild', 'Rollup', 'webpack'],
      note: 'Vite is standard for web apps. Rollup for libraries. webpack for legacy projects.',
    },
    {
      from: 'Static lib / .so / .dll',
      fromLabel: 'C++',
      to: ['★ npm package', 'Rollup library mode'],
      note: 'Publish to npm. Use Rollup to generate CJS + ESM dual output.',
    },
    // ── Testing ───────────────────────────────────────────────────────────────
    {
      from: 'JUnit 5',
      fromLabel: 'Java',
      to: ['★ Vitest', 'Jest'],
      note: 'Vitest is the modern choice for Vite projects. Jest for legacy/non-Vite.',
    },
    {
      from: 'Google Test / Catch2',
      fromLabel: 'C++',
      to: ['★ Vitest', 'Jest'],
      note: 'Same ecosystem — pick based on your bundler.',
    },
    {
      from: 'Mockito',
      fromLabel: 'Java',
      to: ['★ Vitest (vi.fn, vi.mock)', 'Jest mocks'],
      note: 'Built-in mocking — no separate library needed.',
    },
    {
      from: 'Selenium',
      fromLabel: 'Java',
      to: ['★ Playwright', 'Cypress'],
      note: 'Playwright is the modern end-to-end standard. Works across all browsers.',
    },
    // ── Linting & Formatting ──────────────────────────────────────────────────
    {
      from: 'Checkstyle / PMD',
      fromLabel: 'Java',
      to: ['★ ESLint', 'oxlint', 'Biome'],
      note: 'ESLint is most configurable. Biome combines linting + formatting in one tool.',
    },
    {
      from: 'clang-format / clang-tidy',
      fromLabel: 'C++',
      to: ['★ Prettier', 'Biome'],
      note: 'Prettier for formatting only. Biome for formatting + linting.',
    },
    // ── Runtime ───────────────────────────────────────────────────────────────
    {
      from: 'JVM',
      fromLabel: 'Java',
      to: ['★ Node.js', 'Bun', 'Deno'],
      note: 'Node.js is the standard. Bun is faster for scripts. Deno for security-first workloads.',
    },
    {
      from: 'Native executable',
      fromLabel: 'C++',
      to: ['★ Node.js', 'Bun compile', 'Deno compile'],
      note: 'Node.js for servers. Bun compile / Deno compile for single-file executables.',
    },
    // ── Web Framework ─────────────────────────────────────────────────────────
    {
      from: 'Spring Boot',
      fromLabel: 'Java',
      to: ['★ Fastify', 'Express', 'Hono', 'NestJS'],
      note: 'Fastify for performance. NestJS if you want Spring-like structure. Hono for edge runtimes.',
    },
    {
      from: 'Crow / Drogon',
      fromLabel: 'C++',
      to: ['★ Fastify', 'Hono'],
      note: 'Fastify is the fastest mainstream Node.js server framework.',
    },
    // ── ORM / DB ──────────────────────────────────────────────────────────────
    {
      from: 'Hibernate / JPA',
      fromLabel: 'Java',
      to: ['★ Drizzle ORM', 'Prisma', 'Kysely'],
      note: 'Prisma for DX. Drizzle for type safety + SQL control. Kysely for query builder.',
    },
    // ── Logging ───────────────────────────────────────────────────────────────
    {
      from: 'SLF4J / Logback',
      fromLabel: 'Java',
      to: ['★ pino', 'winston'],
      note: 'pino is the fastest Node.js logger with structured JSON output.',
    },
    // ── Validation / Serialisation ────────────────────────────────────────────
    {
      from: 'Jackson / Gson',
      fromLabel: 'Java',
      to: ['★ zod', 'valibot', 'superjson'],
      note: 'JSON.parse is built-in. Use zod/valibot to validate and infer types from parsed data.',
    },
    {
      from: 'Bean Validation (JSR-380)',
      fromLabel: 'Java',
      to: ['★ zod', 'valibot'],
      note: 'zod schemas double as type definitions and runtime validators.',
    },
    // ── DI Container ──────────────────────────────────────────────────────────
    {
      from: 'Spring IoC / Guice',
      fromLabel: 'Java',
      to: ['★ manual DI (factory functions)', 'tsyringe', 'inversify'],
      note: 'Manual DI is idiomatic in JS/TS. DI containers exist but are uncommon outside NestJS.',
    },
  ],
}

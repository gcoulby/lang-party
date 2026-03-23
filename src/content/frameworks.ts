import type { Section } from '../types/content'

export const frameworks: Section = {
  id: 'frameworks',
  slug: 'frameworks',
  group: 'ecosystem',
  title: 'UI Frameworks',
  description: 'UI and application framework equivalents. ★ = recommended first pick for new projects.',
  concepts: [],
  ecoMappings: [
    // ── Component Frameworks ──────────────────────────────────────────────────
    {
      from: 'JavaFX',
      fromLabel: 'Java',
      to: ['★ React', 'Vue', 'Svelte', 'Angular'],
      note: 'React is the dominant choice. Vue is gentler for beginners. Svelte compiles away the runtime. Angular for large teams wanting a full framework.',
    },
    {
      from: 'Qt (QML)',
      fromLabel: 'C++',
      to: ['★ React', 'Vue', 'Svelte'],
      note: 'React maps best to Qt\'s declarative component model. All three compile to efficient DOM updates.',
    },
    {
      from: 'Swing / AWT',
      fromLabel: 'Java',
      to: ['★ React', 'Angular'],
      note: 'Swing\'s imperative mutation model is closest to Angular\'s two-way binding. React\'s unidirectional flow is the modern standard.',
    },
    {
      from: 'wxWidgets / GTK (C++)',
      fromLabel: 'C++',
      to: ['★ React', 'Svelte'],
      note: 'Widget-based GUI maps loosely to component trees. Svelte\'s compiled output is closest to native widget efficiency.',
    },
    // ── Meta-Frameworks ───────────────────────────────────────────────────────
    {
      from: 'Spring MVC (server-rendered)',
      fromLabel: 'Java',
      to: ['★ Next.js', 'Remix', 'Astro'],
      note: 'Next.js for React-based SSR/SSG. Remix for form-centric apps. Astro for content-heavy static sites.',
    },
    {
      from: 'Thymeleaf / JSP',
      fromLabel: 'Java',
      to: ['★ Astro', 'Next.js'],
      note: 'Server-side templating maps directly to Astro (zero-JS by default) or Next.js server components.',
    },
    {
      from: 'JUCE (audio/desktop)',
      fromLabel: 'C++',
      to: ['★ Electron', 'Tauri'],
      note: 'Electron bundles a Chromium runtime (large but battle-tested). Tauri uses the OS WebView (smaller, Rust backend).',
    },
    // ── State Management ──────────────────────────────────────────────────────
    {
      from: 'JavaFX Properties / Bindings',
      fromLabel: 'Java',
      to: ['★ Zustand', 'Jotai', 'Redux Toolkit'],
      note: 'Zustand for simple shared state. Jotai for atomic state. Redux Toolkit for complex event-sourced state.',
    },
    {
      from: 'Qt Signals & Slots',
      fromLabel: 'C++',
      to: ['★ Zustand', 'Jotai'],
      note: 'Signals/slots map to reactive stores. Jotai atoms are the closest conceptual equivalent.',
    },
    // ── Cross-Platform Desktop ────────────────────────────────────────────────
    {
      from: 'Electron (Java wrapper)',
      fromLabel: 'Java',
      to: ['★ Electron', 'Tauri'],
      note: 'Electron is the standard for cross-platform desktop apps. Tauri is faster and lighter using OS WebViews.',
    },
    {
      from: 'Qt (cross-platform native)',
      fromLabel: 'C++',
      to: ['★ Tauri', 'Electron'],
      note: 'Tauri is the modern lightweight option. Electron for maximum browser API compatibility.',
    },
    // ── Mobile ────────────────────────────────────────────────────────────────
    {
      from: 'Android (Java)',
      fromLabel: 'Java',
      to: ['★ React Native', 'Expo'],
      note: 'React Native for full native bridge. Expo adds managed workflow and OTA updates on top of React Native.',
    },
    {
      from: 'Qt Mobile',
      fromLabel: 'C++',
      to: ['★ React Native', 'Capacitor'],
      note: 'Capacitor wraps a web app in a native shell — minimal native code. React Native for performance-critical mobile apps.',
    },
  ],
}

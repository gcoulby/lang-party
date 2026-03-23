import '@testing-library/jest-dom'

// Web Workers are not supported in jsdom. Provide a no-op stub so components
// that create workers (e.g. SearchBar via useSearch) don't throw.
class WorkerStub {
  onmessage: ((e: MessageEvent) => void) | null = null
  postMessage() {}
  terminate() {}
  addEventListener() {}
  removeEventListener() {}
}
global.Worker = WorkerStub as unknown as typeof Worker

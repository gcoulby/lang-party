import { render, screen } from '@testing-library/react'
import { ConceptCard } from './ConceptCard'
import type { ConceptEntry } from '../../types/content'

const BASE_CONCEPT: ConceptEntry = {
  id: 'test-concept',
  title: 'Test Concept',
  panels: [
    { lang: 'java', code: 'int x = 1;' },
    { lang: 'ts', code: 'const x = 1' },
  ],
}

describe('ConceptCard', () => {
  it('renders the concept title', () => {
    render(<ConceptCard concept={BASE_CONCEPT} fromLang="java" toLang="ts" />)
    expect(screen.getByRole('heading', { name: 'Test Concept' })).toBeInTheDocument()
  })

  it('shows only fromLang and toLang panels', () => {
    render(<ConceptCard concept={BASE_CONCEPT} fromLang="java" toLang="ts" />)
    expect(screen.getByText('Java')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('hides panels not matching fromLang or toLang', () => {
    const concept: ConceptEntry = {
      ...BASE_CONCEPT,
      panels: [
        { lang: 'java', code: 'int x = 1;' },
        { lang: 'cpp', code: 'int x = 1;' },
        { lang: 'ts', code: 'const x = 1' },
      ],
    }
    render(<ConceptCard concept={concept} fromLang="java" toLang="ts" />)
    expect(screen.getByText('Java')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.queryByText('C++')).not.toBeInTheDocument()
  })

  it('shows Python panel when fromLang=python', () => {
    const concept: ConceptEntry = {
      ...BASE_CONCEPT,
      panels: [
        { lang: 'java', code: 'int x = 1;' },
        { lang: 'python', code: 'x = 1' },
        { lang: 'ts', code: 'const x = 1' },
      ],
    }
    render(<ConceptCard concept={concept} fromLang="python" toLang="ts" />)
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.queryByText('Java')).not.toBeInTheDocument()
  })

  it('shows JS panel when toLang=js', () => {
    const concept: ConceptEntry = {
      ...BASE_CONCEPT,
      panels: [
        { lang: 'java', code: 'int x = 1;' },
        { lang: 'js', code: 'const x = 1' },
        { lang: 'ts', code: 'const x = 1' },
      ],
    }
    render(<ConceptCard concept={concept} fromLang="java" toLang="js" />)
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
    expect(screen.queryByText('TypeScript')).not.toBeInTheDocument()
  })

  it('renders tag badge', () => {
    const concept: ConceptEntry = { ...BASE_CONCEPT, tag: 'breaking' }
    render(<ConceptCard concept={concept} fromLang="java" toLang="ts" />)
    expect(screen.getByText('breaking')).toBeInTheDocument()
  })

  it('renders note', () => {
    const concept: ConceptEntry = { ...BASE_CONCEPT, note: 'See MDN' }
    render(<ConceptCard concept={concept} fromLang="java" toLang="ts" />)
    expect(screen.getByText('See MDN')).toBeInTheDocument()
  })

  it('renders callout when present', () => {
    const concept: ConceptEntry = {
      ...BASE_CONCEPT,
      callout: { variant: 'warn', content: 'Be careful here.' },
    }
    render(<ConceptCard concept={concept} fromLang="java" toLang="ts" />)
    expect(screen.getByRole('note')).toBeInTheDocument()
    expect(screen.getByText('Be careful here.')).toBeInTheDocument()
  })

  it('does not render callout when absent', () => {
    render(<ConceptCard concept={BASE_CONCEPT} fromLang="java" toLang="ts" />)
    expect(screen.queryByRole('note')).not.toBeInTheDocument()
  })
})

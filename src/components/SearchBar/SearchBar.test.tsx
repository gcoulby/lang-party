import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { SearchBar } from './SearchBar'

// Mock the useSearch hook so tests don't depend on the Web Worker
vi.mock('../../hooks/useSearch', () => ({
  useSearch: () => ({
    query: '',
    results: [],
    setQuery: vi.fn(),
    clear: vi.fn(),
  }),
}))

import * as useSearchModule from '../../hooks/useSearch'

function makeSearchState(overrides: Partial<ReturnType<typeof useSearchModule.useSearch>>) {
  return {
    query: '',
    results: [],
    setQuery: vi.fn(),
    clear: vi.fn(),
    ...overrides,
  }
}

describe('SearchBar', () => {
  it('renders a search input', () => {
    render(<SearchBar onSelect={vi.fn()} />)
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
  })

  it('has accessible label', () => {
    render(<SearchBar onSelect={vi.fn()} />)
    expect(screen.getByLabelText(/search sections and concepts/i)).toBeInTheDocument()
  })

  it('shows placeholder text', () => {
    render(<SearchBar onSelect={vi.fn()} />)
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument()
  })

  it('calls setQuery when user types', async () => {
    const setQuery = vi.fn()
    vi.spyOn(useSearchModule, 'useSearch').mockReturnValue(makeSearchState({ setQuery }))

    const user = userEvent.setup()
    render(<SearchBar onSelect={vi.fn()} />)
    await user.type(screen.getByRole('searchbox'), 'var')
    expect(setQuery).toHaveBeenCalledWith(expect.stringContaining('v'))
  })

  it('renders search results when present', () => {
    vi.spyOn(useSearchModule, 'useSearch').mockReturnValue(
      makeSearchState({
        query: 'var',
        results: [
          { sectionId: 'variables', sectionTitle: 'Variables & Types', label: 'Variables & Types' },
          { sectionId: 'variables', sectionTitle: 'Variables & Types', conceptId: 'declaration', conceptTitle: 'Variable Declaration', label: 'Variable Declaration — Variables & Types' },
        ],
      }),
    )
    render(<SearchBar onSelect={vi.fn()} />)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getAllByRole('option')).toHaveLength(2)
  })

  it('calls onSelect with sectionId when result is clicked', () => {
    const onSelect = vi.fn()
    vi.spyOn(useSearchModule, 'useSearch').mockReturnValue(
      makeSearchState({
        query: 'var',
        results: [
          { sectionId: 'variables', sectionTitle: 'Variables & Types', label: 'Variables & Types' },
        ],
      }),
    )
    render(<SearchBar onSelect={onSelect} />)
    const option = screen.getByRole('option')
    fireEvent.mouseDown(option)
    expect(onSelect).toHaveBeenCalledWith('variables')
  })

  it('does not render dropdown when results are empty', () => {
    vi.spyOn(useSearchModule, 'useSearch').mockReturnValue(makeSearchState({ query: '' }))
    render(<SearchBar onSelect={vi.fn()} />)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })
})

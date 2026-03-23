import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the logo', () => {
    render(<App />)
    const header = screen.getByRole('banner')
    expect(header).toHaveTextContent('lang')
    expect(header).toHaveTextContent('party')
  })

  it('renders from-language and to-language selects', () => {
    render(<App />)
    expect(screen.getByLabelText(/source language/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/target language/i)).toBeInTheDocument()
  })

  it('defaults to Java as source and TypeScript as target', () => {
    render(<App />)
    const fromSelect = screen.getByLabelText(/source language/i) as HTMLSelectElement
    const toSelect = screen.getByLabelText(/target language/i) as HTMLSelectElement
    expect(fromSelect.value).toBe('java')
    expect(toSelect.value).toBe('ts')
  })

  it('changes source language when from-select changes', async () => {
    const user = userEvent.setup()
    render(<App />)
    const fromSelect = screen.getByLabelText(/source language/i)
    await user.selectOptions(fromSelect, 'python')
    expect((fromSelect as HTMLSelectElement).value).toBe('python')
  })

  it('changes target language when to-select changes', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toSelect = screen.getByLabelText(/target language/i)
    await user.selectOptions(toSelect, 'js')
    expect((toSelect as HTMLSelectElement).value).toBe('js')
  })

  it('swaps when from-select is set to the current to-language', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Default: from=java, to=ts. Select 'ts' as from — to should swap to 'java'
    const fromSelect = screen.getByLabelText(/source language/i) as HTMLSelectElement
    const toSelect = screen.getByLabelText(/target language/i) as HTMLSelectElement
    await user.selectOptions(fromSelect, 'ts')
    expect(fromSelect.value).toBe('ts')
    expect(toSelect.value).toBe('java')
  })

  it('renders sidebar nav with section groups', () => {
    render(<App />)
    expect(screen.getAllByText('Language Basics').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Key Differences').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Ecosystem').length).toBeGreaterThanOrEqual(1)
  })

  it('renders all navigation sections', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /variables/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /functions/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /gotchas/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /tool equivalents/i })).toBeInTheDocument()
  })

  it('switches active section when nav item is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const functionsBtn = screen.getByRole('button', { name: /^functions$/i })
    await user.click(functionsBtn)
    expect(functionsBtn).toHaveAttribute('aria-current', 'page')
  })
})

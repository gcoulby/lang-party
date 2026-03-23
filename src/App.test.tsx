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

  it('renders source language toggle buttons', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /java/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /c\+\+/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /both/i })).toBeInTheDocument()
  })

  it('renders target language toggle buttons', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /^js$/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^ts$/i })).toBeInTheDocument()
  })

  it('defaults to Both source and TS target', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /both/i })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: /^ts$/i })).toHaveAttribute('aria-pressed', 'true')
  })

  it('switches source language when pill is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const javaBtn = screen.getByRole('button', { name: /java/i })
    await user.click(javaBtn)
    expect(javaBtn).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: /both/i })).toHaveAttribute('aria-pressed', 'false')
  })

  it('switches target language when pill is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const jsBtn = screen.getByRole('button', { name: /^js$/i })
    await user.click(jsBtn)
    expect(jsBtn).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: /^ts$/i })).toHaveAttribute('aria-pressed', 'false')
  })

  it('renders sidebar nav with section groups', () => {
    render(<App />)
    // These labels appear in both sidebar and section header — use getAllBy
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

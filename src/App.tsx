import { useAppState } from './hooks/useAppState'
import { Layout } from './components/Layout/Layout'

export function App() {
  const state = useAppState()
  return <Layout state={state} />
}

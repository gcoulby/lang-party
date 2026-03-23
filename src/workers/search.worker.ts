import { SECTIONS } from '../content/index'
import { buildIndex, search } from './searchIndex'

const INDEX = buildIndex(SECTIONS)

self.onmessage = (e: MessageEvent<string>) => {
  const results = search(INDEX, e.data)
  self.postMessage(results)
}

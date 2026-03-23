import type { Lang } from '../types/content'

export type TokenType =
  | 'keyword'
  | 'type'
  | 'string'
  | 'comment'
  | 'number'
  | 'fn'
  | 'op'
  | 'text'

export interface Token {
  type: TokenType
  value: string
}

// ── Per-language keyword sets ──────────────────────────────────────────────

const JAVA_KEYWORDS = new Set([
  'abstract', 'assert', 'boolean', 'break', 'byte', 'case', 'catch', 'char',
  'class', 'const', 'continue', 'default', 'do', 'double', 'else', 'enum',
  'extends', 'final', 'finally', 'float', 'for', 'goto', 'if', 'implements',
  'import', 'instanceof', 'int', 'interface', 'long', 'native', 'new',
  'package', 'private', 'protected', 'public', 'return', 'short', 'static',
  'strictfp', 'super', 'switch', 'synchronized', 'this', 'throw', 'throws',
  'transient', 'try', 'var', 'void', 'volatile', 'while', 'record', 'sealed',
  'permits', 'yield', 'true', 'false', 'null',
])

const CPP_KEYWORDS = new Set([
  'alignas', 'alignof', 'asm', 'auto', 'bool', 'break', 'case', 'catch',
  'char', 'char8_t', 'char16_t', 'char32_t', 'class', 'concept', 'const',
  'consteval', 'constexpr', 'constinit', 'const_cast', 'continue', 'co_await',
  'co_return', 'co_yield', 'decltype', 'default', 'delete', 'do', 'double',
  'dynamic_cast', 'else', 'enum', 'explicit', 'export', 'extern', 'false',
  'float', 'for', 'friend', 'goto', 'if', 'inline', 'int', 'long', 'mutable',
  'namespace', 'new', 'noexcept', 'nullptr', 'operator', 'private', 'protected',
  'public', 'register', 'reinterpret_cast', 'requires', 'return', 'short',
  'signed', 'sizeof', 'static', 'static_assert', 'static_cast', 'struct',
  'switch', 'template', 'this', 'thread_local', 'throw', 'true', 'try',
  'typedef', 'typeid', 'typename', 'union', 'unsigned', 'using', 'virtual',
  'void', 'volatile', 'wchar_t', 'while',
  // preprocessor
  'include', 'define', 'pragma', 'ifndef', 'ifdef', 'endif', 'undef',
])

const JS_KEYWORDS = new Set([
  'async', 'await', 'break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'export', 'extends', 'false',
  'finally', 'for', 'from', 'function', 'if', 'import', 'in', 'instanceof',
  'let', 'new', 'null', 'of', 'return', 'static', 'super', 'switch', 'this',
  'throw', 'true', 'try', 'typeof', 'undefined', 'var', 'void', 'while',
  'with', 'yield',
])

const TS_KEYWORDS = new Set([
  ...JS_KEYWORDS,
  'abstract', 'as', 'asserts', 'bigint', 'boolean', 'declare', 'enum',
  'implements', 'infer', 'interface', 'is', 'keyof', 'module', 'namespace',
  'never', 'number', 'object', 'override', 'private', 'protected', 'public',
  'readonly', 'satisfies', 'string', 'symbol', 'type', 'unique', 'unknown',
])

const PYTHON_KEYWORDS = new Set([
  'False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await',
  'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except',
  'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is',
  'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try',
  'while', 'with', 'yield',
  // common builtins treated as keywords for highlighting
  'int', 'float', 'str', 'bool', 'list', 'dict', 'set', 'tuple',
  'type', 'object', 'super', 'self', 'cls',
  'print', 'len', 'range', 'enumerate', 'zip', 'map', 'filter',
  'isinstance', 'issubclass', 'hasattr', 'getattr', 'setattr',
  'staticmethod', 'classmethod', 'property', 'abstractmethod',
])

const GO_KEYWORDS = new Set([
  'break', 'case', 'chan', 'const', 'continue', 'default', 'defer',
  'else', 'fallthrough', 'for', 'func', 'go', 'goto', 'if', 'import',
  'interface', 'map', 'package', 'range', 'return', 'select', 'struct',
  'switch', 'type', 'var',
  // predeclared types
  'bool', 'byte', 'complex64', 'complex128', 'error', 'float32', 'float64',
  'int', 'int8', 'int16', 'int32', 'int64', 'rune', 'string', 'uint',
  'uint8', 'uint16', 'uint32', 'uint64', 'uintptr',
  // predeclared values / functions
  'true', 'false', 'nil', 'iota',
  'append', 'cap', 'close', 'copy', 'delete', 'len', 'make', 'new',
  'panic', 'recover',
])

// Types that are PascalCase look like types in all languages.
// These are additional lowercase TS primitives not in keyword set already:
const TS_TYPE_KEYWORDS = new Set(['string', 'number', 'boolean', 'void', 'never', 'any', 'unknown', 'object', 'bigint', 'symbol'])

function getKeywords(lang: Lang): Set<string> {
  switch (lang) {
    case 'java':   return JAVA_KEYWORDS
    case 'cpp':    return CPP_KEYWORDS
    case 'python': return PYTHON_KEYWORDS
    case 'go':     return GO_KEYWORDS
    case 'js':     return JS_KEYWORDS
    case 'ts':     return TS_KEYWORDS
  }
}

// ── Tokeniser ─────────────────────────────────────────────────────────────

export function highlight(code: string, lang: Lang): Token[] {
  const tokens: Token[] = []
  const keywords = getKeywords(lang)
  let i = 0
  const len = code.length

  while (i < len) {
    // Single-line comment
    if (code[i] === '/' && code[i + 1] === '/') {
      const end = code.indexOf('\n', i)
      const value = end === -1 ? code.slice(i) : code.slice(i, end)
      tokens.push({ type: 'comment', value })
      i += value.length
      continue
    }

    // Multi-line comment
    if (code[i] === '/' && code[i + 1] === '*') {
      const end = code.indexOf('*/', i + 2)
      const value = end === -1 ? code.slice(i) : code.slice(i, end + 2)
      tokens.push({ type: 'comment', value })
      i += value.length
      continue
    }

    // Hash comment (Python, shell — also catches C preprocessor directives)
    if (code[i] === '#') {
      const end = code.indexOf('\n', i)
      const value = end === -1 ? code.slice(i) : code.slice(i, end)
      tokens.push({ type: 'comment', value })
      i += value.length
      continue
    }

    // Template literal (backtick string)
    if (code[i] === '`') {
      let j = i + 1
      while (j < len) {
        if (code[j] === '\\') { j += 2; continue }
        if (code[j] === '`') { j++; break }
        j++
      }
      tokens.push({ type: 'string', value: code.slice(i, j) })
      i = j
      continue
    }

    // Triple-quoted string (Python docstrings: """...""" or '''...''')
    if (
      (code[i] === '"' && code[i + 1] === '"' && code[i + 2] === '"') ||
      (code[i] === "'" && code[i + 1] === "'" && code[i + 2] === "'")
    ) {
      const delim = code.slice(i, i + 3)
      const end = code.indexOf(delim, i + 3)
      const value = end === -1 ? code.slice(i) : code.slice(i, end + 3)
      tokens.push({ type: 'string', value })
      i += value.length
      continue
    }

    // Double-quoted string
    if (code[i] === '"') {
      let j = i + 1
      while (j < len) {
        if (code[j] === '\\') { j += 2; continue }
        if (code[j] === '"') { j++; break }
        if (code[j] === '\n') break
        j++
      }
      tokens.push({ type: 'string', value: code.slice(i, j) })
      i = j
      continue
    }

    // Single-quoted string / character literal
    if (code[i] === "'") {
      let j = i + 1
      while (j < len) {
        if (code[j] === '\\') { j += 2; continue }
        if (code[j] === "'") { j++; break }
        if (code[j] === '\n') break
        j++
      }
      tokens.push({ type: 'string', value: code.slice(i, j) })
      i = j
      continue
    }

    // Number: hex, binary, float, integer
    if (
      /[0-9]/.test(code[i]) ||
      (code[i] === '.' && i + 1 < len && /[0-9]/.test(code[i + 1]))
    ) {
      let j = i
      if (code[j] === '0' && (code[j + 1] === 'x' || code[j + 1] === 'X')) {
        j += 2
        while (j < len && /[0-9a-fA-F_]/.test(code[j])) j++
      } else if (code[j] === '0' && (code[j + 1] === 'b' || code[j + 1] === 'B')) {
        j += 2
        while (j < len && /[01_]/.test(code[j])) j++
      } else {
        while (j < len && /[0-9_]/.test(code[j])) j++
        if (j < len && code[j] === '.') {
          j++
          while (j < len && /[0-9_]/.test(code[j])) j++
        }
        if (j < len && (code[j] === 'e' || code[j] === 'E')) {
          j++
          if (j < len && (code[j] === '+' || code[j] === '-')) j++
          while (j < len && /[0-9]/.test(code[j])) j++
        }
        // suffix: f, d, l, L, u, U
        if (j < len && /[fFdDlLuU]/.test(code[j])) j++
      }
      tokens.push({ type: 'number', value: code.slice(i, j) })
      i = j
      continue
    }

    // Identifier (keyword, type, function name, or plain identifier)
    if (/[a-zA-Z_$]/.test(code[i])) {
      let j = i
      while (j < len && /[a-zA-Z0-9_$]/.test(code[j])) j++
      const word = code.slice(i, j)

      // Skip whitespace after identifier to detect function call
      let k = j
      while (k < len && code[k] === ' ') k++

      if (keywords.has(word)) {
        // TS type-keywords get the 'type' token colour when used in type position
        // For simplicity, colour them as keywords (they are keywords in TS)
        tokens.push({ type: 'keyword', value: word })
      } else if (
        // PascalCase = likely a type/class name
        /^[A-Z][a-zA-Z0-9_$]*$/.test(word) ||
        // TS primitive type keywords in type position
        (lang === 'ts' && TS_TYPE_KEYWORDS.has(word) && code[k] !== '(')
      ) {
        tokens.push({ type: 'type', value: word })
      } else if (code[k] === '(') {
        tokens.push({ type: 'fn', value: word })
      } else {
        tokens.push({ type: 'text', value: word })
      }
      i = j
      continue
    }

    // Operators: multi-char first, then single-char
    const opMatch = code.slice(i).match(
      /^(===|!==|:=|=>|->|::|<<|>>|<=|>=|==|!=|\|\||&&|\+\+|--|[+\-*/%&|^~<>=!?:;,.])/
    )
    if (opMatch) {
      tokens.push({ type: 'op', value: opMatch[0] })
      i += opMatch[0].length
      continue
    }

    // Everything else (brackets, whitespace, etc.) — emit as text
    tokens.push({ type: 'text', value: code[i] })
    i++
  }

  return tokens
}

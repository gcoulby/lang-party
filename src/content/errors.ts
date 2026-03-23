import type { Section } from '../types/content'

export const errors: Section = {
  id: 'errors',
  slug: 'errors',
  group: 'basics',
  title: 'Error Handling',
  description: 'Exceptions, checked vs unchecked, error types, and result patterns.',
  concepts: [
    {
      id: 'errors-try-catch',
      title: 'try / catch / finally',
      tag: 'similar',
      panels: [
        {
          lang: 'java',
          code: `try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.err.println("Math error: " + e.getMessage());
} catch (Exception e) {
    System.err.println("Unexpected: " + e);
} finally {
    System.out.println("always runs");
}

// Multi-catch (Java 7+)
try {
    riskyOperation();
} catch (IOException | SQLException e) {
    handleError(e);
}`,
        },
        {
          lang: 'cpp',
          code: `try {
    int result = riskyOperation();
} catch (const std::invalid_argument& e) {
    std::cerr << "Invalid arg: " << e.what() << "\n";
} catch (const std::exception& e) {
    std::cerr << "Error: " << e.what() << "\n";
} catch (...) {
    std::cerr << "Unknown error\n";
}

// C++ has no finally — use RAII or scope_exit
{
    std::ifstream file("data.txt");
    // file closes automatically when scope exits`,
        },
        {
          lang: 'js',
          code: `try {
    const result = JSON.parse(badJson);
} catch (err) {
    // err can be anything — no type guarantee
    console.error(err.message);
} finally {
    cleanup();
}

// Rethrowing
try {
    riskyOp();
} catch (err) {
    if (err instanceof TypeError) throw err;
    console.warn('recoverable:', err);
}`,
        },
        {
          lang: 'ts',
          code: `try {
    const result = JSON.parse(badJson);
} catch (err) {
    // err is unknown in strict TS — must narrow
    if (err instanceof Error) {
        console.error(err.message);
    } else {
        console.error(String(err));
    }
} finally {
    cleanup();
}`,
        },
      ],
      callout: {
        variant: 'warn',
        content: 'In TS (and modern JS), caught errors are typed `unknown`, not `Error`. Always check `err instanceof Error` before accessing `.message`.',
      },
    },
    {
      id: 'errors-custom',
      title: 'Custom Error Types',
      tag: 'similar',
      panels: [
        {
          lang: 'java',
          code: `// Checked exception (must be declared or caught)
public class ValidationException extends Exception {
    private final String field;

    public ValidationException(String field, String msg) {
        super(msg);
        this.field = field;
    }

    public String getField() { return field; }
}

// Unchecked exception
public class AppError extends RuntimeException {
    public AppError(String message) { super(message); }
    public AppError(String message, Throwable cause) {
        super(message, cause);
    }
}`,
        },
        {
          lang: 'cpp',
          code: `#include <stdexcept>

class ValidationError : public std::runtime_error {
public:
    ValidationError(const std::string& field,
                    const std::string& msg)
        : std::runtime_error(msg), field_(field) {}

    const std::string& field() const { return field_; }

private:
    std::string field_;
};

// Throw and catch
throw ValidationError("email", "invalid format");`,
        },
        {
          lang: 'js',
          code: `class ValidationError extends Error {
    constructor(field, message) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

try {
    throw new ValidationError('email', 'invalid format');
} catch (err) {
    if (err instanceof ValidationError) {
        console.error(err.field, err.message);
    }
}`,
        },
        {
          lang: 'ts',
          code: `class ValidationError extends Error {
    readonly name = 'ValidationError' as const;

    constructor(
        readonly field: string,
        message: string,
    ) {
        super(message);
    }
}

try {
    throw new ValidationError('email', 'invalid format');
} catch (err) {
    if (err instanceof ValidationError) {
        // err.field and err.message typed correctly
        console.error(\`\${err.field}: \${err.message}\`);
    }
}`,
        },
      ],
    },
    {
      id: 'errors-result',
      title: 'Result / Either Pattern',
      tag: 'breaking',
      panels: [
        {
          lang: 'java',
          code: `// Java uses Optional or throws for errors
// No built-in Result type, but can build one:
public sealed interface Result<T>
    permits Result.Ok, Result.Err {

    record Ok<T>(T value) implements Result<T> {}
    record Err<T>(String error) implements Result<T> {}
}

Result<Integer> parse(String s) {
    try {
        return new Result.Ok<>(Integer.parseInt(s));
    } catch (NumberFormatException e) {
        return new Result.Err<>("not a number: " + s);
    }
}`,
        },
        {
          lang: 'cpp',
          code: `// C++23: std::expected
#include <expected>

std::expected<int, std::string>
parseNumber(const std::string& s) {
    try {
        return std::stoi(s);
    } catch (...) {
        return std::unexpected("not a number: " + s);
    }
}

auto result = parseNumber("42");
if (result) {
    std::cout << *result;
} else {
    std::cerr << result.error();
}`,
        },
        {
          lang: 'js',
          code: `// Common pattern: return [error, value] tuple
function parseNumber(s) {
    const n = Number(s);
    if (isNaN(n)) return [new Error('not a number'), null];
    return [null, n];
}

const [err, value] = parseNumber('42');
if (err) {
    console.error(err.message);
} else {
    console.log(value);
}`,
        },
        {
          lang: 'ts',
          code: `// Discriminated union Result type
type Result<T, E = Error> =
    | { ok: true;  value: T }
    | { ok: false; error: E }

function parseNumber(s: string): Result<number, string> {
    const n = Number(s);
    if (isNaN(n)) return { ok: false, error: 'not a number' };
    return { ok: true, value: n };
}

const result = parseNumber('42');
if (result.ok) {
    console.log(result.value); // number
} else {
    console.error(result.error); // string
}`,
        },
      ],
      callout: {
        variant: 'info',
        content: 'The Result/Either pattern avoids exceptions for expected failures (validation, parsing). Reserve `throw` for truly unexpected states.',
      },
    },
  ],
}

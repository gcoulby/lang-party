import type { Section } from '../types/content'

export const async_: Section = {
  id: 'async',
  slug: 'async',
  group: 'basics',
  title: 'Async',
  description: 'Promises, async/await, futures, and concurrent patterns.',
  concepts: [
    {
      id: 'async-promise-future',
      title: 'Promise / Future / CompletableFuture',
      tag: 'similar',
      panels: [
        {
          lang: 'java',
          code: `// Java: CompletableFuture (Java 8+)
CompletableFuture<String> future =
    CompletableFuture.supplyAsync(() -> {
        return fetchData();  // runs on ForkJoinPool
    });

future
    .thenApply(data -> data.toUpperCase())
    .thenAccept(result -> System.out.println(result))
    .exceptionally(err -> {
        System.err.println("Failed: " + err.getMessage());
        return null;
    });`,
        },
        {
          lang: 'cpp',
          code: `// C++11: std::future / std::async
#include <future>

std::future<std::string> future =
    std::async(std::launch::async, []() {
        return fetchData();
    });

// Blocks until result is available
try {
    std::string result = future.get();
    std::cout << result << "\n";
} catch (const std::exception& e) {
    std::cerr << "Failed: " << e.what() << "\n";
}`,
        },
        {
          lang: 'python',
          code: `import asyncio

# Python uses coroutines instead of Promises
async def fetch_data() -> str:
    await asyncio.sleep(1)  # non-blocking pause
    return "data"

# asyncio.gather = Promise.all
async def main() -> None:
    a, b = await asyncio.gather(fetch_data(), fetch_data())
    print(a, b)

asyncio.run(main())
`,
        },
        {
          lang: 'js',
          code: `// Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), 1000);
});

promise
    .then(result => console.log(result))
    .catch(err   => console.error(err))
    .finally(()  => console.log('cleanup'));

// Promise.all — parallel
Promise.all([fetchA(), fetchB()])
    .then(([a, b]) => console.log(a, b));`,
        },
        {
          lang: 'ts',
          code: `// Promise<T> carries the resolved type
const promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve('done'), 1000);
});

promise.then((result: string) => console.log(result));

// Promise.all with typed tuple
const [a, b]: [User, Post[]] = await Promise.all([
    fetchUser(1),
    fetchPosts(1),
]);`,
        },
      ],
    },
    {
      id: 'async-await',
      title: 'async / await',
      tag: 'similar',
      panels: [
        {
          lang: 'java',
          code: `// Java has no async/await — use CompletableFuture chains
// or Java 21 virtual threads (Project Loom)

// Virtual threads (Java 21+)
try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
    Future<String> user  = scope.fork(() -> fetchUser(1));
    Future<Post[]> posts = scope.fork(() -> fetchPosts(1));

    scope.join().throwIfFailed();
    process(user.get(), posts.get());
}`,
        },
        {
          lang: 'cpp',
          code: `// C++20 coroutines — low-level, needs a framework
// (cppcoro, Asio, or similar)
#include <cppcoro/task.hpp>

cppcoro::task<std::string> fetchUser(int id) {
    auto response = co_await httpGet("/user/" + std::to_string(id));
    co_return response.body();
}

cppcoro::task<void> run() {
    auto user = co_await fetchUser(1);
    std::cout << user << "\n";
}`,
        },
        {
          lang: 'python',
          code: `import asyncio
import aiohttp  # third-party async HTTP client

async def get_user(user_id: int) -> dict:
    async with aiohttp.ClientSession() as session:
        async with session.get(f"/api/users/{user_id}") as resp:
            return await resp.json()

async def main() -> None:
    user = await get_user(1)
    print(user["name"])

asyncio.run(main())
`,
        },
        {
          lang: 'js',
          code: `async function loadProfile(userId) {
    try {
        const user  = await fetchUser(userId);
        const posts = await fetchPosts(userId);
        return { user, posts };
    } catch (err) {
        console.error('load failed:', err);
        throw err;
    }
}

// Parallel — don't await one-by-one if independent
async function loadProfileFast(userId) {
    const [user, posts] = await Promise.all([
        fetchUser(userId),
        fetchPosts(userId),
    ]);
    return { user, posts };
}`,
        },
        {
          lang: 'ts',
          code: `async function loadProfile(userId: number): Promise<Profile> {
    try {
        const user  = await fetchUser(userId);   // User
        const posts = await fetchPosts(userId);  // Post[]
        return { user, posts };
    } catch (err) {
        if (err instanceof NetworkError) throw err;
        throw new Error('load failed', { cause: err });
    }
}

// Parallel
const [user, posts] = await Promise.all([
    fetchUser(userId),
    fetchPosts(userId),
]);`,
        },
      ],
      callout: {
        variant: 'warn',
        content: 'Do **not** `await` in a loop if the calls are independent. Use `Promise.all` for parallel execution — sequential `await` is 2–N× slower.',
      },
    },
    {
      id: 'async-error-handling',
      title: 'Async Error Handling',
      tag: 'gotcha',
      panels: [
        {
          lang: 'java',
          code: `// CompletableFuture: use exceptionally or handle
CompletableFuture.supplyAsync(() -> riskyOp())
    .handle((result, err) -> {
        if (err != null) return "fallback";
        return result;
    });`,
        },
        {
          lang: 'cpp',
          code: `// std::future: exception propagated through get()
auto f = std::async(std::launch::async, []() {
    if (fail) throw std::runtime_error("failed");
    return 42;
});

try {
    int val = f.get(); // exception re-thrown here
} catch (const std::runtime_error& e) { ... }`,
        },
        {
          lang: 'python',
          code: `import asyncio

async def risky() -> str:
    await asyncio.sleep(0.1)
    raise ConnectionError("network timeout")

async def main() -> None:
    # Single await with try/except
    try:
        result = await risky()
    except ConnectionError as e:
        print(f"caught: {e}")

    # gather with return_exceptions=True — like Promise.allSettled
    results = await asyncio.gather(
        risky(), risky(),
        return_exceptions=True,
    )
    for r in results:
        if isinstance(r, Exception):
            print(f"error: {r}")
`,
        },
        {
          lang: 'js',
          code: `// Unhandled promise rejections are a common gotcha
// BAD — rejection swallowed silently
async function bad() {
    fetchData(); // no await, no catch
}

// GOOD
async function good() {
    try {
        const data = await fetchData();
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

// Or attach .catch() to the promise chain
fetchData().then(use).catch(handleError);`,
        },
        {
          lang: 'ts',
          code: `// Unhandled rejections crash Node.js and log in browsers
// Always handle: try/catch or .catch()

process.on('unhandledRejection', (err) => {
    console.error('FATAL:', err);
    process.exit(1);
});

// Wrap in try/catch — err is unknown
async function safe(): Promise<string | null> {
    try {
        return await riskyFetch();
    } catch (err) {
        if (err instanceof Error) console.error(err.message);
        return null;
    }
}`,
        },
      ],
    },
  ],
}

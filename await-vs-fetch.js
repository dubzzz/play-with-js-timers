async function blocker() {
  const start = performance.now();
  while (performance.now() - start < 5_000) {
    await 0;
  }
  console.log("await");
}

fetch("https://google.com").then(() => console.log("fetch"));
blocker();

// Node 20.19.0: await > fetch
// Bun    1.2.8: await > fetch

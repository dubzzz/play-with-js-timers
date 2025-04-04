async function blocker() {
  const start = performance.now();
  while (performance.now() - start < 5_000) {
    await 0;
  }
  console.log("await");
}

setTimeout(() => console.log("timeout0"), 0);
blocker();

// Node 20.19.0: await > timeout0
// Bun    1.2.8: await > timeout0

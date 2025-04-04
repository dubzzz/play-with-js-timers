async function blocker() {
  const start = performance.now();
  while (performance.now() - start < 5_000) {
    await new Promise((r) => setTimeout(r, 0));
  }
  console.log("timeout0");
}

setTimeout(() => console.log("timeout1"), 1);
blocker();

// Node 20.19.0: timeout1 > timeout0
// Bun    1.2.8: timeout1 > timeout0

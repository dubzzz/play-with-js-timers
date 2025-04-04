async function blocker() {
  const start = performance.now();
  while (performance.now() - start < 5_000) {
    await new Promise((r) => setTimeout(r, 0));
  }
  console.log("timeout0");
}

fetch("https://google.com").then(() => console.log("fetch"));
blocker();

// Node 20.19.0: fetch > timeout0
// Bun    1.2.8: fetch > timeout0

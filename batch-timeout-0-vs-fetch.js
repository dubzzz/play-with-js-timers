let count = 0;
const target = 10_000_000;

fetch("https://bing.com").then(() => {
  console.log(
    count === 0
      ? "before the batch"
      : count < target
      ? "in the batch"
      : "after the batch"
  );
});
// I received: in the batch, by increasing the setTimeout-0 below to a higher value (no loop before the timeouts).

const start = performance.now();
while (performance.now() - start < 100) {
  await new Promise((r) => setTimeout(r, 0));
} // With that loop added I also succeeded into having a "in the batch"

for (let i = 0; i !== target; ++i) {
  setTimeout(() => {
    count += 1;
  }, 0);
}

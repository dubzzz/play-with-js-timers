let count = 0;
const target = 1_000_000;

setTimeout(() => {
  console.log(
    count === 0
      ? "before the batch"
      : count < target
      ? "in the batch"
      : "after the batch"
  );
}, 100);
// I received:
// - 1 before (as above)
// - 100 in
// - 10000 after

for (let i = 0; i !== target; ++i) {
  setTimeout(() => {
    count += 1;
  }, 0);
}

// @ts-check

// BEGIN (write your solution here)
const swapKeyValue = (obj) => {
  const [, values] = Object.entries(obj).flat();
  const entries = Object.entries(values);
  entries.map((entry) => {
    const [key] = entry;
    obj.unset(key);
    return entry.reverse();
  }).forEach(([key, value]) => {
    obj.set(key, value);
  });
};

export default swapKeyValue;
// END

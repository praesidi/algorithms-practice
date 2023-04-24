// loop
const fibonacci = (n) => {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  let array = [];
  if (n >= 3) {
    array[0] = 0;
    array[1] = 1;

    for (let i = 2; i <= n; i++) {
      array[i] = array[i - 1] + array[i - 2];
    }
  }
  return array;
};

// recursion
const fibonacciRecursive = (n) => {
  if (n == 0) return [0];
  if (n == 1) return [0, 1];
  const arr = fibonacciRecursive(n - 1);
  return [...arr, arr[n - 1] + arr[n - 2]];
};

// fix your first bug
export const primeNumber = (x) => {
  const n = Math.floor(Math.sqrt(x));
  for (let i = 2; i <= n; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

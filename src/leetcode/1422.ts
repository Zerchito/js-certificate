function maxScore(s: string): number {
  let zeroes = 0;
  let ones = s.split("").filter((str) => str == "1").length;
  let maxSum = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] == "0") {
      zeroes++;
    } else {
      ones--;
    }
    maxSum = Math.max(maxSum, ones + zeroes);
  }
  return maxSum;
}
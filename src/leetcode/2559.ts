function vowelStrings(words: string[], queries: number[][]): number[] {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const n: number = words.length;
  const prefix: number[] = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
      const word = words[i];
      const isValid = vowels.has(word[0]) && vowels.has(word[word.length - 1]);
      prefix[i] = (i > 0 ? prefix[i - 1] : 0) + (isValid ? 1 : 0);
  }

  const results = [];
  for (const [li, ri] of queries) {
      if (li === 0) {
          results.push(prefix[ri]);
      } else {
          results.push(prefix[ri] - prefix[li - 1]);
      }
  }

  return results;
};
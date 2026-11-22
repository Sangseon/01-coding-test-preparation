function solution(prices: Array<number>): Array<number> {
  const durations: Array<number> = Array.from(
    { length: prices.length },
    (_, i) => prices.length - 1 - i,
  );

  const stack: Array<number> = [0];

  for (let i = 1; i < prices.length; i += 1) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const j = stack.pop()!;
      durations[j] = i - j;
    }

    stack.push(i);
  }

  return durations;
}

// 테스트 케이스
console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]

function solution(temperatures: Array<number>): Array<number> {
  const answer: Array<number> = new Array(temperatures.length).fill(0);
  const indexStack: Array<number> = [];

  for (let i = 0; i < temperatures.length; i += 1) {
    while (
      indexStack.length > 0 &&
      temperatures[i] > temperatures[indexStack[indexStack.length - 1]]
    ) {
      const index = indexStack.pop()!;
      answer[index] = i - index;
    }

    indexStack.push(i);
  }

  return answer;
}

// 테스트 케이스
console.log(solution([30, 40, 35, 50, 40, 45, 60])); // [1, 2, 1, 3, 1, 1, 0]
console.log(solution([30, 30, 31, 29, 32])); // [2, 1, 2, 1, 0]
console.log(solution([35, 34, 33, 32])); // [0, 0, 0, 0]

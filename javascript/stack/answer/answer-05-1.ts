function solution(numbers: Array<number>): Array<number> {
  const answer: Array<number> = new Array(numbers.length).fill(-1);
  const indexStack: Array<number> = [];

  for (let i = 0; i < numbers.length; i += 1) {
    while (
      indexStack.length > 0 &&
      numbers[i] > numbers[indexStack[indexStack.length - 1]]
    ) {
      const index = indexStack.pop()!;
      answer[index] = numbers[i];
    }

    indexStack.push(i);
  }

  return answer;
}

// 테스트 케이스
console.log(solution([2, 1, 5, 3, 4])); // [5, 5, -1, 4, -1]
console.log(solution([3, 3, 2, 4])); // [4, 4, 4, -1]
console.log(solution([5, 4, 3, 2, 1])); // [-1, -1, -1, -1, -1]

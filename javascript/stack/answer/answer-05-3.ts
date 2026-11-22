function solution(heights: Array<number>): Array<number> {
  const answer: Array<number> = new Array(heights.length).fill(0);
  const indexStack: Array<number> = [];

  for (let i = 0; i < heights.length; i += 1) {
    while (
      indexStack.length > 0 &&
      heights[i] < heights[indexStack[indexStack.length - 1]]
    ) {
      const index = indexStack.pop()!;
      answer[index] = i - index;
    }

    indexStack.push(i);
  }

  return answer;
}

// 테스트 케이스
console.log(solution([7, 5, 6, 3, 4])); // [1, 2, 1, 0, 0]
console.log(solution([4, 4, 2, 5, 1])); // [2, 1, 2, 1, 0]
console.log(solution([1, 2, 3, 4])); // [0, 0, 0, 0]

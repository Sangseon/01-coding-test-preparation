function solution(answers: Array<number>): Array<number> {
  // 여기에 코드 작성

  const patterns: Array<Array<number>> = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores: Array<number> = new Array(3).fill(0);
  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      // 순환 인덱스(Circular Index)
      if (answer === pattern[i % pattern.length]) {
        scores[j] += 1;
      }
    }
  }

  const maxScore: number = Math.max(...scores);

  const highScores: Array<number> = [];
  for (const [i] of scores.entries()) {
    if (scores[i] === maxScore) {
      highScores.push(i + 1);
    }
  }

  return highScores;
}

// 테스트 케이스
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));

function solution(
  progresses: Array<number>,
  speeds: Array<number>,
): Array<number> {
  const answer: Array<number> = [];

  const daysLeft = progresses.map((progress: number, index: number) =>
    Math.ceil((100 - progress) / speeds[index]),
  );

  let maxDay = daysLeft[0];
  let count = 0;

  for (let i = 0; i < progresses.length; i += 1) {
    if (daysLeft[i] <= maxDay) {
      count += 1;
    } else {
      answer.push(count);
      count = 1;
      maxDay = daysLeft[i];
    }
  }

  answer.push(count);

  return answer;
}

// 테스트 케이스
console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]

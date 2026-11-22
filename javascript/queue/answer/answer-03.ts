function solution(
  cards1: Array<string>,
  cards2: Array<string>,
  goal: Array<string>,
): string {
  let answer: string = "Yes";

  let index1 = 0;
  let index2 = 0;

  for (let i = 0; i < goal.length; i += 1) {
    if (goal[i] === cards1[index1]) {
      index1 += 1;
    } else if (goal[i] === cards2[index2]) {
      index2 += 1;
    } else {
      answer = "No";
      break;
    }
  }

  return answer;
}

// 테스트 케이스
console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"],
  ),
); // "Yes"

console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"],
  ),
); // "No"

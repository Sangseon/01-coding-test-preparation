function solution(numbers: Array<number>): Array<number> {
  // 여기에 코드 작성
  const returnArray = new Array();

  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      returnArray.push(numbers[i] + numbers[j]);
    }
  }

  const uniqueArr = [...new Set(returnArray)];
  return uniqueArr.sort((a, b) => a - b);
}

// 테스트 케이스
console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));

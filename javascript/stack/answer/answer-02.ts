function solution(decimal: number): string {
  const stack: Array<number> = [];

  while (decimal > 0) {
    stack.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }

  let binary: string = "";
  while (stack.length > 0) {
    binary += String(stack.pop());
  }

  return binary;
  //   return decimal.toString(2);
}

// 테스트 케이스
console.log(solution(10)); // "1010"
console.log(solution(27)); // "11011"
console.log(solution(12345)); // "11000000111001"

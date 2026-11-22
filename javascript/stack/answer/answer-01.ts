function solution(s: string): boolean {
  let isValid: boolean = true;
  const stack: Array<string> = [];

  for (const str of s) {
    if (str === "(") {
      stack.push(str);
    } else {
      if (stack.length === 0) {
        isValid = false;
        break;
      } else {
        stack.pop();
      }
    }
  }

  return isValid && stack.length === 0;
}

// 테스트 케이스
console.log(solution("(())()")); // true
// console.log(solution("((())()")); // false

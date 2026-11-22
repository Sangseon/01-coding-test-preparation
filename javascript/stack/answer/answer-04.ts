function solution(s: string): number {
  const stack: Array<string> = [];

  for (let i = 0; i < s.length; i += 1) {
    if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  //    모두 제거할 수 있으면 1
  return stack.length === 0 ? 1 : 0;
}

// 테스트 케이스
console.log(solution("baabaa")); // 1
console.log(solution("cdcd")); // 0

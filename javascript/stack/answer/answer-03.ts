function solution(s: string): number {
  const matchBrackets: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const bracketArr: Array<string> = s.split("");

  let validCount: number = 0;
  for (let i = 0; i < s.length; i += 1) {
    const stack: Array<string> = [];
    validation: {
      for (const bracket of bracketArr) {
        //  시작괄호 스택에 입력.
        if (matchBrackets[bracket] === undefined) {
          stack.push(bracket);
          continue;
        }

        //  스택 마지막 값과 현재 문자값 비교
        if (stack[stack.length - 1] === matchBrackets[bracket]) {
          stack.pop();
          continue;
        }

        break validation;
      }

      //  올바른 괄호 문자열 카운트
      if (stack.length === 0) {
        validCount += 1;
      }
    }

    //  문자열 왼쪽으로 회전.
    if (i < s.length - 1) bracketArr.push(bracketArr.shift()!);
  }

  return validCount;
}

// 테스트 케이스
console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
console.log(solution("[)(]")); // 0
console.log(solution("}}}")); // 0

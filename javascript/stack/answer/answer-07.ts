function solution(n: number, k: number, cmd: Array<string>): string {
  //  n: 행의 갯수, k: 시작위치,
  const prev: Array<number> = Array.from({ length: n }, (_, i) => i - 1);
  const next: Array<number> = Array.from({ length: n }, (_, i) =>
    i === n - 1 ? -1 : i + 1,
  );
  const deletedStack: Array<number> = [];
  for (const item of cmd) {
    if (item === "C") {
      // 현재 선택한 행을 삭제한 후, 바로 아래 행을 선택합니다.
      // 단, 삭제된 행이 가장 마지막 행인 경우 바로 윗 행을 선택합니다.
      deletedStack.push(k);

      if (prev[k] !== -1) {
        next[prev[k]] = next[k];
      }

      if (next[k] !== -1) {
        prev[next[k]] = prev[k];
      }

      k = next[k] !== -1 ? next[k] : prev[k];
    } else if (item === "Z") {
      // 가장 최근에 삭제한 행을 원래대로 복구합니다.
      // 단, 현재 선택한 행은 바뀌지 않습니다.
      const restoreIdx = deletedStack.pop();
      if (restoreIdx !== undefined) {
        if (prev[restoreIdx] !== -1) {
          next[prev[restoreIdx]] = restoreIdx;
        }

        if (next[restoreIdx] !== -1) {
          prev[next[restoreIdx]] = restoreIdx;
        }
      }
    } else {
      const [action, num] = item.split(" ");
      const steps: number = Number(num);

      if (action === "U") {
        // 현재 선택한 행에서 X칸 위에 있는 행을 선택합니다.
        for (let i = 0; i < steps; i += 1) {
          k = prev[k];
        }
      }

      if (action === "D") {
        // 현재 선택한 행에서 X칸 아래에 있는 행을 선택합니다.
        for (let i = 0; i < steps; i += 1) {
          k = next[k];
        }
      }
    }
  }

  //   * 삭제되지 않은 행은 "O", 삭제된 행은 "X"로 표시합니다.
  const result: Array<string> = new Array(n).fill("O");
  if (deletedStack.length > 0) {
    for (let i = 0; i < deletedStack.length; i += 1) {
      result[deletedStack[i]] = "X";
    }
  }

  return result.join("");
}

// 테스트 케이스
// prettier-ignore
console.log(solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"])); // "OOOOXOOO"
// prettier-ignore
console.log(solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"])); // "OOXOXOOO"

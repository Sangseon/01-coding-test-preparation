function solution(board: Array<Array<number>>, moves: Array<number>): number {
  const N: number = board.length;

  const lanes: Array<Array<number>> = Array.from({ length: N }, () => []);
  for (let i = N - 1; i >= 0; i -= 1) {
    for (let j = 0; j < N; j += 1) {
      if (board[i][j]) {
        lanes[j].push(board[i][j]);
      }
    }
  }

  let removedCount: number = 0;
  const basket: Array<number> = [];
  for (const move of moves) {
    const doll = lanes[move - 1].pop();

    if (doll === undefined) continue;

    if (basket.length > 0 && basket[basket.length - 1] === doll) {
      basket.pop();
      removedCount += 2;
    } else {
      basket.push(doll);
    }
  }

  return removedCount;
}

// 테스트 케이스
console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4],
  ),
); // 4

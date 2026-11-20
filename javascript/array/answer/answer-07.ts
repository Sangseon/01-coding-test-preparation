function solution(dirs: string): number {
  //  시작 좌표
  let x: number = 0;
  let y: number = 0;

  // 좌표평면 경계를 벗어났는지 확인
  const isOutOfBounds = (x: number, y: number): boolean =>
    x < -5 || x > 5 || y < -5 || y > 5;

  //  이동 명령어 구현
  const directions: Record<string, [number, number]> = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  const visited = new Set();
  for (const dir of dirs) {
    const [dx, dy] = directions[dir];

    const nextX: number = x + dx;
    const nextY: number = y + dy;

    //  좌표평면 경계 를 넘어 갔는지 확인.
    if (isOutOfBounds(nextX, nextY)) continue;

    //  좌표 이동경로 저장
    visited.add(`${x}${y}${nextX}${nextY}`);
    visited.add(`${nextX}${nextY}${x}${y}`);

    //  좌표 이동
    [x, y] = [nextX, nextY];
  }

  return visited.size / 2;
}

// 테스트 케이스
console.log(solution("ULURRDLLU")); // 7
console.log(solution("LULLLLLLU")); // 7

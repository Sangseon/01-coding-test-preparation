function solution(N: number, stages: Array<number>): Array<number> {
  // 여기에 코드 작성

  // 스테이지 별 플레이어 수
  const playerCountPerStage: Array<number> = new Array(N + 2).fill(0);
  for (const stage of stages) {
    playerCountPerStage[stage] += 1;
  }

  // 플레이어 수
  let playerCount = stages.length;

  // 스테이지 별 실패율
  const failureRatePerStage: Record<number, number> = {};

  for (let i = 1; i <= N; i += 1) {
    //  * - 스테이지에 도달한 사용자가 없는 경우 해당 스테이지의 실패율은 0으로 정의합니다.
    if (playerCountPerStage[i] === 0) {
      failureRatePerStage[i] = 0;
      continue;
    }

    // 스테이지별 실패율
    // 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어의 수
    failureRatePerStage[i] = playerCountPerStage[i] / playerCount;

    playerCount = playerCount - playerCountPerStage[i];
  }

  const result = Object.entries(failureRatePerStage)
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => Number(key));

  return result;
}

// 테스트 케이스
// prettier-ignore
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));

// prettier-ignore
console.log(solution(4, [4, 4, 4, 4, 4]));

import { Queue } from "../Queue.ts";

function solution(N: number, K: number): number {
  const queue = new Queue();

  for (let i = 1; i <= N; i += 1) {
    queue.push(i);
  }

  while (queue.size > 1) {
    for (let i = 0; i < K - 1; i += 1) {
      queue.push(queue.pop());
    }
    queue.pop();
  }

  return queue.pop();
}

// 테스트 케이스
console.log(solution(5, 2)); // 3

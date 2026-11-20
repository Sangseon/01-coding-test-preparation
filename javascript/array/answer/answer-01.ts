function solution(arr: Array<number>): Array<number> {
  // 여기에 코드 작성
  //  실행시간이 O(N^2) 인 버블소트는 실무에서도 안 쓴다잉..
  //  sort() => O(NlogN)  //  Quick, Merge, Heap
  return arr.sort((a, b) => a - b);
}

// 테스트 케이스
console.log(solution([1, -5, 2, 4, 3]));
console.log(solution([2, 1, 1, 3, 2, 5, 4]));
console.log(solution([6, 1, 7]));

function solution(arr: Array<number>): Array<number> {
  // 여기에 코드 작성
  const uniqueArr = [...new Set(arr)]; // 중복제거 - Hash는 O(1), 스프레드 연산자(...) 로 데이터 전체 순회하니까 O(N)
  return uniqueArr.sort((a, b) => b - a); //  sort() => O(NlogN)  //  Quick, Merge, Heap
}

// 테스트 케이스
console.log(solution([4, 2, 2, 1, 3, 4]));
console.log(solution([2, 1, 1, 3, 2, 5, 4]));

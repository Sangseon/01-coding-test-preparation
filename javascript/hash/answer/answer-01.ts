function solution(arr: Array<number>, target: number): boolean {
  const numberSet = new Set<number>(arr);
  let result: boolean = false;

  for (let i = 0; i < arr.length; i += 1) {
    //  arr의 원소 중 중복되는 원소는 없다.
    if (arr[i] !== target - arr[i] && numberSet.has(target - arr[i])) {
      result = true;
      break;
    }
  }

  return result;
}

console.log(solution([1, 2, 3, 4, 8], 6)); // true
console.log(solution([2, 3, 5, 9], 10)); // false

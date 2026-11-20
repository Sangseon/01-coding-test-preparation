function solution(
  arr1: Array<Array<number>>,
  arr2: Array<Array<number>>,
): Array<Array<number>> {
  // prettier-ignore
  const retArr: Array<Array<number>> = Array.from({ length: arr1.length }, () => new Array(arr2[0].length).fill(0));

  //    행렬 곱셈의 차원 규칙(Matrix Multiplication Dimension Rule)
  //    (m x n) x (n x p) = (m x p)
  //  arr1 행순회 i => m
  for (let i = 0; i < arr1.length; i += 1) {
    //  arr2 열순회 j => p
    for (let j = 0; j < arr2[0].length; j += 1) {
      //  arr1의 열 = arr2의 행 순회  k => n
      for (let k = 0; k < arr2.length; k += 1) {
        retArr[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return retArr;
}

// 테스트 케이스
//  prettier-ignore
console.log(solution([[1, 4],[3, 2],[4, 1],],[[3, 3],[3, 3]]));
//  prettier-ignore
console.log(solution([[2, 3, 2],[4, 2, 4],[3, 1, 4],],[[5, 4, 3],[2, 4, 1],[3, 1, 1]]));

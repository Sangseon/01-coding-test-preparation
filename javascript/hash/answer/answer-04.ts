function solution(
  want: Array<string>,
  number: Array<number>,
  discount: Array<string>,
): number {
  let result: number = 0;

  const wishlistMap = new Map<string, number>();
  for (let i = 0; i < want.length; i += 1) {
    wishlistMap.set(want[i], number[i]);
  }

  for (let i = 0; i < discount.length - 9; i += 1) {
    const discountCountMap = new Map<string, number>();
    for (let j = i; j < i + 10; j += 1) {
      const discountItemCount: number = discountCountMap.get(discount[j])!;
      discountCountMap.set(discount[j], (discountItemCount ?? 0) + 1);
    }

    let isMatched: boolean = true;
    for (const [wish, num] of wishlistMap) {
      if (num !== (discountCountMap.get(wish) ?? 0)) {
        isMatched = false;
        break;
      }
    }

    if (isMatched) result += 1;
  }

  // 제품을 모두 할인받을 수 있는 회원 등록 날짜의 총 일수
  return result;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ],
  ),
); // 3

// console.log(
//   solution(
//     ["apple"],
//     [10],
//     [
//       "banana",
//       "banana",
//       "banana",
//       "banana",
//       "banana",
//       "banana",
//       "banana",
//       "banana",
//       "banana",
//       "banana",
//     ],
//   ),
// ); // 0

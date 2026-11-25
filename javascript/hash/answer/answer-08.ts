function combination(
  startIndex: number,
  courseSize: number,
  order: Array<string>,
  selected: string,
  result: Array<string>,
): void {
  if (selected.length === courseSize) {
    result.push(selected);
    return;
  }

  for (let i = startIndex; i < order.length; i += 1) {
    combination(i + 1, courseSize, order, selected + order[i], result);
  }
}

function solution(orders: Array<string>, course: Array<number>): Array<string> {
  const recipyArr = new Array<string>();

  for (const order of orders) {
    const arr = order.split("").sort();
    for (const size of course) {
      combination(0, size, arr, "", recipyArr);
    }
  }

  const recipyCountMap = new Map<string, number>();
  for (const recipy of recipyArr) {
    recipyCountMap.set(recipy, (recipyCountMap.get(recipy) ?? 0) + 1);
  }

  const maxCountMap = new Map<number, number>();
  for (const [recipy, count] of recipyCountMap) {
    if (count < 2) continue;

    const size = recipy.length;
    const maxCount = maxCountMap.get(size) ?? 0;

    if (count > maxCount) {
      maxCountMap.set(size, count);
    }
  }

  const result = new Array<string>();
  for (const [recipy, count] of recipyCountMap) {
    if (count === maxCountMap.get(recipy.length)) {
      result.push(recipy);
    }
  }

  return result.sort();
}

console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]),
); // ["AC", "ACDE", "BCFG", "CDE"]

console.log(
  solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]),
); // ["ACD", "AD", "ADE", "CD", "XYZ"]

console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4])); // ["WX", "XY"]

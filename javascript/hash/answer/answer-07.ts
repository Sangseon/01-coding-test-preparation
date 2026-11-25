function solution(
  id_list: Array<string>,
  report: Array<string>,
  k: number,
): Array<number> {
  const userReportIdListMap = new Map<string, Array<string>>();
  const stopUserReportCountMap = new Map<string, number>();
  for (const id of id_list) {
    userReportIdListMap.set(id, []);
    stopUserReportCountMap.set(id, 0);
  }

  const uniqueReports = new Set<string>(report);
  for (const uniqueReport of uniqueReports) {
    const [source, target] = uniqueReport.split(" ");
    userReportIdListMap.get(source)!.push(target);
    stopUserReportCountMap.set(
      target,
      (stopUserReportCountMap.get(target) ?? 0) + 1,
    );
  }

  const result = new Array<number>();
  for (const [_, list] of userReportIdListMap) {
    let count = 0;
    for (const id of list) {
      if ((stopUserReportCountMap.get(id) ?? 0) >= k) {
        count += 1;
      }
    }
    result.push(count);
  }

  return result;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2,
  ),
); // [2, 1, 1, 0]

console.log(
  solution(
    ["con", "ryan"],
    ["ryan con", "ryan con", "ryan con", "ryan con"],
    3,
  ),
); // [0, 0]

function solution(
  participant: Array<string>,
  completion: Array<string>,
): string {
  const participantMap = new Map<string, number>();
  for (const name of participant) {
    participantMap.set(name, (participantMap.get(name) ?? 0) + 1);
  }

  for (const name of completion) {
    const remaining = participantMap.get(name)! - 1;
    if (remaining === 0) {
      participantMap.delete(name);
    } else {
      participantMap.set(name, remaining);
    }
  }

  const nonFinisher: string = participantMap.keys().next().value!;
  return nonFinisher;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"

console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"],
  ),
); // "vinko"

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]),
); // "mislav"

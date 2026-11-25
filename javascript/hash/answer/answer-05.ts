function solution(record: Array<string>): Array<string> {
  const userMap = new Map<string, string>();
  for (let i = 0; i < record.length; i += 1) {
    const [cmd, id, name] = record[i].split(" ");
    if (cmd !== "Leave") userMap.set(id, name);
  }

  const resultArr = new Array<string>();
  for (let i = 0; i < record.length; i += 1) {
    const [cmd, id] = record[i].split(" ");
    const nickname: string = userMap.get(id)!;
    if (cmd === "Enter") {
      resultArr.push(`${nickname}님이 들어왔습니다.`);
    }

    if (cmd === "Leave") {
      resultArr.push(`${nickname}님이 나갔습니다.`);
    }
  }

  return resultArr;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ]),
);
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

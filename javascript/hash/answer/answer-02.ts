function calculateHash(str: string) {
  const p: number = 31;
  const m: number = 1_000_000_007;
  let hash: number = 0;
  let power: number = 1;
  for (let i = 0; i < str.length; i += 1) {
    //  hash(s) = (s[0] + s[1]*p + s[2]*p² + ... + s[n-1]*pⁿ⁻¹) mod m
    //  hash = hash + str.charCodeAt(i) * p ** i
    hash = (hash + str.charCodeAt(i) * power) % m;
    power = (power * p) % m;
  }
  //  hash = hash % m;

  return hash;
}

function solution(
  stringList: Array<string>,
  queryList: Array<string>,
): Array<boolean> {
  const result: Array<boolean> = [];
  const hashSet: Set<number> = new Set(
    stringList.map((str) => calculateHash(str)),
  );

  for (const query of queryList) {
    const queryHash: number = calculateHash(query);
    if (hashSet.has(queryHash)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

console.log(
  solution(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"]),
); // [true, false, false, true]

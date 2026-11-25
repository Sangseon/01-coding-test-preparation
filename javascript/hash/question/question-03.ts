/**
 * 많은 선수 중 단 한 명의 선수를 제외하고 모든 선수가 마라톤을 완주하였습니다.
 * 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이
 * 담긴 배열 completion이 있을 때 완주하지 못한 선수의 이름을 반환하는
 * solution() 함수를 작성하세요.
 *
 * [제약 조건]
 * - 마라톤 경기에 참여한 선수 수는 1명 이상 100,000명 이하입니다.
 * - completion 길이는 participant 길이보다 1 작습니다.
 * - 참가자 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
 * - 참가자 중에는 동명이인이 있을 수 있습니다.
 *
 * [입출력의 예]
 * participant                                   completion                              return
 * ["leo", "kiki", "eden"]                       ["eden", "kiki"]                        "leo"
 * ["marina", "josipa", "nikola", "vinko", "filipa"] ["josipa", "filipa", "marina", "nikola"] "vinko"
 * ["mislav", "stanko", "mislav", "ana"]          ["stanko", "ana", "mislav"]             "mislav"
 *
 * [입출력 예 설명]
 * 각 입출력 예는 다양한 상황에서의 완주하지 못한 사람을 걸러내는 모습을 보여줍니다.
 *
 * 입출력 예 1번에서 "leo"는 참가자 명단에는 있지만 완주자 명단에는 없으므로
 * 완주하지 못했습니다.
 *
 * 입출력 예 2번에서 "vinko"는 참가자 명단에는 있지만 완주자 명단에는 없으므로
 * 완주하지 못했습니다.
 *
 * 입출력 예 3번에서 "mislav"는 참가자 명단에는 2명이 있지만 완주자 명단에는
 * 한 명밖에 없으므로 한 명은 완주하지 못했습니다.
 */

function solution(
  participant: Array<string>,
  completion: Array<string>,
): string {
  return "";
}

// prettier-ignore
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"

// prettier-ignore
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])); // "vinko"

// prettier-ignore
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])); // "mislav"

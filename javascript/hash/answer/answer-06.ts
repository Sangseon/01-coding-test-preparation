function solution(genres: Array<string>, plays: Array<number>): Array<number> {
  const genresMap = new Map<string, Array<[number, number]>>();
  const totalPlaysMap = new Map<string, number>();
  for (let i = 0; i < genres.length; i += 1) {
    const genre = genres[i];
    const playCount = plays[i];
    const arr: Array<[number, number]> = genresMap.get(genre) ?? [];
    arr.push([i, playCount]);

    genresMap.set(genre, arr);
    totalPlaysMap.set(genre, (totalPlaysMap.get(genre) ?? 0) + playCount);
  }

  for (const genre of genresMap.values()) {
    genre.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
    genre.splice(2);
  }

  const sortedGenres = [...totalPlaysMap].sort((a, b) => b[1] - a[1]);

  const result = new Array<number>();
  for (const [genre] of sortedGenres.values()) {
    for (const [idx] of genresMap.get(genre)!.values()) {
      result.push(idx);
    }
  }

  return result;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500],
  ),
); // [4, 1, 3, 0]

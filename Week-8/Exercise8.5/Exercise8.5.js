function FindTheTownJudge(N, trust) {
  let array = new Array(N + 1).fill(0);
  for (let [i, j] of trust) {
    array[i]--;
    array[j]++;
  }
  for (let i = 1; i < array.length; i++) {
    if (array[i] == N - 1) {
      return i;
    }
  }
  return -1;
}

try {
  console.log(FindTheTownJudge(2, [[1, 2]]));
  console.log(
    FindTheTownJudge(3, [
      [1, 3],
      [2, 3],
    ])
  );
  console.log(
    FindTheTownJudge(3, [
      [1, 3],
      [2, 3],
      [3, 1],
    ])
  );
} catch (e) {
  console.warn(e);
}

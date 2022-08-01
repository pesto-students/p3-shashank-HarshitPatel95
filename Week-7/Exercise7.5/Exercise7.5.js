function nextGreaterElement(arr, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    let greater = arr[i];
    let flag = 0;
    for (let j = i; j < n; j++) {
      if (greater < arr[j]) {
        greater = arr[j];
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      greater = -1;
    }
    result.push(greater);
  }
  return result;
}

try {
  var Input1 = [1, 3, 2, 4];
  var N1 = Input1.length;
  console.log(Input1, "=>", nextGreaterElement(Input1, N1));

  var Input2 = [6, 8, 0, 1, 3];
  var N2 = Input2.length;
  console.log(Input2, "=>", nextGreaterElement(Input2, N2));
} catch (e) {
  console.warn(e);
}

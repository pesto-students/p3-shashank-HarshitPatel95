function parenthesisChecker(expression) {
  let stack = [];

  for (let i = 0; i < expression.length; i++) {
    let x = expression[i];

    if (x == "{" || x == "(" || x == "[") {
      stack.push(x);
      continue;
    }
    if (stack.length == 0) {
      return false;
    }

    let check;
    switch (x) {
      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") {
          return false;
        }
        break;
      case ")":
        check = stack.pop();
        if (check == "{" || check == "[") {
          return false;
        }
        break;
      case "]":
        check = stack.pop();
        if (check == "(" || check == "{") {
          return false;
        }
        break;
    }
  }

  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
}

try {
  let Input1 = "{([])}";
  console.log(parenthesisChecker(Input1));

  let Input2 = "()";
  console.log(parenthesisChecker(Input2));

  let Input3 = "([]";
  console.log(parenthesisChecker(Input3));
} catch (e) {
  console.warn(e);
}

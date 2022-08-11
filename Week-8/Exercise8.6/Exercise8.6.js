function AllPathFromSourceToTarget(graph) {
  let result = [];
  let queue = [[0]];

  while (queue.length) {
    let updatedQueue = [];
    while (queue.length) {
      let current = queue.shift();
      let parentNodes = [...graph[current[current.length - 1]]];
      while (parentNodes.length) {
        let nextNode = parentNodes.pop();
        let newIteraton = [...current, nextNode];
        if (nextNode == graph.length - 1) {
          result.push(newIteraton);
        } else {
          updatedQueue.push(newIteraton);
        }
      }
    }
    queue = updatedQueue;
  }
  return result;
}

try {
  let allpath = AllPathFromSourceToTarget([[1, 2], [3], [3], []]);
  console.log(allpath);
} catch (e) {
  console.warn(e);
}

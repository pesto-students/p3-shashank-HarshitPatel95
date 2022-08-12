function addEdge(start, end, TempArray) {
  TempArray[start].push(end);
  TempArray[end].push(start);
}

function checkPathExists(source, destination, TempArray) {
  if (source == destination) {
    return true;
  }

  let VisitedVertex = new Array(TempArray.length).fill(false);
  let TempQueue = new Array();
  VisitedVertex[source] = true;
  TempQueue.push(source);

  while (TempQueue.length != 0) {
    source = TempQueue.pop();
    for (let i = 0; i < TempArray[source].length; i++) {
      if (TempArray[source][i] == destination) {
        return true;
      }
      if (!VisitedVertex[TempArray[source][i]]) {
        VisitedVertex[TempArray[source][i]] = true;
        TempQueue.push(TempArray[source][i]);
      }
    }
  }
  return false;
}

function ArrayNodeWithReachableNode(arrayEdge, NoOfVertices) {
  let k = 0;
  let node1 = [];
  let node2 = [];
  let TempArray = new Array();
  for (let i = 0; i < NoOfVertices; i++) {
    TempArray.push(new Array());
  }

  for (let i = 0; i < arrayEdge.length; i++) {
    node1[k++] = arrayEdge[i][0];
  }
  k = 0;
  for (let i = 0; i < arrayEdge.length; i++) {
    node2[k++] = arrayEdge[i][1];
  }
  for (let i = 0; i < node1.length; i++) {
    TempArray[node1[i]].push(node2[i]);
    TempArray[node2[i]].push(node1[i]);
  }

  return TempArray;
}

try {
  const NoOfVertices = 6;

  let arrayEdge = [
    [0, 1],
    [0, 2],
    [3, 5],
    [5, 4],
    [4, 3],
  ];
  console.log("All Edges: ", arrayEdge);

  let TempArray = ArrayNodeWithReachableNode(arrayEdge, NoOfVertices);
  console.log("All Node With Reachable Node: ", TempArray);

  let source = 0;
  let destination = 5;
  if (checkPathExists(source, destination, TempArray)) {
    console.log(true);
  } else {
    console.log(false);
  }
} catch (e) {
  console.warn(e);
}

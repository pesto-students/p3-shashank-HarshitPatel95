import SinglyLinkedList from "../LinkedList/SinglyLinkedList.js";

function detectLoopInList(list) {
  let head = list.head;
  let set = new Set();

  while (head != null) {
    if (set.has(head)) {
      return true;
    }
    set.add(head);
    head = head.next;
  }

  return false;
}

try {
  let list = new SinglyLinkedList();
  list.push(1);
  list.push(3);
  list.push(4);
  console.log("LinkedList with k=2 :");
  list.log();

  const loopnode = 2;
  if (loopnode == 0) {
    console.log("No Loop");
  } else {
    // Create a loop for testing
    let knode = list.getNode(loopnode - 1);
    let lnode = list.getNode(list.getSize - 1);
    lnode.next = knode;

    if (detectLoopInList(list)) {
      console.log("Loop found");
    } else {
      console.log("No Loop");
    }
  }

  let mylist = new SinglyLinkedList();
  mylist.push(1);
  mylist.push(8);
  mylist.push(3);
  mylist.push(4);
  console.log("LinkedList with k=0 :");
  mylist.log();

  const myloopnode = 0;
  if (myloopnode == 0) {
    console.log("No Loop");
  } else {
    // Create a loop for testing
    let knode1 = mylist.getNode(myloopnode - 1);
    let lnode1 = mylist.getNode(mylist.getSize - 1);
    lnode1.next = knode1;

    if (detectLoopInList(mylist)) {
      console.log("Loop found");
    } else {
      console.log("No Loop");
    }
  }
} catch (e) {
  console.warn(e);
}

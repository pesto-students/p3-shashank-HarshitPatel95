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

  // Create a loop for testing
  const k = 2;
  if (k == 0) {
    console.log("No Loop");
  } else {
    // Create a loop for testing
    let knode = list.getNode(k - 1);
    let lnode = list.getNode(list.getSize - 1);
    lnode.next = knode;

    if (detectLoopInList(list)) {
      console.log("Loop found");
    } else {
      console.log("No Loop");
    }
  }

  let list1 = new SinglyLinkedList();
  list1.push(1);
  list1.push(8);
  list1.push(3);
  list1.push(4);
  console.log("LinkedList with k=0 :");
  list1.log();

  const k1 = 0;
  if (k1 == 0) {
    console.log("No Loop");
  } else {
    // Create a loop for testing
    let knode1 = list1.getNode(k1 - 1);
    let lnode1 = list1.getNode(list1.getSize - 1);
    lnode1.next = knode1;

    if (detectLoopInList(list1)) {
      console.log("Loop found");
    } else {
      console.log("No Loop");
    }
  }
} catch (e) {
  console.warn(e);
}

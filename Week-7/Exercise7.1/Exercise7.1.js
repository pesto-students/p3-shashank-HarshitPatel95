import SinglyLinkedList from "../LinkedList/SinglyLinkedList.js";

try {
  let list = new SinglyLinkedList();
  list.push(1);
  list.push(2);
  list.push(3);
  list.push(4);
  list.push(5);
  list.push(6);
  console.log("LinkedList:");
  list.log();
  list.reverse();
  console.log("Reverse LinkedList:");
  list.log();

  let list2 = new SinglyLinkedList();
  list2.push(2);
  list2.push(7);
  list2.push(8);
  list2.push(9);
  list2.push(10);
  console.log("LinkedList:");
  list2.log();
  list2.reverse();
  console.log("Reverse LinkedList:");
  list2.log();
} catch (e) {
  console.warn(e);
}

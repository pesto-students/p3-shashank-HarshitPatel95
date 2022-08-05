import SinglyLinkedList from "../LinkedList/SinglyLinkedList.js";

function rorateList(list, k) {
  if (!Number.isInteger(k)) throw "Invalid index";
  if (k < 0 || k >= list.getSize) return null;

  for (let i = 0; i < k; i++) {
    let value = list.shift();
    list.push(value);
  }

  return list;
}

try {
  let list = new SinglyLinkedList();
  list.push(8);
  list.push(9);
  list.push(2);
  list.push(4);
  list.push(7);
  console.log("LinkedList:");
  list.log();
  let resultlist = rorateList(list, 3);
  console.log("Rotate LinkedList by 3 nodes:");
  resultlist.log();
} catch (e) {
  console.warn(e);
}

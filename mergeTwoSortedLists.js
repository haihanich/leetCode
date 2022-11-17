const list1 = [1, 5, 7];
const list2 = [2, 5, 7, 9];

var mergeTwoLists = function (list1, list2) {
  let a = list1.join("") + list2.join("");
  return Array.from(a).sort();
};

console.log(mergeTwoLists(list1, list2));

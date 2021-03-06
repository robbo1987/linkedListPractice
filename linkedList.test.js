const LinkedList = require("./linkedList");

describe("#insertAtHead", () => {
  test("it adds the element to the beginning of the list", () => {
    const ll = new LinkedList();
    ll.insertAtHead(10);
    const oldHead = ll.head;
    ll.insertAtHead(20);
    const newHead = ll.head;

    expect(ll.head.value).toBe(20);
    expect(oldHead.value).toBe(10);
    expect(newHead.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  });
});

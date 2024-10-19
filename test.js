function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
/**
 * 
 * @param {ListNode} l1 
 * @param {ListNode} l2 
 */
var addTwoNumbers = function (l1, l2) {
    let head = new ListNode(0)
    let node = head
    let carry = 0
    while (l1 != null || l2 != null || carry > 0) {
        let l1Val = l1 ? l1.val : 0
        let l2Val = l2 ? l2.val : 0

        let currentSum = l1Val + l2Val + carry
        carry = 0
        if (currentSum >= 10) {
            currentSum -= 10
            carry = 1
        }

        //handle node value change
        let currentNode = new ListNode(currentSum)
        node.next = currentNode
        node = node.next

        //handle l1 and l2
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    return head.next
}

l1 = { val: 0, next: { val: 8 } }, l2 = { val: 0, next: { val: 2 } }
result = addTwoNumbers(l1, l2)
console.log(result)

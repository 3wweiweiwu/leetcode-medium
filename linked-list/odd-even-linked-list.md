# Odd Even Linked List

## Link

<https://leetcode.com/explore/interview/card/top-interview-questions-medium/107/linked-list/784/>

## Solution

| Question                | Solution                                                                               | Note                   |
| ----------------------- | -------------------------------------------------------------------------------------- | ---------------------- |
| How to hanlde two list? | Use two pointer, one for odd and one for even. This does not increase space complexity | O(1) space complexity) |

## Code

```js


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    let oddHeader = new ListNode()
    let evenHeader = new ListNode()

    let oddCurrent = oddHeader
    let evenCurrent = evenHeader
    let i = 1
    let current = head
    while (current != null) {
        if (i % 2 == 1) {
            oddCurrent.next = current
            oddCurrent = current
        }
        else {
            evenCurrent.next = current
            evenCurrent = current
        }
        current = current.next
        i++
    }
    //connect odd current with even header.next
    if (evenHeader.next != null) {
        oddCurrent.next = evenHeader.next

        //handle last element to avoid cycle
        evenCurrent.next = null
    }
    return oddHeader.next
};
```

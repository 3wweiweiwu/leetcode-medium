# Intersection of Two Linked List

## Question

| Question                       | Solution                                                                                                                                                                 | Note                      |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------- |
| What's Naive Solution?         | Convert Linked List into Dictionary                                                                                                                                      | Time: O(m+n) space:O(m+n) |
| How to reduce space complexity | Run a+b and b+a, worst case, worst case, it will fail at (m+n), in case there is similar link, it will fail at (s1+s2), where s1 and s2 are leading unshared linked list |
| How to implement the logic?    | ptA==ptB as ending condition for shared link. Otherwise, When ptA and ptB both finish flipping, wait till it end end of the linkedlist                                   |                           |

## Code

```js
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let ptA = headA
    let ptB = headB
    let aLength = 0
    let bLength = 0
    let aFinal = false
    let bFinal = false
    let i = 0
    while (ptA !== ptB) {
        if (ptA.next !== null) {
            ptA = ptA.next
        }
        else if (aFinal) {
            ptA = null
        }
        else {
            ptA = headB
            aFinal = true
        }
        if (ptB.next != null) {
            ptB = ptB.next
        }
        else if (bFinal) {
            ptB = null
        }
        else {
            ptB = headA
            bFinal = true
        }

        i++

    }
    return ptA

};
```

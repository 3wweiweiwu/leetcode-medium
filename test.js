

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
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

// [4,1,8,4,5]
// [5,6,1,8,4,5]
let intersection = { val: 8, next: { val: 4, next: { val: 5, next: null } } }
// let a = { val: 4, next: { val: 1, next: intersection } }
// let b = { val: 5, next: { val: 6, next: { val: 1, next: intersection } } }

let a = { val: 4, next: { val: 1, next: null } }
let b = { val: 5, next: { val: 6, next: { val: 1, next: null } } }
getIntersectionNode(a, b)
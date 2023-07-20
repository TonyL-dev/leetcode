// Problem Link: https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    // empty
    if (head === null){
        return null;
    }
    let front = head.next;
    let middle = head;
    let back = null;

    while (middle !== null){
        middle.next = back;
        back = middle;
        middle = front;

        if(front === null){
            break;
        }
        front = front.next

    }
    return back;
};
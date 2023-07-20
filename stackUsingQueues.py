# Problem: https://leetcode.com/problems/implement-stack-using-queues/description/

class MyStack:

    def __init__(self):
        self.q1 = deque()
        self.q2 = deque()

    def push(self, x: int) -> None:
        if len(self.q1) == 0:
            self.q1.append(x)
            while len(self.q2) != 0:
                self.q1.append(self.q2.popleft())
        else:
            self.q2.append(x)
            while len(self.q1) != 0:
                self.q2.append(self.q1.popleft())

    def pop(self) -> int:
        # get the left one
        if len(self.q1) != 0:
            return self.q1.popleft()
        return self.q2.popleft()

    def top(self) -> int:
        # return the first one
        if len(self.q1) != 0:
            return self.q1[0]
        return self.q2[0]

    def empty(self) -> bool:
        # if both are empty, then it's empty
        return len(self.q1) == 0 and len(self.q2) == 0


# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()
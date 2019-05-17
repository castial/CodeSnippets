/**
 * 迷宫问题 （0-可以通过， 1-不可通过）
 * 
 * 
 * [0, 0, 0, 0, 0]
 * [0, 1, 0, 1, 0]
 * [0, 1, 1, 0, 0]
 * [0, 1, 1, 0, 1]
 * [0, 0, 0, 0, 0]
 * 
 * 使用广度优先遍历和深度优先遍历，查找最短路径
 */


class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    setPreX(x) {
        this.preX = x
    }

    setPreY(y) {
        this.preY = y
    }
}

const mazeArray = [
    [0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 1, 0, 1],
    [0, 0, 0, 0, 0]
]

// 定义出口和入口
const startPoint = new Point(0, 0)
const endPoint = new Point(4, 4)

// 定义访问标记数组 (这步其实可以用代码实现, 0-未访问，1-已访问)
const visitedArray = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

const pointArray = []    // 保存访问的路径

/**
 * 广度优先遍历(只会获取到一条路径，即最短路径)
 * 起始方向随意
 */
function mazeBFSPath() {
    const queue = []    // 模拟队列，用于遍历节点

    visitedArray[startPoint.x][startPoint.y] = 1  // 标记开始节点为已访问

    queue.push(startPoint)
    while (queue.length > 0) {

        const last = queue.shift() // 取出最后一个元素，即队列头部 

        pointArray.push(last)

        const lastPoint = pointArray[pointArray.length - 1]

        // 四个方向进行遍历，上：{-1, 0}; 下：{1, 0}; 左: {0, -1}; 右：{0, 1}
        const topPoint = new Point(lastPoint.x - 1, lastPoint.y)
        const bottomPoint = new Point(lastPoint.x + 1, lastPoint.y)
        const leftPoint = new Point(lastPoint.x, lastPoint.y - 1)
        const rightPoint = new Point(lastPoint.x, lastPoint.y + 1)

        console.log(`访问下方向节点{x : ${bottomPoint.x}, ${bottomPoint.y}}`)
        if (validatePoint(bottomPoint)) {
            visitedArray[bottomPoint.x][bottomPoint.y] = 1
            queue.push(bottomPoint)
            bottomPoint.setPreX(last.x)
            bottomPoint.setPreY(last.y)
        }

        console.log(`访问右方向节点{x : ${rightPoint.x}, ${rightPoint.y}}`)
        if (validatePoint(rightPoint)) {
            visitedArray[rightPoint.x][rightPoint.y] = 1
            queue.push(rightPoint)
            rightPoint.setPreX(last.x)
            rightPoint.setPreY(last.y)
        }

        // 如果下方向走不通，尝试左方向，逻辑同上。
        console.log(`访问左方向节点{x : ${leftPoint.x}, ${leftPoint.y}}`)
        if (validatePoint(leftPoint)) {
            visitedArray[leftPoint.x][leftPoint.y] = 1
            queue.push(leftPoint)
            leftPoint.setPreX(last.x)
            leftPoint.setPreY(last.y)
        }

        // 如果左方向走不通，尝试上方向，逻辑同上。
        console.log(`访问下方向节点{x : ${topPoint.x}, ${topPoint.y}}`)
        if (validatePoint(topPoint)) {
            visitedArray[topPoint.x][topPoint.y] = 1
            queue.push(topPoint)
            topPoint.setPreX(last.x)
            topPoint.setPreY(last.y)
        }
    }

    // 回溯查找路径
    const stack = []
    let preX = pointArray[pointArray.length - 1].preX
    let preY = pointArray[pointArray.length - 1].preY

    stack.push(pointArray.length - 1)   // 记录目的地的位置
    while(true) {
        if (preX === 0 && preY === 0) {
            // 找到起始地点就跳出
            break
        }
        for (let i = 0; i < pointArray.length; i++) {            
            const point = pointArray[i];
            if (point.x === preX && point.y === preY) {
                preX = point.preX
                preY = point.preY
                stack.push(i)
                break
            }
        }
    }
    
    // 最后加上开始节点
    stack.push(0)
    console.log('========BFS路径结果========')
    stack.reverse().forEach(index => {
        console.log(pointArray[index])
    })
}

/**
 * 可访问的条件判断 (优先访问右节点，然后是下节点)：
 * 1. x，y大于初始值；
 * 2. x，y小于迷宫长宽 {5, 5}(暂时写死，不是算法重点);
 * 3. point当前迷宫值是0；
 * 4. point当前没有被访问过；
 */
function validatePoint(point) {
    if (point.x < 5 && point.y < 5 &&
        point.x >= 0 && point.y >= 0 &&
        mazeArray[point.x][point.y] === 0 &&
        visitedArray[point.x][point.y] === 0) {
        return true
    }
    return false
}

mazeBFSPath()
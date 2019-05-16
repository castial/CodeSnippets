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

    isEqual(point) {
        if (this.x === point.x && this.y === point.y) {
            return true
        } else {
            return false
        }
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
 * 广度优先遍历(其实会得到两条路径，起始点方向不同，获取到的路径不同)
 * 这个起始方向是右边 
 */
function mazeDFSPath() {

    visitedArray[startPoint.x][startPoint.y] = 1  // 标记开始节点为已访问
    pointArray.push(startPoint)

    while (pointArray.length > 0) {
        let flag = false

        const lastPoint = pointArray[pointArray.length - 1]

        if (lastPoint.isEqual(endPoint)) {
            break  // 目的地已到达
        } else {
            // 四个方向进行遍历，上：{-1, 0}; 下：{1, 0}; 左: {0, -1}; 右：{0, 1}
            const topPoint = new Point(lastPoint.x - 1, lastPoint.y)
            const bottomPoint = new Point(lastPoint.x + 1, lastPoint.y)
            const leftPoint = new Point(lastPoint.x, lastPoint.y - 1)
            const rightPoint = new Point(lastPoint.x, lastPoint.y + 1)

            console.log(`访问右方向节点{x : ${rightPoint.x}, ${rightPoint.y}}`)
            if (validatePoint(rightPoint)) {
                pointArray.push(rightPoint)
                visitedArray[rightPoint.x][rightPoint.y] = 1
                flag = true
            }

            // 如果右方向走不通，尝试下方向，逻辑同上。
            if (!flag) {
                console.log(`访问下方向节点{x : ${bottomPoint.x}, ${bottomPoint.y}}`)
                if (validatePoint(bottomPoint)) {
                    pointArray.push(bottomPoint)
                    visitedArray[bottomPoint.x][bottomPoint.y] = 1
                    flag = true
                }
            }

            // 如果下方向走不通，尝试左方向，逻辑同上。
            if (!flag) {
                console.log(`访问左方向节点{x : ${leftPoint.x}, ${leftPoint.y}}`)
                if (validatePoint(leftPoint)) {
                    pointArray.push(leftPoint)
                    visitedArray[leftPoint.x][leftPoint.y] = 1
                    flag = true
                }
            }

            // 如果左方向走不通，尝试上方向，逻辑同上。
            if (!flag) {
                console.log(`访问下方向节点{x : ${topPoint.x}, ${topPoint.y}}`)
                if (validatePoint(topPoint)) {
                    pointArray.push(topPoint)
                    visitedArray[topPoint.x][topPoint.y] = 1
                    flag = true
                }
            }

            // 如果四个方向都没能出去，那么删除这个起点
            if (!flag) {
                pointArray.pop()
            }
        }
    }
    console.log('========DFS路径结果========')
    console.log(pointArray)
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

mazeDFSPath()
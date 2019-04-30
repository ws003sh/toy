// 选择排序 selectionSort
// 找到最小的
// 将其添加进新数组 然后将其移除
// 继续寻找最小的
// 直到原始数组被清空
function selectionSort (list) {
    let answer = []
    let len = list.length
    for (let i = 0;i < len; i ++) {
        let smallest = findSmallest(list)
        answer.push(list[smallest])
        list.splice(smallest, 1)
    }
    return answer
}

function findSmallest (list) {
    let smallest = list[0]
    let smallest_index = 0
    for (let i = 0;i < list.length; i++) {
        if (list[i] < smallest) {
            smallest = list[i]
            smallest_index = i
        }
    }
    return smallest_index
}
let list = [88, 5, 9, 23, 7, 6, 11]
console.log(selectionSort(list))
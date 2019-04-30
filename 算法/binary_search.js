// 二分查找
function binary_search (list, item) {
    console.log(' start function ')
    let num = 0
    let low = 0
    let high = list.length - 1

    while (low <= high) {
        // debugger
        // console.log(' start loop ')
        let mid = Math.ceil((low + high) /2)　
        num ++
        let guess = list[mid]
        console.log('中位数是:'+ mid, ',猜测位置在:' + guess)

        if (guess === item) {
            return '位置在:' + mid + ', 计算了'+ num + '次'
        }else if (guess > item) {
            high = mid -1
        } else if (guess < item) {
            low = mid + 1
        }
    }
}
const list = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
const item = 19
console.log(binary_search(list, item))

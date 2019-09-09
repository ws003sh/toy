// D&C divide and conquer

function divide (width, height) {
    // 基线条件
    // 
}
let width = 1680
let height = 640
let arr = [10, 15, 33, 2, 11, 8]

console.log(quicksort(arr))
function quicksort (list) {
    
    let len = list.length

    if (len < 2) {
        return list
    } else {
        let pivot = list[0]
        let less = []
        let greater = []
        
        list.filter(function (element, index, array) {
            if (element <= pivot) {
                less.push(element)
            }
        })

        list.filter(function (element, index, array) {
            if (element > pivot) {
                greater.push(element)
            }
        })
        // return less + ',' + greater
        console.log(less + ',' + greater)

        quicksort(less)
        quicksort(greater)

    }

}
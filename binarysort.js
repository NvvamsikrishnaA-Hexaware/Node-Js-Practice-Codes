let sortArray = function (arr, x, start, end) {
    if (start > end) return false
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] === x)
        return true
    if (arr[mid] > x)
        return sortArray(arr, x, start, mid - 1)
    else
        return sortArray(arr, x, mid + 1, end)
}

let arr = [24, 1, 43, 23, 9];
let x = 43;
console.log(sortArray(arr))
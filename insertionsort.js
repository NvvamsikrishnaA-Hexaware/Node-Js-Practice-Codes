let sortArray = (arr, i = arr.length) => {
    if (i <= 1) {
        return;
    }
    sortArray(arr, i - 1);
    let k = arr[i - 1]
    let j = i - 2
    while (j >= 0 && arr[j] > k) {
        arr[j + 1] = arr[j]
        j--
    }
    arr[j + 1] = k
}

let arr = [24, 1, 43, 23, 9]
console.log('Before ', arr)
sortArray(arr)
console.log('After ', arr)
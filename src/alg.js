
function bubbleSort(arr, i, j, n, delay) {
    setTimeout(() => {
        if (Number(arr[j].getAttribute("title")) > Number(arr[j + 1].getAttribute("title"))) {
            arr[j].parentNode.insertBefore(arr[j + 1], arr[j]);
        }
        
        if (i < n) {
            if (++j >= n - i - 1) {
                i++;
                j = 0;
            }
            bubbleSort(arr, i, j, n, delay);
        }
    }, delay)
}


function clear_color(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.remove("activate");
    }
}

function bubbleSort(arr, i, j, n, delay) {
    setTimeout(() => {
        clear_color(arr);
        if (i < n) {
            arr[j].classList.add("activate");
            arr[j + 1].classList.add("activate");
            if (Number(arr[j].getAttribute("title")) > Number(arr[j + 1].getAttribute("title"))) {
                arr[j].parentNode.insertBefore(arr[j + 1], arr[j]);
            }
            
            if (++j >= n - i - 1) {
                i++;
                j = 0;
            }
            bubbleSort(arr, i, j, n, delay);
        }
    }, delay)
}


// function insertionSort(arr, i, j, n, key, delay) {
//     setTimeout(() => {
//         if (i < n) {
            
//             if (j >= 0 && Number(arr[j].getAttribute("title")) > key)
//             { 
//                 arr[j + 1] = arr[j]; 
//                 j--;
//             } else {
//                 arr[j + 1] = key;
//                 j = ++i - 1;
//                 key = arr[j].getAttribute("title");
//             }
            
//             console.log(i, j, n, arr, count);
                
//             insertionSort(arr, i, j, n, key);
//         }
//     }, 500)    
// }


/*
let arr = [5, 4, 3, 2, 1];
let count = 0;

function insertionSort(arr, i, j, n, key) {
    count++;
    setTimeout(() => {
        if (i < n) {
            
            if (j >= 0 && arr[j] > key)
            { 
                arr[j + 1] = arr[j]; 
                j--;
            } else {
                arr[j + 1] = key;
                j = ++i - 1;
                key = arr[i];
            }
            
            console.log(i, j, n, arr, count);
                
            insertionSort(arr, i, j, n, key);
        }
    }, 500)
}

insertionSort(arr, 1, 0, arr.length, arr[1]);
*/
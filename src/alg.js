const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
}

const stopper = async () => {
    console.log('a');
    console.log('waiting...')
    let delayres = await delay(30000);
    console.log('b');
}

function bubble_sort(arr) {
    for (let i = 0; i < arr.length; ++i) {
            for (let j = 0; j < (arr.length - i - 1); ++j) {
                if (Number(arr[j].getAttribute("title")) > Number(arr[j + 1].getAttribute("title"))) {
                    arr[j].parentNode.insertBefore(arr[j + 1], arr[j]);
                    stopper();
                }
            }
    }
    return arr;
}


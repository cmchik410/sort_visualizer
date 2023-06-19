let board = document.querySelector(".board");

let result = document.querySelector(".result");

let submit = document.querySelector(".submit");

let sort = document.querySelector(".sort");

let delay = 800;

submit.addEventListener("click", e => {
    e.preventDefault();

    let nums = e.target.parentElement.children[0].value;

    nums = nums.split(",");

    nums.forEach((item, idx) => {
        nums[idx] = Number(nums[idx]);
    })

    if (nums.length > 15) {
        alert("Too much element");
        return;
    }

    init(nums);
})

sort.addEventListener("click", e => {
    e.preventDefault();

    let barArray = board.childNodes;

    if (barArray[0].nodeType == 3) {
        barArray[0].remove();
    }

    let n = barArray.length;

    let mode = document.querySelector(".algorithms").value;

    switch (mode) {
        case "bubble":
            bubbleSort(barArray, 0, 0, n, delay);
            break;
        case "merge":
            break;
    }
})


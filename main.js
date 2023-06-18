let board = document.querySelector(".board");

let result = document.querySelector(".result");

let submit = document.querySelector(".submit");

let asc = document.querySelector(".asc");

let des = document.querySelector(".des");

let play = document.querySelector(".play");

let nums = null;

submit.addEventListener("click", e => {
    e.preventDefault();

    nums = e.target.parentElement.children[0].value;

    nums = nums.split(",");

    nums.forEach((item, idx) => {
        nums[idx] = Number(nums[idx]);
    })

    if (nums.length > 20) {
        alert("Too much element");
        return;
    }

    initialize(nums);
})

play.addEventListener("click", e => {
    e.preventDefault();
    let barArray = board.childNodes;

    if (barArray[0].nodeType == 3) {
        barArray[0].remove();
    }

    let sorted_array = [];

    let arr = bubble_sort(barArray);

    for (let i = 0; i < arr.length; ++i) {
        sorted_array.push(arr[i].getAttribute("title"));
    }

    result.innerHTML = sorted_array;

})

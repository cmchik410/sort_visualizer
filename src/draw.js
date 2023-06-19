function create_bar(x, max_val, max_h, max_w) {
    let text = document.createElement("p");

    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.title = x;
    bar.style.height = (Math.floor(max_h * x / max_val)).toString() + "px";
    bar.style.width = max_w.toString() + "px";

    bar.appendChild(text);
    return bar;
}

function init(nums) {
    clearBoard();

    let max_h = Math.floor(board.clientHeight * 0.8);
    let max_w = Math.floor((board.clientWidth * 0.6) / nums.length);

    const max_val = nums.reduce((a, b) => Math.max(a, b), -Infinity);

    nums.forEach(item => {
        let tempBar = create_bar(item, max_val, max_h, max_w);
        board.appendChild(tempBar);
    })
}

function clearBoard() {
    let len = board.children.length;

    for (let i = 0; i < len; i++) {
        board.children[0].remove();
    }
}
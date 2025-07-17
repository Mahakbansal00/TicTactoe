let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgcon = document.querySelector(".msgcon");
let msg = document.querySelector("#msg");
let turno = true;

let winPattrens = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turno = true;
    enabledbtn();
    msgcon.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.innerText !== "") return;

        if (turno) {
            box.innerText = "O";
        } else {
            box.innerText = "X";
        }
        box.disabled = true;
        turno = !turno;
        checkwinner();
    });
});

const disabledbtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enabledbtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disabledbtn();
};

const checkwinner = () => {
    for (let pattren of winPattrens) {
        let pos1val = boxes[pattren[0]].innerText;
        let pos2val = boxes[pattren[1]].innerText;
        let pos3val = boxes[pattren[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                return;
            }
        }
    }
};

newGamebtn.addEventListener('click', resetGame);
resetbtn.addEventListener('click', resetGame);

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const textColors = ['purple', 'black', 'green', 'white', 'red', 'yellow', 'white'];
let colorIndex = 0;
function changeColor() {
    const box = document.getElementById('box');
    box.style.backgroundColor = colors[colorIndex];
    box.style.color = textColors[colorIndex];
    box.innerHTML = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}
function resizeBoxes() {
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const box3 = document.getElementById('box3');
    const box1Input = document.getElementById('box1-input');
    const box2Input = document.getElementById('box2-input');
    const box3Input = document.getElementById('box3-input');
    const total = Number(box1Input.value) + Number(box2Input.value) + Number(box3Input.value);
    box1.style.width = (Number(box1Input.value) / total * 100) + '%';
    box2.style.width = (Number(box2Input.value) / total * 100) + '%';
    box3.style.width = (Number(box3Input.value) / total * 100) + '%';
}
document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input[type="text"]');
    const buttons = document.querySelectorAll('button');

    let string = "";
    let arr = Array.from(buttons);
    arr.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target.innerHTML == '=') {
                try {
                    string = eval(string);
                    input.value = string;
                } catch {
                    input.value = "Error";
                    string = "";
                }
            } else if (e.target.innerHTML == 'AC') {
                string = "";
                input.value = string;
            } else if (e.target.innerHTML == 'DEL') {
                string = string.substring(0, string.length - 1);
                input.value = string;
            } else {
                string += e.target.innerHTML;
                input.value = string;
            }
        });
    });

    const background = document.querySelector('.background');
    const symbols = ['+', '-', '*', '/', '=', '%', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'log', 'cos', 'θ', 'Sayan'];
    for (let i = 0; i < 100; i++) {
        const symbol = document.createElement('div');
        symbol.className = 'math-symbol';
        symbol.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        symbol.style.left = Math.random() * 100 + 'vw';
        symbol.style.top = Math.random() * 100 + 'vh';
        symbol.style.fontSize = (Math.random() * 20 + 10) + 'px';
        symbol.style.transform = `rotate(${Math.random() * 360}deg)`;
        background.appendChild(symbol);
    }
});

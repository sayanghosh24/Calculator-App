document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input[type="text"]');
    const buttons = document.querySelectorAll('button');

    let string = "";
    let arr = Array.from(buttons);
    arr.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.innerHTML;
            if (value == '=') {
                try {
                    string = eval(string);
                    input.value = string;
                } catch {
                    input.value = "Error";
                    string = "";
                }
            } else if (value == 'AC') {
                string = "";
                input.value = string;
            } else if (value == 'DEL') {
                string = string.substring(0, string.length - 1);
                input.value = string;
            } else if (value == 'sin' || value == 'cos' || value == 'tan' || value == '√' || value == 'log') {
                string = input.value;  // get the current input value for operations
                switch (value) {
                    case 'sin':
                        string = Math.sin(parseFloat(string));
                        break;
                    case 'cos':
                        string = Math.cos(parseFloat(string));
                        break;
                    case 'tan':
                        string = Math.tan(parseFloat(string));
                        break;
                    case 'log':
                        string = Math.log10(parseFloat(string));  // base-10 logarithm
                        break;
                    case '√':
                        string = Math.sqrt(parseFloat(string));
                        break;
                }
                input.value = string;
            } else {
                string += value;
                input.value = string;
            }
        });
    });
});

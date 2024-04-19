let string = "";
let buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
        }
        else if(e.target.innerHTML == '%'){
            string = eval(string)/100;
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
        }
        else if (e.target.innerHTML == "DE") {
            string = string.slice(0, string.length - 1);
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
        }
        document.querySelector('input').value = string;
    })
})
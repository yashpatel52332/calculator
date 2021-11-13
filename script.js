let screen = document.getElementById('screen');
let button = document.querySelectorAll('button');
let btn = document.querySelectorAll('button');
let screenVal = '';
for (item of btn) {
    item.addEventListener('click', (e) => {
        btnText = e.target.innerText;
        if (btnText == 'X') {
            btnText = "*";
            screenVal += btnText;
            screen.value = screenVal;
        } else if (btnText == '=') {
            screen.value = eval(screenVal);
        }
        else if (btnText == 'C') {
            screenVal = '';
            screen.value = screenVal;

        }
        else {
            screenVal += btnText;
            screen.value = screenVal;
        }
    })
}

const screen = document.getElementById('screen');

function appendValue(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = '';
}

function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}

function calculateResult() {
    try {
        if(screen.value !== '') {
            let result = eval(screen.value);
            
            if (!isFinite(result)) {
                screen.value = 'Cannot divide by zero';
            } else {
                screen.value = result;
            }
        }
    } catch (e) {
        screen.value = 'Error';
    }
}

function press(e: string): void {
    const inputElement = document.getElementById('inp') as HTMLInputElement;
    if (inputElement) {
        inputElement.value += e;
    }
}

function eq(): void {
    const inputElement = document.getElementById('inp') as HTMLInputElement;
    if (inputElement) {
        inputElement.value = eval(inputElement.value);
    }
}

function clr(): void {
    const inputElement = document.getElementById('inp') as HTMLInputElement;
    if (inputElement) {
        inputElement.value = '';
    }
}

function clr1(): void { 
    const inputElement = document.getElementById('inp') as HTMLInputElement;
    if (inputElement) {
        inputElement.value = inputElement.value.slice(0, -1);
    }
}

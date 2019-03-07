function Button () {};

Button.prototype.createElement = function (parrentId, elementTag, elementId, elementClassName, elementValue, elementType, elementBackground, elementPosition = null) {
    let element = document.createElement(elementTag);

    element.id = elementId;
    element.className = elementClassName;
    element.value = elementValue;
    element.type = elementType;
    element.background = elementBackground;
    document.getElementById(parrentId).insertBefore (element, document.getElementById(parrentId).children[elementPosition]);
};

Button.prototype.clickMe = function (event) {
    if (event.target.style.background !== event.target.background ) {
        event.target.style.background = event.target.background;
    } else {
        event.target.style.background = 'grey';
    }
};

Button.prototype.cleaning = function () {
    if (document.getElementById('article').innerHTML !== "") {
        clearInterval(this.timerId);
        document.getElementById('article').innerHTML = "";
    }
};

let button = new Button;

button.createDom = function () {
    button.createElement ('article', 'input', 'firstButton', 'superButton', 'First Button', 'button', 'red', 0);
    button.createElement ('article', 'input', 'secondButton', 'superButton', 'Second Button', 'button', 'green', 1);
    button.createElement ('article', 'input', 'thirdButton', 'superButton', 'Third Button', 'button', 'blue', 2);
};

button.turnOn = function () {
    button.cleaning();
    button.createDom();
    document.getElementById('firstButton').addEventListener("click", button.clickMe);
    document.getElementById('secondButton').addEventListener("click", button.clickMe);
    document.getElementById('thirdButton').addEventListener("click", button.clickMe);
};

document.getElementById('nav_item-superButtons').addEventListener('click', button.turnOn);
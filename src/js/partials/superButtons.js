class SuperButtons {
    clickMe (event) {
        if (event.target.style.background !== event.target.background ) {
            event.target.style.background = event.target.background;
        } else {
            event.target.style.background = 'grey';
        }
    };

    clear (conteinerId) {
        if (document.getElementById(conteinerId).innerHTML !== "") {
            clearInterval(slider.timerId);
            clearInterval(slider1.timerId);
            document.getElementById(conteinerId).innerHTML = "";
        }
    };
}

(function turnOnSuperButtons () {
    document.getElementById('nav_item-superButtons').addEventListener('click', function () {
        let buttons = new SuperButtons;
        let element = new CreateElement;

        buttons.clear('article');
        element.create('article', 'input').id('firstButton').class('superButton').value('First Button').type('button').position(0);
        document.getElementById('firstButton').background = 'red';
        element.create('article', 'input').id('secondButton').class('superButton').value('Second Button').type('button').position(1);
        document.getElementById('secondButton').background = 'green';
        element.create('article', 'input').id('thirdButton').class('superButton').value('Third Button').type('button').position(2);
        document.getElementById('thirdButton').background = 'blue';

        document.getElementById('firstButton').addEventListener("click", buttons.clickMe);
        document.getElementById('secondButton').addEventListener("click", buttons.clickMe);
        document.getElementById('thirdButton').addEventListener("click", buttons.clickMe);
    });
})();
function ClearAllButtton () {}

ClearAllButtton.prototype.createElement = function (parrentId, conteinerTag, conteinerId, conteinerClassName, conteinerPosition = null) {
    let parrent = document.getElementById(parrentId);
    let conteiner = document.createElement(conteinerTag);

    (function () {
        if (conteinerId !== undefined) {
            conteiner.id = conteinerId;
        }
    })();

    (function () {
        if (conteinerClassName !== undefined) {
            conteiner.className = conteinerClassName;
        }
    })();

    parrent.insertBefore (conteiner, parrent.children[conteinerPosition]);
};

let clearAll = new ClearAllButtton;

clearAll.turnOn = function () {
    clearAll.createElement('header', 'a', 'clearAll', 'clearAll', 0);
    document.getElementById('clearAll').innerHTML = 'Clear All';
    document.getElementById('clearAll').addEventListener('click', function () {
        clearInterval(slider.timerId);
        document.getElementById('article').innerHTML = '';
        document.getElementById('article').style.height = "80vh";
    });
};

clearAll.turnOn();

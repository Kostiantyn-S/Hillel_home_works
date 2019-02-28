let windowSize = new Function;

windowSize.creatingElement = function (parrentId, conteinerTag, conteinerId, conteinerClassName, conteinerPosition = null) {
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

windowSize.showSize = function (conteinerId) {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    document.getElementById(conteinerId).innerHTML = width + ' x ' + height;
};

windowSize.creatingElement ('footer', 'div', 'window-size', 'window-size');
windowSize.showSize('window-size');
window.addEventListener('resize', function () {
    setTimeout(windowSize.showSize, 2000, 'window-size');
});
let windowSize = new Function;

windowSize.creatingLastElement = function (parrentId, conteinerTag, conteinerId, conteinerClassName) {
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

    parrent.appendChild (conteiner);
};

windowSize.showSize = function (conteinerId) {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    document.getElementById(conteinerId).innerHTML = width + ' x ' + height;
}

windowSize.creatingLastElement ('header', 'div', 'window-size', 'window-size');
windowSize.showSize('window-size');
window.addEventListener('resize', function () {
    setTimeout(windowSize.showSize, 2000, 'window-size');
});
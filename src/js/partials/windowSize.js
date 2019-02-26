let windowSize = {};

windowSize.__proto__.creatingElement = function (conteinerId, parrentId) {
    let conteiner = document.createElement('div');
    let parrent = document.getElementById(parrentId);
    conteiner.id = conteinerId;
    parrent.appendChild (conteiner);
};

windowSize.__proto__.showSize = function () {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    let oldWidth;
    let oldHeight;

    if (width !== oldWidth && height !== oldHeight) {
        setTimeout(function () {
            document.getElementById('window-size').innerHTML = width + ' x ' + height;
        }, 2000);
    }

    oldWidth = width;
    oldHeight  = height;
};

windowSize.creatingElement ('window-size', 'header');
setInterval (windowSize.showSize, 0);
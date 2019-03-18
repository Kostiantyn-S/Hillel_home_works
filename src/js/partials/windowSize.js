class WindowSize {
    showSize (conteinerId) {
        let width = document.documentElement.clientWidth;
        let height = document.documentElement.clientHeight;
        document.getElementById(conteinerId).innerHTML = `${width} x ${height}`;
    };
}

(function turnOnWindowSize () {
    let element = new CreateElement;
    element.create('footer', 'div').id('window-size').class('window-size').position();

    let windowSize = new WindowSize;
    windowSize.showSize('window-size');
    window.addEventListener('resize', function () {
        setTimeout(windowSize.showSize, 2000, 'window-size');
    });
})();
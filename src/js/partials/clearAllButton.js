(function turnOnClearAllButtton () {
    let element = new CreateElement;

    element.create('header', 'a').id('clearAll').class('clearAll').innerHTML('Clear All').position(0);
    document.getElementById('clearAll').addEventListener('click', function () {
        clearInterval(slider.timerId);
        document.getElementById('article').innerHTML = '';
    });
})();
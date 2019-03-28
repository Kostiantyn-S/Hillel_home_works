function turnOnProgressbar () {
    let element = new CreateElement;
    let text = 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.';

    (function clear () {
        if (document.getElementById('article').innerHTML !== "") {
            clearInterval(slider.timerId);
            clearInterval(slider1.timerId);
            document.getElementById('article').innerHTML = "";
        }
    })();

    (function createDOM () {
        element.create('article', 'div').id('progressbar-wrap').class('progressbar-wrap').position(0);
        element.create('progressbar-wrap', 'div').id('progressbar-mainTitle').class('progressbar-mainTitle').innerHTML('Progressbar').position(0);
        element.create('progressbar-wrap', 'div').id('progressbar-loader').class('progressbar-loader').position(1);
        element.create('progressbar-loader', 'div').id('progressbar-loader_progress').class('progressbar-loader_progress').position();

        element.create('progressbar-wrap', 'div').id('progressbar-buttons').class('progressbar-buttons').position(2);
        element.create('progressbar-buttons', 'input').type('button').value('In order').id('progressbar-inOrder').class('progressbar-button').position(0);
        element.create('progressbar-buttons', 'input').type('button').value('Together').id('progressbar-together').class('progressbar-button').position(1);

        element.create('progressbar-wrap', 'div').id('progressbar-articles').class('progressbar-articles').position(3);
        element.create('progressbar-articles', 'div').id('progressbar-firstArticle').class('progressbar-article').position(0);
        element.create('progressbar-firstArticle', 'img').id('progressbar-firstImg').class('progressbar-img').src('img/slider/1.jpg').alt('first').position(0);
        element.create('progressbar-firstArticle', 'div').id('progressbar-firstTitleText').class('progressbar-titleText').position(1);
        element.create('progressbar-firstTitleText', 'div').id('progressbar-firstTitle').class('progressbar-title').innerHTML('Some title').position(0);
        element.create('progressbar-firstTitleText', 'div').id('progressbar-firstText').class('progressbar-text').innerHTML(text).position(1);

        element.create('progressbar-articles', 'div').id('progressbar-secondArticle').class('progressbar-article').position(1);
        element.create('progressbar-secondArticle', 'img').id('progressbar-secondImg').class('progressbar-img').src('img/slider/5.jpg').alt('second').position(0);
        element.create('progressbar-secondArticle', 'div').id('progressbar-secondTitleText').class('progressbar-titleText').position(1);
        element.create('progressbar-secondTitleText', 'div').id('progressbar-secondTitle').class('progressbar-title').innerHTML('Some title').position(0);
        element.create('progressbar-secondTitleText', 'div').id('progressbar-secondText').class('progressbar-text').innerHTML(text).position(1);

        element.create('progressbar-articles', 'div').id('progressbar-thirdArticle').class('progressbar-article').position(2);
        element.create('progressbar-thirdArticle', 'img').id('progressbar-thirdImg').class('progressbar-img').src('img/slider/7.jpg').alt('third').position(0);
        element.create('progressbar-thirdArticle', 'div').id('progressbar-thirdTitleText').class('progressbar-titleText').position(1);
        element.create('progressbar-thirdTitleText', 'div').id('progressbar-thirdTitle').class('progressbar-title').innerHTML('Some title').position(0);
        element.create('progressbar-thirdTitleText', 'div').id('progressbar-thirdText').class('progressbar-text').innerHTML(text).position(1);
    })();

    setTimeout (function () {
        document.querySelector('#progressbar-loader_progress').style.transform = `translateX(-400px)`;
    });

    (function activateButtons () {
        document.querySelector('#progressbar-loader_progress').addEventListener('transitionend', function () {
            document.querySelector('#progressbar-buttons').classList.add('visible');
        });
    })();

    document.querySelector('#progressbar-inOrder').addEventListener('click', function () {
        document.querySelector('#progressbar-together').classList.add('unvisible');

        let images = document.querySelectorAll('.progressbar-img');
        let titles = document.querySelectorAll('.progressbar-title');
        let texts = document.querySelectorAll('.progressbar-text');
        let articles = document.querySelectorAll('.progressbar-article');

        let chain = Promise.resolve()

            .then(() => {
                images.forEach (function (item) {
                    item.classList.add('scale');
                });
            })

            .then(setTimeout(() => {
                titles.forEach (function (item) {
                    item.classList.add('scale');
                });
            }, 3000))

            .then(setTimeout(() => {
                texts.forEach (function (item) {
                    item.classList.add('scale');
                });
            }, 6000))

            .then(setTimeout(() => {
                articles.forEach (function (item) {
                    item.classList.add('scale');
                });
            }, 9000))

            .then(setTimeout(() => {
                articles.forEach (function (item) {
                    item.classList.remove('scale');
                });
            }, 12000))

            .then(setTimeout(() => {
                texts.forEach (function (item) {
                    item.classList.remove('scale');
                });
            }, 15000))

            .then(setTimeout(() => {
                titles.forEach (function (item) {
                    item.classList.remove('scale');
                });
            }, 18000))

            .then(setTimeout(() => {
                images.forEach (function (item) {
                    item.classList.remove('scale');
                });
            }, 21000))

            .then(setTimeout(() => document.querySelector('#progressbar-together').classList.remove('unvisible'), 24000));
    });

    document.querySelector('#progressbar-together').addEventListener('click', function () {
        document.querySelector('#progressbar-inOrder').classList.add('unvisible');

        let articles = document.querySelectorAll('.progressbar-article');

        let chain = Promise.resolve()

            .then(() => {
                articles.forEach (function (item) {
                    item.classList.add('scale');
                });
            })

            .then(setTimeout(() => {
                articles.forEach (function (item) {
                    item.classList.remove('scale');
                });
            }, 3000))

            .then(setTimeout(() => document.querySelector('#progressbar-inOrder').classList.remove('unvisible'), 6000));
    });
}

(function activateProgressbar () {
    document.querySelector('#nav_item-progressbar').addEventListener('click', turnOnProgressbar);
})();
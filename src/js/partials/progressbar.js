let progressbar = {};

progressbar.clear = function () {
    if (document.getElementById('article').innerHTML !== "") {
        clearInterval(slider.timerId);
        clearInterval(slider1.timerId);
        document.getElementById('article').innerHTML = "";
    }
};

progressbar.createDOM = function () {
    let element = new CreateElement;
    let text = 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.';

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
};

progressbar.load = function () {
    function toVisibleButtons () {
        document.querySelector('#progressbar-buttons').classList.add('visible');
        document.querySelector('#progressbar-loader_progress').removeEventListener('transitionend', toVisibleButtons);
    }

    Promise.resolve()
        .then (() => document.querySelector('#progressbar-loader_progress').addEventListener('transitionend', toVisibleButtons))
        .then (() => setTimeout(() => document.querySelector('#progressbar-loader_progress').style.transform = `translateX(-400px)`));
};

progressbar.ToVisblleButton = function () {
    if (document.querySelector('#progressbar-inOrder').classList.contains('unvisible') === true) {
        document.querySelector('#progressbar-inOrder').classList.remove('unvisible');
    } else {
        document.querySelector('#progressbar-together').classList.remove('unvisible');
    }
};

progressbar.scale = function (event) {
    switch (event.target) {
        case event.currentTarget.childNodes[0]:
            if (event.currentTarget.childNodes[0].classList.contains('scale') === true) {
                event.currentTarget.childNodes[1].childNodes[0].classList.toggle('scale');
            } else {
                progressbar.ToVisblleButton();
                event.currentTarget.removeEventListener('transitionend', progressbar.scale);
            }
            break;

        case event.currentTarget.childNodes[1].childNodes[0]:
            if (event.currentTarget.childNodes[1].childNodes[0].classList.contains('scale') === true) {
                event.currentTarget.childNodes[1].childNodes[1].classList.toggle('scale');
            } else {
                event.currentTarget.childNodes[0].classList.toggle('scale');
            }
            break;

        case event.currentTarget.childNodes[1].childNodes[1]:
            if (event.currentTarget.childNodes[1].childNodes[1].classList.contains('scale') === true) {
                event.currentTarget.classList.toggle('scale');
            } else {
                event.currentTarget.childNodes[1].childNodes[0].classList.toggle('scale');
            }
            break;

        case event.currentTarget:
            if (event.currentTarget.classList.contains('scale') === true) {
                event.currentTarget.classList.toggle('scale');
            } else {
                event.currentTarget.childNodes[1].childNodes[1].classList.toggle('scale');
            }
            break;
    }
};

progressbar.activateArticle = function (elementSelector, buttonId) {
    Promise.resolve()
        .then(() => document.querySelector(elementSelector).addEventListener('transitionend', this.scale))
        .then(() => document.querySelector(elementSelector).childNodes[0].classList.add('scale'))
        .then(() => document.querySelector(buttonId).classList.add('unvisible'));
};

progressbar.togetherClick = function () {
    progressbar.activateArticle('#progressbar-firstArticle', '#progressbar-inOrder');
    progressbar.activateArticle('#progressbar-secondArticle', '#progressbar-inOrder');
    progressbar.activateArticle('#progressbar-thirdArticle', '#progressbar-inOrder');
};

progressbar.setTogetherListener = function () {
    document.querySelector('#progressbar-together').addEventListener('click', this.togetherClick);
};

progressbar.inOrder = function (event) {
    switch (event.target) {
        case document.querySelector('#progressbar-firstImg'):
            if (event.target.classList.contains('scale') === true) {
                document.querySelector('#progressbar-firstTitle').classList.add('scale');
            } else {
                document.querySelector('#progressbar-together').classList.remove('unvisible');
                document.querySelector('#progressbar-articles').removeEventListener('transitionend', progressbar.inOrder);
            }
            break;

        case document.querySelector('#progressbar-firstTitle'):
            if (event.target.classList.contains('scale') === true) {
                document.querySelector('#progressbar-firstText').classList.add('scale');
            } else {
                document.querySelector('#progressbar-firstImg').classList.remove('scale');
            }
            break;

        case document.querySelector('#progressbar-firstText'):
            if (event.target.classList.contains('scale') === true) {
                document.querySelector('#progressbar-firstArticle').classList.add('scale');
            } else {
                document.querySelector('#progressbar-firstTitle').classList.remove('scale');
            }
            break;

        case document.querySelector('#progressbar-firstArticle'):
            if (event.target.classList.contains('scale') === true) {
                document.querySelector('#progressbar-secondImg').classList.add('scale');
            } else {
                document.querySelector('#progressbar-firstText').classList.remove('scale');
            }
            break;

        case document.querySelector('#progressbar-secondImg'):
            if (event.target.classList.contains('scale') === true) {
                document.querySelector('#progressbar-secondTitle').classList.add('scale');
            } else {
                document.querySelector('#progressbar-firstArticle').classList.remove('scale');
            }
            break;

        case document.querySelector('#progressbar-secondTitle'):
            if (event.target.classList.contains('scale') === true) {
                document.querySelector('#progressbar-secondText').classList.add('scale');
            } else {
                document.querySelector('#progressbar-secondImg').classList.remove('scale');
            }
            break;

        case document.querySelector('#progressbar-secondText'):
            if (event.target.classList.contains('scale') === true) {
                document.querySelector('#progressbar-secondArticle').classList.add('scale');
            } else {
                document.querySelector('#progressbar-secondTitle').classList.remove('scale');
            }
            break;

        case document.querySelector('#progressbar-secondArticle'):
            if (event.target.classList.contains('scale') === true) {
                document.querySelector('#progressbar-thirdImg').classList.add('scale');
            } else {
                document.querySelector('#progressbar-secondText').classList.remove('scale');
            }
            break;

        case document.querySelector('#progressbar-thirdImg'):
            if (event.target.classList.contains('scale') === true) {
                document.querySelector('#progressbar-thirdTitle').classList.add('scale');
            } else {
                document.querySelector('#progressbar-secondArticle').classList.remove('scale');
            }
            break;

        case document.querySelector('#progressbar-thirdTitle'):
            if (event.target.classList.contains('scale') === true) {
                document.querySelector('#progressbar-thirdText').classList.add('scale');
            } else {
                document.querySelector('#progressbar-thirdImg').classList.remove('scale');
            }
            break;

        case document.querySelector('#progressbar-thirdText'):
            if (event.target.classList.contains('scale') === true) {
                document.querySelector('#progressbar-thirdArticle').classList.add('scale');
            } else {
                document.querySelector('#progressbar-thirdTitle').classList.remove('scale');
            }
            break;

        case document.querySelector('#progressbar-thirdArticle'):
            if (event.target.classList.contains('scale') === true) {
                event.target.classList.remove('scale');
            } else {
                document.querySelector('#progressbar-thirdText').classList.remove('scale');
            }
            break;
    }
};

progressbar.inOrderClick = function () {
    Promise.resolve()
        .then(() => document.querySelector('#progressbar-articles').addEventListener('transitionend', progressbar.inOrder))
        .then(() => document.querySelector('#progressbar-together').classList.add('unvisible'))
        .then(() => document.querySelector('#progressbar-firstImg').classList.add('scale'));
};

progressbar.setInOrderListener = function () {
    document.querySelector('#progressbar-inOrder').addEventListener('click', this.inOrderClick);
};

progressbar.activateProgressbar = function () {
    let self = this;
    document.querySelector('#nav_item-progressbar').addEventListener('click', function () {
        Promise.resolve()
            .then(() => self.clear())
            .then(() => self.createDOM())
            .then(() => self.load())
            .then(() => self.setTogetherListener())
            .then(() => self.setInOrderListener());
    });
};

progressbar.activateProgressbar();
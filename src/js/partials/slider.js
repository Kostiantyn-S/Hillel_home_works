function Slider () {
    this.slides = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    this.startIndex = 0;
    this.timerId = 0;
}

Slider.prototype.createElement = function (parrentId, conteinerTag, conteinerId, conteinerClassName, conteinerPosition = null) {
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

Slider.prototype.createDOM = function () {
    this.createElement('article', 'div', 'slider-title', 'slider-title', 0);
    document.getElementById('slider-title').innerHTML = 'Triumph Bonneville';
    this.createElement ('article', 'div', 'slider', 'slider', 1);
    this.createElement ('slider', 'div', 'slider-button-left', 'slider-button-left');
    this.createElement ('slider', 'div', 'slider-button-right', 'slider-button-right');
};

Slider.prototype.set = function (image) {
    document.getElementById("slider").style.backgroundImage = `url('../img/slider/${image}')`;
};

Slider.prototype.initial = function () {
    this.set (this.slides[this.startIndex]);
};

Slider.prototype.scrollRight = function () {
    this.startIndex++;
    if (this.startIndex === this.slides.length) {
        this.startIndex = 0;
    }
    this.initial(this.slides[this.startIndex]);
};

Slider.prototype.scrollLeft = function () {
    this.startIndex--;
    if (this.startIndex < 0) {
        this.startIndex = this.slides.length - 1;
    }
    this.initial(this.slides[this.startIndex]);
};

Slider.prototype.cleaning = function () {
    if (document.getElementById('article').innerHTML !== "") {
        clearInterval(this.timerId);
        document.getElementById('article').innerHTML = "";
    }
};

Slider.prototype.timer = function () {

    let self = this;
    clearInterval(this.timerId);

    this.timerId = setInterval (function () {
        self.scrollRight();
    }, 8000);
};

let slider = new Slider;

slider.turnOn = function () {
    document.getElementById('nav_item-slider').addEventListener ('click', function () {
        slider.cleaning();
        slider.createDOM();
        slider.initial();
        slider.timer();

        document.getElementById('slider-button-left').addEventListener ('click', function () {
            slider.scrollLeft();
        });

        document.getElementById('slider-button-right').addEventListener ('click', function () {
            slider.scrollRight();
        });
    });
};

slider.turnOn();
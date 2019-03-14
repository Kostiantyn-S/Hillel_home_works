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
    document.getElementById("slider").style.backgroundImage = `url('img/slider/${image}')`;
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
    }, 6000);
};

let slider = new Slider;

slider.turnOn = function () {
    document.getElementById('nav_item-slider').addEventListener ('click', function () {
        slider.cleaning();
        slider.createDOM();
        slider.initial();
        slider.timer();

        document.getElementById('slider').addEventListener ('mouseover', function () {
            clearInterval(slider.timerId);
        });

        document.getElementById('slider').addEventListener ('mouseout', function () {
            slider.timer();
        });

        document.getElementById('slider-button-left').addEventListener ('click', function () {
            slider.scrollLeft();
        });

        document.getElementById('slider-button-right').addEventListener ('click', function () {
            slider.scrollRight();
        });

        slider1.turnOn();
    });
};

slider.turnOn();

let slider1 = new Slider;
slider1.slides = ['5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

slider1.createDOM = function () {
    this.createElement('article', 'div', 'slider1', 'slider1', 2);
    this.createElement('slider1', 'div', 'slider1-title', 'slider-title', 0);
    document.getElementById('slider1-title').innerHTML = 'North Pole';
    this.createElement ('slider1', 'div', 'slider1-conteiner', 'slider', 1);
    this.createElement ('slider1-conteiner', 'div', 'slider1-button-left', 'slider-button-left');
    this.createElement ('slider1-conteiner', 'div', 'slider1-indicators', 'slider1-indicators', 2);
    this.createElement ('slider1-indicators', 'div', 'slider1-slide0', 'slider1-slide', 0);
    this.createElement ('slider1-indicators', 'div', 'slider1-slide1', 'slider1-slide', 1);
    this.createElement ('slider1-indicators', 'div', 'slider1-slide2', 'slider1-slide', 2);
    this.createElement ('slider1-indicators', 'div', 'slider1-slide3', 'slider1-slide', 3);
    this.createElement ('slider1-indicators', 'div', 'slider1-slide4', 'slider1-slide', 4);
    this.createElement ('slider1-conteiner', 'div', 'slider1-button-right', 'slider-button-right');
    this.createElement ('slider1', 'div', 'slider1-hover', 'slider1-hover', 2);
    document.getElementById('slider1-hover').hidden = true;
};

slider1.set = function (image) {
    document.getElementById("slider1-conteiner").style.backgroundImage = `url('img/slider/${image}')`;
};

slider1.indicator = function () {
    for (var i = 0; i < this.slides.length; i++) {
        if (document.getElementById("slider1-conteiner").style.backgroundImage === `url("img/slider/${this.slides[i]}")`) {
            document.getElementById ('slider1-indicators').childNodes[i].style.background = 'white';
        } else {
            document.getElementById ('slider1-indicators').childNodes[i].style.background = null;
        };
    };
};

slider1.timer = function () {
    let self = this;
    clearInterval(this.timerId);

    this.timerId = setInterval (function () {
        self.scrollRight();
        self.indicator();
    }, 6000);
};

slider1.turnOn = function () {
    let self = this;

    this.createDOM();
    this.initial();
    self.indicator();
    this.timer();

    document.getElementById('slider1-conteiner').addEventListener ('mouseover', function () {
        clearInterval(self.timerId);
        document.getElementById('slider1-hover').hidden = false;
        document.getElementById('slider1-hover').innerHTML = `${document.getElementById("slider1-conteiner").style.backgroundImage}`;
    });

    document.getElementById('slider1-conteiner').addEventListener ('mousemove', function (e) {
            let element = document.getElementById('slider1-hover');
            element.style.left = e.clientX + 20 + 'px';
            element.style.top = e.clientY + 400 + 'px';
        });

    document.getElementById('slider1-conteiner').addEventListener ('mouseout', function () {
        self.timer();
        document.getElementById('slider1-hover').hidden = true;
    });

    document.getElementById('slider1-button-left').addEventListener ('click', function () {
        self.scrollLeft();
        self.indicator();
    });

    document.getElementById('slider1-button-right').addEventListener ('click', function () {
        self.scrollRight();
        self.indicator();
    });

    document.getElementById('slider1-slide0').addEventListener ('click', function () {
        self.set(self.slides[0]);
        self.indicator();
    });

    document.getElementById('slider1-slide1').addEventListener ('click', function () {
        self.set(self.slides[1]);
        self.indicator();
    });

    document.getElementById('slider1-slide2').addEventListener ('click', function () {
        self.set(self.slides[2]);
        self.indicator();
    });

    document.getElementById('slider1-slide3').addEventListener ('click', function () {
        self.set(self.slides[3]);
        self.indicator();
    });

    document.getElementById('slider1-slide4').addEventListener ('click', function () {
        self.set(self.slides[4]);
        self.indicator();
    });
};
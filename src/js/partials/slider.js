class Slider {
    constructor () {
        this.slides = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg'];
        this.startIndex = 0;
        this.timerId = 0;
    };

    set (sliderConteinerId, slide) {
        document.getElementById(sliderConteinerId).style.backgroundImage = `url('img/slider/${slide}')`;
    };

    scrollRight (sliderConteinerId) {
        this.startIndex++;
        if (this.startIndex === this.slides.length) {
            this.startIndex = 0;
        }
        this.set(sliderConteinerId, this.slides[this.startIndex]);
    };

    scrollLeft (sliderConteinerId) {
        this.startIndex--;
        if (this.startIndex < 0) {
            this.startIndex = this.slides.length - 1;
        }
        this.set(sliderConteinerId, this.slides[this.startIndex]);
    };

    timing (sliderConteinerId) {
        let self = this;
        clearInterval(this.timerId);

        this.timerId = setInterval (function () {
            self.scrollRight(sliderConteinerId);
        }, 6000);
    };
}

(function turnOnFirstSlider () {
    let element = new CreateElement;
    let slider = new Slider;

    document.getElementById('nav_item-slider').addEventListener('click', function () {
        (function clear() {
            if (document.getElementById('article').innerHTML !== "") {
                clearInterval(slider.timerId);
                document.getElementById('article').innerHTML = "";
            }
        })();

        (function createDOM() {
            element.create('article', 'div').id('slider-wrap').class('slider-wrap').position(2); //slider1
            element.create('slider-wrap', 'div').id('slider-title').class('slider-title').innerHTML('Triumph Bonneville').position(0);
            element.create('slider-wrap', 'div').id('slider').class('slider').position(1);
            element.create('slider', 'div').id('slider-button-left').class('slider-button-left').position();
            element.create('slider', 'div').id('slider-button-right').class('slider-button-right').position();
        })();

        (function activate() {
            slider.set('slider', slider.slides[slider.startIndex]);
            slider.timing('slider');
        })();

        (function addOptions() {
            document.getElementById('slider').addEventListener('mouseover', function () {
                clearInterval(slider.timerId);
            });

            document.getElementById('slider').addEventListener('mouseout', function () {
                slider.timing('slider');
            });

            document.getElementById('slider-button-left').addEventListener('click', function () {
                slider.scrollLeft('slider');
            });

            document.getElementById('slider-button-right').addEventListener('click', function () {
                slider.scrollRight('slider');
            });
        })();

        turnOnSlider1();
    });
})();

class Slider1 extends Slider {
    constructor () {
        super();
        this.slides = ['5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
    };

    indicator (sliderConteinerId, indicatorsId, color) {
        for (let i = 0; i < this.slides.length; i++) {
            if (document.getElementById(sliderConteinerId).style.backgroundImage === `url("img/slider/${this.slides[i]}")`) {
                document.getElementById (indicatorsId).childNodes[i].style.background = color;
            } else {
                document.getElementById (indicatorsId).childNodes[i].style.background = null;
            }
        }
    };

    timing (sliderConteinerId, indicatorsId, color) {
        let self = this;
        clearInterval(this.timerId);

        this.timerId = setInterval (function () {
            self.scrollRight(sliderConteinerId);
            self.indicator(sliderConteinerId, indicatorsId, color);
        }, 6000);
    };
}

function turnOnSlider1 () {
    let element = new CreateElement;
    let slider = new Slider1;

    (function createDOM () {
        element.create('article', 'div').id('slider1-wrap').class('slider-wrap').position(1);
        element.create('slider1-wrap', 'div').id('slider1-title').class('slider-title').innerHTML('North Pole').position(0);
        element.create('slider1-wrap', 'div').id('slider1').class('slider').position(1);
        element.create('slider1', 'div').id('slider1-button-left').class('slider-button-left').position(0);
        element.create('slider1', 'div').id('slider1-indicators').class('slider1-indicators').position(1);
        element.create('slider1-indicators', 'div').id('slider1-slide0').class('slider1-slide').position(0);
        element.create('slider1-indicators', 'div').id('slider1-slide1').class('slider1-slide').position(1);
        element.create('slider1-indicators', 'div').id('slider1-slide2').class('slider1-slide').position(2);
        element.create('slider1-indicators', 'div').id('slider1-slide3').class('slider1-slide').position(3);
        element.create('slider1-indicators', 'div').id('slider1-slide4').class('slider1-slide').position(4);
        element.create('slider1', 'div').id('slider1-button-right').class('slider-button-right').position(2);
        element.create('slider1-wrap', 'div').id('slider1-hover').class('slider1-hover').position(2);
        document.getElementById('slider1-hover').hidden = true;
    })();

    (function activate () {
        slider.set ('slider1', slider.slides[slider.startIndex]);
        slider.indicator('slider1', 'slider1-indicators', 'white');
        slider.timing('slider1', 'slider1-indicators', 'white');
    })();

    (function addOptions () {

        document.getElementById('slider1').addEventListener ('mouseover', function () {
            clearInterval(slider.timerId);
            document.getElementById('slider1-hover').hidden = false;
            document.getElementById('slider1-hover').innerHTML = `${document.getElementById("slider1").style.backgroundImage}`;
        });

        document.getElementById('slider1').addEventListener ('mousemove', function (e) {
            let element = document.getElementById('slider1-hover');
            element.style.left = e.clientX + 20 + 'px';
            element.style.top = e.clientY + 500 + 'px';
        });

        document.getElementById('slider1').addEventListener ('mouseout', function () {
            slider.timing('slider1', 'slider1-indicators', 'white');
            document.getElementById('slider1-hover').hidden = true;
        });

        document.getElementById('slider1-button-left').addEventListener ('click', function () {
            slider.scrollLeft('slider1');
            slider.indicator('slider1', 'slider1-indicators', 'white');
        });

        document.getElementById('slider1-button-right').addEventListener ('click', function () {
            slider.scrollRight('slider1');
            slider.indicator('slider1', 'slider1-indicators', 'white');
        });

        document.getElementById('slider1-slide0').addEventListener ('click', function () {
            slider.set('slider1', slider.slides[0]);
            slider.indicator('slider1', 'slider1-indicators', 'white');
        });

        document.getElementById('slider1-slide1').addEventListener ('click', function () {
            slider.set('slider1', slider.slides[1]);
            slider.indicator('slider1', 'slider1-indicators', 'white');
        });

        document.getElementById('slider1-slide2').addEventListener ('click', function () {
            slider.set('slider1', slider.slides[2]);
            slider.indicator('slider1', 'slider1-indicators', 'white');
        });

        document.getElementById('slider1-slide3').addEventListener ('click', function () {
            slider.set('slider1', slider.slides[3]);
            slider.indicator('slider1', 'slider1-indicators', 'white');
        });

        document.getElementById('slider1-slide4').addEventListener ('click', function () {
            slider.set('slider1', slider.slides[4]);
            slider.indicator('slider1', 'slider1-indicators', 'white');
        });
    })();
}
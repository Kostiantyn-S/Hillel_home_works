class Slider {
    constructor () {
        this.index = 0;
        this.timerId = 0;
        this.width;
    };

    scrollRight (sliderSelector) {
        if (this.index >= document.querySelector(sliderSelector).childNodes.length - 1) {
            this.index = -1;
        }

        document.querySelector(sliderSelector).style.transition = `transform 1.5s ease-in-out`;
        this.index++;
        document.querySelector(sliderSelector).style.transform = `translateX(${(-this.index * this.width)}px)`;
    }

    scrollLeft (sliderSelector) {
        if (this.index <= 0) {
            this.index = 5;
        }

        document.querySelector(sliderSelector).style.transition = `transform 1.5s ease-in-out`;
        this.index--;
        document.querySelector(sliderSelector).style.transform = `translateX(${(-this.index * this.width)}px)`;
    };
}

let slider = new Slider;

(function turnOnFirstSlider () {
    let element = new CreateElement;

    document.getElementById('nav_item-slider').addEventListener('click', function () {
        (function clear() {
            clearInterval(slider.timerId);
            document.getElementById('article').innerHTML = "";
        })();

        (function createDOM() {
            element.create('article', 'div').id('slider-conteiner').class('slider-conteiner').position(0);
            element.create('slider-conteiner', 'div').id('slider-title').class('slider-title').innerHTML('Triumph Bonneville').position(0);
            element.create('slider-conteiner', 'div').id('slider-wrap').class('slider-wrap').position(1);
            element.create('slider-wrap', 'div').id('slider').class('slider').position(0);
            element.create('slider', 'img').class('slider-slide').src('img/slider/0.jpg').alt('First slide').position(1);
            element.create('slider', 'img').class('slider-slide').src('img/slider/1.jpg').alt('Second slide').position(2);
            element.create('slider', 'img').class('slider-slide').src('img/slider/2.jpg').alt('Third slide').position(3);
            element.create('slider', 'img').class('slider-slide').src('img/slider/3.jpg').alt('Fourth slide').position(4);
            element.create('slider', 'img').class('slider-slide').src('img/slider/4.jpg').alt('Fifth slide').position(5);
            element.create('slider-wrap', 'div').id('slider-buttons').class('slider-buttons').position(1);
            element.create('slider-buttons', 'div').id('slider-button-left').class('slider-button-left').position(0);
            element.create('slider-buttons', 'div').id('slider-button-right').class('slider-button-right').position(1);
        })();

        slider.width = document.querySelector('#slider-wrap').clientWidth;

        (function activate() {
            slider.timerId = setInterval(function () {
                slider.scrollRight('#slider');
            }, 6000);
        })();

        (function addOptions() {
            document.getElementById('slider-wrap').addEventListener('mouseover', function () {
                clearInterval(slider.timerId);
            });

            document.getElementById('slider-wrap').addEventListener('mouseout', function () {
                slider.timerId = setInterval(function () {
                    slider.scrollRight('#slider');
                }, 6000);
            });

            document.getElementById('slider-button-left').addEventListener('click', function () {
                slider.scrollLeft('#slider');
            });

            document.getElementById('slider-button-right').addEventListener('click', function () {
                slider.scrollRight('#slider');
            });
        })();

        turnOnSlider1();
    });
})();

class Slider1 extends Slider {
    constructor () {
        super();
    }

    indicator (indicatorsSelector) {
        let list = document.querySelector(indicatorsSelector).childNodes;
        for (let i = 0; i < list.length; i++) {
            list[i].classList.remove('active');
        }
        list[this.index].classList.add('active');
    };
}

let slider1 = new Slider1;

function turnOnSlider1 () {
    let element = new CreateElement;

    (function clear() {
        clearInterval(slider1.timerId);
    })();

    (function createDOM () {
        element.create('article', 'div').id('slider1-conteiner').class('slider-conteiner').position(1);
        element.create('slider1-conteiner', 'div').id('slider1-title').class('slider-title').innerHTML('North Pole').position(0);
        element.create('slider1-conteiner', 'div').id('slider1-wrap').class('slider-wrap').position(1);
        element.create('slider1-wrap', 'div').id('slider1').class('slider').position(0);
        element.create('slider1', 'img').class('slider-slide').src('img/slider/5.jpg').alt('Sixth slide').position(1);
        element.create('slider1', 'img').class('slider-slide').src('img/slider/6.jpg').alt('Seventh slide').position(2);
        element.create('slider1', 'img').class('slider-slide').src('img/slider/7.jpg').alt('Eighth slide').position(3);
        element.create('slider1', 'img').class('slider-slide').src('img/slider/8.jpg').alt('Ninth slide').position(4);
        element.create('slider1', 'img').class('slider-slide').src('img/slider/9.jpg').alt('Tenth slide').position(5);
        element.create('slider1-wrap', 'div').id('slider1-buttons').class('slider-buttons').position(1);
        element.create('slider1-buttons', 'div').id('slider1-button-left').class('slider-button-left').position(0);
        element.create('slider1-buttons', 'div').id('slider1-indicators').class('slider-indicators').position(1);
        element.create('slider1-indicators', 'div').id('slider1-indicator1').class('slider1-indicator').position(0);
        element.create('slider1-indicators', 'div').id('slider1-indicator2').class('slider1-indicator').position(1);
        element.create('slider1-indicators', 'div').id('slider1-indicator3').class('slider1-indicator').position(2);
        element.create('slider1-indicators', 'div').id('slider1-indicator4').class('slider1-indicator').position(3);
        element.create('slider1-indicators', 'div').id('slider1-indicator5').class('slider1-indicator').position(4);
        element.create('slider1-buttons', 'div').id('slider1-button-right').class('slider-button-right').position(2);
        element.create('slider1-wrap', 'div').id('slider1-hover').class('slider1-hover').position(2);
        document.getElementById('slider1-hover').hidden = true;
    })();

    slider1.width = document.querySelector('#slider1-wrap').clientWidth;

    (function activate () {
        slider1.indicator('#slider1-indicators');
        slider1.timerId = setInterval(function () {
            slider1.scrollRight('#slider1');
            slider1.indicator('#slider1-indicators');
        }, 6000);
    })();

    (function addOptions () {

        document.getElementById('slider1-wrap').addEventListener ('mouseover', function () {
            clearInterval(slider1.timerId);
            document.getElementById('slider1-hover').hidden = false;
            document.getElementById('slider1-hover').innerHTML = `${document.getElementById("slider1").childNodes[slider1.index].alt}`;
        });

        document.getElementById('slider1-wrap').addEventListener ('mousemove', function (e) {
            let element = document.getElementById('slider1-hover');
            element.style.left = e.pageX - 350 + 'px';
            element.style.top = e.pageY - 700 + 'px';
        });

        document.getElementById('slider1-wrap').addEventListener ('mouseout', function () {
            slider1.timerId = setInterval(function () {
                slider1.scrollRight('#slider1');
                slider1.indicator('#slider1-indicators');
            }, 6000);
            document.getElementById('slider1-hover').hidden = true;
        });

        document.getElementById('slider1-button-left').addEventListener ('click', function () {
            slider1.scrollLeft('#slider1');
            slider1.indicator('#slider1-indicators');
        });

        document.getElementById('slider1-button-right').addEventListener ('click', function () {
            slider1.scrollRight('#slider1');
            slider1.indicator('#slider1-indicators');
        });

        document.getElementById('slider1-indicator1').addEventListener ('click', function () {
            slider1.index = 0;
            slider1.indicator('#slider1-indicators');
            document.querySelector('#slider1').style.transform = `translateX(${(-slider1.index * slider1.width)}px)`;
        });

        document.getElementById('slider1-indicator2').addEventListener ('click', function () {
            slider1.index = 1;
            slider1.indicator('#slider1-indicators');
            document.querySelector('#slider1').style.transform = `translateX(${(-slider1.index * slider1.width)}px)`;
        });

        document.getElementById('slider1-indicator3').addEventListener ('click', function () {
            slider1.index = 2;
            slider1.indicator('#slider1-indicators');
            document.querySelector('#slider1').style.transform = `translateX(${(-slider1.index * slider1.width)}px)`;
        });

        document.getElementById('slider1-indicator4').addEventListener ('click', function () {
            slider1.index = 3;
            slider1.indicator('#slider1-indicators');
            document.querySelector('#slider1').style.transform = `translateX(${(-slider1.index * slider1.width)}px)`;
        });

        document.getElementById('slider1-indicator5').addEventListener ('click', function () {
            slider1.index = 4;
            slider1.indicator('#slider1-indicators');
            document.querySelector('#slider1').style.transform = `translateX(${(-slider1.index * slider1.width)}px)`;
        });
    })();
}
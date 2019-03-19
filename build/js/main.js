'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function closeNav() {
    document.addEventListener('click', function () {
        if (event.target !== document.getElementById('nav-input') && event.target !== document.getElementById('nav-menu') && document.getElementById('nav-input').checked === true) {
            document.getElementById('nav-input').checked = false;
        }
    });
})();

var CreateElement = function () {
    function CreateElement() {
        _classCallCheck(this, CreateElement);

        this.parrent;
        this.element;
    }

    _createClass(CreateElement, [{
        key: 'create',
        value: function create(parrentId, elementTag) {
            this.parrent = document.getElementById(parrentId);
            this.element = document.createElement(elementTag);
            return this;
        }
    }, {
        key: 'id',
        value: function id(elementId) {
            this.element.id = elementId;
            return this;
        }
    }, {
        key: 'class',
        value: function _class(className) {
            this.element.className = className;
            return this;
        }
    }, {
        key: 'type',
        value: function type(_type) {
            this.element.type = _type;
            return this;
        }
    }, {
        key: 'value',
        value: function value(_value) {
            this.element.value = _value;
            return this;
        }
    }, {
        key: 'innerHTML',
        value: function innerHTML(text) {
            this.element.innerHTML = text;
            return this;
        }
    }, {
        key: 'for',
        value: function _for(htmlFor) {
            this.element.htmlFor = htmlFor;
            return this;
        }
    }, {
        key: 'required',
        value: function required(value) {
            this.element.required = value;
            return this;
        }
    }, {
        key: 'placeholder',
        value: function placeholder(text) {
            this.element.placeholder = text;
            return this;
        }
    }, {
        key: 'hidden',
        value: function hidden(value) {
            this.element.hidden = value;
            return this;
        }
    }, {
        key: 'position',
        value: function position() {
            var _position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            this.parrent.insertBefore(this.element, this.parrent.children[_position]);
            return this;
        }
    }]);

    return CreateElement;
}();

var Clock = function () {
    function Clock(daysConteinerId, weeksKonteinerId, hoursConteinerId, minutesConteinerId, secondsConteinerId) {
        _classCallCheck(this, Clock);

        this.daysConteinerId = daysConteinerId;
        this.weeksKonteinerId = weeksKonteinerId;
        this.hoursConteinerId = hoursConteinerId;
        this.minutesConteinerId = minutesConteinerId;
        this.secondsConteinerId = secondsConteinerId;
    }

    _createClass(Clock, [{
        key: 'showDate',
        value: function showDate() {
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var weekDay = date.getDay();
            var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var day = date.getDate();

            (function () {
                month = month < 10 ? '0' + month : month;
            })();

            (function () {
                day = day < 10 ? '0' + day : day;
            })();

            document.getElementById(this.daysConteinerId).innerHTML = day + '/' + month + '/' + year;
            document.getElementById(this.weeksKonteinerId).innerHTML = weekDays[weekDay];
        }
    }, {
        key: 'showHours',
        value: function showHours() {
            var clock = new Date();
            var hours = clock.getHours();
            hours = hours < 10 ? '0' + hours : hours;
            document.getElementById(this.hoursConteinerId).innerHTML = hours;
            return hours;
        }
    }, {
        key: 'showMinutes',
        value: function showMinutes() {
            var clock = new Date();
            var minutes = clock.getMinutes();
            minutes = minutes < 10 ? '0' + minutes : minutes;
            document.getElementById(this.minutesConteinerId).innerHTML = ':' + minutes;
            return minutes;
        }
    }, {
        key: 'showSeconds',
        value: function showSeconds() {
            var clock = new Date();
            var seconds = clock.getSeconds();
            seconds = seconds < 10 ? '0' + seconds : seconds;
            document.getElementById(this.secondsConteinerId).innerHTML = ':' + seconds;
            return seconds;
        }
    }, {
        key: 'change',
        value: function change() {
            var seconds = this.showSeconds();
            var minutes = void 0;
            var hours = void 0;

            if (seconds === '00') {
                minutes = this.showMinutes();
            }

            if (minutes === '00') {
                hours = this.showHours();
            }

            if (hours === '00') {
                this.showDate();
            }
        }
    }]);

    return Clock;
}();

(function turnOnClock() {
    var element = new CreateElement();

    element.create('header', 'div').id('date').class('date').position(0);
    element.create('date', 'span').id('date-week').position();
    element.create('date', 'span').id('date-day').position();
    element.create('header', 'div').id('time').class('time').position(1);
    element.create('time', 'span').id('time-hours').position();
    element.create('time', 'span').id('time-minutes').position();
    element.create('time', 'span').id('time-seconds').position();

    var myClock = new Clock('date-day', 'date-week', 'time-hours', 'time-minutes', 'time-seconds');

    myClock.showDate();
    myClock.showHours();
    myClock.showMinutes();
    myClock.showSeconds();
    setInterval(myClock.change.bind(myClock), 1000);
})();

var WindowSize = function () {
    function WindowSize() {
        _classCallCheck(this, WindowSize);
    }

    _createClass(WindowSize, [{
        key: 'showSize',
        value: function showSize(conteinerId) {
            var width = document.documentElement.clientWidth;
            var height = document.documentElement.clientHeight;
            document.getElementById(conteinerId).innerHTML = width + ' x ' + height;
        }
    }]);

    return WindowSize;
}();

(function turnOnWindowSize() {
    var element = new CreateElement();
    element.create('footer', 'div').id('window-size').class('window-size').position();

    var windowSize = new WindowSize();
    windowSize.showSize('window-size');
    window.addEventListener('resize', function () {
        setTimeout(windowSize.showSize, 2000, 'window-size');
    });
})();

var SpentTime = function () {
    function SpentTime(conteinerId) {
        _classCallCheck(this, SpentTime);

        this.value = 0;
        this.intervalId;
        this.conteinerId = conteinerId;
    }

    _createClass(SpentTime, [{
        key: 'stopWatch',
        value: function stopWatch() {
            var self = this;
            this.intervalId = setInterval(function () {
                ++self.value;
                self.value = self.value < 10 ? '0' + self.value : self.value;
                document.getElementById(self.conteinerId).innerHTML = self.value;
            }, 1000);
        }
    }, {
        key: 'addRefreshAtEscKey',
        value: function addRefreshAtEscKey() {
            var self = this;
            window.addEventListener('keydown', function () {
                if (event.keyCode === 27) {
                    clearInterval(self.intervalId);
                    self.value = 0;
                    self.stopWatch();
                }
            });
        }
    }, {
        key: 'stopTheStopwatchWhenHoveringAndViceVersa',
        value: function stopTheStopwatchWhenHoveringAndViceVersa(conteinerId) {
            var self = this;
            document.getElementById(conteinerId).addEventListener('mouseover', function () {
                clearInterval(self.intervalId);
            });

            document.getElementById(conteinerId).addEventListener('mouseout', this.stopWatch.bind(self));
        }
    }]);

    return SpentTime;
}();

(function turnOnSpentTimeStopWatch() {
    var element = new CreateElement();
    var stopWatch = new SpentTime('spentTime_value');

    element.create('footer', 'div').id('spentTime').class('spentTime').position(0);
    element.create('spentTime', 'div').id('spentTime_title').class('spentTime_title').innerHTML('You spent in this page:').position(0);
    element.create('spentTime', 'div').id('spentTime_value-and-text').class('spentTime_value-and-text').position(1);
    element.create('spentTime_value-and-text', 'div').id('spentTime_value').class('spentTime_value').position(0);
    element.create('spentTime_value-and-text', 'div').id('spentTime_text').class('spentTime_text').innerHTML('seconds').position(1);

    stopWatch.stopWatch();
    stopWatch.addRefreshAtEscKey();
    stopWatch.stopTheStopwatchWhenHoveringAndViceVersa('spentTime');
})();

var CreateTable = function () {
    function CreateTable() {
        _classCallCheck(this, CreateTable);
    }

    _createClass(CreateTable, [{
        key: 'validatingInput',
        value: function validatingInput(inputElementId, popupId) {
            document.getElementById(inputElementId).addEventListener('input', function () {
                var value = parseInt(document.getElementById(inputElementId).value);
                document.getElementById(popupId).hidden = !(value > 100 || value < 1);
            });
        }
    }, {
        key: 'clearOldResult',
        value: function clearOldResult(resultTableId) {
            if (document.getElementById(resultTableId).innerHTML !== false) {
                document.getElementById(resultTableId).innerHTML = '';
            }
        }
    }, {
        key: 'renderTable',
        value: function renderTable(inputRowsId, inputColumnsId, resultTableId) {
            var rowsValue = parseInt(document.getElementById(inputRowsId).value);
            var columnsValue = parseInt(document.getElementById(inputColumnsId).value);
            var table = void 0;
            var row = void 0;

            table = document.getElementById(resultTableId);

            for (var i = 0; i < rowsValue; i++) {
                row = table.insertRow();

                for (var k = 0; k < columnsValue; k++) {
                    row.insertCell();
                }
            }
        }
    }, {
        key: 'showIndex',
        value: function showIndex(resultTableId) {
            document.getElementById(resultTableId).addEventListener('click', function () {
                alert('\u0421\u0442\u0440\u043E\u043A\u0430 ' + (event.target.parentNode.rowIndex + 1) + ' \u041A\u043E\u043B\u043E\u043D\u043A\u0430 ' + (event.target.cellIndex + 1));
            });
        }
    }, {
        key: 'activateButton',
        value: function activateButton(buttonId, resultTableId, inputRowsId, inputColumnsId, rowsPopupId, columnsPopupId) {
            var self = this;

            document.getElementById(buttonId).addEventListener('click', function () {
                if (document.getElementById(rowsPopupId).hidden !== false && document.getElementById(columnsPopupId).hidden !== false && document.getElementById(inputRowsId).value !== false && document.getElementById(inputColumnsId).value !== false) {
                    self.clearOldResult(resultTableId);
                    self.renderTable(inputRowsId, inputColumnsId, resultTableId);
                    self.showIndex(resultTableId);
                }
            });
        }
    }]);

    return CreateTable;
}();

(function turnOnCreateTable() {
    var element = new CreateElement();
    var createTable = new CreateTable();

    document.getElementById('nav_item-createTable').addEventListener('click', function () {

        (function clear() {
            if (document.getElementById('article').innerHTML !== "") {
                clearInterval(slider.timerId);
                clearInterval(slider1.timerId);
                document.getElementById('article').innerHTML = "";
            }
        })();

        (function createDOM() {
            element.create('article', 'form').id('create-table').class('create-table').position(0);
            element.create('create-table', 'div').id('table-rows-conteiner').class('table-rows-conteiner').position(0);
            element.create('table-rows-conteiner', 'label').for('table-rows').innerHTML('How much rows in table you want to create?').position(0);
            element.create('table-rows-conteiner', 'input').id('table-rows').type('number').placeholder('28').required(true).position(1);
            element.create('table-rows-conteiner', 'span').id('popup-row').class('popup-row').hidden(true).innerHTML('Value must be integer more than 0 but less than 100').position(2);
            element.create('create-table', 'div').id('table-columns-conteiner').class('table-columns-conteiner').position(1);
            element.create('table-columns-conteiner', 'label').for('table-columns').innerHTML('How much columns in table you want to create?').position(0);
            element.create('table-columns-conteiner', 'input').id('table-columns').type('number').placeholder('35').required(true).position(1);
            element.create('table-columns-conteiner', 'span').id('popup-column').class('popup-column').hidden(true).innerHTML('Value must be integer more than 0 but less than 100').position(2);
            element.create('create-table', 'div').id('table-button-conteiner').class('table-button-conteiner').position(2);
            element.create('table-button-conteiner', 'input').type('button').value('Create').id('table-button').class('table-button').position();
            element.create('article', 'table').id('result-table').class('result-table').position(1);
        })();

        (function validationInputs() {
            createTable.validatingInput('table-rows', 'popup-row');
            createTable.validatingInput('table-columns', 'popup-column');
        })();

        createTable.activateButton('table-button', 'result-table', 'table-rows', 'table-columns', 'popup-row', 'popup-column');
    });
})();

var Slider = function () {
    function Slider() {
        _classCallCheck(this, Slider);

        this.slides = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg'];
        this.startIndex = 0;
        this.timerId = 0;
    }

    _createClass(Slider, [{
        key: 'set',
        value: function set(sliderConteinerId, slide) {
            document.getElementById(sliderConteinerId).style.backgroundImage = 'url(\'img/slider/' + slide + '\')';
        }
    }, {
        key: 'scrollRight',
        value: function scrollRight(sliderConteinerId) {
            this.startIndex++;
            if (this.startIndex === this.slides.length) {
                this.startIndex = 0;
            }
            this.set(sliderConteinerId, this.slides[this.startIndex]);
        }
    }, {
        key: 'scrollLeft',
        value: function scrollLeft(sliderConteinerId) {
            this.startIndex--;
            if (this.startIndex < 0) {
                this.startIndex = this.slides.length - 1;
            }
            this.set(sliderConteinerId, this.slides[this.startIndex]);
        }
    }, {
        key: 'timing',
        value: function timing(sliderConteinerId) {
            var self = this;

            this.timerId = setInterval(function () {
                self.scrollRight(sliderConteinerId);
            }, 6000);
        }
    }]);

    return Slider;
}();

var slider = new Slider();

(function turnOnFirstSlider() {
    var element = new CreateElement();

    document.getElementById('nav_item-slider').addEventListener('click', function () {
        (function clear() {
            clearInterval(slider.timerId);
            document.getElementById('article').innerHTML = "";
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

var Slider1 = function (_Slider) {
    _inherits(Slider1, _Slider);

    function Slider1() {
        _classCallCheck(this, Slider1);

        var _this = _possibleConstructorReturn(this, (Slider1.__proto__ || Object.getPrototypeOf(Slider1)).call(this));

        _this.slides = ['5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
        return _this;
    }

    _createClass(Slider1, [{
        key: 'indicator',
        value: function indicator(sliderConteinerId, indicatorsId, color) {
            for (var i = 0; i < this.slides.length; i++) {
                if (document.getElementById(sliderConteinerId).style.backgroundImage === 'url("img/slider/' + this.slides[i] + '")') {
                    document.getElementById(indicatorsId).childNodes[i].style.background = color;
                } else {
                    document.getElementById(indicatorsId).childNodes[i].style.background = null;
                }
            }
        }
    }, {
        key: 'timing',
        value: function timing(sliderConteinerId, indicatorsId, color) {
            var self = this;

            this.timerId = setInterval(function () {
                self.scrollRight(sliderConteinerId);
                self.indicator(sliderConteinerId, indicatorsId, color);
            }, 6000);
        }
    }]);

    return Slider1;
}(Slider);

var slider1 = new Slider1();

function turnOnSlider1() {
    var element = new CreateElement();

    (function clear() {
        clearInterval(slider1.timerId);
    })();

    (function createDOM() {
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

    (function activate() {
        slider1.set('slider1', slider1.slides[slider1.startIndex]);
        slider1.indicator('slider1', 'slider1-indicators', 'white');
        slider1.timing('slider1', 'slider1-indicators', 'white');
    })();

    (function addOptions() {

        document.getElementById('slider1').addEventListener('mouseover', function () {
            clearInterval(slider1.timerId);
            document.getElementById('slider1-hover').hidden = false;
            document.getElementById('slider1-hover').innerHTML = '' + document.getElementById("slider1").style.backgroundImage;
        });

        document.getElementById('slider1').addEventListener('mousemove', function (e) {
            var element = document.getElementById('slider1-hover');
            element.style.left = e.clientX + 20 + 'px';
            element.style.top = e.clientY + 500 + 'px';
        });

        document.getElementById('slider1').addEventListener('mouseout', function () {
            slider1.timing('slider1', 'slider1-indicators', 'white');
            document.getElementById('slider1-hover').hidden = true;
        });

        document.getElementById('slider1-button-left').addEventListener('click', function () {
            slider1.scrollLeft('slider1');
            slider1.indicator('slider1', 'slider1-indicators', 'white');
        });

        document.getElementById('slider1-button-right').addEventListener('click', function () {
            slider1.scrollRight('slider1');
            slider1.indicator('slider1', 'slider1-indicators', 'white');
        });

        document.getElementById('slider1-slide0').addEventListener('click', function () {
            slider1.set('slider1', slider1.slides[0]);
            slider1.indicator('slider1', 'slider1-indicators', 'white');
        });

        document.getElementById('slider1-slide1').addEventListener('click', function () {
            slider1.set('slider1', slider1.slides[1]);
            slider1.indicator('slider1', 'slider1-indicators', 'white');
        });

        document.getElementById('slider1-slide2').addEventListener('click', function () {
            slider1.set('slider1', slider1.slides[2]);
            slider1.indicator('slider1', 'slider1-indicators', 'white');
        });

        document.getElementById('slider1-slide3').addEventListener('click', function () {
            slider1.set('slider1', slider1.slides[3]);
            slider1.indicator('slider1', 'slider1-indicators', 'white');
        });

        document.getElementById('slider1-slide4').addEventListener('click', function () {
            slider1.set('slider1', slider1.slides[4]);
            slider1.indicator('slider1', 'slider1-indicators', 'white');
        });
    })();
}
(function turnOnClearAllButtton() {
    var element = new CreateElement();

    element.create('header', 'a').id('clearAll').class('clearAll').innerHTML('Clear All').position(0);
    document.getElementById('clearAll').addEventListener('click', function () {
        clearInterval(slider.timerId);
        clearInterval(slider1.timerId);
        document.getElementById('article').innerHTML = '';
    });
})();

var SuperButtons = function () {
    function SuperButtons() {
        _classCallCheck(this, SuperButtons);
    }

    _createClass(SuperButtons, [{
        key: 'clickMe',
        value: function clickMe(event) {
            if (event.target.style.background !== event.target.background) {
                event.target.style.background = event.target.background;
            } else {
                event.target.style.background = 'grey';
            }
        }
    }, {
        key: 'clear',
        value: function clear(conteinerId) {
            if (document.getElementById(conteinerId).innerHTML !== "") {
                clearInterval(slider.timerId);
                clearInterval(slider1.timerId);
                document.getElementById(conteinerId).innerHTML = "";
            }
        }
    }]);

    return SuperButtons;
}();

(function turnOnSuperButtons() {
    document.getElementById('nav_item-superButtons').addEventListener('click', function () {
        var buttons = new SuperButtons();
        var element = new CreateElement();

        buttons.clear('article');
        element.create('article', 'input').id('firstButton').class('superButton').value('First Button').type('button').position(0);
        document.getElementById('firstButton').background = 'red';
        element.create('article', 'input').id('secondButton').class('superButton').value('Second Button').type('button').position(1);
        document.getElementById('secondButton').background = 'green';
        element.create('article', 'input').id('thirdButton').class('superButton').value('Third Button').type('button').position(2);
        document.getElementById('thirdButton').background = 'blue';

        document.getElementById('firstButton').addEventListener("click", buttons.clickMe);
        document.getElementById('secondButton').addEventListener("click", buttons.clickMe);
        document.getElementById('thirdButton').addEventListener("click", buttons.clickMe);
    });
})();
function studentsTableCreateDOM() {
    var element = new CreateElement();

    (function clear() {
        if (document.getElementById('article').innerHTML !== "") {
            clearInterval(slider.timerId);
            clearInterval(slider1.timerId);
            document.getElementById('article').innerHTML = "";
        }
    })();

    (function createForm() {
        element.create('article', 'div').id('studentsTable-title').class('studentsTable-title').innerHTML('Students table').position(0);

        element.create('article', 'form').id('studentsForm').class('studentsForm').position(1);

        element.create('studentsForm', 'div').id('studentsForm-inputs').class('studentsForm-inputs').position(0);

        element.create('studentsForm-inputs', 'div').id('studentsForm-name').class('studentsForm-inputConteiner').position(0);
        element.create('studentsForm-name', 'label').id('label-name').class('studentsForm-label').for('input-name').innerHTML('Name: ').position(0);
        element.create('studentsForm-name', 'input').id('input-name').class('studentsForm-input').type('text').required(true).placeholder('Kostiantyn').position(1);
        element.create('studentsForm-name', 'span').id('message-name').class('studentsForm-message').innerHTML('The name must consist of uppercase or lowercase latin letters or symbols "-" and "space", max length 20 symbols.').position(2);

        element.create('studentsForm-inputs', 'div').id('studentsForm-surname').class('studentsForm-inputConteiner').position(1);
        element.create('studentsForm-surname', 'label').id('label-surname').class('studentsForm-label').for('input-surname').innerHTML('Surname: ').position(0);
        element.create('studentsForm-surname', 'input').id('input-surname').class('studentsForm-input').type('text').required(true).placeholder('Starchyk').position(1);
        element.create('studentsForm-surname', 'span').id('message-surname').class('studentsForm-message').innerHTML('The surname must consist of uppercase or lowercase latin letters or symbols "-" and "space", max length 20 symbols.').position(2);

        element.create('studentsForm-inputs', 'div').id('studentsForm-admission').class('studentsForm-inputConteiner').position(2);
        element.create('studentsForm-admission', 'label').id('label-admission').class('studentsForm-label').for('input-admission').innerHTML('Admission year: ').position(0);
        element.create('studentsForm-admission', 'input').id('input-admission').class('studentsForm-input').type('number').required(true).placeholder('2006').position(1);
        element.create('studentsForm-admission', 'span').id('message-admission').class('studentsForm-message').innerHTML('The admission year must be positive integer consists of four numbers.').position(2);

        element.create('studentsForm-inputs', 'div').id('studentsForm-ending').class('studentsForm-inputConteiner').position(3);
        element.create('studentsForm-ending', 'label').id('label-ending').class('studentsForm-label').for('input-ending').innerHTML('Year of ending: ').position(0);
        element.create('studentsForm-ending', 'input').id('input-ending').class('studentsForm-input').type('number').required(true).placeholder('2011').position(1);
        element.create('studentsForm-ending', 'span').id('message-ending').class('studentsForm-message').innerHTML('The year of ending must be positive integer consists of four numbers.').position(2);

        element.create('studentsForm-inputs', 'div').id('studentsForm-site').class('studentsForm-inputConteiner').position(4);
        element.create('studentsForm-site', 'label').id('label-site').class('studentsForm-label').for('input-site').innerHTML('Site: ').position(0);
        element.create('studentsForm-site', 'input').id('input-site').class('studentsForm-input').type('text').placeholder('www.google.com').position(1);

        element.create('studentsForm-inputs', 'div').id('studentsForm-filter').class('studentsForm-inputConteiner').position(5);
        element.create('studentsForm-filter', 'label').id('label-filter').class('studentsForm-label').for('input-filter').innerHTML('Filter: ').position(0);
        element.create('studentsForm-filter', 'input').id('input-filter').class('studentsForm-input').type('text').placeholder('St').position(1);

        element.create('studentsForm', 'div').id('studentsForm-buttons').class('studentsForm-buttons').position(1);
        element.create('studentsForm-buttons', 'input').type('button').value('Add to table').id('button-add').class('studentsForm-button').position(0);
        element.create('studentsForm-buttons', 'input').type('button').value('Clear form').id('button-clear').class('studentsForm-button').position(1);
        element.create('studentsForm-buttons', 'input').type('button').value('Save table').id('button-save').class('studentsForm-button').position(2);
        element.create('studentsForm-buttons', 'input').type('button').value('Apply filter').id('button-applyFilter').class('studentsForm-button').position(3);
        element.create('studentsForm-buttons', 'input').type('button').value('Delete filter').id('button-delFilter').class('studentsForm-button').position(4);
    })();

    (function createTable() {
        element.create('article', 'table').id('studentsTable').class('studentsTable').position(2);
        element.create('studentsTable', 'tr').id('studentsTable-head').class('studentsTable-head').position(0);
        element.create('studentsTable-head', 'td').id('head-name').class('head-name').innerHTML('Name').position(0);
        element.create('studentsTable-head', 'td').id('head-surname').class('head-surname').innerHTML('Surname').position(1);
        element.create('studentsTable-head', 'td').id('head-admission').class('head-admission').innerHTML('Admission year &#11015&#11014').position(2);
        element.create('studentsTable-head', 'td').id('head-ending').class('head-ending').innerHTML('Year of ending &#11015&#11014').position(3);
        element.create('studentsTable-head', 'td').id('head-site').class('head-site').innerHTML('Site').position(4);
        element.create('studentsTable-head', 'td').id('head-edit').class('head-edit').position(5);
        element.create('studentsTable-head', 'td').id('head-delete').class('head-delete').position(6);
    })();

    (function loadTable() {
        if (localStorage.getItem('table') !== null) {
            document.getElementById('studentsTable').innerHTML = localStorage.getItem('table');
        }
    })();
}

var FormValidation = function () {
    function FormValidation() {
        _classCallCheck(this, FormValidation);
    }

    _createClass(FormValidation, [{
        key: 'valideToLatinSymbols',
        value: function valideToLatinSymbols(inputId, popupId) {
            var element = document.getElementById(inputId);

            for (var i = 0; i < element.value.length; i++) {
                if ((element.value.charCodeAt(i) < 65 || element.value.charCodeAt(i) > 90) && (element.value.charCodeAt(i) < 97 || element.value.charCodeAt(i) > 122) && element.value.charCodeAt(i) !== 45 && element.value.charCodeAt(i) !== 32) {
                    document.getElementById(popupId).style.visibility = "visible";
                    break;
                } else {
                    document.getElementById(popupId).style.visibility = "hidden";
                }
            }
        }
    }, {
        key: 'valideStringToLength',
        value: function valideStringToLength(inputId, popupId) {
            var element = document.getElementById(inputId);

            if (document.getElementById(popupId).style.visibility = "hidden" && element.value.length > 20) {
                document.getElementById(popupId).style.visibility = "visible";
            }
        }
    }, {
        key: 'validateNumber',
        value: function validateNumber(inputId, popupId) {
            var element = document.getElementById(inputId);

            if (element.value.length < 4 || element.value.length > 4 || element.value < 0 || Number.isInteger(Number(element.value)) === false) {
                document.getElementById(popupId).style.visibility = "visible";
            } else {
                document.getElementById(popupId).style.visibility = "hidden";
            }
        }
    }]);

    return FormValidation;
}();

function turnOnValidation() {
    var validation = new FormValidation();

    (function validateName() {
        document.getElementById('input-name').addEventListener('input', function () {
            validation.valideToLatinSymbols('input-name', 'message-name');
            validation.valideStringToLength('input-name', 'message-name');
        });
    })();

    (function validateSurname() {
        document.getElementById('input-surname').addEventListener('input', function () {
            validation.valideToLatinSymbols('input-surname', 'message-surname');
            validation.valideStringToLength('input-surname', 'message-surname');
        });
    })();

    (function validateAdmission() {
        document.getElementById('input-admission').addEventListener('input', function () {
            validation.validateNumber('input-admission', 'message-admission');
        });
    })();

    (function validateEnding() {
        document.getElementById('input-ending').addEventListener('input', function () {
            validation.validateNumber('input-ending', 'message-ending');
        });
    })();
}

var FormFunctions = function () {
    function FormFunctions() {
        _classCallCheck(this, FormFunctions);

        this.cellClassNames = ['result-name', 'result-syrname', 'result-admission', 'result-ending', 'result-site'];
    }

    _createClass(FormFunctions, [{
        key: 'addData',
        value: function addData(tableId) {
            var table = document.getElementById(tableId);
            var row = void 0;
            var cell = void 0;

            row = table.insertRow();

            for (var _len = arguments.length, inputsId = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                inputsId[_key - 1] = arguments[_key];
            }

            for (var i = 0; i < inputsId.length; i++) {
                cell = row.insertCell();
                cell.className = this.cellClassNames[i];
                cell.innerHTML = document.getElementById(inputsId[i]).value;
            }

            cell = row.insertCell();
            cell.className = 'result-edit';
            cell.innerHTML = '&#9998';

            cell = row.insertCell();
            cell.className = 'result-delete';
            cell.innerHTML = '&#10008';
        }
    }, {
        key: 'clearForm',
        value: function clearForm() {
            for (var _len2 = arguments.length, inputsId = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                inputsId[_key2] = arguments[_key2];
            }

            for (var i = 0; i < inputsId.length; i++) {
                document.getElementById(arguments[i]).value = '';
            }
        }
    }, {
        key: 'saveTable',
        value: function saveTable(tableId) {
            localStorage.setItem('table', document.getElementById(tableId).innerHTML);
        }
    }, {
        key: 'applyFilter',
        value: function applyFilter(inputId, tableId) {
            var value = document.getElementById(inputId).value;
            var children = document.getElementById(tableId).childNodes[0].childNodes;
            var result = void 0;

            for (var i = 1; i < children.length; i++) {
                for (var k = 0; k < 5; k++) {
                    result = children[i].childNodes[k].innerHTML;
                    if (result.indexOf(value) !== -1) {
                        children[i].style.display = null;
                        break;
                    } else {
                        children[i].style.display = 'none';
                    }
                }
            }
        }
    }, {
        key: 'deleteFilter',
        value: function deleteFilter(inputId, tableId) {
            var children = document.getElementById(tableId).childNodes[0].childNodes;

            for (var i = 0; i < children.length; i++) {
                if (children[i].style.display === 'none') {
                    children[i].style.display = null;
                }
            }

            document.getElementById(inputId).value = '';
        }
    }, {
        key: 'sortToHigher',
        value: function sortToHigher(tableId, numberOfColumn) {
            var children = document.getElementById(tableId).childNodes[0].childNodes;
            var values = [];

            for (var i = 1; i < children.length; i++) {
                values[i] = {
                    elem: children[i],
                    value: children[i].childNodes[numberOfColumn].innerHTML
                };
            }

            values.sort(function (a, b) {
                return a.value - b.value;
            });

            for (var k = 0; k < values.length - 1; k++) {
                document.getElementById(tableId).childNodes[0].appendChild(values[k].elem);
            }
        }
    }, {
        key: 'sortToLower',
        value: function sortToLower(tableId, numberOfColumn) {
            var children = document.getElementById(tableId).childNodes[0].childNodes;
            var values = [];

            for (var i = 1; i < children.length; i++) {
                values[i] = {
                    elem: children[i],
                    value: children[i].childNodes[numberOfColumn].innerHTML
                };
            }

            values.sort(function (a, b) {
                return b.value - a.value;
            });

            for (var k = 0; k < values.length - 1; k++) {
                document.getElementById(tableId).childNodes[0].appendChild(values[k].elem);
            }
        }
    }, {
        key: 'deleteRow',
        value: function deleteRow() {
            event.target.parentElement.remove();
        }
    }, {
        key: 'editRow',
        value: function editRow() {
            for (var _len3 = arguments.length, inputsId = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                inputsId[_key3] = arguments[_key3];
            }

            for (var i = 0; i < inputsId.length; i++) {
                document.getElementById(inputsId[i]).value = event.target.parentElement.children[i].innerHTML;
            }

            this.deleteRow();
        }
    }]);

    return FormFunctions;
}();

(function activateStudentsForm() {
    var functions = new FormFunctions();
    var label = false;

    document.getElementById('nav_item-studentsTable').addEventListener('click', function () {
        studentsTableCreateDOM();
        turnOnValidation();

        (function add() {
            document.getElementById('button-add').addEventListener('click', function () {
                if (document.getElementById('input-name').value !== '' && document.getElementById('input-surname').value !== '' && document.getElementById('input-admission').value !== '' && document.getElementById('input-ending').value !== '' && document.getElementById('message-name').style.visibility !== "visible" && document.getElementById('message-surname').style.visibility !== "visible" && document.getElementById('message-admission').style.visibility !== "visible" && document.getElementById('message-ending').style.visibility !== "visible") {
                    functions.addData('studentsTable', 'input-name', 'input-surname', 'input-admission', 'input-ending', 'input-site');
                    functions.clearForm('input-name', 'input-surname', 'input-admission', 'input-ending', 'input-site');
                }
            });
        })();

        (function clearInputs() {
            document.getElementById('button-clear').addEventListener('click', function () {
                functions.clearForm('input-name', 'input-surname', 'input-admission', 'input-ending', 'input-site', 'input-filter');
            });
        })();

        (function save() {
            document.getElementById('button-save').addEventListener('click', function () {
                functions.saveTable('studentsTable');
            });
        })();

        (function applyFilter() {
            document.getElementById('button-applyFilter').addEventListener('click', function () {
                functions.applyFilter('input-filter', 'studentsTable');
            });
        })();

        (function deleteFilter() {
            document.getElementById('button-delFilter').addEventListener('click', function () {
                functions.deleteFilter('input-filter', 'studentsTable');
            });
        })();

        function changeSortWay(numberOfColumn) {
            if (label === false) {
                functions.sortToLower('studentsTable', numberOfColumn);
                label = true;
            } else {
                functions.sortToHigher('studentsTable', numberOfColumn);
                label = false;
            }
        }

        (function sortTable() {
            document.getElementById('studentsTable').addEventListener('click', function () {
                if (event.target.id === 'head-admission') {
                    changeSortWay(2);
                } else if (event.target.id === 'head-ending') {
                    changeSortWay(3);
                }
            });
        })();

        (function edit() {
            document.getElementById('studentsTable').addEventListener('click', function () {
                if (event.target.className === 'result-edit') {
                    functions.editRow('input-name', 'input-surname', 'input-admission', 'input-ending', 'input-site');
                }
            });
        })();

        (function deleteRow() {
            document.getElementById('studentsTable').addEventListener('click', function () {
                if (event.target.className === 'result-delete') {
                    functions.deleteRow();
                }
            });
        })();
    });
})();
//# sourceMappingURL=../maps/main.js.map

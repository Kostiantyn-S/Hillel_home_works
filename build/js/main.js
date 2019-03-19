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
            element.create('create-table', 'div').id('table-rows-conteiner').class('table-rows-conteiner').innerHTML('<label for="table-rows">How much rows in table you want to create?</label><input id="table-rows" name="table-rows" type="number" placeholder="28" required><span id="popup-row" class="popup-row" hidden>Value must be integer more than 0 but less than 100</span>').position(0);
            element.create('create-table', 'div').id('table-columns-conteiner').class('table-columns-conteiner').innerHTML('<label for="table-columns">How much rows in table you want to create?</label><input id="table-columns" name="table-columns" type="number" placeholder="35" required><span id="popup-column" class="popup-column" hidden>Value must be integer more than 0 but less than 100</span>').position(1);
            element.create('create-table', 'div').id('table-button-conteiner').class('table-button-conteiner').innerHTML('<input type="button" value="Create" id="table-button" class="table-button"></input>').position(2);
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
function CreateElement() {
    this.parrent;
    this.element;
};

CreateElement.prototype.create = function (parrentId, elementTag) {
    this.parrent = document.getElementById(parrentId);
    this.element = document.createElement(elementTag);
    return this;
};

CreateElement.prototype.id = function (elementId) {
    this.element.id = elementId;
    return this;
};

CreateElement.prototype.class = function (className) {
    this.element.className = className;
    return this;
};

CreateElement.prototype.type = function (type) {
    this.element.type = type;
    return this;
};

CreateElement.prototype.value = function (value) {
    this.element.value = value;
    return this;
};

CreateElement.prototype.innerHTML = function (text) {
    this.element.innerHTML = text;
    return this;
};

CreateElement.prototype.position = function () {
    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    this.parrent.insertBefore(this.element, this.parrent.children[position]);
    return this;
};

var element = new CreateElement();

element.for = function (htmlFor) {
    this.element.htmlFor = htmlFor;
    return this;
};

element.required = function (value) {
    this.element.required = value;
    return this;
};

element.placeholder = function (text) {
    this.element.placeholder = text;
    return this;
};

element.cleaning = function () {
    if (document.getElementById('article').innerHTML !== "") {
        clearInterval(slider.timerId);
        clearInterval(slider1.timerId);
        document.getElementById('article').innerHTML = "";
    }
};

element.createForm = function () {
    this.create('article', 'div').id('studentsTable-title').class('studentsTable-title').innerHTML('Students table').position(0);

    this.create('article', 'form').id('studentsForm').class('studentsForm').position(1);

    this.create('studentsForm', 'div').id('studentsForm-inputs').class('studentsForm-inputs').position(0);

    this.create('studentsForm-inputs', 'div').id('studentsForm-name').class('studentsForm-inputConteiner').position(0);
    this.create('studentsForm-name', 'label').id('label-name').class('studentsForm-label').for('input-name').innerHTML('Name: ').position(0);
    this.create('studentsForm-name', 'input').id('input-name').class('studentsForm-input').type('text').required(true).placeholder('Kostiantyn').position(1);
    this.create('studentsForm-name', 'span').id('message-name').class('studentsForm-message').innerHTML('The name must consist of uppercase or lowercase latin letters or symbols "-" and "space", max length 20 symbols.').position(2);

    this.create('studentsForm-inputs', 'div').id('studentsForm-surname').class('studentsForm-inputConteiner').position(1);
    this.create('studentsForm-surname', 'label').id('label-surname').class('studentsForm-label').for('input-surname').innerHTML('Surname: ').position(0);
    this.create('studentsForm-surname', 'input').id('input-surname').class('studentsForm-input').type('text').required(true).placeholder('Starchyk').position(1);
    this.create('studentsForm-surname', 'span').id('message-surname').class('studentsForm-message').innerHTML('The surname must consist of uppercase or lowercase latin letters or symbols "-" and "space", max length 20 symbols.').position(2);

    this.create('studentsForm-inputs', 'div').id('studentsForm-admission').class('studentsForm-inputConteiner').position(2);
    this.create('studentsForm-admission', 'label').id('label-admission').class('studentsForm-label').for('input-admission').innerHTML('Admission year: ').position(0);
    this.create('studentsForm-admission', 'input').id('input-admission').class('studentsForm-input').type('number').required(true).placeholder('2006').position(1);
    this.create('studentsForm-admission', 'span').id('message-admission').class('studentsForm-message').innerHTML('The admission year must be positive integer consists of four numbers.').position(2);

    this.create('studentsForm-inputs', 'div').id('studentsForm-ending').class('studentsForm-inputConteiner').position(3);
    this.create('studentsForm-ending', 'label').id('label-ending').class('studentsForm-label').for('input-ending').innerHTML('Year of ending: ').position(0);
    this.create('studentsForm-ending', 'input').id('input-ending').class('studentsForm-input').type('number').required(true).placeholder('2011').position(1);
    this.create('studentsForm-ending', 'span').id('message-ending').class('studentsForm-message').innerHTML('The year of ending must be positive integer consists of four numbers.').position(2);

    this.create('studentsForm-inputs', 'div').id('studentsForm-site').class('studentsForm-inputConteiner').position(4);
    this.create('studentsForm-site', 'label').id('label-site').class('studentsForm-label').for('input-site').innerHTML('Site: ').position(0);
    this.create('studentsForm-site', 'input').id('input-site').class('studentsForm-input').type('text').placeholder('www.google.com').position(1);

    this.create('studentsForm-inputs', 'div').id('studentsForm-filter').class('studentsForm-inputConteiner').position(5);
    this.create('studentsForm-filter', 'label').id('label-filter').class('studentsForm-label').for('input-filter').innerHTML('Filter: ').position(0);
    this.create('studentsForm-filter', 'input').id('input-filter').class('studentsForm-input').type('text').placeholder('St').position(1);

    this.create('studentsForm', 'div').id('studentsForm-buttons').class('studentsForm-buttons').position(1);
    this.create('studentsForm-buttons', 'input').type('button').value('Add to table').id('button-add').class('studentsForm-button').position(0);
    this.create('studentsForm-buttons', 'input').type('button').value('Clear form').id('button-clear').class('studentsForm-button').position(1);
    this.create('studentsForm-buttons', 'input').type('button').value('Save table').id('button-save').class('studentsForm-button').position(2);
    this.create('studentsForm-buttons', 'input').type('button').value('Apply filter').id('button-applyFilter').class('studentsForm-button').position(3);
    this.create('studentsForm-buttons', 'input').type('button').value('Delete filter').id('button-delFilter').class('studentsForm-button').position(4);
};

element.createTable = function () {
    this.create('article', 'table').id('studentsTable').class('studentsTable').position(2);
    this.create('studentsTable', 'tr').id('studentsTable-head').class('studentsTable-head').position(0);
    this.create('studentsTable-head', 'td').id('head-name').class('head-name').innerHTML('Name').position(0);
    this.create('studentsTable-head', 'td').id('head-surname').class('head-surname').innerHTML('Surname').position(1);
    this.create('studentsTable-head', 'td').id('head-admission').class('head-admission').innerHTML('Admission year &#11015&#11014').position(2);
    this.create('studentsTable-head', 'td').id('head-ending').class('head-ending').innerHTML('Year of ending &#11015&#11014').position(3);
    this.create('studentsTable-head', 'td').id('head-site').class('head-site').innerHTML('Site').position(4);
    this.create('studentsTable-head', 'td').id('head-edit').class('head-edit').position(5);
    this.create('studentsTable-head', 'td').id('head-delete').class('head-delete').position(6);
};

element.loadTable = function () {
    if (localStorage.getItem('table') !== null) {
        document.getElementById('studentsTable').innerHTML = localStorage.getItem('table');
    };
};

element.createDOM = function () {
    this.cleaning();
    this.createForm();
    this.createTable();
    this.loadTable();
};
var FormValidation = new Function();

FormValidation.prototype.valideToLatinSymbols = function (inputId, popupId) {
    var element = document.getElementById(inputId);

    for (var i = 0; i < element.value.length; i++) {
        if ((element.value.charCodeAt(i) < 65 || element.value.charCodeAt(i) > 90) && (element.value.charCodeAt(i) < 97 || element.value.charCodeAt(i) > 122) && element.value.charCodeAt(i) !== 45 && element.value.charCodeAt(i) !== 32) {
            document.getElementById(popupId).style.visibility = "visible";
            break;
        } else {
            document.getElementById(popupId).style.visibility = "hidden";
        };
    };
};

FormValidation.prototype.valideStringToLength = function (inputId, popupId) {
    var element = document.getElementById(inputId);

    if (document.getElementById(popupId).style.visibility = "hidden" && element.value.length > 20) {
        document.getElementById(popupId).style.visibility = "visible";
    };
};

FormValidation.prototype.validateNumber = function (inputId, popupId) {
    var element = document.getElementById(inputId);

    if (element.value.length < 4 || element.value.length > 4 || element.value < 0 || Number.isInteger(Number(element.value)) === false) {
        document.getElementById(popupId).style.visibility = "visible";
    } else {
        document.getElementById(popupId).style.visibility = "hidden";
    };
};

var validation = new FormValidation();

validation.validateName = function () {
    var self = this;

    document.getElementById('input-name').addEventListener('input', function () {
        self.valideToLatinSymbols('input-name', 'message-name');
        self.valideStringToLength('input-name', 'message-name');
    });
};

validation.validateSurname = function () {
    var self = this;

    document.getElementById('input-surname').addEventListener('input', function () {
        self.valideToLatinSymbols('input-surname', 'message-surname');
        self.valideStringToLength('input-surname', 'message-surname');
    });
};

validation.validateAdmission = function () {
    var self = this;

    document.getElementById('input-admission').addEventListener('input', function () {
        self.validateNumber('input-admission', 'message-admission');
    });
};

validation.validateEnding = function () {
    var self = this;

    document.getElementById('input-ending').addEventListener('input', function () {
        self.validateNumber('input-ending', 'message-ending');
    });
};

validation.turnOn = function () {
    this.validateName();
    this.validateSurname();
    this.validateAdmission();
    this.validateEnding();
};
var FormFunctions = new Function();

FormFunctions.prototype.clearForm = function () {
    for (var _len = arguments.length, inputsId = Array(_len), _key = 0; _key < _len; _key++) {
        inputsId[_key] = arguments[_key];
    }

    for (var i = 0; i < inputsId.length; i++) {
        document.getElementById(arguments[i]).value = '';
    };
};

FormFunctions.prototype.addData = function () {
    var table = document.getElementById('studentsTable');
    var row = void 0;
    var cell = void 0;
    var cellClassNames = ['result-name', 'result-syrname', 'result-admission', 'result-ending', 'result-site'];

    row = table.insertRow();

    for (var _len2 = arguments.length, inputsId = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        inputsId[_key2] = arguments[_key2];
    }

    for (var i = 0; i < inputsId.length; i++) {
        cell = row.insertCell();
        cell.className = cellClassNames[i];
        cell.innerHTML = document.getElementById(inputsId[i]).value;
    };

    cell = row.insertCell();
    cell.className = 'result-edit';
    cell.innerHTML = '&#9998';

    cell = row.insertCell();
    cell.className = 'result-delete';
    cell.innerHTML = '&#10008';
};

FormFunctions.prototype.deleteRow = function () {
    event.target.parentElement.remove();
};

FormFunctions.prototype.editRow = function () {
    for (var _len3 = arguments.length, inputsId = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        inputsId[_key3] = arguments[_key3];
    }

    for (var i = 0; i < inputsId.length; i++) {
        document.getElementById(inputsId[i]).value = event.target.parentElement.children[i].innerHTML;
    };

    this.deleteRow();
};

FormFunctions.prototype.filter = function (inputId, tableId) {
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
            };
        };
    };
};

FormFunctions.prototype.stopFilter = function (tableId, filterInputId) {
    var children = document.getElementById(tableId).childNodes[0].childNodes;

    for (var i = 0; i < children.length; i++) {
        if (children[i].style.display === 'none') {
            children[i].style.display = null;
        };
    };

    document.getElementById(filterInputId).value = '';
};

FormFunctions.prototype.sortToHigher = function (tableId, numberOfColumn) {
    var children = document.getElementById(tableId).childNodes[0].childNodes;
    var values = [];
    var value = void 0;

    for (var i = 1; i < children.length; i++) {
        values[i] = children[i].childNodes[numberOfColumn].innerHTML;
    };

    values.sort(function (a, b) {
        return a - b;
    });

    for (var k = 0; k < values.length - 1; k++) {
        value = values[k];

        for (var s = 1; s < children.length; s++) {
            if (children[s].childNodes[numberOfColumn].innerHTML == value) {
                document.getElementById(tableId).childNodes[0].appendChild(children[s]);
            };
        };
    };
};

FormFunctions.prototype.sortToLower = function (tableId, numberOfColumn) {
    var children = document.getElementById(tableId).childNodes[0].childNodes;
    var values = [];
    var value = void 0;

    for (var i = 1; i < children.length; i++) {
        values[i] = children[i].childNodes[numberOfColumn].innerHTML;
    };

    values.sort(function (a, b) {
        return b - a;
    });

    for (var k = 0; k < values.length - 1; k++) {
        value = values[k];

        for (var s = 1; s < children.length; s++) {
            if (children[s].childNodes[numberOfColumn].innerHTML == value) {
                document.getElementById(tableId).childNodes[0].appendChild(children[s]);
            };
        };
    };
};

var activateForm = new FormFunctions();
activateForm.label = false;

activateForm.clearInputs = function () {
    var self = this;

    document.getElementById('button-clear').addEventListener('click', function () {
        self.clearForm('input-name', 'input-surname', 'input-admission', 'input-ending', 'input-site', 'input-filter');
    });
};

activateForm.add = function () {
    var self = this;

    document.getElementById('button-add').addEventListener('click', function () {
        if (document.getElementById('input-name').value !== '' && document.getElementById('input-surname').value !== '' && document.getElementById('input-admission').value !== '' && document.getElementById('input-ending').value !== '' && document.getElementById('message-name').style.visibility !== "visible" && document.getElementById('message-surname').style.visibility !== "visible" && document.getElementById('message-admission').style.visibility !== "visible" && document.getElementById('message-ending').style.visibility !== "visible") {
            self.addData('input-name', 'input-surname', 'input-admission', 'input-ending', 'input-site');
            self.clearForm('input-name', 'input-surname', 'input-admission', 'input-ending', 'input-site');
        };
    });
};

activateForm.delete = function () {
    var self = this;

    document.getElementById('studentsTable').addEventListener('click', function () {
        if (event.target.className === 'result-delete') {
            self.deleteRow();
        };
    });
};

activateForm.edit = function () {
    var self = this;

    document.getElementById('studentsTable').addEventListener('click', function () {
        if (event.target.className === 'result-edit') {
            self.editRow('input-name', 'input-surname', 'input-admission', 'input-ending', 'input-site');
        };
    });
};

activateForm.save = function () {
    document.getElementById('button-save').addEventListener('click', function () {
        localStorage.setItem('table', document.getElementById('studentsTable').innerHTML);
    });
};

activateForm.applyFilter = function () {
    var self = this;

    document.getElementById('button-applyFilter').addEventListener('click', function () {
        self.filter('input-filter', 'studentsTable');
    });
};

activateForm.deleteFilter = function () {
    var self = this;

    document.getElementById('button-delFilter').addEventListener('click', function () {
        self.stopFilter('studentsTable', 'input-filter');
    });
};

activateForm.sortAdmission = function () {
    if (this.label === false) {
        this.sortToLower('studentsTable', 2);
        this.label = true;
    } else {
        this.sortToHigher('studentsTable', 2);
        this.label = false;
    };
};

activateForm.sortEnding = function () {
    if (this.label === false) {
        this.sortToLower('studentsTable', 3);
        this.label = true;
    } else {
        this.sortToHigher('studentsTable', 3);
        this.label = false;
    };
};

activateForm.sortTable = function () {
    var self = this;

    document.getElementById('studentsTable').addEventListener('click', function () {
        if (event.target.id === 'head-admission') {
            self.sortAdmission();
        } else if (event.target.id === 'head-ending') {
            self.sortEnding();
        };
    });
};

activateForm.turnOn = function () {
    this.clearInputs();
    this.add();
    this.delete();
    this.edit();
    this.save();
    this.applyFilter();
    this.deleteFilter();
    this.sortTable();
};

activateForm.activate = function () {
    element.createDOM();
    validation.turnOn();
    activateForm.turnOn();
};

document.getElementById('nav_item-studentsTable').addEventListener('click', function () {
    activateForm.activate();
});
//# sourceMappingURL=../maps/main.js.map

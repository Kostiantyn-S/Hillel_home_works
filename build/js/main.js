'use strict';

(function closeNav() {
    document.addEventListener('click', function () {
        if (event.target !== document.getElementById('nav-input') && event.target !== document.getElementById('nav-menu') && document.getElementById('nav-input').checked === true) {
            document.getElementById('nav-input').checked = false;
        };
    });
})();
var myClock = new Function();

myClock.creatingElement = function (parrentId, conteinerTag, conteinerId, conteinerClassName) {
    var conteinerPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

    var parrent = document.getElementById(parrentId);
    var conteiner = document.createElement(conteinerTag);

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

    parrent.insertBefore(conteiner, parrent.children[conteinerPosition]);
};

myClock.showClock = function (daysConteinerId, weeksKonteinerId, hoursConteinerId, minutesConteinerId, secondsConteinerId) {
    showDate();
    showHours();
    showMinutes();
    showSeconds();

    function showDate() {
        var clock = new Date();
        var year = clock.getFullYear();
        var month = clock.getMonth() + 1;
        var weekDay = clock.getDay();
        var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var day = clock.getDate();

        (function () {
            month = month < 10 ? '0' + month : month;
        })();

        (function () {
            day = day < 10 ? '0' + day : day;
        })();

        document.getElementById(daysConteinerId).innerHTML = day + '/' + month + '/' + year;
        document.getElementById(weeksKonteinerId).innerHTML = weekDays[weekDay];
    }

    function showHours() {
        var clock = new Date();
        var hours = clock.getHours();
        hours = hours < 10 ? '0' + hours : hours;
        document.getElementById(hoursConteinerId).innerHTML = hours;
        return hours;
    }

    function showMinutes() {
        var clock = new Date();
        var minutes = clock.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById(minutesConteinerId).innerHTML = ':' + minutes;
        return minutes;
    }

    function showSeconds() {
        var clock = new Date();
        var seconds = clock.getSeconds();
        seconds = seconds < 10 ? '0' + seconds : seconds;
        document.getElementById(secondsConteinerId).innerHTML = ':' + seconds;
        return seconds;
    }

    setInterval(function showAll() {
        var seconds = showSeconds();
        var minutes = void 0;
        var hours = void 0;

        if (seconds === '00') {
            minutes = showMinutes();
        }

        if (minutes === '00') {
            hours = showHours();
        }

        if (hours === '00') {
            showDate();
        }
    }, 1000);
};

myClock.creatingElement('header', 'div', 'date', 'date', 0);
myClock.creatingElement('date', 'span', 'date-week');
myClock.creatingElement('date', 'span', 'date-day');
myClock.creatingElement('header', 'div', 'time', 'time', 1);
myClock.creatingElement('time', 'span', 'time-hours');
myClock.creatingElement('time', 'span', 'time-minutes');
myClock.creatingElement('time', 'span', 'time-seconds');
myClock.showClock('date-day', 'date-week', 'time-hours', 'time-minutes', 'time-seconds');
var windowSize = new Function();

windowSize.creatingElement = function (parrentId, conteinerTag, conteinerId, conteinerClassName) {
    var conteinerPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

    var parrent = document.getElementById(parrentId);
    var conteiner = document.createElement(conteinerTag);

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

    parrent.insertBefore(conteiner, parrent.children[conteinerPosition]);
};

windowSize.showSize = function (conteinerId) {
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    document.getElementById(conteinerId).innerHTML = width + ' x ' + height;
};

windowSize.creatingElement('footer', 'div', 'window-size', 'window-size');
windowSize.showSize('window-size');
window.addEventListener('resize', function () {
    setTimeout(windowSize.showSize, 2000, 'window-size');
});
var spentTime = new Function();

spentTime.creatingElement = function (parrentId, conteinerTag, conteinerId, conteinerClassName) {
    var conteinerPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

    var parrent = document.getElementById(parrentId);
    var conteiner = document.createElement(conteinerTag);

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

    parrent.insertBefore(conteiner, parrent.children[conteinerPosition]);
};

spentTime.showStopWatch = function (conteinerId) {
    var value = 0;
    var intervalId = void 0;

    function stopWatch() {
        intervalId = setInterval(function () {
            ++value;
            value = value < 10 ? '0' + value : value;
            document.getElementById(conteinerId).innerHTML = value;
        }, 1000);
    }

    stopWatch();

    (function addRefreshAtEscKey() {
        window.addEventListener('keydown', function () {
            if (event.keyCode === 27) {
                clearInterval(intervalId);
                spentTime.showStopWatch('spentTime_value', 0);
            }
        });
    })();

    (function stopTheStopwatchWhenHoveringAndViceVersa() {
        document.getElementById('spentTime').addEventListener('mouseover', function () {
            clearInterval(intervalId);
        });

        document.getElementById('spentTime').addEventListener('mouseout', stopWatch);
    })();
};

spentTime.creatingElement('footer', 'div', 'spentTime', 'spentTime', 0);
spentTime.creatingElement('spentTime', 'div', 'spentTime_title', 'spentTime_title', 0);
document.getElementById('spentTime_title').innerHTML = 'You spent in this page:';
spentTime.creatingElement('spentTime', 'div', 'spentTime_value-and-text', 'spentTime_value-and-text', 1);
spentTime.creatingElement('spentTime_value-and-text', 'div', 'spentTime_value', 'spentTime_value', 0);
spentTime.creatingElement('spentTime_value-and-text', 'div', 'spentTime_text', 'spentTime_text', 1);
document.getElementById('spentTime_text').innerHTML = 'seconds';

spentTime.showStopWatch('spentTime_value');
var createTable = new Function();

createTable.creatingElement = function (parrentId, conteinerTag, conteinerId, conteinerClassName) {
    var conteinerPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

    var parrent = document.getElementById(parrentId);
    var conteiner = document.createElement(conteinerTag);

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

    parrent.insertBefore(conteiner, parrent.children[conteinerPosition]);
};

createTable.validatingInput = function (inputElementId, popupId) {
    document.getElementById(inputElementId).addEventListener('input', function () {
        var value = parseInt(document.getElementById(inputElementId).value);
        if (value > 100 || value < 1) {
            document.getElementById(popupId).hidden = false;
        } else {
            document.getElementById(popupId).hidden = true;
        }
    });
};

createTable.createForm = function () {
    createTable.creatingElement('article', 'form', 'create-table', 'create-table', 0);

    createTable.creatingElement('create-table', 'div', 'table-rows-conteiner', 'table-rows-conteiner', 0);
    document.getElementById('table-rows-conteiner').innerHTML = '<label for="table-rows">How much rows in table you want to create?</label><input id="table-rows" name="table-rows" type="number" placeholder="28" required><span id="popup-row" class="popup-row" hidden>Value must be integer more than 0 but less than 100</span>';

    createTable.creatingElement('create-table', 'div', 'table-columns-conteiner', 'table-columns-conteiner', 1);
    document.getElementById('table-columns-conteiner').innerHTML = '<label for="table-columns">How much rows in table you want to create?</label><input id="table-columns" name="table-columns" type="number" placeholder="35" required><span id="popup-column" class="popup-column" hidden>Value must be integer more than 0 but less than 100</span>';

    createTable.creatingElement('create-table', 'div', 'table-button-conteiner', 'table-button-conteiner', 2);
    document.getElementById('table-button-conteiner').innerHTML = '<input type="button" value="Create" id="table-button" class="table-button"></input>';
};

createTable.showResultTable = function (buttonId, inputRowsId, rowsPopupId, inputColumnsId, columnsPopupId) {
    document.getElementById(buttonId).addEventListener('click', function () {

        if (document.getElementById(rowsPopupId).hidden !== false && document.getElementById(columnsPopupId).hidden !== false && document.getElementById(inputRowsId).value !== false && document.getElementById(inputColumnsId).value !== false) {

            (function isOldResult() {
                if (document.getElementById('result-table') !== null) {
                    document.getElementById('result-table').remove();
                }
            })();

            var rowsValue = parseInt(document.getElementById(inputRowsId).value);
            var columnsValue = parseInt(document.getElementById(inputColumnsId).value);
            var table = void 0;
            var row = void 0;

            createTable.creatingElement('article', 'table', 'result-table', 'result-table', 1);
            table = document.getElementById('result-table');

            for (var i = 0; i < rowsValue; i++) {
                row = table.insertRow();

                for (var k = 0; k < columnsValue; k++) {
                    row.insertCell();
                }
            }
            createTable.showIndex();
        }
    });
};

createTable.showIndex = function () {
    document.getElementById('result-table').addEventListener('click', function () {
        alert('\u0421\u0442\u0440\u043E\u043A\u0430 ' + (event.target.parentNode.rowIndex + 1) + ' \u041A\u043E\u043B\u043E\u043D\u043A\u0430 ' + (event.target.cellIndex + 1));
    });
};

createTable.turnOnFunction = function () {

    if (document.getElementById('article').innerHTML !== "") {
        clearInterval(slider.timerId);
        document.getElementById('article').innerHTML = "";
    }

    createTable.createForm();
    createTable.validatingInput('table-rows', 'popup-row');
    createTable.validatingInput('table-columns', 'popup-column');
    createTable.showResultTable('table-button', 'table-rows', 'popup-row', 'table-columns', 'popup-column');
};

document.getElementById('nav_item-createTable').addEventListener('click', createTable.turnOnFunction);
function Slider() {
    this.slides = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    this.startIndex = 0;
    this.timerId = 0;
}

Slider.prototype.createElement = function (parrentId, conteinerTag, conteinerId, conteinerClassName) {
    var conteinerPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

    var parrent = document.getElementById(parrentId);
    var conteiner = document.createElement(conteinerTag);

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

    parrent.insertBefore(conteiner, parrent.children[conteinerPosition]);
};

Slider.prototype.createDOM = function () {
    this.createElement('article', 'div', 'slider-title', 'slider-title', 0);
    document.getElementById('slider-title').innerHTML = 'Triumph Bonneville';
    this.createElement('article', 'div', 'slider', 'slider', 1);
    this.createElement('slider', 'div', 'slider-button-left', 'slider-button-left');
    this.createElement('slider', 'div', 'slider-button-right', 'slider-button-right');
};

Slider.prototype.set = function (image) {
    document.getElementById("slider").style.backgroundImage = 'url(\'img/slider/' + image + '\')';
};

Slider.prototype.initial = function () {
    this.set(this.slides[this.startIndex]);
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

    var self = this;
    clearInterval(this.timerId);

    this.timerId = setInterval(function () {
        self.scrollRight();
    }, 6000);
};

var slider = new Slider();

slider.turnOn = function () {
    document.getElementById('nav_item-slider').addEventListener('click', function () {
        slider.cleaning();
        slider.createDOM();
        slider.initial();
        slider.timer();

        document.getElementById('slider').addEventListener('mouseover', function () {
            clearInterval(slider.timerId);
        });

        document.getElementById('slider').addEventListener('mouseout', function () {
            slider.timer();
        });

        document.getElementById('slider-button-left').addEventListener('click', function () {
            slider.scrollLeft();
        });

        document.getElementById('slider-button-right').addEventListener('click', function () {
            slider.scrollRight();
        });

        slider1.turnOn();
    });
};

slider.turnOn();

var slider1 = new Slider();
slider1.slides = ['5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

slider1.createDOM = function () {
    this.createElement('article', 'div', 'slider1', 'slider1', 2);
    this.createElement('slider1', 'div', 'slider1-title', 'slider-title', 0);
    document.getElementById('slider1-title').innerHTML = 'North Pole';
    this.createElement('slider1', 'div', 'slider1-conteiner', 'slider', 1);
    this.createElement('slider1-conteiner', 'div', 'slider1-button-left', 'slider-button-left');
    this.createElement('slider1-conteiner', 'div', 'slider1-indicators', 'slider1-indicators', 2);
    this.createElement('slider1-indicators', 'div', 'slider1-slide0', 'slider1-slide', 0);
    this.createElement('slider1-indicators', 'div', 'slider1-slide1', 'slider1-slide', 1);
    this.createElement('slider1-indicators', 'div', 'slider1-slide2', 'slider1-slide', 2);
    this.createElement('slider1-indicators', 'div', 'slider1-slide3', 'slider1-slide', 3);
    this.createElement('slider1-indicators', 'div', 'slider1-slide4', 'slider1-slide', 4);
    this.createElement('slider1-conteiner', 'div', 'slider1-button-right', 'slider-button-right');
    this.createElement('slider1', 'div', 'slider1-hover', 'slider1-hover', 2);
    document.getElementById('slider1-hover').hidden = true;
};

slider1.set = function (image) {
    document.getElementById("slider1-conteiner").style.backgroundImage = 'url(\'img/slider/' + image + '\')';
};

slider1.indicator = function () {
    for (var i = 0; i < this.slides.length; i++) {
        if (document.getElementById("slider1-conteiner").style.backgroundImage === 'url("img/slider/' + this.slides[i] + '")') {
            document.getElementById('slider1-indicators').childNodes[i].style.background = 'white';
        } else {
            document.getElementById('slider1-indicators').childNodes[i].style.background = null;
        };
    };
};

slider1.timer = function () {
    var self = this;
    clearInterval(this.timerId);

    this.timerId = setInterval(function () {
        self.scrollRight();
        self.indicator();
    }, 6000);
};

slider1.turnOn = function () {
    var self = this;

    this.createDOM();
    this.initial();
    self.indicator();
    this.timer();

    document.getElementById('slider1-conteiner').addEventListener('mouseover', function () {
        clearInterval(self.timerId);
        document.getElementById('slider1-hover').hidden = false;
        document.getElementById('slider1-hover').innerHTML = '' + document.getElementById("slider1-conteiner").style.backgroundImage;
    });

    document.getElementById('slider1-conteiner').addEventListener('mousemove', function (e) {
        var element = document.getElementById('slider1-hover');
        element.style.left = e.clientX + 20 + 'px';
        element.style.top = e.clientY + 400 + 'px';
    });

    document.getElementById('slider1-conteiner').addEventListener('mouseout', function () {
        self.timer();
        document.getElementById('slider1-hover').hidden = true;
    });

    document.getElementById('slider1-button-left').addEventListener('click', function () {
        self.scrollLeft();
        self.indicator();
    });

    document.getElementById('slider1-button-right').addEventListener('click', function () {
        self.scrollRight();
        self.indicator();
    });

    document.getElementById('slider1-slide0').addEventListener('click', function () {
        self.set(self.slides[0]);
        self.indicator();
    });

    document.getElementById('slider1-slide1').addEventListener('click', function () {
        self.set(self.slides[1]);
        self.indicator();
    });

    document.getElementById('slider1-slide2').addEventListener('click', function () {
        self.set(self.slides[2]);
        self.indicator();
    });

    document.getElementById('slider1-slide3').addEventListener('click', function () {
        self.set(self.slides[3]);
        self.indicator();
    });

    document.getElementById('slider1-slide4').addEventListener('click', function () {
        self.set(self.slides[4]);
        self.indicator();
    });
};
function ClearAllButtton() {}

ClearAllButtton.prototype.createElement = function (parrentId, conteinerTag, conteinerId, conteinerClassName) {
    var conteinerPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

    var parrent = document.getElementById(parrentId);
    var conteiner = document.createElement(conteinerTag);

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

    parrent.insertBefore(conteiner, parrent.children[conteinerPosition]);
};

var clearAll = new ClearAllButtton();

clearAll.turnOn = function () {
    clearAll.createElement('header', 'a', 'clearAll', 'clearAll', 0);
    document.getElementById('clearAll').innerHTML = 'Clear All';
    document.getElementById('clearAll').addEventListener('click', function () {
        clearInterval(slider.timerId);
        document.getElementById('article').innerHTML = '';
    });
};

clearAll.turnOn();

function Button() {};

Button.prototype.createElement = function (parrentId, elementTag, elementId, elementClassName, elementValue, elementType, elementBackground) {
    var elementPosition = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;

    var element = document.createElement(elementTag);

    element.id = elementId;
    element.className = elementClassName;
    element.value = elementValue;
    element.type = elementType;
    element.background = elementBackground;
    document.getElementById(parrentId).insertBefore(element, document.getElementById(parrentId).children[elementPosition]);
};

Button.prototype.clickMe = function (event) {
    if (event.target.style.background !== event.target.background) {
        event.target.style.background = event.target.background;
    } else {
        event.target.style.background = 'grey';
    }
};

Button.prototype.cleaning = function () {
    if (document.getElementById('article').innerHTML !== "") {
        clearInterval(this.timerId);
        document.getElementById('article').innerHTML = "";
    }
};

var button = new Button();

button.createDom = function () {
    button.createElement('article', 'input', 'firstButton', 'superButton', 'First Button', 'button', 'red', 0);
    button.createElement('article', 'input', 'secondButton', 'superButton', 'Second Button', 'button', 'green', 1);
    button.createElement('article', 'input', 'thirdButton', 'superButton', 'Third Button', 'button', 'blue', 2);
};

button.turnOn = function () {
    button.cleaning();
    button.createDom();
    document.getElementById('firstButton').addEventListener("click", button.clickMe);
    document.getElementById('secondButton').addEventListener("click", button.clickMe);
    document.getElementById('thirdButton').addEventListener("click", button.clickMe);
};

document.getElementById('nav_item-superButtons').addEventListener('click', button.turnOn);
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
        document.getElementById('article').innerHTML = "";
    };
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

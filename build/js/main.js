'use strict';

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
var createTable = {};

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
            document.getElementById('table-button').hidden = true;
            document.getElementById(popupId).hidden = false;
        } else {
            document.getElementById('table-button').hidden = false;
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
    document.getElementById('table-button-conteiner').innerHTML = '<input type="button" value="Create" id="table-button" class="table-button" hidden></input>';
};

createTable.showResultTable = function (buttonId, inputRowsId, inputColumnsId) {
    document.getElementById(buttonId).addEventListener('click', function () {
        if (document.getElementById('result-table') !== null) {
            document.getElementById('result-table').remove();
        }
        var rowsValue = parseInt(document.getElementById(inputRowsId).value);
        var columnsValue = parseInt(document.getElementById(inputColumnsId).value);
        var table = void 0;
        var row = void 0;
        var column = void 0;

        createTable.creatingElement('article', 'table', 'result-table', 'result-table', 1);
        table = document.getElementById('result-table');

        for (var i = 0; i < rowsValue; i++) {
            row = table.insertRow();

            for (var k = 0; k < columnsValue; k++) {
                row.insertCell();
            }
        }
    });
};

createTable.turnOnFunction = function () {

    (function removeForm() {
        if (document.getElementById('create-table') !== null) {
            document.getElementById('create-table').remove();
        }
    })();

    (function removeTable() {
        if (document.getElementById('result-table') !== null) {
            document.getElementById('result-table').remove();
        }
    })();

    createTable.createForm();
    createTable.validatingInput('table-rows', 'popup-row');
    createTable.validatingInput('table-columns', 'popup-column');
    createTable.showResultTable('table-button', 'table-rows', 'table-columns');
};
//# sourceMappingURL=../maps/main.js.map

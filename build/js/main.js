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
//# sourceMappingURL=../maps/main.js.map

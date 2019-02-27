'use strict';

var myClock = new Function();

myClock.creatingLastElement = function (parrentId, conteinerTag, conteinerId, conteinerClassName) {

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

    parrent.appendChild(conteiner);
};

myClock.showClock = function (daysConteinerId, weeksKonteinerId, hoursConteinerId, minutesConteinerId, secondsConteinerId) {

    var clock = new Date();

    var year = clock.getFullYear();

    var month = clock.getMonth() + 1;

    var weekDay = clock.getDay();

    var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var day = clock.getDate();

    var hours = clock.getHours();

    var minutes = clock.getMinutes();

    var seconds = clock.getSeconds();

    month = month < 10 ? '0' + month : month;

    day = day < 10 ? '0' + day : day;

    hours = hours < 10 ? '0' + hours : hours;

    minutes = minutes < 10 ? '0' + minutes : minutes;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById(daysConteinerId).innerHTML = day + '/' + month + '/' + year;

    document.getElementById(weeksKonteinerId).innerHTML = weekDays[weekDay];

    document.getElementById(hoursConteinerId).innerHTML = hours;

    document.getElementById(minutesConteinerId).innerHTML = ':' + minutes;

    document.getElementById(secondsConteinerId).innerHTML = ':' + seconds;

    function changeDate() {

        var clock = new Date();

        var year = clock.getFullYear();

        var month = clock.getMonth() + 1;

        var weekDay = clock.getDay();

        month = month < 10 ? '0' + month : month;

        day = day < 10 ? '0' + day : day;

        document.getElementById(daysConteinerId).innerHTML = day + '/' + month + '/' + year;

        document.getElementById(weeksKonteinerId).innerHTML = weekDays[weekDay];
    };

    function changeHours() {

        var clock = new Date();

        var hours = clock.getHours();

        hours = hours < 10 ? '0' + hours : hours;

        document.getElementById(hoursConteinerId).innerHTML = hours;

        return hours;
    };

    function changeMinutes() {

        var clock = new Date();

        var minutes = clock.getMinutes();

        minutes = minutes < 10 ? '0' + minutes : minutes;

        document.getElementById(minutesConteinerId).innerHTML = ':' + minutes;

        return minutes;
    };

    function changeSeconds() {

        var clock = new Date();

        var seconds = clock.getSeconds();

        seconds = seconds < 10 ? '0' + seconds : seconds;

        document.getElementById(secondsConteinerId).innerHTML = ':' + seconds;

        return seconds;
    };

    setInterval(function show() {

        var seconds = changeSeconds();

        var minutes = void 0;

        var hours = void 0;

        if (seconds == 0) {

            minutes = changeMinutes();
        }

        if (minutes == 0) {

            hours = changeHours();
        }

        if (hours == 0) {

            changeDate();
        }
    }, 1000);
};

myClock.creatingLastElement('footer', 'div', 'date', 'date');

myClock.creatingLastElement('date', 'span', 'date-week');

myClock.creatingLastElement('date', 'span', 'date-day');

myClock.creatingLastElement('footer', 'div', 'time', 'time');

myClock.creatingLastElement('time', 'span', 'time-hours');

myClock.creatingLastElement('time', 'span', 'time-minutes');

myClock.creatingLastElement('time', 'span', 'time-seconds');

myClock.showClock('date-day', 'date-week', 'time-hours', 'time-minutes', 'time-seconds');
var windowSize = new Function();

windowSize.creatingLastElement = function (parrentId, conteinerTag, conteinerId, conteinerClassName) {
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

    parrent.appendChild(conteiner);
};

windowSize.showSize = function (conteinerId) {
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    document.getElementById(conteinerId).innerHTML = width + ' x ' + height;
};

windowSize.creatingLastElement('header', 'div', 'window-size', 'window-size');
windowSize.showSize('window-size');
window.addEventListener('resize', function () {
    setTimeout(windowSize.showSize, 2000, 'window-size');
});
//# sourceMappingURL=../maps/main.js.map

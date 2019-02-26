'use strict';

var clock = {};

clock.__proto__.creatingElement = function (conteinerId, parrentId) {

    var conteiner = document.createElement('div');

    var parrent = document.getElementById(parrentId);

    conteiner.id = conteinerId;

    parrent.appendChild(conteiner);
};

clock.__proto__.showTime = function () {

    var time = new Date();

    var hours = time.getHours();

    var minutes = time.getMinutes();

    var seconds = time.getSeconds();

    var correctHours = void 0;

    var correctMinutes = void 0;

    var correctSeconds = void 0;

    function correctingHours() {

        correctHours = hours < 10 ? '0' + hours : hours;
    };

    function correctingMinutes() {

        correctMinutes = minutes < 10 ? '0' + minutes : minutes;
    };

    function correctingSeconds() {

        correctSeconds = seconds < 10 ? '0' + seconds : seconds;
    };

    (function changeCheckSeconds() {

        if (correctSeconds !== seconds) {

            correctingSeconds();
        }
    })();

    (function changeCheckMinutes() {

        if (correctMinutes !== minutes) {

            correctingMinutes();
        }
    })();

    (function changeCheckHours() {

        if (correctHours !== hours) {

            correctingHours();
        }
    })();

    document.getElementById('time').innerHTML = correctHours + ':' + correctMinutes + ':' + correctSeconds;
};

clock.__proto__.showDate = function () {

    var date = new Date();

    var day = date.getDate();

    var month = date.getMonth() + 1;

    var year = date.getFullYear();

    var lastDay = void 0;

    var lastMonth = void 0;

    var lastYear = void 0;

    var changeCheckDay = function changeCheckDay() {
        return day = day !== lastDay ? day : lastDay;
    };

    changeCheckDay();

    var changeCheckMonth = function changeCheckMonth() {
        return month = month !== lastMonth ? month : lastMonth;
    };

    changeCheckMonth();

    var changeCheckYear = function changeCheckYear() {
        return year = year !== lastYear ? year : lastYear;
    };

    changeCheckYear();

    document.getElementById('date').innerHTML = day + '/' + month + '/' + year;
};

clock.creatingElement('date', 'footer');

setInterval(clock.showDate, 1000);

clock.creatingElement('time', 'footer');

setInterval(clock.showTime, 1000);
var windowSize = {};

windowSize.__proto__.creatingElement = function (conteinerId, parrentId) {
    var conteiner = document.createElement('div');
    var parrent = document.getElementById(parrentId);
    conteiner.id = conteinerId;
    parrent.appendChild(conteiner);
};

windowSize.__proto__.showSize = function () {
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    var oldWidth = void 0;
    var oldHeight = void 0;

    if (width !== oldWidth || height !== oldHeight) {
        setTimeout(function () {
            document.getElementById('window-size').innerHTML = width + ' x ' + height;
        }, 2000);
    }

    oldWidth = width;
    oldHeight = height;
};

windowSize.creatingElement('window-size', 'header');
setInterval(windowSize.showSize, 0);
//# sourceMappingURL=../maps/main.js.map

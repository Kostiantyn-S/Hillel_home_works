let clock = {};

clock.__proto__.creatingElement = function (conteinerId, parrentId) {
    let conteiner = document.createElement('div');
    let parrent = document.getElementById(parrentId);
    conteiner.id = conteinerId;
    parrent.appendChild (conteiner);
};

clock.__proto__.showTime = function () {
    let time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let correctHours;
    let correctMinutes;
    let correctSeconds;

    function correctingHours () {
        correctHours = (hours < 10) ? '0' + hours : hours;
    };

    function correctingMinutes () {
        correctMinutes = (minutes < 10) ? '0' + minutes : minutes;
    };

    function correctingSeconds () {
        correctSeconds = (seconds < 10) ? '0' + seconds : seconds;
    };

    (function changeCheckSeconds () {
        if (correctSeconds !== seconds) {
            correctingSeconds();
        }
    })();

    (function changeCheckMinutes () {
        if (correctMinutes !== minutes) {
            correctingMinutes();
        }
    })();

    (function changeCheckHours () {
        if (correctHours !== hours) {
            correctingHours();
        }
    })();

    document.getElementById('time').innerHTML = correctHours + ':' + correctMinutes + ':' + correctSeconds;
};

clock.__proto__.showDate = function () {
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let lastDay;
    let lastMonth;
    let lastYear;

    let changeCheckDay = () => (day = (day !== lastDay) ? day : lastDay);
    changeCheckDay();

    let changeCheckMonth = () => (month = (month !== lastMonth) ? month : lastMonth);
    changeCheckMonth();

    let changeCheckYear = () => (year = (year !== lastYear) ? year : lastYear);
    changeCheckYear();

    document.getElementById('date').innerHTML = day + '/' + month + '/' + year;
};

clock.creatingElement('date', 'footer');
setInterval (clock.showDate, 1000);
clock.creatingElement('time', 'footer');
setInterval (clock.showTime, 1000);
let clock = {};

clock.__proto__.creatingTimeElement = function () {
    let timeConteiner = document.createElement('div');
    let parrent = document.getElementById('footer');
    timeConteiner.id = 'time';
    parrent.appendChild (timeConteiner);
};

clock.__proto__.showTime = function () {
    let time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let correctHours;
    let correctMinutes;
    let correctSeconds;

    let correctingHours = () => (correctHours = (hours < 10) ? '0' + hours : hours);

    let correctingMinutes = () => (correctMinutes = (minutes < 10) ? '0' + minutes : minutes);

    let correctingSeconds = () => (correctSeconds = (seconds < 10) ? '0' + seconds : seconds);

    (function changeCheckHours () {
        if (correctHours !== hours) {
            correctingHours();
        }
    })();

    (function changeCheckMinutes () {
        if (correctMinutes !== minutes) {
            correctingMinutes();
        }
    })();

    (function changeCheckSeconds () {
        if (correctSeconds !== seconds) {
            correctingSeconds();
        }
    })();

    document.getElementById('time').innerHTML = correctHours + ':' + correctMinutes + ':' + correctSeconds;
};

clock.__proto__.creatingDateElement = function () {
    let dateConteiner = document.createElement('div');
    let parrent = document.getElementById('footer');
    dateConteiner.id = 'date';
    parrent.appendChild (dateConteiner);
};

clock.__proto__.showDate = function () {
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let lastDay = day;
    let lastMonth = month;
    let lastYear = year;

    let changeCheckDay = () => (day = (day !== lastDay) ? day : lastDay);
    changeCheckDay();

    let changeCheckMonth = () => (month = (month !== lastMonth) ? month : lastMonth);
    changeCheckMonth();

    let changeCheckYear = () => (year = (year !== lastYear) ? year : lastYear);
    changeCheckYear();

    document.getElementById('date').innerHTML = day + '/' + month + '/' + year;
};

clock.creatingDateElement();
setInterval (clock.showDate, 1000);
clock.creatingTimeElement();
setInterval (clock.showTime, 1000);
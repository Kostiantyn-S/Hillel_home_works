let myClock = new Function;

myClock.creatingLastElement = function (parrentId, conteinerTag, conteinerId, conteinerClassName) {
    let parrent = document.getElementById(parrentId);
    let conteiner = document.createElement(conteinerTag);

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

    parrent.appendChild (conteiner);
};

myClock.showClock = function (daysConteinerId, weeksKonteinerId, hoursConteinerId, minutesConteinerId, secondsConteinerId) {
    let clock = new Date;
    let year = clock.getFullYear();
    let month = clock.getMonth() + 1;
    let weekDay = clock.getDay();
    let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = clock.getDate();
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();

    month = (month < 10) ? '0' + month : month;
    day = (day < 10) ? '0' + day : day;
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    document.getElementById(daysConteinerId).innerHTML = day + '/' + month + '/' + year;
    document.getElementById(weeksKonteinerId).innerHTML = weekDays[weekDay];
    document.getElementById(hoursConteinerId).innerHTML = hours;
    document.getElementById(minutesConteinerId).innerHTML = ':' + minutes;
    document.getElementById(secondsConteinerId).innerHTML = ':' + seconds;

    function changeDate () {
        let clock = new Date;
        let year = clock.getFullYear();
        let month = clock.getMonth() + 1;
        let weekDay = clock.getDay();
        month = (month < 10) ? '0' + month : month;
        day = (day < 10) ? '0' + day : day;
        document.getElementById(daysConteinerId).innerHTML = day + '/' + month + '/' + year;
        document.getElementById(weeksKonteinerId).innerHTML = weekDays[weekDay];
    };

    function changeHours () {
        let clock = new Date;
        let hours = clock.getHours();
        hours = (hours < 10) ? '0' + hours : hours;
        document.getElementById(hoursConteinerId).innerHTML = hours;
        return hours;
    };

    function changeMinutes () {
        let clock = new Date;
        let minutes = clock.getMinutes();
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        document.getElementById(minutesConteinerId).innerHTML = ':' + minutes;
        return minutes;
    };

    function changeSeconds () {
        let clock = new Date;
        let seconds = clock.getSeconds();
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        document.getElementById(secondsConteinerId).innerHTML = ':' + seconds;
        return seconds;
    };


    setInterval (function show () {
        let seconds = changeSeconds();
        let minutes;
        let hours;

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
}

myClock.creatingLastElement('footer', 'div', 'date', 'date');
myClock.creatingLastElement('date', 'span', 'date-week');
myClock.creatingLastElement('date', 'span', 'date-day');
myClock.creatingLastElement('footer', 'div', 'time', 'time');
myClock.creatingLastElement('time', 'span', 'time-hours');
myClock.creatingLastElement('time', 'span', 'time-minutes');
myClock.creatingLastElement('time', 'span', 'time-seconds');
myClock.showClock('date-day', 'date-week', 'time-hours', 'time-minutes', 'time-seconds');
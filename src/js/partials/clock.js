let myClock = new Function;

myClock.creatingElement = function (parrentId, conteinerTag, conteinerId, conteinerClassName, conteinerPosition = null) {
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

    parrent.insertBefore (conteiner, parrent.children[conteinerPosition]);
};

myClock.showClock = function (daysConteinerId, weeksKonteinerId, hoursConteinerId, minutesConteinerId, secondsConteinerId) {
    showDate();
    showHours();
    showMinutes();
    showSeconds();

    function showDate () {
        let clock = new Date;
        let year = clock.getFullYear();
        let month = clock.getMonth() + 1;
        let weekDay = clock.getDay();
        let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = clock.getDate();

        (function () {
            month = (month < 10) ? '0' + month : month;
        })();

        (function () {
            day = (day < 10) ? '0' + day : day;
        })();

        document.getElementById(daysConteinerId).innerHTML = day + '/' + month + '/' + year;
        document.getElementById(weeksKonteinerId).innerHTML = weekDays[weekDay];
    }

    function showHours () {
        let clock = new Date;
        let hours = clock.getHours();
        hours = (hours < 10) ? '0' + hours : hours;
        document.getElementById(hoursConteinerId).innerHTML = hours;
        return hours;
    }

    function showMinutes () {
        let clock = new Date;
        let minutes = clock.getMinutes();
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        document.getElementById(minutesConteinerId).innerHTML = ':' + minutes;
        return minutes;
    }

    function showSeconds () {
        let clock = new Date;
        let seconds = clock.getSeconds();
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        document.getElementById(secondsConteinerId).innerHTML = ':' + seconds;
        return seconds;
    }

    setInterval (function showAll () {
        let seconds = showSeconds();
        let minutes;
        let hours;

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
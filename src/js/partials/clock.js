class CreateElement {

    constructor () {
        this.parrent;
        this.element;
    };

    create (parrentId, elementTag) {
        this.parrent = document.getElementById(parrentId);
        this.element = document.createElement(elementTag);
        return this;
    };

    id (elementId) {
        this.element.id = elementId;
        return this;
    }

    class (className) {
        this.element.className = className;
        return this;
    };

    type (type) {
        this.element.type = type;
        return this;
    };

    value (value) {
        this.element.value = value;
        return this;
    };

    innerHTML (text) {
        this.element.innerHTML = text;
        return this;
    };

    for (htmlFor) {
        this.element.htmlFor = htmlFor;
        return this;
    };

    required (value) {
        this.element.required = value;
        return this;
    };

    placeholder (text) {
        this.element.placeholder = text;
        return this;
    };

    hidden (value) {
        this.element.hidden = value;
        return this;
    }

    position (position = null) {
        this.parrent.insertBefore (this.element, this.parrent.children[position]);
        return this;
    };
}

class Clock {
    constructor (daysConteinerId, weeksKonteinerId, hoursConteinerId, minutesConteinerId, secondsConteinerId) {
        this.daysConteinerId = daysConteinerId;
        this.weeksKonteinerId = weeksKonteinerId;
        this.hoursConteinerId = hoursConteinerId;
        this.minutesConteinerId = minutesConteinerId;
        this.secondsConteinerId = secondsConteinerId;
    };

    showDate () {
        let date = new Date;
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let weekDay = date.getDay();
        let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = date.getDate();

        (function () {
            month = (month < 10) ? '0' + month : month;
        })();

        (function () {
            day = (day < 10) ? '0' + day : day;
        })();

        document.getElementById(this.daysConteinerId).innerHTML = `${day}/${month}/${year}`;
        document.getElementById(this.weeksKonteinerId).innerHTML = weekDays[weekDay];
    };

    showHours () {
        let clock = new Date;
        let hours = clock.getHours();
        hours = (hours < 10) ? '0' + hours : hours;
        document.getElementById(this.hoursConteinerId).innerHTML = hours;
        return hours;
    };

    showMinutes () {
        let clock = new Date;
        let minutes = clock.getMinutes();
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        document.getElementById(this.minutesConteinerId).innerHTML = `:${minutes}`;
        return minutes;
    };

    showSeconds () {
        let clock = new Date;
        let seconds = clock.getSeconds();
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        document.getElementById(this.secondsConteinerId).innerHTML = `:${seconds}`;
        return seconds;
    };

    change () {
        let seconds = this.showSeconds();
        let minutes;
        let hours;

        if (seconds === '00') {
            minutes = this.showMinutes();
        }

        if (minutes === '00') {
            hours = this.showHours();
        }

        if (hours === '00') {
            this.showDate();
        }
    };
}

(function turnOnClock () {
    let element = new CreateElement;

    element.create('header', 'div').id('date').class('date').position(0);
    element.create('date', 'span').id('date-week').position();
    element.create('date', 'span').id('date-day').position();
    element.create('header', 'div').id('time').class('time').position(1);
    element.create('time', 'span').id('time-hours').position();
    element.create('time', 'span').id('time-minutes').position();
    element.create('time', 'span').id('time-seconds').position();

    let myClock = new Clock('date-day', 'date-week', 'time-hours', 'time-minutes', 'time-seconds');

    myClock.showDate();
    myClock.showHours();
    myClock.showMinutes();
    myClock.showSeconds();
    setInterval (myClock.change.bind(myClock), 1000);
})();
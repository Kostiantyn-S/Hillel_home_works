class SpentTime {
    constructor (conteinerId) {
        this.value = 0;
        this.intervalId;
        this.conteinerId = conteinerId;
    };

    stopWatch () {
        let self = this;
        this.intervalId = setInterval(function () {
            ++self.value;
            self.value = (self.value < 10) ? '0' + self.value : self.value;
            document.getElementById(self.conteinerId).innerHTML = self.value;
        }, 1000);
    };

    addRefreshAtEscKey () {
        let self = this;
        window.addEventListener ('keydown', function () {
            if (event.keyCode === 27) {
                clearInterval(self.intervalId);
                self.value = 0;
                self.stopWatch();
            }
        });
    };

    stopTheStopwatchWhenHoveringAndViceVersa (conteinerId) {
        let self = this;
        document.getElementById(conteinerId).addEventListener ('mouseover', function () {
            clearInterval(self.intervalId);
        });

        document.getElementById(conteinerId).addEventListener ('mouseout', this.stopWatch.bind(self));
    };
}

(function turnOnSpentTimeStopWatch () {
    let element = new CreateElement;
    let stopWatch = new SpentTime('spentTime_value');

    element.create('footer', 'div').id('spentTime').class('spentTime').position(0);
    element.create('spentTime', 'div').id('spentTime_title').class('spentTime_title').innerHTML('You spent in this page:').position(0);
    element.create('spentTime', 'div').id('spentTime_value-and-text').class('spentTime_value-and-text').position(1);
    element.create('spentTime_value-and-text', 'div').id('spentTime_value').class('spentTime_value').position(0);
    element.create('spentTime_value-and-text', 'div').id('spentTime_text').class('spentTime_text').innerHTML('seconds').position(1);

    stopWatch.stopWatch();
    stopWatch.addRefreshAtEscKey();
    stopWatch.stopTheStopwatchWhenHoveringAndViceVersa('spentTime');
})();
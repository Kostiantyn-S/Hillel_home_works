let spentTime = new Function;

spentTime.creatingElement = function (parrentId, conteinerTag, conteinerId, conteinerClassName, conteinerPosition = null) {
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

spentTime.showStopWatch = function (conteinerId) {
    let value = 0;
    let intervalId;

    function stopWatch () {
        intervalId = setInterval(function () {
            ++value;
            value = (value < 10) ? '0' + value : value;
            document.getElementById(conteinerId).innerHTML = value;
        }, 1000);
    }

    stopWatch();

    (function addRefreshAtEscKey () {
        window.addEventListener ('keydown', function () {
            if (event.keyCode === 27) {
                clearInterval(intervalId);
                spentTime.showStopWatch ('spentTime_value', 0);
            }
        });
    })();

    (function stopTheStopwatchWhenHoveringAndViceVersa () {
        document.getElementById('spentTime').addEventListener ('mouseover', function () {
            clearInterval(intervalId);
        });

        document.getElementById('spentTime').addEventListener ('mouseout', stopWatch);
    })();
};

spentTime.creatingElement ('footer', 'div', 'spentTime', 'spentTime', 0);
spentTime.creatingElement ('spentTime', 'div', 'spentTime_title', 'spentTime_title', 0);
document.getElementById('spentTime_title').innerHTML = 'You spent in this page:';
spentTime.creatingElement ('spentTime', 'div', 'spentTime_value-and-text', 'spentTime_value-and-text', 1);
spentTime.creatingElement ('spentTime_value-and-text', 'div', 'spentTime_value', 'spentTime_value', 0);
spentTime.creatingElement ('spentTime_value-and-text', 'div', 'spentTime_text', 'spentTime_text', 1);
document.getElementById('spentTime_text').innerHTML = 'seconds';

spentTime.showStopWatch ('spentTime_value');
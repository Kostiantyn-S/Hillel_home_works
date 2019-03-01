let createTable = {};

createTable.creatingElement = function (parrentId, conteinerTag, conteinerId, conteinerClassName, conteinerPosition = null) {
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

createTable.validatingInput = function (inputElementId, popupId) {
    document.getElementById(inputElementId).addEventListener ('input', function () {
        let value = parseInt (document.getElementById(inputElementId).value);
        if (value > 100 || value < 1) {
            document.getElementById('table-button').hidden = true;
            document.getElementById(popupId).hidden = false;
        } else {
            document.getElementById('table-button').hidden = false;
            document.getElementById(popupId).hidden = true;
        }
    });
};

createTable.createForm = function () {
    createTable.creatingElement ('article', 'form', 'create-table', 'create-table', 0);

    createTable.creatingElement ('create-table', 'div', 'table-rows-conteiner', 'table-rows-conteiner', 0);
    document.getElementById('table-rows-conteiner').innerHTML = '<label for="table-rows">How much rows in table you want to create?</label><input id="table-rows" name="table-rows" type="number" placeholder="28" required><span id="popup-row" class="popup-row" hidden>Value must be integer more than 0 but less than 100</span>';

    createTable.creatingElement ('create-table', 'div', 'table-columns-conteiner', 'table-columns-conteiner', 1);
    document.getElementById('table-columns-conteiner').innerHTML = '<label for="table-columns">How much rows in table you want to create?</label><input id="table-columns" name="table-columns" type="number" placeholder="35" required><span id="popup-column" class="popup-column" hidden>Value must be integer more than 0 but less than 100</span>';

    createTable.creatingElement ('create-table', 'div', 'table-button-conteiner', 'table-button-conteiner', 2);
    document.getElementById('table-button-conteiner').innerHTML = '<input type="button" value="Create" id="table-button" class="table-button" hidden></input>';
};

createTable.showResultTable = function (buttonId, inputRowsId, inputColumnsId) {
    document.getElementById(buttonId).addEventListener ('click', function () {
        if (document.getElementById('result-table') !== null) {
            document.getElementById('result-table').remove();
        }
        let rowsValue = parseInt (document.getElementById(inputRowsId).value);
        let columnsValue = parseInt (document.getElementById(inputColumnsId).value);
        let table;
        let row;
        let column;

        createTable.creatingElement('article', 'table', 'result-table', 'result-table', 1);
        table = document.getElementById('result-table');

        for (let i = 0; i < rowsValue; i++) {
            row = table.insertRow();

            for (let k = 0; k < columnsValue; k++) {
                row.insertCell();
            }
        }
    });
};

createTable.turnOnFunction = function () {

    (function removeForm () {
        if (document.getElementById('create-table') !== null) {
            document.getElementById('create-table').remove();
        }
    })();

    (function removeTable () {
        if (document.getElementById('result-table') !== null) {
            document.getElementById('result-table').remove();
        }
    })();

    createTable.createForm();
    createTable.validatingInput ('table-rows', 'popup-row');
    createTable.validatingInput ('table-columns', 'popup-column');
    createTable.showResultTable ('table-button', 'table-rows', 'table-columns');
};
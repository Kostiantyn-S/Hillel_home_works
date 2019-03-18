class CreateTable {

    validatingInput (inputElementId, popupId) {
        document.getElementById(inputElementId).addEventListener ('input', function () {
            let value = parseInt (document.getElementById(inputElementId).value);
            document.getElementById(popupId).hidden = (!(value > 100 || value < 1));
        });
    };

    clearOldResult (resultTableId) {
        if (document.getElementById(resultTableId).innerHTML !== false) {
            document.getElementById(resultTableId).innerHTML = '';
        }
    };

    renderTable (inputRowsId, inputColumnsId, resultTableId) {
        let rowsValue = parseInt (document.getElementById(inputRowsId).value);
        let columnsValue = parseInt (document.getElementById(inputColumnsId).value);
        let table;
        let row;

        table = document.getElementById(resultTableId);

        for (let i = 0; i < rowsValue; i++) {
            row = table.insertRow();

            for (let k = 0; k < columnsValue; k++) {
                row.insertCell();
            }
        }
    };

    showIndex (resultTableId) {
        document.getElementById(resultTableId).addEventListener('click', function () {
            alert (`Строка ${event.target.parentNode.rowIndex + 1} Колонка ${event.target.cellIndex + 1}`);
        });
    };

    activateButton (buttonId, resultTableId, inputRowsId, inputColumnsId, rowsPopupId, columnsPopupId) {
        let self = this;

        document.getElementById(buttonId).addEventListener ('click', function () {
            if (document.getElementById(rowsPopupId).hidden !== false && document.getElementById(columnsPopupId).hidden !== false &&
                document.getElementById(inputRowsId).value !== false && document.getElementById(inputColumnsId).value !== false) {
                self.clearOldResult(resultTableId);
                self.renderTable(inputRowsId, inputColumnsId, resultTableId);
                self.showIndex(resultTableId);
            }
        });
    };
}

(function turnOnCreateTable () {
    let element = new CreateElement;
    let createTable = new CreateTable;

    document.getElementById('nav_item-createTable').addEventListener('click', function () {

        (function clear () {
            if (document.getElementById('article').innerHTML !== "") {
                clearInterval(slider.timerId);
                document.getElementById('article').innerHTML = "";
            }
        })();

        (function createDOM () {
            element.create('article', 'form').id('create-table').class('create-table').position(0);
            element.create('create-table', 'div').id('table-rows-conteiner').class('table-rows-conteiner').innerHTML('<label for="table-rows">How much rows in table you want to create?</label><input id="table-rows" name="table-rows" type="number" placeholder="28" required><span id="popup-row" class="popup-row" hidden>Value must be integer more than 0 but less than 100</span>').position(0);
            element.create('create-table', 'div').id('table-columns-conteiner').class('table-columns-conteiner').innerHTML('<label for="table-columns">How much rows in table you want to create?</label><input id="table-columns" name="table-columns" type="number" placeholder="35" required><span id="popup-column" class="popup-column" hidden>Value must be integer more than 0 but less than 100</span>').position(1);
            element.create('create-table', 'div').id('table-button-conteiner').class('table-button-conteiner').innerHTML('<input type="button" value="Create" id="table-button" class="table-button"></input>').position(2);
            element.create('article', 'table').id('result-table').class('result-table').position(1);
        })();

        (function validationInputs () {
            createTable.validatingInput('table-rows', 'popup-row');
            createTable.validatingInput('table-columns', 'popup-column');
        })();

        createTable.activateButton('table-button', 'result-table', 'table-rows', 'table-columns', 'popup-row', 'popup-column');
    });
})();
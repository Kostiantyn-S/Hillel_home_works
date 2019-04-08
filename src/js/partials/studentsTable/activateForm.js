class FormFunctions {
    constructor () {
        this.cellClassNames = ['result-name', 'result-syrname', 'result-admission', 'result-ending', 'result-site'];
    }

    addData (tableId, ...inputsId) {
        let table = document.getElementById(tableId);
        let row;
        let cell;

        row = table.insertRow();

        for (let i = 0; i < inputsId.length; i++) {
            cell = row.insertCell();
            cell.className = this.cellClassNames[i];
            cell.innerHTML = document.getElementById(inputsId[i]).value;
        }

        cell = row.insertCell();
        cell.className = 'result-edit';
        cell.innerHTML = '&#9998';

        cell = row.insertCell();
        cell.className = 'result-delete';
        cell.innerHTML = '&#10008';
    };

    clearForm (...inputsId) {
        for (let i = 0; i < inputsId.length; i++) {
            document.getElementById(arguments[i]).value = '';
        }
    };

    saveTable (tableId) {
        localStorage.setItem('table', document.getElementById(tableId).innerHTML);
    };

    applyFilter (inputId, tableId) {
        let value = document.getElementById(inputId).value;
        let children = document.getElementById(tableId).childNodes[0].childNodes;
        let result;

        for (let i = 1; i < children.length; i++) {
            for (let k = 0; k < 5; k++) {
                result = children[i].childNodes[k].innerHTML;
                if (result.indexOf(value) !== -1) {
                    children[i].style.display = null;
                    break;
                } else {
                    children[i].style.display = 'none';
                }
            }
        }
    };

    deleteFilter (inputId, tableId) {
        let children = document.getElementById(tableId).childNodes[0].childNodes;

        for (let i = 0; i < children.length; i++) {
            if (children[i].style.display === 'none') {
                children[i].style.display = null;
            }
        }

        document.getElementById(inputId).value = '';
    };

    sortToHigher (tableId, numberOfColumn) {
        let children = document.getElementById(tableId).childNodes[0].childNodes;
        let values = [];

        for (let i = 1; i < children.length; i++) {
            values[i] = {
                elem: children[i],
                value: children[i].childNodes[numberOfColumn].innerHTML
            };
        }

        values.sort(function(a, b) {
            return a.value - b.value;
        });

        for (let k = 0; k < values.length - 1; k++) {
            document.getElementById(tableId).childNodes[0].appendChild (values[k].elem);
        }
    };

    sortToLower (tableId, numberOfColumn) {
        let children = document.getElementById(tableId).childNodes[0].childNodes;
        let values = [];

        for (let i = 1; i < children.length; i++) {
            values[i] = {
                elem: children[i],
                value: children[i].childNodes[numberOfColumn].innerHTML
            };
        }

        values.sort(function(a, b) {
            return b.value - a.value;
        });

        for (let k = 0; k < values.length - 1; k++) {
            document.getElementById(tableId).childNodes[0].appendChild (values[k].elem);
        }
    };

    deleteRow () {
        event.target.parentElement.remove();
    };

    editRow (...inputsId) {
        for (let i = 0; i < inputsId.length; i++) {
            document.getElementById(inputsId[i]).value = event.target.parentElement.children[i].innerHTML;
        }
    };
}

(function activateStudentsForm () {
    let functions = new FormFunctions;
    let label = false;

    functions.deleteBackground = function () {
        let collection = document.getElementById('studentsTable').childNodes[0].childNodes;
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.background = null;
        }
    };

    document.getElementById('nav_item-studentsTable').addEventListener ('click', function () {
        studentsTableCreateDOM();
        turnOnValidation();

        (function add () {
            document.getElementById('button-add').addEventListener ('click', function () {
                if (document.getElementById('input-name').value !== '' && document.getElementById('input-surname').value !== '' &&
                    document.getElementById('input-admission').value !== '' && document.getElementById('input-ending').value !== '' &&
                    document.getElementById('input-site').value !== '' && document.getElementById('message-site').style.visibility !== "visible" &&
                    document.getElementById('message-name').style.visibility !== "visible" && document.getElementById('message-surname').style.visibility !== "visible" &&
                    document.getElementById('message-admission').style.visibility !== "visible" && document.getElementById('message-ending').style.visibility !== "visible") {
                    functions.addData('studentsTable', 'input-name', 'input-surname', 'input-admission', 'input-ending', 'input-site');
                    functions.clearForm('input-name', 'input-surname', 'input-admission', 'input-ending', 'input-site');
                    functions.deleteBackground();
                    functions.saveTable('studentsTable');
                }
            });
        })();

        (function applyFilter () {
            document.getElementById('button-applyFilter').addEventListener ('click', function () {
                functions.applyFilter ('input-filter', 'studentsTable');
            });
        })();

        (function deleteFilter () {
            document.getElementById('button-delFilter').addEventListener ('click', function () {
                functions.deleteFilter ('input-filter', 'studentsTable');
            });
        })();

        function changeSortWay (numberOfColumn) {
            if (label === false) {
                functions.sortToLower('studentsTable', numberOfColumn);
                label = true;
            } else {
                functions.sortToHigher('studentsTable', numberOfColumn);
                label = false;
            }
        }

        (function sortTable () {
            document.getElementById('studentsTable').addEventListener ('click', function () {
                if (event.target.id === 'head-admission') {
                    changeSortWay(2);
                } else if (event.target.id === 'head-ending') {
                    changeSortWay(3);
                }
            });
        })();

        (function edit () {
            document.getElementById('studentsTable').addEventListener ('click', function () {
                if (event.target.className === 'result-edit') {
                    functions.editRow('input-name', 'input-surname', 'input-admission', 'input-ending', 'input-site');
                    event.target.parentElement.style.background = 'rgba(255,153,51,0.5)';
                }
            });
        })();

        (function deleteRow () {
            document.getElementById('studentsTable').addEventListener ('click', function () {
                if (event.target.className === 'result-delete') {
                    functions.deleteRow();
                    functions.saveTable('studentsTable');
                }
            });
        })();

        (function change () {
            document.getElementById('button-change').addEventListener ('click', function () {
                let element;
                let inputs = ['input-name', 'input-surname', 'input-admission', 'input-ending', 'input-site'];

                (function () {
                    let collection = document.getElementById('studentsTable').childNodes[0].childNodes;
                    for (let i = 0; i < collection.length; i++) {
                        if (collection[i].style.background != null) {
                            element = collection[i];
                        }
                    }
                })();

                (function () {
                    for (let s = 0; s < inputs.length; s++) {
                        element.childNodes[s].innerHTML = document.getElementById(inputs[s]).value;
                    }
                })();

                functions.clearForm('input-name', 'input-surname', 'input-admission', 'input-ending', 'input-site');
                functions.deleteBackground();
                functions.saveTable('studentsTable');
            });
        })();
    });
})();
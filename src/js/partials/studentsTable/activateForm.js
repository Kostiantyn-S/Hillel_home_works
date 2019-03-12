let FormFunctions = new Function;

FormFunctions.prototype.clearForm = function (...inputsId) {
    for (var i = 0; i < inputsId.length; i++) {
        document.getElementById(arguments[i]).value = '';
    };
};

FormFunctions.prototype.addData = function (...inputsId) {
    let table = document.getElementById('studentsTable');
    let row;
    let cell;
    let cellClassNames = ['result-name', 'result-syrname', 'result-admission', 'result-ending', 'result-site'];

    row = table.insertRow();
    
    for (var i = 0; i < inputsId.length; i++) {
        cell = row.insertCell();
        cell.className = cellClassNames[i];
        cell.innerHTML = document.getElementById(inputsId[i]).value;
    };

    cell = row.insertCell();
    cell.className = 'result-edit';
    cell.innerHTML = '&#9998';

    cell = row.insertCell();
    cell.className = 'result-delete';
    cell.innerHTML = '&#10008';
};

FormFunctions.prototype.deleteRow = function () {
    event.target.parentElement.remove();
};

FormFunctions.prototype.editRow = function (...inputsId) {
    for (var i = 0; i < inputsId.length; i++) {
        document.getElementById(inputsId[i]).value = event.target.parentElement.children[i].innerHTML;
    };

    this.deleteRow();
};

FormFunctions.prototype.filter = function (inputId, tableId) {
    let value = document.getElementById(inputId).value;
    let children = document.getElementById(tableId).childNodes[0].childNodes;
    let result;

    for (var i = 1; i < children.length; i++) {
        for (var k = 0; k < 5; k++) {
            result = children[i].childNodes[k].innerHTML;
            if (result.indexOf(value) !== -1) {
                children[i].style.display = null;
                break;
            } else {
                children[i].style.display = 'none';
            };
        };
    };
};

FormFunctions.prototype.stopFilter = function (tableId, filterInputId) {
    let children = document.getElementById(tableId).childNodes[0].childNodes;

    for (var i = 0; i < children.length; i++) {
        if (children[i].style.display === 'none') {
            children[i].style.display = null;
        };
    };

    document.getElementById(filterInputId).value = '';
};

FormFunctions.prototype.sortToHigher = function (tableId, numberOfColumn) {
    let children = document.getElementById(tableId).childNodes[0].childNodes;
    let values = [];
    let value;

    for (var i = 1; i < children.length; i++) {
        values[i] = children[i].childNodes[numberOfColumn].innerHTML;
    };

    values.sort(function(a, b) {
        return a - b;
    });

    for (var k = 0; k < values.length - 1; k++) {
        value = values[k];

        for (var s = 1; s < children.length; s++) {
            if (children[s].childNodes[numberOfColumn].innerHTML == value) {
                document.getElementById(tableId).childNodes[0].appendChild (children[s]);
            };
        };
    };
};

FormFunctions.prototype.sortToLower = function (tableId, numberOfColumn) {
    let children = document.getElementById(tableId).childNodes[0].childNodes;
    let values = [];
    let value;

    for (var i = 1; i < children.length; i++) {
        values[i] = children[i].childNodes[numberOfColumn].innerHTML;
    };

    values.sort(function(a, b) {
        return b - a;
    });

    for (var k = 0; k < values.length - 1; k++) {
        value = values[k];

        for (var s = 1; s < children.length; s++) {
            if (children[s].childNodes[numberOfColumn].innerHTML == value) {
                document.getElementById(tableId).childNodes[0].appendChild (children[s]);
            };
        };
    };
};

let activateForm = new FormFunctions;
activateForm.label = false;

activateForm.clearInputs = function () {
    let self = this;

    document.getElementById('button-clear').addEventListener ('click', function () {
        self.clearForm('input-name', 'input-surname', 'input-admission', 'input-ending', 'input-site', 'input-filter');
    });
};

activateForm.add = function () {
    let self = this;

    document.getElementById('button-add').addEventListener ('click', function () {
        if (document.getElementById('input-name').value !== '' && document.getElementById('input-surname').value !== '' &&
             document.getElementById('input-admission').value !== '' && document.getElementById('input-ending').value !== '' &&
             document.getElementById('message-name').style.visibility !== "visible" && document.getElementById('message-surname').style.visibility !== "visible" &&
             document.getElementById('message-admission').style.visibility !== "visible" && document.getElementById('message-ending').style.visibility !== "visible") {
            self.addData('input-name', 'input-surname', 'input-admission', 'input-ending', 'input-site');
            self.clearForm('input-name', 'input-surname', 'input-admission', 'input-ending', 'input-site');
        };
    });
};

activateForm.delete = function () {
    let self = this;

    document.getElementById('studentsTable').addEventListener ('click', function () {
        if (event.target.className === 'result-delete') {
            self.deleteRow();
        };
    });
};

activateForm.edit = function () {
    let self = this;

    document.getElementById('studentsTable').addEventListener ('click', function () {
        if (event.target.className === 'result-edit') {
            self.editRow('input-name', 'input-surname', 'input-admission', 'input-ending', 'input-site');
        };
    });
};

activateForm.save = function () {
    document.getElementById('button-save').addEventListener ('click', function () {
        localStorage.setItem('table', document.getElementById('studentsTable').innerHTML);
    });
};

activateForm.applyFilter = function () {
    let self = this;

    document.getElementById('button-applyFilter').addEventListener ('click', function () {
        self.filter ('input-filter', 'studentsTable');
    });
};

activateForm.deleteFilter = function () {
    let self = this;

    document.getElementById('button-delFilter').addEventListener ('click', function () {
        self.stopFilter ('studentsTable', 'input-filter');
    });
};

activateForm.sortAdmission = function () {
    if (this.label === false) {
        this.sortToLower('studentsTable', 2);
        this.label = true;
    } else {
        this.sortToHigher('studentsTable', 2);
        this.label = false;
    };
};

activateForm.sortEnding = function () {
    if (this.label === false) {
        this.sortToLower('studentsTable', 3);
        this.label = true;
    } else {
        this.sortToHigher('studentsTable', 3);
        this.label = false;
    };
};

activateForm.sortTable = function () {
    let self = this;

    document.getElementById('studentsTable').addEventListener ('click', function () {
        if (event.target.id === 'head-admission') {
            self.sortAdmission();
        } else if (event.target.id === 'head-ending') {
            self.sortEnding();
        };
    });
};

activateForm.turnOn = function () {
    this.clearInputs();
    this.add();
    this.delete();
    this.edit();
    this.save();
    this.applyFilter();
    this.deleteFilter();
    this.sortTable();
};

activateForm.activate = function () {
    element.createDOM();
    validation.turnOn();
    activateForm.turnOn();
};

document.getElementById('nav_item-studentsTable').addEventListener ('click', function () {
    activateForm.activate();
});
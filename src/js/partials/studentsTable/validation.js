let FormValidation = new Function;

FormValidation.prototype.valideToLatinSymbols = function (inputId, popupId) {
    let element = document.getElementById(inputId);

    for (var i = 0; i < element.value.length; i++) {
        if ((element.value.charCodeAt(i) < 65 || element.value.charCodeAt(i) > 90) &&
         (element.value.charCodeAt(i) < 97 || element.value.charCodeAt(i) > 122) &&
         element.value.charCodeAt(i) !== 45 && element.value.charCodeAt(i) !== 32) {
            document.getElementById(popupId).style.visibility = "visible";
        } else {
            document.getElementById(popupId).style.visibility = "hidden";
        };
    };
};

FormValidation.prototype.valideStringToLength = function (inputId, popupId) {
    let element = document.getElementById(inputId);

    if (document.getElementById(popupId).style.visibility = "hidden" && element.value.length > 20) {
        document.getElementById(popupId).style.visibility = "visible";
    };
};

FormValidation.prototype.validateNumber = function (inputId, popupId) {
    let element = document.getElementById(inputId);

    if (element.value.length < 4 || element.value.length > 4 || element.value < 0 || Number.isInteger(Number(element.value)) === false) {
        document.getElementById(popupId).style.visibility = "visible";
    } else {
        document.getElementById(popupId).style.visibility = "hidden";
    };
};

let validation = new FormValidation;

validation.validateName = function () {
    let self = this;

    document.getElementById('input-name').addEventListener ('input', function () {
        self.valideToLatinSymbols('input-name', 'message-name');
        self.valideStringToLength('input-name', 'message-name');
    });
};

validation.validateSurname = function () {
    let self = this;

    document.getElementById('input-surname').addEventListener ('input', function () {
        self.valideToLatinSymbols('input-surname', 'message-surname');
        self.valideStringToLength('input-surname', 'message-surname');
    });
};

validation.validateAdmission = function () {
    let self = this;

    document.getElementById('input-admission').addEventListener ('input', function () {
        self.validateNumber('input-admission', 'message-admission');
    });
};

validation.validateEnding = function () {
    let self = this;

    document.getElementById('input-ending').addEventListener ('input', function () {
        self.validateNumber('input-ending', 'message-ending');
    });
};

validation.turnOn = function () {
    this.validateName();
    this.validateSurname();
    this.validateAdmission();
    this.validateEnding();
};
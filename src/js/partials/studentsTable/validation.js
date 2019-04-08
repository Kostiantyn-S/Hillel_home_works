class FormValidation {
    valideToLatinSymbols (inputId, popupId) {
        let element = document.getElementById(inputId);

        for (let i = 0; i < element.value.length; i++) {
            if ((element.value.charCodeAt(i) < 65 || element.value.charCodeAt(i) > 90) &&
                (element.value.charCodeAt(i) < 97 || element.value.charCodeAt(i) > 122) &&
                element.value.charCodeAt(i) !== 45 && element.value.charCodeAt(i) !== 32) {
                document.getElementById(popupId).style.visibility = "visible";
                break;
            } else {
                document.getElementById(popupId).style.visibility = "hidden";
            }
        }
    };

    valideStringToLength (inputId, popupId) {
        let element = document.getElementById(inputId);

        if (document.getElementById(popupId).style.visibility = "hidden" && element.value.length > 20) {
            document.getElementById(popupId).style.visibility = "visible";
        }
    };

    validateNumber (inputId, popupId) {
        let element = document.getElementById(inputId);

        if (element.value.length < 4 || element.value.length > 4 || element.value < 0 || Number.isInteger(Number(element.value)) === false) {
            document.getElementById(popupId).style.visibility = "visible";
        } else {
            document.getElementById(popupId).style.visibility = "hidden";
        }
    };

    validateURL (inputId, popupId) {
        let element = document.getElementById(inputId);
        let regExp = /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/;

        if (regExp.test(element.value)) {
            document.getElementById(popupId).style.visibility = "hidden";
        } else {
            document.getElementById(popupId).style.visibility = "visible";
        }
    };
}

function turnOnValidation () {
    let validation = new FormValidation;

    (function validateName () {
        document.getElementById('input-name').addEventListener ('input', function () {
            validation.valideToLatinSymbols('input-name', 'message-name');
            validation.valideStringToLength('input-name', 'message-name');
        });
    })();

    (function validateSurname () {
        document.getElementById('input-surname').addEventListener ('input', function () {
            validation.valideToLatinSymbols('input-surname', 'message-surname');
            validation.valideStringToLength('input-surname', 'message-surname');
        });
    })();

    (function validateAdmission () {
        document.getElementById('input-admission').addEventListener ('input', function () {
            validation.validateNumber('input-admission', 'message-admission');
        });
    })();

    (function validateEnding () {
        document.getElementById('input-ending').addEventListener ('input', function () {
            validation.validateNumber('input-ending', 'message-ending');
        });
    })();

    (function validateSite () {
        document.getElementById('input-site').addEventListener ('input', function () {
            validation.validateURL('input-site', 'message-site');
        });
    })();
}